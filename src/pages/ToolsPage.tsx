import { useI18n } from '@/i18n/context'
import { SectionHeading } from '@/components/ui'
import { EpochConverter } from '@/tools/EpochConverter'
import { JwtDecoder } from '@/tools/JwtDecoder'
import { Base64Converter } from '@/tools/Base64Converter'
import { JsonFormatter } from '@/tools/JsonFormatter'
import { UuidGenerator } from '@/tools/UuidGenerator'
import { ColorConverter } from '@/tools/ColorConverter'

export function ToolsPage() {
  const { t } = useI18n()

  return (
    <div className="py-12 sm:py-16">
      <div className="section-container">
        <SectionHeading
          title={t.tools.title}
          subtitle={t.tools.subtitle}
        />

        <div className="space-y-8">
          <EpochConverter />
          <JwtDecoder />
          <div className="grid gap-8 lg:grid-cols-2">
            <Base64Converter />
            <JsonFormatter />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <UuidGenerator />
            <ColorConverter />
          </div>
        </div>
      </div>
    </div>
  )
}
