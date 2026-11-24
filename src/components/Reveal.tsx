import type { ReactNode } from 'react'
import { cn } from '../lib/utils'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  duration?: number
}

const directionClasses: Record<NonNullable<RevealProps['direction']>, string> = {
  up:    'translate-y-8',
  down:  '-translate-y-8',
  left:  '-translate-x-8',
  right: 'translate-x-8',
  scale: 'scale-95',
  fade:  '',
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 700,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out will-change-transform',
        inView
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
          : cn('opacity-0', directionClasses[direction]),
        className,
      )}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}