import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md'

const variants: Record<Variant, string> = {
  primary:
    'relative overflow-hidden bg-gradient-to-r from-flame-600 to-flame-500 text-white shadow-lg shadow-flame-500/25 hover:shadow-xl hover:shadow-flame-500/40 hover:brightness-110 active:scale-[0.98]',
  outline:
    'border border-slate-300 text-slate-800 hover:-translate-y-0.5 hover:border-flame-500 hover:text-flame-600 hover:shadow-md hover:shadow-flame-500/10 active:scale-[0.98] dark:border-slate-700 dark:text-slate-200 dark:hover:border-flame-500 dark:hover:text-flame-400',
  ghost:
    'text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
}

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}
type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { to?: never; href?: never }
type LinkProps = BaseProps & { to: string; href?: never }
type AnchorProps = BaseProps & { href: string; to?: never }

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-ring disabled:opacity-50 disabled:pointer-events-none'

export default function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className, children, leftIcon, rightIcon } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <>
      {leftIcon && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {rightIcon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  )

  if ('to' in props && props.to) {
    return <Link to={props.to} className={cn('group', classes)}>{content}</Link>
  }
  if ('href' in props && props.href) {
    return <a href={props.href} target="_blank" rel="noreferrer noopener" className={cn('group', classes)}>{content}</a>
  }

  const nativeProps = { ...props } as Record<string, unknown>
  delete nativeProps.variant
  delete nativeProps.size
  delete nativeProps.className
  delete nativeProps.children
  delete nativeProps.leftIcon
  delete nativeProps.rightIcon
  delete nativeProps.to
  delete nativeProps.href

  return (
    <button
      className={cn('group', classes)}
      {...(nativeProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}