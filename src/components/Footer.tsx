import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'
import { profile } from '../data/resume'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Flame size={16} className="text-flame-500 transition-transform duration-300 hover:scale-125 hover:rotate-12" />
          <span>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</span>
        </div>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <Link
            to="/contact"
            className="group relative text-sm font-medium text-flame-600 dark:text-flame-400"
          >
            Get in touch
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-flame-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </footer>
  )
}