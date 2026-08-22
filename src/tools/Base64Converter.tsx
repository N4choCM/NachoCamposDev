import { useState } from 'react'
import { Info } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { Button } from '@/components/ui'
import { ToolCard, Field } from './EpochConverter'

type Mode = 'base64' | 'url'

export function Base64Converter() {
  const { t } = useI18n()
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<Mode>('base64')
  const [error, setError] = useState('')

  const encode = () => {
    setError('')
    try {
      if (mode === 'base64') {
        setOutput(btoa(input))
      } else {
        setOutput(encodeURIComponent(input))
      }
    } catch {
      setError(t.tools.base64.encodeError)
    }
  }

  const decode = () => {
    setError('')
    try {
      if (mode === 'base64') {
        setOutput(atob(input))
      } else {
        setOutput(decodeURIComponent(input))
      }
    } catch {
      setError(t.tools.base64.decodeError)
    }
  }

  const hint = mode === 'base64' ? t.tools.base64.base64Hint : t.tools.base64.urlHint
  const example = mode === 'base64' ? t.tools.base64.base64Example : t.tools.base64.urlExample

  return (
    <ToolCard title={t.tools.base64.title} description={t.tools.base64.description}>
      <Field label={t.tools.base64.mode}>
        <select
          value={mode}
          onChange={(e) => {
            setMode(e.target.value as Mode)
            setOutput('')
            setError('')
          }}
          className="tool-input"
        >
          <option value="base64">{t.tools.base64.base64}</option>
          <option value="url">{t.tools.base64.url}</option>
        </select>
      </Field>

      <div className="mt-3 flex items-start gap-2 rounded-lg bg-brand-500/5 px-3 py-2.5 text-sm text-zinc-600 dark:text-zinc-400">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
        <div>
          <p>{hint}</p>
          <p className="mt-1 font-mono text-xs text-zinc-500">{example}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label={t.tools.base64.input}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            placeholder={mode === 'url' ? 'hello world & foo=bar' : 'Hello World'}
            className="tool-input font-mono text-sm"
          />
        </Field>
        <Field label={t.tools.base64.output}>
          <textarea
            value={output}
            readOnly
            rows={5}
            className="tool-input font-mono text-sm"
          />
        </Field>
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      <div className="mt-4 flex gap-2">
        <Button size="sm" onClick={encode}>
          {t.tools.base64.encode}
        </Button>
        <Button size="sm" variant="secondary" onClick={decode}>
          {t.tools.base64.decode}
        </Button>
      </div>
    </ToolCard>
  )
}
