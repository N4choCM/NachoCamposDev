import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useI18n } from '@/i18n/context'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
      aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
