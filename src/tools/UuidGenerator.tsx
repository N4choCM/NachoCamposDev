import { useState, useCallback } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { Button } from '@/components/ui'
import { ToolCard } from './EpochConverter'

function generateUuid(): string {
  return crypto.randomUUID()
}

export function UuidGenerator() {
  const { t } = useI18n()
  const [uuids, setUuids] = useState<string[]>([generateUuid()])
  const [copied, setCopied] = useState<number | null>(null)

  const regenerate = () => {
    setUuids(Array.from({ length: 5 }, generateUuid))
  }

  const copy = useCallback(async (uuid: string, index: number) => {
    await navigator.clipboard.writeText(uuid)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }, [])

  return (
    <ToolCard title={t.tools.uuid.title} description={t.tools.uuid.description}>
      <Button size="sm" onClick={regenerate}>
        <RefreshCw className="h-4 w-4" />
        {t.tools.uuid.generate}
      </Button>

      <ul className="mt-4 space-y-2">
        {uuids.map((uuid, i) => (
          <li
            key={uuid}
            className="flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2 dark:border-zinc-700"
          >
            <code className="font-mono text-sm">{uuid}</code>
            <button
              type="button"
              onClick={() => copy(uuid, i)}
              className="cursor-pointer rounded p-1.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label={t.tools.uuid.copy}
            >
              {copied === i ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </ToolCard>
  )
}
