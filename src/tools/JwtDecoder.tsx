import { useState, useMemo } from 'react'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { ToolCard, Field } from './EpochConverter'

function normalizeJwt(input: string): string {
  let token = input.trim()
  if (token.toLowerCase().startsWith('bearer ')) {
    token = token.slice(7).trim()
  }
  return token.replace(/\s+/g, '')
}

function decodeBase64Url(str: string): string {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const pad = (4 - (base64.length % 4)) % 4
  const padded = base64 + '='.repeat(pad)

  const binary = atob(padded)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

function parseJwt(token: string) {
  const normalized = normalizeJwt(token)
  const parts = normalized.split('.')
  if (parts.length !== 3 || parts.some((part) => !part)) return null

  try {
    const header = JSON.parse(decodeBase64Url(parts[0]!)) as Record<string, unknown>
    const payload = JSON.parse(decodeBase64Url(parts[1]!)) as Record<string, unknown>
    return { header, payload }
  } catch {
    return null
  }
}

function formatTimestamp(ts: number): string {
  const ms = ts > 1e12 ? ts : ts * 1000
  return new Date(ms).toISOString()
}

const SAMPLE_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

export function JwtDecoder() {
  const { t } = useI18n()
  const [input, setInput] = useState('')

  const parsed = useMemo(() => (input.trim() ? parseJwt(input) : null), [input])
  const looksComplete = normalizeJwt(input).split('.').length === 3

  const expStatus = useMemo(() => {
    if (!parsed?.payload?.exp) return null
    const exp = parsed.payload.exp as number
    const expired = Date.now() > exp * 1000
    return { expired, exp }
  }, [parsed])

  return (
    <ToolCard title={t.tools.jwt.title} description={t.tools.jwt.description}>
      <Field label={t.tools.jwt.input}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          className="tool-input font-mono text-sm"
        />
      </Field>

      {!input && (
        <button
          type="button"
          onClick={() => setInput(SAMPLE_JWT)}
          className="mt-2 cursor-pointer text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
        >
          {t.tools.jwt.trySample}
        </button>
      )}

      {input && looksComplete && !parsed && (
        <p className="mt-3 flex items-center gap-2 text-sm text-red-500">
          <AlertTriangle className="h-4 w-4" />
          {t.tools.jwt.invalid}
        </p>
      )}

      {input && !looksComplete && (
        <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
          <Info className="h-4 w-4" />
          {t.tools.jwt.incomplete}
        </p>
      )}

      {parsed && (
        <div className="mt-4 space-y-4">
          {expStatus && (
            <div
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                expStatus.expired
                  ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {expStatus.expired ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <CheckCircle className="h-4 w-4" />
              )}
              {expStatus.expired ? t.tools.jwt.expired : t.tools.jwt.valid}
              {' — exp: '}
              {formatTimestamp(expStatus.exp)}
            </div>
          )}

          <JsonBlock title={t.tools.jwt.header} data={parsed.header} />
          <JsonBlock title={t.tools.jwt.payload} data={parsed.payload} />
        </div>
      )}
    </ToolCard>
  )
}

function JsonBlock({ title, data }: { title: string; data: unknown }) {
  const enriched = useMemo(() => {
    if (typeof data !== 'object' || data === null) return data
    const copy = { ...(data as Record<string, unknown>) }
    for (const key of ['iat', 'exp', 'nbf']) {
      if (typeof copy[key] === 'number') {
        copy[`${key}_readable`] = formatTimestamp(copy[key] as number)
      }
    }
    return copy
  }, [data])

  return (
    <div>
      <p className="mb-1 text-sm font-medium">{title}</p>
      <pre className="tool-output overflow-x-auto text-xs">{JSON.stringify(enriched, null, 2)}</pre>
    </div>
  )
}
