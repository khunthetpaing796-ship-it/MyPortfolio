
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { profile, type SocialIcon } from '../data/resume'

const iconMap: Record<SocialIcon, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: MdEmail,
}

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {profile.socials.map(social => {
        const Icon = iconMap[social.icon]
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className="group grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:border-flame-500/50 hover:text-flame-600 hover:shadow-lg hover:shadow-flame-500/20 active:scale-90 dark:border-slate-800 dark:text-slate-400 dark:hover:text-flame-400"
          >
            <Icon size={17} className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        )
      })}
    </div>
  )
}