/**
 * Static page data — sourced from Satwik Kanhere's resume.
 */

export type HeaderChild = {
  label: string
  description: string
  href: string
  icon?: string
}

export type HeaderItem = {
  label: string
  href: string
  children?: HeaderChild[]
  columns?: 2 | 3
}

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
      { label: 'Languages', description: 'Java, JavaScript (ES6+), TypeScript, SQL', href: '/#services', icon: I.code },
      { label: 'Frontend', description: 'React.js, Next.js, React Native, Ag-Grid, Tailwind', href: '/#services', icon: I.layers },
      { label: 'Backend', description: 'Java, Spring Boot, Hibernate, Node.js, Kafka', href: '/#services', icon: I.cpu },
      { label: 'Databases', description: 'MongoDB, MySQL & SQL data operations', href: '/#services', icon: I.database },
      { label: 'Performance', description: 'GCP CDN, Cloudflare, cache-busting, Sentry', href: '/#services', icon: I.bolt },
      { label: 'Payments', description: 'eBizCharge, Finix, ACH, CyberSource', href: '/#services', icon: I.box },
      { label: 'Tools', description: 'Git, GitHub, Docker, Postman, Jira', href: '/#services', icon: I.rocket },
      { label: 'Practices', description: 'Agile, code reviews, responsive & cross-browser', href: '/#services', icon: I.award },
      { label: 'Data Grids', description: 'Ag-Grid SSRM for 500K+ record interfaces', href: '/#services', icon: I.sparkles },
    ],
  },
  {
    label: 'Projects',
    href: '/#work',
    columns: 3,
    children: [
      { label: 'Enterprise PIM', description: 'Product detail UX for 100,000+ SKUs', href: '/#work', icon: I.database },
      { label: 'CRM Kanban', description: 'Drag-and-drop sales board built from scratch', href: '/#work', icon: I.layers },
      { label: 'Assembly', description: 'Enterprise design studio — assembly-stack.vercel.app', href: 'https://assembly-stack.vercel.app', icon: I.box },
      { label: 'Flux', description: 'AI code IDE — flux-code.vercel.app', href: 'https://flux-code.vercel.app', icon: I.sparkles },
      { label: 'iOS Assistive App', description: 'Apple-collaborated app for 300+ students', href: '/#awards', icon: I.rocket },
      { label: 'Payment Flows', description: 'eBizCharge, Finix, ACH & CyberSource', href: '/#work', icon: I.bolt },
    ],
  },
  {
    label: 'Experience',
    href: '/#team',
    columns: 3,
    children: [
      { label: 'WizCommerce', description: 'SDE 1 · July 2024 – Present · Gurugram', href: '/#team', icon: I.briefcase },
      { label: 'Infosys', description: 'App Developer Intern & Scrum Master · May–Jun 2024', href: '/#team', icon: I.user },
      { label: 'Chitkara University', description: 'B.Tech CSE · CGPA 9.41 · 2021–2025', href: '/#team', icon: I.graduation },
      { label: 'Apple Collaboration', description: 'Assistive tech for visually impaired students', href: '/#awards', icon: I.award },
      { label: 'Publications', description: 'Springer & IEI papers on Blockchain + IoT', href: '/#awards', icon: I.book },
      { label: 'Open Source', description: 'GitHub · satwik073', href: 'https://github.com/satwik073', icon: I.github },
    ],
  },
  { label: 'Achievements', href: '/#awards' },
  { label: 'About', href: '/about' },
  {
    label: 'Resources',
    href: '/about',
    columns: 3,
    children: [
      { label: 'About', description: 'Who is Satwik Kanhere — bio & background', href: '/about', icon: I.user },
      { label: 'Resume', description: 'Latest CV and credentials', href: 'https://satwik073.github.io/SatwikPortFolio/', icon: I.file },
      { label: 'GitHub', description: 'github.com/satwik073', href: 'https://github.com/satwik073', icon: I.github },
      { label: 'LinkedIn', description: 'linkedin.com/in/satwikkanhere0730', href: 'https://linkedin.com/in/satwikkanhere0730', icon: I.linkedin },
      { label: 'X / Twitter', description: '@satwikkanhere', href: 'https://x.com/satwikkanhere', icon: I.sparkles },
      { label: 'WhatsApp', description: '+91 6284486063', href: 'https://wa.me/916284486063', icon: I.bolt },
      { label: 'Assembly', description: 'assembly-stack.vercel.app', href: 'https://assembly-stack.vercel.app', icon: I.box },
      { label: 'Flux', description: 'flux-code.vercel.app', href: 'https://flux-code.vercel.app', icon: I.sparkles },
      { label: 'Contact', description: 'satwikkanhere2003@gmail.com', href: '/contact', icon: I.file },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const avatarList = [
  { image: '/images/home/avatar_1.jpg', title: 'WizCommerce' },
  { image: '/images/home/avatar_2.jpg', title: 'Infosys' },
  { image: '/images/home/avatar_3.jpg', title: 'Chitkara University' },
  { image: '/images/home/avatar_4.jpg', title: 'Apple Collaboration' },
]

export const faqList = [
  {
    faq_que: 'Who is Satwik Kanhere?',
    faq_ans:
      'Satwik Kanhere (also spelled Satvik Kanhere) is a Full-Stack Software Development Engineer 1 at WizCommerce in Gurugram, India. He builds with Java, Spring Boot, Hibernate, React.js, Next.js, and TypeScript. Official portfolio: satwik-kanhere.vercel.app. LinkedIn: linkedin.com/in/satwikkanhere0730. GitHub: github.com/satwik073.',
  },
  {
    faq_que: 'What does Satwik Kanhere do as a software developer?',
    faq_ans:
      'Satwik Kanhere is a full-stack engineer — Java / Spring Boot / Hibernate backends and React.js / Next.js / TypeScript frontends. He ships reusable UI systems, REST APIs, Ag-Grid SSRM data grids, payment workflows, and CDN performance improvements for B2B commerce products at WizCommerce.',
  },
  {
    faq_que: 'Is Satwik Kanhere a full-stack Java and React developer?',
    faq_ans:
      'Yes. Satwik Kanhere works full-stack with Java, Spring Boot, Hibernate, and JPA on the backend, and React.js, Next.js, and TypeScript on the frontend — plus Node.js / Express where the product needs it.',
  },
  {
    faq_que: 'Where does Satwik Kanhere work?',
    faq_ans:
      'Satwik Kanhere works as Software Development Engineer 1 at WizCommerce (Gurugram, July 2024–Present). He previously worked at Infosys Mysuru as Application Developer Intern and Scrum Master (May–June 2024).',
  },
  {
    faq_que: 'What is Satwik Kanhere’s education?',
    faq_ans:
      'B.Tech in Computer Science and Engineering from Chitkara University Institute of Engineering and Technology, Chandigarh (2021–2025), CGPA 9.41/10.',
  },
  {
    faq_que: 'What is Satwik Kanhere’s tech stack?',
    faq_ans:
      'Java, Spring Boot, Hibernate, JPA, JavaScript (ES6+), TypeScript, SQL, React.js, Next.js, React Native, HTML5, CSS3, Tailwind CSS, Ag-Grid, Node.js, Express.js, REST APIs, Kafka, MongoDB, MySQL, GCP CDN, Cloudflare, Sentry, Grafana, eBizCharge, Finix, ACH, CyberSource, Git, GitHub, Docker, Postman, Jira.',
  },
  {
    faq_que: 'What projects has Satwik Kanhere built?',
    faq_ans:
      'Assembly (assembly-stack.vercel.app) — enterprise design studio SaaS. Flux (flux-code.vercel.app) — AI-powered code IDE. Production work at WizCommerce includes CRM Kanban and PIM product experiences. He also led an Apple-collaborated iOS assistive learning app for students in Chandigarh.',
  },
  {
    faq_que: 'How do I hire or contact Satwik Kanhere?',
    faq_ans:
      'Email satwikkanhere2003@gmail.com, phone +91 6284486063, LinkedIn linkedin.com/in/satwikkanhere0730, GitHub github.com/satwik073, about page satwik-kanhere.vercel.app/about, or contact form satwik-kanhere.vercel.app/contact. Based in India (IST). Open to full-time SDE and contract full-stack roles (Java/Spring Boot + React/Next.js).',
  },
  {
    faq_que: 'Is Satwik Kanhere available for remote software engineering roles?',
    faq_ans:
      'Yes. Satwik Kanhere is open to conversations about full-time Software Development Engineer roles and contract full-stack work (Java, Spring Boot, Hibernate, React, Next.js, TypeScript), including remote collaboration in IST timezone.',
  },
  {
    faq_que: 'How is Satwik Kanhere different from other full-stack developers?',
    faq_ans:
      'Satwik Kanhere combines Java / Spring Boot / Hibernate backend skills with React / Next / TypeScript frontend ownership (PIM, CRM, payments, CDN performance), Agile delivery from Infosys, and side projects in SaaS and AI developer tooling (Assembly, Flux).',
  },
]

export const onlinePresenceList = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'Assembly — Enterprise Design Studio',
    description:
      'Frontend for a SaaS platform serving agency owners: subdomain hosting, drag-and-drop funnel builder, and project management. Next.js, Prisma, MySQL, Cloudflare, Sentry.',
    tag: ['Next.js', 'Prisma', 'MySQL', 'Cloudflare'],
    link: 'https://assembly-stack.vercel.app',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Flux — AI-Powered Code IDE',
    description:
      'Cursor-like code editor UI in Next.js with WebContainers for in-browser environments and MCP server integration for AI-assisted coding.',
    tag: ['Next.js', 'WebContainers', 'MCP', 'AI'],
    link: 'https://flux-code.vercel.app',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Enterprise PIM — WizCommerce',
    description:
      'Product-detail experience from scratch: product creation, media management, variant configuration, and attribute editing for 100,000+ SKUs.',
    tag: ['React', 'TypeScript', 'PIM', '100K+ SKUs'],
    link: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'iOS Assistive Technology — with Apple',
    description:
      'Led an iOS assistive learning app as a modern Braille alternative, in collaboration with Apple Asia Head Ashish Chowdhary — 300+ students in Chandigarh schools.',
    tag: ['iOS', 'Accessibility', 'Apple', '300+ Students'],
    link: 'https://linkedin.com/in/satwikkanhere0730',
  },
]

