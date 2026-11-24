import type { ReactNode } from 'react'
import { cn } from '../lib/utils'
import Reveal from './Reveal'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
}

export default function Section({
  id, title, subtitle, children, className, align = 'left',
}: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-20', className)}>
      <div className="container-page">
        {(title || subtitle) && (
          <Reveal>
            <div className={cn('mb-10 max-w-2xl', align === 'center' && 'mx-auto text-center')}>
              {title && (
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
              )}
              {subtitle && (
                <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}