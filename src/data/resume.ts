export type SocialIcon = 'github' | 'linkedin' | 'mail'

export interface Social { label: string; url: string; icon: SocialIcon }
export interface Project {
  id: string; title: string; description: string; tags: string[]
  liveUrl?: string; repoUrl?: string; featured?: boolean; year: string
}
export interface Experience {
  company: string; role: string; period: string; location: string
  bullets: string[]; tech: string[]
}
export interface Education { school: string; degree: string; period: string; details?: string }
export interface SkillGroup { title: string; items: string[] }
export interface Stat { label: string; value: string }

export const profile = {
  name: 'Khun Thet Paing',
  role: 'Frontend Engineer',
  tagline: 'I build fast, accessible interfaces that feel like fire.',
  summary:
    'Frontend engineer with 1+ years of experience shipping production React applications. I care about performance budgets, design systems, and the small details that make a product feel effortless.',
  location: 'Hmawbi, Yangon, Myanmar',
  email: 'khunthetpaing.it@gmail.com',
  phone: '+95 9 778412600',
  resumeUrl: '/khunthetpaing.pdf',
  avatar: '/khunthetpaing.jpg',
  available: true,
  socials: [
    { label: 'GitHub',   url: 'https://github.com/khunthetpaing796-ship-it?tab=repositories',   icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/khun-thetpaing-043463415/', icon: 'linkedin' },
    { label: 'Email',    url: 'mailto:khunthetpaing.it@gmail.com', icon: 'mail' },
  ] as Social[],
}

export const stats: Stat[] = [
  { label: 'Years of experience', value: '1+' },
  { label: 'Projects shipped', value: '2+' },
  // { label: 'Lighthouse score', value: '99' },
  { label: 'Open-source PRs', value: '4+' },
]

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS', 'MySQL', 'PostgreSQL'] },
  { title: 'Frameworks', items: ['React', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Next.js'] },
  { title: 'UI / Design', items: ['Draw.io', 'Figma'] },
  { title: 'Tooling & Testing', items: ['Vitest', 'ESLint', 'GitHub Actions', 'Docker'] },
]

export const experience: Experience[] = [
  {
    company: 'SeinnyaungSo',
    role: 'Software Engineer',
    period: 'Internship',
    location: 'Remote',
    bullets: [
      'Led the rebuild of the customer dashboard in React + TypeScript, cutting time-to-interactive by 42%.',
      'Designed and shipped a 40-component design system adopted by 5 product teams.',
      'Introduced Playwright E2E coverage, reducing production regressions by 60%.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Next.js', 'Figma', 'Draw.io'],
  },
  {
    company: 'MSH online class',
    role: 'Frontend Developer',
    period: 'May 2026 - Oct 2026 (Internship)',
    location: 'Remote',
    bullets: [
      'Built the onboarding flow that raised activation from 31% to 58% in one quarter.',
      'Migrated a legacy jQuery codebase to React Router + Vite with zero downtime.',
      'Owned accessibility audits and brought the app to WCAG 2.1 AA compliance.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Figma', 'Draw.io', 'Vite', 'GitHub'],
  },
]

export const education: Education[] = [
  {
    school: 'GOVERNMENTTECHNICAL INSTITUTE (GTI)',
    degree: 'Diploma in Information Technology',
    period: '2023 — 2026',
    details: 'Graduated with honors. Focus on human-computer interaction and web performance.',
  },
]

export const projects: Project[] = [
  {
    id: 'my-portfolio',
    title: 'My Protfolio',
    description: 'An accessible, headless React component library with 40+ components, full keyboard support, and a Tailwind preset.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    liveUrl: 'https://myportfolio-public-hhmqkt4bs-khun-s-projects1.vercel.app/',
    repoUrl: 'https://github.com/khunthetpaing796-ship-it/MyPortfolio',
    featured: true, year: '2026',
  },
  {
    id: 'clothing-admin-dashboard',
    title: 'Clothing Admin Dashboard',
    description: 'A comprehensive admin dashboard for managing clothing inventory, orders, and customer data.',
    tags: ['React', 'Tailwind', 'Figma', 'MySQL'],
    // liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/khunthetpaing796-ship-it/Clothing-admin/tree/main',
    featured: true, year: '2026',
  },
  {
    id: 'employee-management',
    title: 'Employee Management',
    description: 'A comprehensive employee management system with reporting and analytics.',
    tags: ['Python', 'pyside6 & pyQt6', 'MySQL'],
    repoUrl: 'https://github.com/khunthetpaing796-ship-it/employee-management',
    featured: true, year: '2026',
  },
  // {
  //   id: 'paperweight',
  //   title: 'Paperweight',
  //   description: 'Markdown-first note app with instant search, command palette, and a plugin API.',
  //   tags: ['React', 'Vite', 'IndexedDB'],
  //   repoUrl: 'https://github.com/khunthetpaing/paperweight',
  //   featured: true, year: '2026',
  // },
]