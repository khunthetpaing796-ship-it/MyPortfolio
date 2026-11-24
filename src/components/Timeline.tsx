import type { Experience } from '../data/resume'
import Badge from './Badge'
import Reveal from './Reveal'

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
      {items.map((item, i) => (
        <Reveal key={`${item.company}-${item.period}`} delay={i * 80} direction="left">
          <li className="group relative">
            <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full border-2 border-flame-500 bg-white transition-all duration-300 group-hover:scale-150 group-hover:bg-flame-500 dark:bg-slate-950" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold tracking-tight transition-colors group-hover:text-flame-600 dark:group-hover:text-flame-400">
                {item.role} <span className="text-flame-600 dark:text-flame-400">· {item.company}</span>
              </h3>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
                {item.period} · {item.location}
              </span>
            </div>

            <ul className="mt-3 space-y-1.5">
              {item.bullets.map(bullet => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-flame-500" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tech.map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}