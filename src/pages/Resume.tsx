import { Download, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'
import Section from '../components/Section'
import SkillsGrid from '../components/SkillsGrid'
import Timeline from '../components/Timeline'
import Reveal from '../components/Reveal'
import { education, experience, profile } from '../data/resume'

export default function Resume() {
  return (
    <Section
      title="Resume"
      subtitle="A quick overview. Download the PDF for the full version."
      className="pt-16"
    >
      <Reveal>
        <div className="card mb-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between hover:border-flame-500/30">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{profile.name}</h3>
            <p className="text-sm font-medium text-flame-600 dark:text-flame-400">{profile.role}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5"><Mail size={14} /> {profile.email}</span>
              <span className="inline-flex items-center gap-1.5"><Phone size={14} /> {profile.phone}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {profile.location}</span>
            </div>
          </div>
          <Button href={profile.resumeUrl} leftIcon={<Download size={16} />}>Download PDF</Button>
        </div>
      </Reveal>

      <div className="space-y-12">
        <div>
          <Reveal>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-flame-600 dark:text-flame-400">
              Experience
            </h3>
          </Reveal>
          <Timeline items={experience} />
        </div>

        <div>
          <Reveal>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-flame-600 dark:text-flame-400">
              Skills
            </h3>
          </Reveal>
          <SkillsGrid />
        </div>

        <div>
          <Reveal>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-flame-600 dark:text-flame-400">
              Education
            </h3>
          </Reveal>
          {education.map(edu => (
            <Reveal key={edu.school}>
              <div className="card p-6 hover:border-flame-500/30">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-semibold tracking-tight">{edu.degree}</h4>
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
      </div>
    </Section>
  )
}