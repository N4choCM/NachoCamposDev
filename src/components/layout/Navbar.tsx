import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wrench } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { Logo } from '@/components/ui/Logo'
import { useI18n } from '@/i18n/context'

const homeSections = [
  { id: 'about', key: 'about' as const },
  { id: 'experience', key: 'experience' as const },
  { id: 'projects', key: 'projects' as const },
  { id: 'skills', key: 'skills' as const },
  { id: 'education', key: 'education' as const },
  { id: 'contact', key: 'contact' as const },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useI18n()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navLinkClass =
    'text-sm font-medium text-zinc-600 transition hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <Logo className="h-14 w-14" />

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          {homeSections.map(({ id, key }) => (
            <Link
              key={id}
              to={{ pathname: '/', hash: id }}
              className={navLinkClass}
            >
              {t.nav[key]}
            </Link>
          ))}
          <Link to="/tools" className={`${navLinkClass} flex items-center gap-1.5`}>
            <Wrench className="h-4 w-4" />
            {t.nav.tools}
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="cursor-pointer rounded-lg p-2 text-zinc-600 hover:bg-cyan-50 lg:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-zinc-200/60 lg:hidden dark:border-zinc-700/50">
          <div className="section-container flex flex-col gap-1 py-4">
            {homeSections.map(({ id, key }) => (
              <Link
                key={id}
                to={{ pathname: '/', hash: id }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-cyan-50 hover:text-cyan-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                onClick={() => setOpen(false)}
              >
                {t.nav[key]}
              </Link>
            ))}
            <Link
              to="/tools"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-cyan-50 hover:text-cyan-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
              onClick={() => setOpen(false)}
            >
              <Wrench className="h-4 w-4" />
              {t.nav.tools}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
