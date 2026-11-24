import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-slate-200 text-slate-600 transition-all duration-300 hover:border-flame-500/40 hover:text-flame-600 active:scale-90 dark:border-slate-800 dark:text-slate-400 dark:hover:text-flame-400"
    >
      <Sun
        size={18}
        className="absolute transition-all duration-500 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
      <Moon
        size={18}
        className="absolute transition-all duration-500 rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0"
      />
    </button>
  )
}