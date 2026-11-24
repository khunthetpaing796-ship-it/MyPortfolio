import { skills } from '../data/resume'
import Badge from './Badge'
import Reveal from './Reveal'

export default function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map((group, i) => (
        <Reveal key={group.title} delay={i * 80} direction="scale">
          <div className="card h-full p-6 hover:border-flame-500/30 hover:shadow-lg hover:shadow-flame-500/5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-flame-600 dark:text-flame-400">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => <Badge key={item}>{item}</Badge>)}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}