import { profile } from '@/data/profile'
import type { StoryBeat } from '@/data/profile'
import { useI18n, useLocalized, useLocalizedArray } from '@/i18n/context'
import { SectionHeading } from '@/components/ui'

export function About() {
  const { t, locale } = useI18n()
  const intro = useLocalized(profile.aboutIntro)
  const highlights = useLocalizedArray(profile.highlights)

  return (
    <section className="py-20">
      <div className="section-container">
        <SectionHeading
          id="about"
          title={t.sections.about}
          subtitle={t.about.subtitle}
        />

        <p className="mb-10 max-w-3xl text-xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-200">
          {intro}
        </p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <StatCard key={`${stat.value}-${locale}`} stat={stat} />
          ))}
        </div>

        <div className="relative mb-12">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent sm:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profile.story.map((beat, index) => (
              <StoryCard key={`${beat.id}-${locale}`} beat={beat} step={index + 1} />
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={`${item}-${locale}`}
              className="group rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/5 to-accent-500/5 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 dark:text-zinc-300"
            >
              <span className="mr-2 text-brand-500">→</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: (typeof profile.stats)[number] }) {
  const label = useLocalized(stat.label)

  return (
    <div className="glass-strong rounded-2xl p-5 text-center">
      <p className="text-3xl font-bold gradient-text">{stat.value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
    </div>
  )
}

function StoryCard({ beat, step }: { beat: StoryBeat; step: number }) {
  const title = useLocalized(beat.title)
  const description = useLocalized(beat.description)

  return (
    <article className="glass-strong group relative rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
          {step}
        </span>
        <span className="text-2xl">{beat.emoji}</span>
      </div>
      <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </article>
  )
}
