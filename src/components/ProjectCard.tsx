import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '../data/resume'
import Badge from './Badge'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-6 hover:-translate-y-1.5 hover:border-flame-500/40 hover:shadow-xl hover:shadow-flame-500/10">
      {/* top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-flame-600 via-orange-500 to-amber-400 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-flame-600 dark:group-hover:text-flame-400">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs font-medium text-slate-400 dark:text-slate-500">
          {project.year}
        </span>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
      </div>

      <div className="flex items-center gap-4 border-t border-slate-200/70 pt-4 dark:border-slate-800/70">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link inline-flex items-center gap-1 text-sm font-semibold text-flame-600 transition-colors hover:text-flame-700 dark:text-flame-400 dark:hover:text-flame-300"
          >
            Live demo
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <FaGithub size={14} className="transition-transform duration-300 group-hover/link:rotate-12" />
            Source
          </a>
        )}
      </div>
    </article>
  )
}