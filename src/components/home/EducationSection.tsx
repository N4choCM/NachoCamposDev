import { Award, GraduationCap, Star } from 'lucide-react'
import {
  education,
  certifications,
  languages,
} from '@/data/education'
import { certificateImages } from '@/data/certificateImages'
import type { CertificationItem, EducationItem, LanguageItem } from '@/data/types'
import { useI18n, useLocalized } from '@/i18n/context'
import { SectionHeading } from '@/components/ui'
import { Lightbox, useLightbox } from '@/components/ui/Lightbox'

export function EducationSection() {
  const { t, locale } = useI18n()
  const { lightbox, open, close } = useLightbox()

  return (
    <section className="py-20">
      <div className="section-container">
        <SectionHeading id="education" title={t.sections.education} />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="h-5 w-5 text-brand-500" />
              {t.sections.education}
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <EducationCard key={`${item.id}-${locale}`} item={item} onViewCertificate={open} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Award className="h-5 w-5 text-brand-500" />
              {t.sections.certifications}
            </h3>
            <div className="space-y-4">
              {certifications.map((item) => (
                <CertificationCard key={`${item.id}-${locale}`} item={item} onViewCertificate={open} />
              ))}
            </div>

            <h3 className="mb-4 mt-10 flex items-center gap-2 text-lg font-semibold">
              <Star className="h-5 w-5 text-brand-500" />
              {t.sections.languages}
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <LanguageRow key={`${lang.name.en}-${locale}`} lang={lang} onViewCertificate={open} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} isOpen onClose={close} />
      )}
    </section>
  )
}

function EducationCard({
  item,
  onViewCertificate,
}: {
  item: EducationItem
  onViewCertificate: (src: string, alt: string) => void
}) {
  const { t } = useI18n()
  const degree = useLocalized(item.degree)
  const institution = useLocalized(item.institution)

  return (
    <div className="glass rounded-lg p-4 shadow-sm">
      <h4 className="font-medium">{degree}</h4>
      <p className="text-sm text-zinc-500">{institution}</p>
      <p className="text-sm text-zinc-400">{item.period}</p>
      {item.certificateImage && (
        <button
          type="button"
          onClick={() =>
            onViewCertificate(certificateImages[item.certificateImage!]!, degree)
          }
          className="mt-2 cursor-pointer text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
        >
          {t.education.viewCertificate}
        </button>
      )}
    </div>
  )
}

function CertificationCard({
  item,
  onViewCertificate,
}: {
  item: CertificationItem
  onViewCertificate: (src: string, alt: string) => void
}) {
  const { t } = useI18n()
  const title = useLocalized(item.title)

  return (
    <div className="glass rounded-lg p-4 shadow-sm">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-zinc-500">{item.issuer}</p>
      <p className="text-sm text-zinc-400">{item.period}</p>
      {item.tech && (
        <p className="mt-1 text-xs text-brand-600 dark:text-brand-400">
          {item.tech.join(' · ')}
        </p>
      )}
      {item.certificateImage && (
        <button
          type="button"
          onClick={() =>
            onViewCertificate(certificateImages[item.certificateImage!]!, title)
          }
          className="mt-2 cursor-pointer text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
        >
          {t.education.viewCertificate}
        </button>
      )}
    </div>
  )
}

function LanguageRow({
  lang,
  onViewCertificate,
}: {
  lang: LanguageItem
  onViewCertificate: (src: string, alt: string) => void
}) {
  const { t } = useI18n()
  const name = useLocalized(lang.name)
  const level = useLocalized(lang.level)

  return (
    <div className="grid grid-cols-[1fr_auto_5.5rem] items-center gap-x-3 rounded-lg border border-zinc-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm dark:border-zinc-600 dark:bg-zinc-800/80">
      <div className="min-w-0">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">{name}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{level}</p>
      </div>
      <div className="justify-self-end">
        {lang.certificateImage ? (
          <button
            type="button"
            onClick={() =>
              onViewCertificate(certificateImages[lang.certificateImage!]!, name)
            }
            className="cursor-pointer text-xs font-semibold whitespace-nowrap text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
          >
            {t.education.viewCertificate}
          </button>
        ) : null}
      </div>
      <div className="justify-self-end">
        <StarRating stars={lang.stars} />
      </div>
    </div>
  )
}

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(stars)
              ? 'fill-amber-400 text-amber-500'
              : i < stars
                ? 'fill-amber-400/60 text-amber-500'
                : 'fill-zinc-200 text-zinc-400 dark:fill-zinc-700 dark:text-zinc-500'
          }`}
        />
      ))}
    </div>
  )
}
