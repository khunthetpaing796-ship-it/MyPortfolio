import { Download } from 'lucide-react'
import Button from '../components/Button'
import Section from '../components/Section'
import SkillsGrid from '../components/SkillsGrid'
import Timeline from '../components/Timeline'
import Reveal from '../components/Reveal'
import { education, experience, profile } from '../data/resume'

export default function About() {
  return (
    <>
      <Section title="About me" subtitle="Engineer by trade, detail-obsessed by nature." className="pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal direction="left">
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                I'm {profile.name}, a {profile.role} based in {profile.location}. I specialize in
                building production React applications — from design systems and component libraries
                to data-heavy dashboards.
              </p>
              <p>
                My approach is simple: understand the user, measure the baseline, then improve it
                relentlessly. I'm happiest when performance budgets, accessibility, and clean
                architecture all line up.
              </p>
              <p>
                Outside of work I contribute to open source, write about frontend architecture, and
                occasionally burn dinner while debugging.
              </p>
              <div className="pt-2">
                <Button href={profile.resumeUrl} leftIcon={<Download size={16} />}>
                  Download résumé
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="card h-fit p-6 hover:border-flame-500/30">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="mb-5 aspect-square w-full rounded-xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-500">Location</dt>
                  <dd className="text-right font-medium">{profile.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-500">Email</dt>
                  <dd className="text-right font-medium">
                    <a href={`mailto:${profile.email}`} className="hover:text-flame-600 transition-colors">
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-500">Status</dt>
                  <dd className="text-right font-medium text-emerald-600 dark:text-emerald-400">
                    {profile.available ? 'Available' : 'Unavailable'}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section title="Skills & tools">
        <SkillsGrid />
      </Section>

      <Section title="Experience">
        <Timeline items={experience} />
      </Section>

      <Section title="Education">
        <div className="space-y-5">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 100}>
              <div className="card p-6 hover:-translate-y-0.5 hover:border-flame-500/30 hover:shadow-lg hover:shadow-flame-500/5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold tracking-tight">{edu.degree}</h3>
                  <span className="text-xs font-medium text-slate-500">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-flame-600 dark:text-flame-400">{edu.school}</p>
                {edu.details && (
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{edu.details}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}