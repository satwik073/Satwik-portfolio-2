'use client'
import Link from 'next/link'
import { SEO } from '@/constants/seo'

type MegaLink = { label: string; desc?: string; href: string; meta?: string }
type MegaColumn = { title: string; links: MegaLink[]; wide?: boolean }
type Feature = { tone: 'dark' | 'blue'; eyebrow: string; title: string; cta: string; href: string }

export type MegaKey = 'work' | 'projects' | 'contact'

export const MEGA: Record<MegaKey, { columns: MegaColumn[]; feature: Feature }> = {
  work: {
    columns: [
      {
        title: 'Experience',
        links: [
          { label: 'WizCommerce', desc: 'Software Development Engineer 1', meta: '2024 —', href: '/#experience' },
          { label: 'Infosys', desc: 'App Developer Intern & Scrum Master', meta: '2024', href: '/#experience' },
          { label: 'Chitkara University', desc: 'B.Tech CSE · CGPA 9.41', meta: '2021 — 25', href: '/#education' },
        ],
      },
      {
        title: 'Highlights',
        wide: true,
        links: [
          { label: 'PIM admin', desc: 'Catalogs exceeding 100K+ SKUs', href: '/#experience' },
          { label: 'CRM Kanban', desc: 'Built 0-to-1, drag-and-drop', href: '/#experience' },
          { label: 'AI Web Studio', desc: 'AI video & image generation', href: '/#experience' },
          { label: 'Multi-cart', desc: 'Next.js + FastAPI, 1,000+ items', href: '/#experience' },
          { label: 'Ag-Grid SSRM', desc: '500K+ records, responsive', href: '/#experience' },
          { label: 'Page load −65%', desc: 'CDN & caching, 80+ clients', href: '/#experience' },
        ],
      },
    ],
    feature: {
      tone: 'dark',
      eyebrow: '2+ years in production',
      title: 'Software Engineer at WizCommerce.',
      cta: 'Download résumé',
      href: '/satwik-kanhere-resume.pdf',
    },
  },
  projects: {
    columns: [
      {
        title: 'Side projects',
        links: [
          { label: 'Arobix Design Studio', desc: 'AI-powered multi-tenant platform for agencies', href: SEO.assembly, meta: 'Live' },
          { label: 'Flux', desc: 'AI-powered browser-based code IDE', href: SEO.flux, meta: 'Live' },
          { label: 'GitHub', desc: 'github.com/satwik073', href: SEO.github },
        ],
      },
      {
        title: 'Stack',
        links: [
          { label: 'Frontend', desc: 'Next.js · React.js · Tailwind · Ag-Grid', href: '/#skills' },
          { label: 'Backend & APIs', desc: 'FastAPI · Node.js · Express · REST', href: '/#skills' },
          { label: 'Cloud & tools', desc: 'GCP · Docker · Sentry · Cursor · Claude', href: '/#skills' },
        ],
      },
    ],
    feature: {
      tone: 'blue',
      eyebrow: 'Live',
      title: 'Built, deployed and maintained like products.',
      cta: 'See all projects',
      href: '/#projects',
    },
  },
  contact: {
    columns: [
      {
        title: 'Reach me',
        links: [
          { label: 'Email', desc: SEO.email, href: `mailto:${SEO.email}` },
          { label: 'WhatsApp', desc: SEO.phone, href: SEO.whatsapp },
          { label: 'Contact form', desc: 'Tell me about the role or project', href: '/contact' },
        ],
      },
      {
        title: 'Profiles',
        links: [
          { label: 'LinkedIn', desc: 'satwikkanhere0730', href: SEO.linkedin },
          { label: 'GitHub', desc: 'satwik073', href: SEO.github },
          { label: 'X / Twitter', desc: '@satwikkanhere', href: SEO.twitter },
          { label: 'About', desc: 'Full bio and background', href: '/about' },
        ],
      },
    ],
    feature: {
      tone: 'dark',
      eyebrow: 'Open to new roles',
      title: 'Replies usually within 24 hours.',
      cta: 'Start a conversation',
      href: '/contact',
    },
  },
}

function MLink({ l, onNavigate }: { l: MegaLink; onNavigate: () => void }) {
  const external = /^(https?:|mailto:)/.test(l.href) || l.href.endsWith('.pdf')
  const body = (
    <>
      <span className='flex items-baseline justify-between gap-3'>
        <span className='text-[17px] tracking-[-0.015em]'>{l.label}</span>
        <span className='flex items-center gap-2 font-mono text-[10px] muted'>
          {l.meta}
          <span className='arrow text-[13px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity'>
            ↗
          </span>
        </span>
      </span>
      {l.desc && <span className='mt-0.5 block text-[12px] muted break-words'>{l.desc}</span>}
    </>
  )
  const cls = 'group block py-3 border-t border-line hover:text-blue transition-colors'
  return external ? (
    <a href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel='noopener noreferrer' onClick={onNavigate} className={cls}>
      {body}
    </a>
  ) : (
    <Link href={l.href} onClick={onNavigate} className={cls}>
      {body}
    </Link>
  )
}

export default function MegaMenu({
  active,
  id,
  onNavigate,
  onEnter,
  onLeave,
}: {
  active: MegaKey
  id: string
  onNavigate: () => void
  onEnter: () => void
  onLeave: () => void
}) {
  const { columns, feature } = MEGA[active]
  return (
    <div
      id={id}
      data-tone='light'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className='tone absolute inset-x-0 top-full border-y border-line shadow-[0_32px_64px_-32px_rgba(9,14,19,0.45)] animate-[fadeUp_.25s_var(--ease-out-3)]'>
      <div className='px-[4.5vw] pt-6 pb-8 grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,0.85fr)] gap-x-[3vw]'>
        {columns.map((c) => (
          <div key={c.title}>
            <p className='caps muted pb-3'>{c.title}</p>
            <div className={c.wide ? 'grid grid-cols-2 gap-x-6' : ''}>
              {c.links.map((l) => (
                <MLink key={l.label} l={l} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        ))}
        <a
          href={feature.href}
          {...(feature.href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener' } : {})}
          onClick={onNavigate}
          data-tone={feature.tone}
          className='tone group relative overflow-hidden flex flex-col justify-between p-6 min-h-[220px]'>
          <span
            aria-hidden
            className='absolute inset-0 opacity-30'
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 14px)',
              maskImage: 'radial-gradient(ellipse at 80% 20%, #000, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 80% 20%, #000, transparent 70%)',
            }}
          />
          <span className='relative text-[11px] muted'>{feature.eyebrow}</span>
          <span className='relative'>
            <span className='block text-[clamp(22px,1.8vw,28px)] leading-[1.15] tracking-[-0.03em]'>{feature.title}</span>
            <span className='mt-5 inline-flex gap-2 text-[13px]'>
              <span className='draw'>{feature.cta}</span>
              <span className='arrow'>↗</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}
