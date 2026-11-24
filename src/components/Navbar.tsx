import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Flame } from 'lucide-react'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-flame-500 to-amber-400 text-white shadow-lg shadow-flame-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Flame size={18} />
          </span>
          <span className="text-lg">
            Flame<span className="text-gradient">.</span>
          </span>
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                  'after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-flame-500 after:transition-transform after:duration-300',
                  'hover:after:scale-x-100',
                  isActive
                    ? 'bg-flame-500/10 text-flame-600 after:scale-x-100 dark:text-flame-400'
                    : 'text-slate-600 hover:bg-slate-100/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* mobile trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 transition-transform duration-200 active:scale-90 dark:border-slate-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={cn(
          'overflow-hidden border-slate-200 transition-[max-height,opacity] duration-300 ease-out md:hidden dark:border-slate-800',
          open ? 'max-h-96 border-t opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="container-page flex flex-col gap-1 py-3">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={({ isActive }) =>
                cn(
                  'animate-fade-down rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-flame-500/10 text-flame-600 dark:text-flame-400'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/60',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}