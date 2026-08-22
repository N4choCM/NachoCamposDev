import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { ChatMessageContent } from './ChatMessageContent'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const MAX_HISTORY = 10

function parseSseChunk(line: string, onDelta: (text: string) => void) {
  if (!line.startsWith('data: ')) return
  const data = line.slice(6).trim()
  if (data === '[DONE]') return

  try {
    const parsed = JSON.parse(data) as {
      choices?: { delta?: { content?: string } }[]
    }
    const delta = parsed.choices?.[0]?.delta?.content
    if (delta) onDelta(delta)
  } catch {
    // skip malformed chunks
  }
}

export function ChatWidget() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: t.chat.welcome },
  ])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [viewport, setViewport] = useState({ height: 0, offsetTop: 0 })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    const run = () => {
      const container = scrollContainerRef.current
      if (container) {
        // Instant jump first so content isn't clipped, then optional smooth
        container.scrollTop = container.scrollHeight
        if (behavior === 'smooth') {
          container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
        }
        return
      }
      messagesEndRef.current?.scrollIntoView({ behavior, block: 'end' })
    }

    // Double rAF: wait for panel/keyboard layout before measuring scrollHeight
    requestAnimationFrame(() => {
      requestAnimationFrame(run)
    })
  }, [])

  useEffect(() => {
    if (!open) return
    scrollToBottom('smooth')
  }, [messages, streaming, scrollToBottom, open])

  useEffect(() => {
    if (!open) return
    scrollToBottom('auto')
    // Extra pass after paint — iOS often lays out the keyboard one frame later
    const t1 = window.setTimeout(() => scrollToBottom('auto'), 50)
    const t2 = window.setTimeout(() => scrollToBottom('auto'), 200)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [open, scrollToBottom])

  // Keyboard open/close changes panel height — pin to bottom again
  useEffect(() => {
    if (!open || viewport.height <= 0) return
    scrollToBottom('auto')
    const t = window.setTimeout(() => scrollToBottom('auto'), 100)
    return () => window.clearTimeout(t)
  }, [viewport.height, viewport.offsetTop, open, scrollToBottom])

  useEffect(() => {
    if (!open) return

    const media = window.matchMedia('(max-width: 1023px)')
    const syncCompact = () => setIsCompact(media.matches)
    syncCompact()
    media.addEventListener('change', syncCompact)

    const vv = window.visualViewport
    const update = () => {
      setViewport({
        height: vv?.height ?? window.innerHeight,
        offsetTop: vv?.offsetTop ?? 0,
      })
    }

    update()
    vv?.addEventListener('resize', update)
    vv?.addEventListener('scroll', update)
    window.addEventListener('resize', update)

    return () => {
      media.removeEventListener('change', syncCompact)
      vv?.removeEventListener('resize', update)
      vv?.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [open])

  useEffect(() => {
    if (!open || !isCompact) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open, isCompact])

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0]?.role === 'assistant') {
        return [{ role: 'assistant', content: t.chat.welcome }]
      }
      return prev
    })
  }, [t.chat.welcome])

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (panelRef.current?.contains(target)) return
      setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim()
    if (!trimmed || streaming) return

    const userMessage: ChatMessage = { role: 'user', content: trimmed }
    const history = [...messages, userMessage].slice(-MAX_HISTORY)
    setMessages(history)
    setInput('')
    setStreaming(true)

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    let assistantContent = ''

    const appendDelta = (delta: string) => {
      assistantContent += delta
      setMessages((prev) => {
        const next = [...prev]
        const last = next[next.length - 1]
        if (last?.role === 'assistant') {
          next[next.length - 1] = { role: 'assistant', content: assistantContent }
        }
        return next
      })
    }

    try {
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No stream')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          parseSseChunk(line, appendDelta)
        }
      }

      if (buffer) {
        parseSseChunk(buffer, appendDelta)
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setMessages((prev) => {
          const withoutEmpty = prev.filter(
            (m, i) => !(i === prev.length - 1 && m.role === 'assistant' && m.content === ''),
          )
          return [...withoutEmpty, { role: 'assistant', content: t.chat.error }]
        })
      }
    } finally {
      setStreaming(false)
      inputRef.current?.focus()
      scrollToBottom('auto')
    }
  }, [input, streaming, messages, t.chat.error, scrollToBottom])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void sendMessage()
    }
  }

  const mobilePanelStyle =
    open && isCompact && viewport.height > 0
      ? {
          top: viewport.offsetTop,
          height: viewport.height,
        }
      : undefined

  return (
    <>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />

          <div
            ref={panelRef}
            style={mobilePanelStyle}
            className="fixed z-50 flex w-full max-w-[100vw] flex-col overflow-hidden border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900 max-lg:inset-x-0 max-lg:rounded-none lg:bottom-24 lg:right-4 lg:h-[min(32rem,calc(100dvh-8rem))] lg:w-[min(24rem,calc(100vw-2rem))] lg:max-w-none lg:rounded-2xl"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
              <div className="min-w-0">
                <p className="font-semibold">{t.chat.title}</p>
                <p className="text-xs text-zinc-500">{t.chat.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label={t.chat.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="min-h-0 flex-1 space-y-3 overflow-x-hidden overflow-y-auto overscroll-contain px-4 pt-4 pb-8"
            >
              {messages.map((msg, i) => {
                const isStreamingMessage =
                  streaming && i === messages.length - 1 && msg.role === 'assistant'

                return (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-brand-600 text-white'
                          : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <ChatMessageContent
                          content={msg.content}
                          streaming={isStreamingMessage}
                        />
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                )
              })}
              <div ref={messagesEndRef} className="h-3 shrink-0" aria-hidden />
            </div>

            <div className="shrink-0 border-t border-zinc-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] dark:border-zinc-700">
              <div className="flex min-w-0 items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => {
                    scrollToBottom('auto')
                    window.setTimeout(() => scrollToBottom('auto'), 100)
                    window.setTimeout(() => scrollToBottom('auto'), 300)
                  }}
                  placeholder={t.chat.placeholder}
                  rows={1}
                  disabled={streaming}
                  enterKeyHint="send"
                  className="min-h-11 min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-zinc-200 bg-transparent px-3 py-2.5 text-[16px] leading-normal outline-none focus:border-brand-500 disabled:opacity-60 dark:border-zinc-700"
                />
                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  disabled={streaming || !input.trim()}
                  className="shrink-0 cursor-pointer rounded-xl bg-brand-600 p-2.5 text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={t.chat.send}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 transition hover:scale-105 hover:bg-brand-500 ${
          open ? 'max-lg:hidden' : ''
        }`}
        aria-label={open ? t.chat.close : t.chat.open}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  )
}
