/**
 * Static page data — imported by client components.
 * (Previously fetched from /api/page-data; consolidated here for simplicity.)
 */

// ─────────────────────────────────────────────────────────────
// Header data — mega-menu structure
// ─────────────────────────────────────────────────────────────
export type HeaderChild = {
  label: string
  description: string
  href: string
  /** 24x24 viewBox path-d for the icon */
  icon?: string
}

export type HeaderItem = {
  label: string
  href: string
  children?: HeaderChild[]
  /** number of columns in the dropdown panel */
  columns?: 2 | 3
}

// Lucide-style 24x24 SVG path-d strings
const I = {
  layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  database:
    'M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4zM3 12c0 2.21 4 4 9 4s9-1.79 9-4',
  cpu: 'M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3M5 5h14v14H5z',
  sparkles:
    'M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z',
  bolt: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  award:
    'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  rocket:
    'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
  briefcase:
    'M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  graduation:
    'M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5',
  book:
    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  github:
    'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  linkedin:
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  file:
    'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  box:
    'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
}

export const headerData: HeaderItem[] = [
  {
    label: 'Skills',
    href: '/#services',
    columns: 3,
    children: [
      { label: 'Frontend Engineering', description: 'React, Next.js & production UI systems', href: '/#services', icon: I.layers },
      { label: 'Backend Engineering', description: 'Node.js, Express, REST APIs & services', href: '/#services', icon: I.code },
      { label: 'Databases', description: 'PostgreSQL, MongoDB, Prisma & query tuning', href: '/#services', icon: I.database },
      { label: 'System Architecture', description: 'Microservices, Kafka, SSR & CI/CD', href: '/#services', icon: I.cpu },
      { label: 'AI Tooling', description: 'MCP servers, RAG & LLM-powered workflows', href: '/#services', icon: I.sparkles },
      { label: 'Performance', description: 'Bundle size, query tuning & uptime SLAs', href: '/#services', icon: I.bolt },
      { label: 'Testing & QA', description: 'Jest, Playwright, integration tests & CI gates', href: '/#services', icon: I.award },
      { label: 'Observability', description: 'Sentry, Grafana, OpenTelemetry tracing', href: '/#services', icon: I.cpu },
      { label: 'Developer Experience', description: 'Tooling, monorepos, ESLint, ergonomic APIs', href: '/#services', icon: I.rocket },
    ],
  },
  {
    label: 'Projects',
    href: '/#work',
    columns: 3,
    children: [
      { label: 'Arobix', description: 'Multi-tenant SaaS with funnel builder & Stripe billing', href: '/#work', icon: I.box },
      { label: 'Priscus', description: 'AI project analysis with React Flow & MCP server', href: '/#work', icon: I.sparkles },
      { label: 'Enterprise PIM', description: '10K+ SKUs, 85+ B2B clients, 99.8% uptime', href: '/#work', icon: I.database },
      { label: 'iOS Assistive App', description: 'Accessibility-first Braille companion for students', href: '/#work', icon: I.rocket },
      { label: 'Springer Research', description: 'Lead-author paper on Blockchain & IoT for Healthcare', href: '/#work', icon: I.book },
      { label: 'Open Source', description: 'SSRM Ag-Grid, Prisma sharding & Next.js streaming demos', href: '/#work', icon: I.github },
    ],
  },
  {
    label: 'Experience',
    href: '/#team',
    columns: 3,
    children: [
      { label: 'WizCommerce', description: 'SDE — Building the PIM system from the ground up', href: '/#team', icon: I.briefcase },
      { label: 'Infosys', description: 'Application Developer & Scrum Master, 9-person team', href: '/#team', icon: I.user },
      { label: 'Chitkara University', description: 'B.Tech CSE — CGPA 9.41/10, distributed systems', href: '/#team', icon: I.graduation },
      { label: 'Springer Publication', description: 'Lead author — Blockchain & IoT for Healthcare', href: '/#team', icon: I.book },
      { label: 'Mentorship', description: 'Code reviews, architecture sessions & onboarding', href: '/#team', icon: I.award },
      { label: 'Open-source Work', description: 'Public GitHub, talks and engineering write-ups', href: '/#team', icon: I.github },
    ],
  },
  { label: 'Achievements', href: '/#awards' },
  { label: 'About', href: '/#aboutus' },
  {
    label: 'Resources',
    href: '/#aboutus',
    columns: 3,
    children: [
      { label: 'Resume', description: 'Latest CV and credentials in one place', href: 'https://satwik073.github.io/SatwikPortFolio/', icon: I.file },
      { label: 'GitHub', description: 'Open-source work and side projects', href: 'https://github.com/satwik073', icon: I.github },
      { label: 'LinkedIn', description: 'Career history and professional updates', href: 'https://linkedin.com/in/satwikkanhere0730', icon: I.linkedin },
      { label: 'Documentation', description: 'Engineering notes and walkthroughs', href: '/documentation', icon: I.book },
      { label: 'Engineering Blog', description: 'Deep-dives on architecture & migrations', href: '/#awards', icon: I.book },
      { label: 'Press Kit', description: 'Bio, headshots and brand assets for media use', href: '/contact', icon: I.file },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

// ─────────────────────────────────────────────────────────────
// Hero avatar list
// ─────────────────────────────────────────────────────────────
export const avatarList = [
  { image: '/images/home/avatar_1.jpg', title: 'Team Member' },
  { image: '/images/home/avatar_2.jpg', title: 'Colleague' },
  { image: '/images/home/avatar_3.jpg', title: 'Collaborator' },
  { image: '/images/home/avatar_4.jpg', title: 'Mentor' },
]

// ─────────────────────────────────────────────────────────────
// FAQ list
// ─────────────────────────────────────────────────────────────
export const faqList = [
  {
    faq_que: 'What is your core tech stack?',
    faq_ans:
      'My primary stack is TypeScript across the board — React.js and Next.js on the frontend, Node.js and Express.js on the backend, with PostgreSQL and MongoDB for persistence. I also work with Java for enterprise systems, Kafka for event streaming, Prisma as an ORM, Ag-Grid for complex data grids, and Sentry + Grafana for observability.',
  },
  {
    faq_que: 'What kind of systems have you built in production?',
    faq_ans:
      'At WizCommerce, I built the entire Product Information Management system from the ground up — it handles 10,000+ SKUs daily for 85+ US-based B2B clients with 99.8% uptime. This includes server-side rendered data grids displaying 500K+ records, real-time WebSocket sync, and optimized PostgreSQL queries.',
  },
  {
    faq_que: 'What sets your engineering approach apart?',
    faq_ans:
      'I think in systems, not just features. Every piece of code I write considers scale, maintainability, and performance from day one. I obsess over query performance, bundle sizes, and developer experience.',
  },
  {
    faq_que: 'Do you have published research?',
    faq_ans:
      'Yes. I am the Lead Author of "Blockchain and IoT for Healthcare: A Systematic Analysis" published by Springer in Algorithms for Intelligent Systems.',
  },
  {
    faq_que: 'What is your educational background?',
    faq_ans:
      'B.Tech in Computer Science & Engineering from Chitkara University, Chandigarh (2021–2025) with a CGPA of 9.41/10.',
  },
  {
    faq_que: 'Are you open to opportunities?',
    faq_ans:
      'Always open to conversations with engineering teams building meaningful products. Reach me at satwikkanhere2003@gmail.com, or connect on LinkedIn at linkedin.com/in/satwikkanhere0730.',
  },
]

// ─────────────────────────────────────────────────────────────
// Online presence (projects) — referenced but not heavily used by the new design
// ─────────────────────────────────────────────────────────────
export const onlinePresenceList = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'Arobix — Enterprise Design Studio',
    description: 'Full-stack SaaS platform with subdomain-based multi-tenancy, drag-and-drop funnel builder, and Stripe-integrated billing.',
    tag: ['Next.js', 'Prisma', 'MySQL', 'Cloudflare'],
    link: 'https://github.com/satwik073',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Priscus — AI Project Analysis',
    description: 'AI-powered development tool with automated Kanban board generation and MCP server integration.',
    tag: ['React Flow', 'Kanban', 'MCP Server', 'AI/ML'],
    link: 'https://priscus.vercel.app',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Enterprise PIM System',
    description: 'Production system serving 85+ US B2B clients. 500K+ records, real-time WebSocket sync, 99.8% uptime.',
    tag: ['Ag-Grid', 'SSRM', 'WebSockets', '10K+ SKUs'],
    link: 'https://github.com/satwik073',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'iOS Assistive Technology',
    description: 'Accessibility-first iOS application for visually-impaired students. Deployed across schools serving 300+ daily users.',
    tag: ['Swift', 'Accessibility', 'Node.js', 'MongoDB'],
    link: 'https://github.com/satwik073',
  },
]

// ─────────────────────────────────────────────────────────────
// Achievements
// ─────────────────────────────────────────────────────────────
export const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Springer Publication',
    title:
      'Lead Author — "Blockchain and IoT for Healthcare: A Systematic Analysis" published in Springer\'s Algorithms for Intelligent Systems series.',
    year: '2024',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Social Impact',
    title:
      'Engineered iOS assistive technology app for visually-impaired students — deployed across schools, serving 300+ students daily.',
    year: '2024',
    url: 'https://github.com/satwik073',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'Production at Scale',
    title:
      'Architected and shipped WizCommerce PIM system — 50,000+ product updates monthly with 99.8% uptime across 85+ clients.',
    year: '2025',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
]
