import { Github, Linkedin, Youtube } from 'lucide-react'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/context'
import { Logo } from '@/components/ui/Logo'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
}

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cyan-200/40 bg-gradient-to-b from-cyan-50/80 via-violet-50/40 to-white/90 dark:border-zinc-800 dark:from-surface-950 dark:via-surface-950 dark:to-surface-950">
      <div className="section-container flex flex-col items-center gap-5 py-12 text-center sm:gap-6 lg:items-stretch lg:gap-4 lg:py-10 lg:text-left">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <Logo className="h-10 w-10 shrink-0" />

          <div className="flex items-center gap-4 lg:gap-3">
            {profile.social.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              if (!Icon) return null
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-zinc-500 transition hover:bg-cyan-100 hover:text-cyan-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:border-t lg:border-cyan-200/40 lg:pt-4 dark:lg:border-zinc-800">
          <p className="max-w-md text-sm text-zinc-500 dark:text-zinc-400 lg:max-w-none">
            © {year} {profile.name}. {t.footer.rights}
          </p>

          <p className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
