import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

export default function Badge({
  children, className,
}: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-2.5 py-1 text-xs font-medium text-slate-600',
        'transition-all duration-200 hover:-translate-y-0.5 hover:border-flame-500/50 hover:text-flame-600 hover:shadow-sm',
        'dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:text-flame-400',
        className,
      )}
    >
      {children}
    </span>
  )
}