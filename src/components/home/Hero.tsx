import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile } from '@/data/profile'
import { useI18n, useLocalized } from '@/i18n/context'
import { Button } from '@/components/ui'
import avatar from '@/assets/nachoPic-lg.png'

export function Hero() {
  const { t } = useI18n()
  const title = useLocalized(profile.title)
  const location = useLocalized(profile.location)
  const tagline = useLocalized(profile.tagline)

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="section-container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div
            className="relative order-1 shrink-0 lg:order-2"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/50 via-brand-500/40 to-accent-500/50 blur-2xl"
              style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
            />
            <div className="relative rounded-full bg-gradient-to-br from-cyan-400 via-brand-500 to-violet-500 p-[3px] shadow-2xl shadow-cyan-500/30 dark:shadow-brand-500/25">
              <div className="overflow-hidden rounded-full ring-2 ring-white/80 dark:ring-zinc-900/80">
                <img
                  src={avatar}
                  alt={profile.name}
                  className="h-44 w-44 object-cover object-[center_15%] sm:h-60 sm:w-60 lg:h-64 lg:w-64"
                />
              </div>
            </div>
          </div>

          <div className="order-2 max-w-2xl text-center lg:order-1 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-4 py-1.5 text-sm font-medium text-cyan-700 shadow-sm shadow-cyan-500/10 dark:border-brand-500/30 dark:from-brand-500/10 dark:to-violet-500/10 dark:text-brand-300 dark:shadow-none">
              <Sparkles className="h-4 w-4" />
              {t.hero.greeting}
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text-shimmer">{profile.shortName}</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-300">
              {tagline}
            </p>

            <p className="mt-3 text-sm font-medium text-brand-600 dark:text-brand-400">
              {title}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{location}</p>

            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Button href="#contact">{t.hero.cta}</Button>
                <Button href="#projects" variant="secondary">
                  {t.hero.viewProjects}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-1 lg:justify-start">
                <Button
                  href={profile.social.find((s) => s.icon === 'github')?.url}
                  variant="ghost"
                  target="_blank"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  href={profile.social.find((s) => s.icon === 'linkedin')?.url}
                  variant="ghost"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button href={`mailto:${profile.email}`} variant="ghost">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="rounded-full border border-brand-500/30 p-2 text-brand-500 transition hover:bg-brand-500/10"
            aria-label="Scroll to about"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
