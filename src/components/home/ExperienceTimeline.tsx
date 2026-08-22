import { useState } from 'react'
import { Briefcase } from 'lucide-react'
import { experience } from '@/data/experience'
import type { ExperienceItem } from '@/data/types'
import { useI18n, useLocalized, useLocalizedArray } from '@/i18n/context'
import { SectionHeading, TechBadge } from '@/components/ui'

function resolveCompany(company: ExperienceItem['company'], locale: 'en' | 'es'): string {
  return typeof company === 'string' ? company : company[locale]
}

export function ExperienceTimeline() {
  const { t } = useI18n()
  const [showBackground, setShowBackground] = useState(false)

  const mainJobs = experience.filter((e) => e.id !== 'pre-tech')
  const background = experience.find((e) => e.id === 'pre-tech')

  return (
    <section className="section-alt py-20">
      <div className="section-container">
        <SectionHeading id="experience" title={t.sections.experience} />

        <div className="relative space-y-8">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-brand-500 to-violet-500 sm:block" />

          {mainJobs.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}

          {background && (
            <>
              <button
                type="button"
                onClick={() => setShowBackground(!showBackground)}
                className="cursor-pointer text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
              >
                {showBackground ? t.experience.viewLess : t.experience.viewMore}
              </button>
              {showBackground && <ExperienceCard job={background} muted />}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  job,
  muted = false,
}: {
  job: ExperienceItem
  muted?: boolean
}) {
  const { t, locale } = useI18n()
  const role = useLocalized(job.role)
  const period = useLocalized(job.period)
  const location = useLocalized(job.location)
  const highlights = useLocalizedArray(job.highlights)
  const company = resolveCompany(job.company, locale)

  return (
    <article className={`relative sm:pl-12 ${muted ? 'opacity-80' : ''}`}>
      <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 ring-2 ring-brand-500/30 sm:flex">
        <Briefcase className="h-4 w-4 text-brand-500" />
      </div>

      <div className="glass rounded-xl p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold">{company}</h3>
            <p className="text-brand-600 dark:text-brand-400">{role}</p>
            <p className="text-sm text-zinc-500">{location}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {job.current && (
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
                {t.experience.current}
              </span>
            )}
            <span className="text-sm text-zinc-500">{period}</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {job.tech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {highlights.map((item) => (
            <li
              key={`${item}-${locale}`}
              className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
