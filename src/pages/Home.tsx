import { ArrowRight, Download, MapPin } from 'lucide-react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import HeroGlow from '../components/HeroGlow'
import { profile, projects, stats } from '../data/resume'

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="container-page pt-16 pb-12 sm:pt-24 sm:pb-20">
        <HeroGlow />
        <div className="max-w-3xl">
          {profile.available && (
            <Reveal direction="down">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new work
              </span>
            </Reveal>
          )}

          <Reveal delay={100}>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
              Hi, I'm {profile.name}. <br />
              <span className="text-gradient">{profile.role}</span> who ships.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.tagline} {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
              <MapPin size={15} className="text-flame-500" /> {profile.location}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/projects" rightIcon={<ArrowRight size={16} />}>View my work</Button>
              <Button href={profile.resumeUrl} variant="outline" leftIcon={<Download size={16} />}>
                Download CV
              </Button>
              <SocialLinks className="ml-1" />
            </div>
          </Reveal>
        </div>

        {/* STATS */}
        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} direction="up">
              <div className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-flame-500/30 hover:shadow-lg hover:shadow-flame-500/10">
                <div className="text-3xl font-extrabold tracking-tight text-gradient">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <Section
        title="Featured work"
        subtitle="A few projects I'm proud of. Head to the projects page for the full list."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-10">
            <Button to="/projects" variant="outline" rightIcon={<ArrowRight size={16} />}>
              All projects
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="pb-8">
        <Reveal direction="scale">
          <div className="card relative overflow-hidden p-8 sm:p-12 hover:border-flame-500/40">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame-500/20 blur-3xl animate-float" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl animate-float [animation-delay:2s]" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Let's build something that <span className="text-gradient">burns bright</span>.
              </h2>
              <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-400">
                I'm currently open to freelance projects and full-time roles. Drop me a line and let's talk.
              </p>
              <div className="mt-6">
                <Button to="/contact" rightIcon={<ArrowRight size={16} />}>
                  Start a conversation
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}