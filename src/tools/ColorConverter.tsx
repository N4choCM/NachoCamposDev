import { useState, useEffect } from 'react'
import { useI18n } from '@/i18n/context'
import { ToolCard, Field } from './EpochConverter'

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace('#', '').trim()
  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) return null
  return {
    r: parseInt(cleaned.slice(0, 2), 16),
    g: parseInt(cleaned.slice(2, 4), 16),
    b: parseInt(cleaned.slice(4, 6), 16),
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((v) => Math.min(255, Math.max(0, v)).toString(16).padStart(2, '0')).join('')}`
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

function clampRgb(value: string): number {
  const num = parseInt(value, 10)
  if (Number.isNaN(num)) return 0
  return Math.min(255, Math.max(0, num))
}

export function ColorConverter() {
  const { t } = useI18n()
  const [hex, setHex] = useState('#6366f1')
  const [rgb, setRgb] = useState({ r: '99', g: '102', b: '241' })
  const [hsl, setHsl] = useState({ h: 239, s: 84, l: 67 })

  useEffect(() => {
    const parsed = hexToRgb(hex)
    if (parsed) {
      setRgb({ r: String(parsed.r), g: String(parsed.g), b: String(parsed.b) })
      setHsl(rgbToHsl(parsed.r, parsed.g, parsed.b))
    }
  }, [hex])

  const updateFromRgb = (key: 'r' | 'g' | 'b', value: string) => {
    const next = { ...rgb, [key]: value.replace(/\D/g, '').slice(0, 3) }
    setRgb(next)

    const r = clampRgb(next.r)
    const g = clampRgb(next.g)
    const b = clampRgb(next.b)
    setHex(rgbToHex(r, g, b))
    setHsl(rgbToHsl(r, g, b))
  }

  const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`

  return (
    <ToolCard title={t.tools.color.title} description={t.tools.color.description}>
      <div
        className="mb-6 h-20 rounded-xl border border-zinc-200 shadow-inner dark:border-zinc-700"
        style={{ backgroundColor: hexToRgb(hex) ? hex : '#6366f1' }}
      />

      <div className="space-y-4">
        <Field label={t.tools.color.hex}>
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="tool-input h-10 font-mono"
          />
        </Field>

        <Field label={t.tools.color.rgb}>
          <div className="grid grid-cols-3 gap-3">
            {(['r', 'g', 'b'] as const).map((key) => (
              <input
                key={key}
                type="text"
                inputMode="numeric"
                placeholder={key.toUpperCase()}
                value={rgb[key]}
                onChange={(e) => updateFromRgb(key, e.target.value)}
                className="tool-input tool-input-no-spinner h-10 min-w-0 text-center font-mono text-sm"
                aria-label={key.toUpperCase()}
              />
            ))}
          </div>
        </Field>

        <Field label={t.tools.color.hsl}>
          <input
            type="text"
            readOnly
            value={hslString}
            className="tool-input h-10 font-mono text-xs sm:text-sm"
          />
        </Field>
      </div>
    </ToolCard>
  )
}
