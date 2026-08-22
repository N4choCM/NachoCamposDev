import type { ReactNode } from 'react'

function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  const regex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <strong key={key++} className="font-semibold">
        {match[1]}
      </strong>,
    )
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

function formatBlocks(content: string): ReactNode[] {
  const lines = content.split('\n')
  const blocks: ReactNode[] = []
  let listItems: string[] = []
  let key = 0

  const flushList = () => {
    if (listItems.length === 0) return
    blocks.push(
      <ul key={key++} className="my-1.5 list-disc space-y-1 pl-4">
        {listItems.map((item, i) => (
          <li key={i}>{parseInline(item)}</li>
        ))}
      </ul>,
    )
    listItems = []
  }

  for (const line of lines) {
    const bulletMatch = line.match(/^[-*•]\s+(.*)/)
    if (bulletMatch) {
      listItems.push(bulletMatch[1])
      continue
    }

    flushList()

    if (line.trim() === '') continue

    blocks.push(
      <p key={key++} className={blocks.length > 0 ? 'mt-2' : undefined}>
        {parseInline(line)}
      </p>,
    )
  }

  flushList()
  return blocks
}

interface ChatMessageContentProps {
  content: string
  streaming?: boolean
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-0.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400"
          style={{
            animation: 'typing-dot 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </span>
  )
}

export function ChatMessageContent({ content, streaming }: ChatMessageContentProps) {
  if (!content && streaming) {
    return <TypingDots />
  }

  const blocks = formatBlocks(content)

  return <>{blocks.length > 0 ? blocks : content}</>
}
