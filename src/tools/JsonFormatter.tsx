import { useState } from 'react'
import { CheckCircle, AlertTriangle } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { Button } from '@/components/ui'
import { ToolCard, Field } from './EpochConverter'

export function JsonFormatter() {
  const { t } = useI18n()
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [valid, setValid] = useState<boolean | null>(null)

  const process = (minify: boolean) => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, minify ? 0 : 2))
      setValid(true)
    } catch {
      setOutput('')
      setValid(false)
    }
  }

  return (
    <ToolCard title={t.tools.json.title} description={t.tools.json.description}>
      <Field label={t.tools.json.input}>
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setValid(null)
          }}
          rows={8}
          placeholder='{"key": "value"}'
          className="tool-input font-mono text-sm"
        />
      </Field>

      {valid !== null && (
        <p
          className={`mt-2 flex items-center gap-2 text-sm ${
            valid ? 'text-emerald-600' : 'text-red-500'
          }`}
        >
          {valid ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <AlertTriangle className="h-4 w-4" />
          )}
          {valid ? t.tools.json.valid : t.tools.json.invalid}
        </p>
      )}

      <div className="mt-3 flex gap-2">
        <Button size="sm" onClick={() => process(false)}>
          {t.tools.json.format}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => process(true)}>
          {t.tools.json.minify}
        </Button>
      </div>

      {output && (
        <Field label="Output">
          <pre className="tool-output mt-4 max-h-64 overflow-auto text-xs">
            {output}
          </pre>
        </Field>
      )}
    </ToolCard>
  )
}
