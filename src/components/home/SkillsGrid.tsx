import {
  Brain,
  Cloud,
  Code2,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { skills } from '@/data/skills'
import { useI18n, useLocalized } from '@/i18n/context'
import { SectionHeading } from '@/components/ui'

const categoryConfig: Record<
  string,
  { icon: LucideIcon; gradient: string; pillClass: string }
> = {
  backend: {
    icon: Server,
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    pillClass: 'bg-cyan-500/15 text-cyan-700 ring-1 ring-cyan-500/30 dark:text-cyan-300',
  },
  cloud: {
    icon: Cloud,
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
    pillClass: 'bg-violet-500/15 text-violet-700 ring-1 ring-violet-500/30 dark:text-violet-300',
  },
  ai: {
    icon: Brain,
    gradient: 'from-fuchsia-500/20 via-fuchsia-500/5 to-transparent',
    pillClass: 'bg-fuchsia-500/15 text-fuchsia-700 ring-1 ring-fuchsia-500/30 dark:text-fuchsia-300',
  },
  frontend: {
    icon: Layout,
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    pillClass: 'bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-300',
  },
  tools: {
    icon: Wrench,
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
    pillClass: 'bg-amber-500/15 text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-300',
  },
}

export function SkillsGrid() {
  const { t } = useI18n()

  return (
    <section className="relative py-20">
      <div className="section-container">
        <SectionHeading id="skills" title={t.sections.skills} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {skills.flatMap((c) => c.skills.slice(0, 2)).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/5 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
            >
              <Code2 className="h-3 w-3 text-brand-500" />
              {skill}
            </span>
          ))}
          <span className="text-xs text-zinc-400">{t.skillsSection.more}</span>
        </div>
      </div>
    </section>
  )
}

function SkillCategoryCard({
  category,
}: {
  category: (typeof skills)[number]
}) {
  const title = useLocalized(category.title)
  const config = categoryConfig[category.id] ?? categoryConfig.backend!
  const Icon = config.icon

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${config.gradient} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10`}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl transition group-hover:scale-150" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-500/25">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
          <span className="ml-auto shrink-0 rounded-full bg-white/50 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-white/10 dark:text-zinc-400">
            {category.skills.length}
          </span>
        </div>

        <div className="flex flex-1 flex-wrap content-start gap-2">
          {category.skills.map((skill) => (
            <span key={skill} className={`skill-pill ${config.pillClass}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
