import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { ui as en } from './en'
import { ui as es } from './es'
import type { Locale } from '@/data/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const translations = { en, es } as const

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof en
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useLocalStorage<Locale>('locale', 'en')

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

export function useLocalized<T extends Record<Locale, string>>(value: T): string {
  const { locale } = useI18n()
  return value[locale]
}

export function useLocalizedArray<T extends Record<Locale, string[]>>(value: T): string[] {
  const { locale } = useI18n()
  return value[locale]
}
