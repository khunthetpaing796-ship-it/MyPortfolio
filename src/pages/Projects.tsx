import { useMemo, useState } from 'react'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/resume'
import { cn } from '../lib/utils'

export default function Projects() {
  const allTags = useMemo(
    () => ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))],
    [],
  )
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag))

  return (
    <Section
      title="Projects"
      subtitle="Things I've designed, built, and shipped."
      className="pt-16"
    >
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300',
                'focus-ring active:scale-95',
                activeTag === tag
                  ? 'border-flame-500 bg-flame-500 text-white shadow-md shadow-flame-500/30'
                  : 'border-slate-200 text-slate-600 hover:-translate-y-0.5 hover:border-flame-500/50 hover:text-flame-600 dark:border-slate-800 dark:text-slate-400 dark:hover:text-flame-400',
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="animate-fade-in py-16 text-center text-slate-500">
          No projects match that filter.
        </p>
      )}
    </Section>
  )
}