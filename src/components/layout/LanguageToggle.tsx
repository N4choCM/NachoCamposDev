import { useI18n } from '@/i18n/context'
import type { Locale } from '@/data/types'

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  const toggle = () => {
    const next: Locale = locale === 'en' ? 'es' : 'en'
    setLocale(next)
  }

  return (
    <button
      onClick={toggle}
      className="cursor-pointer rounded-lg px-2.5 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
      aria-label={`Switch to ${locale === 'en' ? t.language.es : t.language.en}`}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
