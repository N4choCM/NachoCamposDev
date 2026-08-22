import { useState, useEffect, useCallback, type ReactNode } from 'react'
import { Copy, Check, Clock } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { Button } from '@/components/ui'

const TIMEZONES = Intl.supportedValuesOf('timeZone')

function formatInTimezone(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  }).format(date)
}

function parseEpoch(value: string): Date | null {
  const trimmed = value.trim()
  if (!trimmed || !/^-?\d+$/.test(trimmed)) return null
  const num = Number(trimmed)
  const ms = trimmed.length <= 10 ? num * 1000 : num
  const date = new Date(ms)
  return Number.isNaN(date.getTime()) ? null : date
}

export function EpochConverter() {
  const { t } = useI18n()
  const [epoch, setEpoch] = useState(String(Math.floor(Date.now() / 1000)))
  const [dateInput, setDateInput] = useState('')
  const [timezone, setTimezone] = useState(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
  )
  const [copied, setCopied] = useState(false)

  const parsedDate = parseEpoch(epoch)
  const parsedTimestamp = parsedDate?.getTime() ?? null

  useEffect(() => {
    if (!parsedDate) return
    const local = new Date(parsedDate.getTime())
    const iso = new Date(local.getTime() - local.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 19)
    setDateInput(iso)
  }, [parsedTimestamp, parsedDate])

  const formatted = parsedDate ? formatInTimezone(parsedDate, timezone) : '—'

  const handleDateChange = (value: string) => {
    setDateInput(value)
    if (value) {
      const d = new Date(value)
      if (!Number.isNaN(d.getTime())) {
        setEpoch(String(Math.floor(d.getTime() / 1000)))
      }
    }
  }

  const setNow = () => {
    setEpoch(String(Math.floor(Date.now() / 1000)))
  }

  const copyEpoch = useCallback(async () => {
    await navigator.clipboard.writeText(epoch)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [epoch])

  return (
    <ToolCard title={t.tools.epoch.title} description={t.tools.epoch.description}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.tools.epoch.epochLabel}>
          <div className="flex gap-2">
            <input
              type="text"
              value={epoch}
              onChange={(e) => setEpoch(e.target.value)}
              className="tool-input flex-1"
            />
            <Button size="sm" variant="secondary" onClick={setNow}>
              <Clock className="h-4 w-4" />
              {t.tools.epoch.now}
            </Button>
          </div>
        </Field>

        <Field label={t.tools.epoch.dateLabel}>
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => handleDateChange(e.target.value)}
            className="tool-input"
          />
        </Field>

        <Field label={t.tools.epoch.timezone}>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="tool-input"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Formatted">
          <div className="flex items-center gap-2">
            <code className="tool-output flex-1">{formatted}</code>
            <button
              type="button"
              onClick={copyEpoch}
              className="cursor-pointer rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label={t.tools.epoch.copy}
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </Field>
      </div>
    </ToolCard>
  )
}

export function ToolCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="glass rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      <div className="mt-5">{children}</div>
    </div>
  )
}

export function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-zinc-600 dark:text-zinc-400">
        {label}
      </label>
      {children}
    </div>
  )
}
