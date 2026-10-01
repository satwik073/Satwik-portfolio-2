/**
 * Résumé — single source of truth for portfolio content.
 * Mirrors satwik_kanhere.pdf; update here when the résumé changes.
 */
import { SEO } from './seo'

export const RESUME = {
  name: 'Satwik Kanhere',
  title: 'Software Engineer',
  headline: 'Next.js · React.js · TypeScript · FastAPI',
  location: 'Gurugram, India',
  summary:
    'Software Engineer with 2+ years of experience building production web applications using Next.js, React.js, TypeScript, JavaScript, FastAPI, and REST APIs. Delivered features across 3 enterprise products — PIM, CRM, and AI Web Studio — including a legacy PHP-to-Next.js migration, catalogs exceeding 100K+ SKUs, data-intensive workflows handling 500K+ records, and a 65% reduction in page-load time across 80+ enterprise clients.',
  summaryExtra:
    'Experienced in reusable component architecture, API integration, debugging, and performance optimization, and leverage AI tools such as Cursor and Claude to accelerate development.',

  stats: [
    { value: '2+', label: 'Years in production' },
    { value: '100K+', label: 'SKUs in PIM catalogs' },
    { value: '500K+', label: 'Records in data grids' },
    { value: '65%', label: 'Faster page loads, 80+ clients' },
  ],

  experience: [
    {
      company: 'Oritur Technologies (WizCommerce)',
      role: 'Software Development Engineer 1',
      note: 'Software Engineer Intern, Jul 2024 – Jul 2025',
      dates: 'Jul 2024 — Present',
      location: 'Gurugram, India',
      points: [
        'Migrated core functionality of a legacy PHP/WordPress platform to Next.js, rebuilding legacy templates and application flows as reusable React components to improve maintainability and accelerate feature development.',
        'Built the Product Information Management (PIM) admin from scratch in React.js, supporting product creation, media management, variants, and attributes for enterprise catalogs exceeding 100K+ SKUs.',
        'Built a CRM Kanban board from 0-to-1 using React, TypeScript, and REST APIs, with drag-and-drop interactions and real-time updates for enterprise sales pipelines.',
        'Developed features for AI Web Studio, a platform for generating and creating videos, images, and other AI-driven content, translating product requirements into scalable application workflows.',
        'Designed data-intensive workflows using Ag-Grid Server-Side Row Model (SSRM), server-side data loading, and batched API requests to support 500K+ records across 3 enterprise products while maintaining responsive user interactions.',
        'Built multi-cart functionality using Next.js and TypeScript with FastAPI-based REST APIs, letting users create and manage multiple carts with 1,000+ products each, using optimistic updates for responsive cart interactions.',
        'Reduced page-load time by 65% across 80+ enterprise clients through CDN caching, content hashing, cache-busting, and asset-delivery optimizations on GCP.',
        'Used AI tools (Cursor, Claude) to accelerate feature development and debugging while collaborating with Product, Backend, UX, and QA teams to deliver production features in an Agile environment.',
      ],
      stack: ['Next.js', 'React.js', 'TypeScript', 'FastAPI', 'Ag-Grid', 'GCP'],
    },
    {
      company: 'Infosys',
      role: 'Application Developer Intern & Scrum Master',
      note: '',
      dates: 'May 2024 — Jun 2024',
      location: 'Mysuru, India',
      points: [
        'Developed backend functionality using Node.js, Express.js, MongoDB, SQL, and REST APIs, implementing database operations and service integrations.',
        'Coordinated a 9-member Agile team across 4 sprint milestones, facilitating standups, technical discussions, peer code reviews, and delivery tracking.',
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    },
  ],

  projects: [
    {
      name: 'Arobix Design Studio',
      stack: ['Next.js', 'Node.js', 'Prisma', 'MySQL', 'Cloudflare', 'Sentry'],
      href: SEO.assembly,
      points: [
        'Built an AI-powered, multi-tenant platform for agencies with sub-account creation, Kanban-style lane pipelines, an AI website builder, team invitations, and a management dashboard using Next.js, Prisma, and MySQL.',
        'Implemented server-side data access, production deployment, monitoring, and caching using Cloudflare and Sentry.',
      ],
    },
    {
      name: 'Flux',
      stack: ['Next.js', 'WebContainers', 'MCP'],
      href: SEO.flux,
      points: [
        'Built an AI-powered browser-based code IDE using Next.js and WebContainers, supporting in-browser project creation, code execution, AI-assisted code generation, and contextual autocomplete.',
        'Implemented background jobs for asynchronous AI code-generation workflows, allowing long-running operations to execute independently without blocking the interactive editor experience.',
      ],
    },
  ],

  skills: [
    { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL'] },
    { group: 'Frontend', items: ['Next.js', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ag-Grid'] },
    { group: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI'] },
    { group: 'Databases', items: ['PostgreSQL'] },
    { group: 'Cloud & Infra', items: ['GCP', 'Docker', 'CDN Caching', 'Content Hashing', 'Cache-Busting'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Jira', 'Sentry', 'Cursor', 'Claude'] },
    {
      group: 'Practices',
      items: [
        'Component-Based Architecture',
        'API Integration',
        'Debugging',
        'Performance Optimization',
        'Code Reviews',
        'Agile Development',
        'Responsive Design',
      ],
    },
  ],

  education: {
    school: 'Chitkara University Institute of Engineering and Technology',
    degree: 'B.Tech. in Computer Science and Engineering',
    grade: 'CGPA 9.41',
    dates: '2021 — 2025',
    location: 'Chandigarh, India',
  },
} as const

export const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