export const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Performance at Scale',
    title:
      'Content hashing, cache-busting, and CDN optimization with GCP and Cloudflare — reduced page load times by over 65% for 120+ enterprise clients.',
    year: '2024–Present',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Assistive Technology · Apple',
    title:
      'Led iOS assistive learning app with Apple Asia Head Ashish Chowdhary — modern Braille alternative supporting 300+ visually impaired students in Chandigarh.',
    year: 'Leadership',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'Data-Intensive UIs',
    title:
      'Developed and optimized 10+ enterprise apps with Ag-Grid Server-Side Row Model, handling datasets exceeding 500K+ records responsively.',
    year: '2024–Present',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
]

/** Full skill inventory from resume — used by Skills section */
export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'React Native',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Ag-Grid',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot',
      'Hibernate',
      'JPA',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Kafka',
    ],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Performance & Monitoring',
    items: [
      'CDN Caching (GCP)',
      'Cloudflare',
      'Content Hashing',
      'Cache-Busting',
      'Sentry',
      'Grafana',
    ],
  },
  {
    title: 'Payments',
    items: ['eBizCharge', 'Finix', 'ACH', 'CyberSource'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jira'],
  },
  {
    title: 'Practices',
    items: [
      'Agile Development',
      'Component-Based Architecture',
      'Code Reviews',
      'Debugging',
      'Responsive Design',
      'Cross-Browser Compatibility',
    ],
  },
]
