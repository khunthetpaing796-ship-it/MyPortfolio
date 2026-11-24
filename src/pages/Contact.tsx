import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from '../components/Button'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import { profile } from '../data/resume'

type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 900)) // TODO: replace with real endpoint
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-flame-500 focus:ring-4 focus:ring-flame-500/15 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-500'

  return (
    <Section
      title="Get in touch"
      subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      className="pt-16"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <Reveal direction="left">
          <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8 hover:border-flame-500/30">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <input
                  id="name" required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  id="email" type="email" required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="ada@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                id="message" required rows={6}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={status !== 'idle'} leftIcon={<Send size={16} />}>
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send message'}
              </Button>
              {status === 'sent' && (
                <span className="animate-fade-in inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={16} /> Thanks — I'll reply soon.
                </span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <aside className="space-y-5">
            <div className="card p-6 hover:border-flame-500/30">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-flame-600 dark:text-flame-400">
                Direct
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={`mailto:${profile.email}`} className="font-medium transition-colors hover:text-flame-600 dark:hover:text-flame-400">
                    {profile.email}
                  </a>
                </li>
                <li className="text-slate-600 dark:text-slate-400">{profile.phone}</li>
                <li className="text-slate-600 dark:text-slate-400">{profile.location}</li>
              </ul>
            </div>

            <div className="card p-6 hover:border-flame-500/30">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-flame-600 dark:text-flame-400">
                Elsewhere
              </h3>
              <SocialLinks />
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}