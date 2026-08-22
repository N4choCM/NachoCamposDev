import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { ChatMessageContent } from './ChatMessageContent'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const MAX_HISTORY = 10

function parseSseChunk(
  line: string,
  onDelta: (text: string) => void,
) {
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
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior })
      return
    }
    messagesEndRef.current?.scrollIntoView({ behavior, block: 'end' })
  }, [])

  useEffect(() => {
    if (!open) return
    scrollToBottom('smooth')
  }, [messages, streaming, scrollToBottom])

  useEffect(() => {
    if (!open) return
    requestAnimationFrame(() => scrollToBottom('auto'))
  }, [open, scrollToBottom])

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
    }
  }, [input, streaming, messages, t.chat.error])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void sendMessage()
    }
  }

  return (
    <>
      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-24 right-4 z-50 flex h-[min(32rem,calc(100vh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
            <div>
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

          <div ref={scrollContainerRef} className="flex-1 space-y-3 overflow-y-auto p-4">
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
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-zinc-200 p-3 dark:border-zinc-700">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.chat.placeholder}
                rows={1}
                disabled={streaming}
                className="flex-1 resize-none rounded-xl border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 disabled:opacity-60 dark:border-zinc-700"
              />
              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={streaming || !input.trim()}
                className="cursor-pointer rounded-xl bg-brand-600 p-2.5 text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label={t.chat.send}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 transition hover:scale-105 hover:bg-brand-500"
        aria-label={open ? t.chat.close : t.chat.open}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  )
}
