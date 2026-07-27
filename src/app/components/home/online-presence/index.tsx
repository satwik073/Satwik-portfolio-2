'use client'
import { useState } from 'react'
import Link from 'next/link'
import { onlinePresenceList } from '@/constants'

const tabs = [
  { key: 'work', label: 'WizCommerce Work' },
  { key: 'projects', label: 'Notable Projects' },
  { key: 'impact', label: 'Impact & Leadership' },
]

type Card = {
  icon: string
  title: string
  description: string
  href?: string
}

const cardsByTab: Record<string, Card[]> = {
  work: [
    {
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
      title: 'PIM product-detail experience — 100,000+ SKUs.',
      description:
        'Designed and developed from scratch: product creation, media management, variant configuration, and attribute editing for the Product Information Management platform.',
    },
    {
      icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
      title: 'CRM Kanban Board built from scratch.',
      description:
        'React, TypeScript, and REST APIs — drag-and-drop workflow management, real-time task updates, and streamlined sales operations.',
    },
    {
      icon: 'M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4zM3 12c0 2.21 4 4 9 4s9-1.79 9-4',
      title: 'Ag-Grid SSRM across 10+ enterprise apps.',
      description:
        'Efficiently handling datasets exceeding 500K+ records while maintaining responsive UX for data-intensive enterprise interfaces.',
    },
    {
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      title: 'Payments + CDN performance.',
      description:
        'Integrated eBizCharge, Finix, ACH, and CyberSource. Implemented content hashing, cache-busting, and GCP/Cloudflare CDN — 65%+ faster page loads for 120+ clients.',
    },
  ],
  projects: [
    {
      icon: 'M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z',
      title: 'Assembly — Enterprise Design Studio.',
      description:
        'SaaS frontend for agency owners: subdomain hosting, drag-and-drop funnel builder, project management. Next.js, Prisma, MySQL, Cloudflare, Sentry.',
      href: 'https://assembly-stack.vercel.app',
    },
    {
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      title: 'Flux — AI-Powered Code IDE.',
      description:
        'Cursor-like editor UI in Next.js with WebContainers for in-browser environments and MCP server integration for AI-assisted coding workflows.',
      href: 'https://flux-code.vercel.app',
    },
    {
      icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
      title: 'WordPress/PHP → Next.js migration.',
      description:
        'Contributed to migrating a legacy monolithic platform into reusable React components, improving maintainability across enterprise deployments.',
    },
    {
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
      title: 'Reusable UI modules & widgets.',
      description:
        'Shared React components and configurable widgets that accelerated feature delivery while keeping consistency across multiple products.',
    },
  ],
  impact: [
    {
      icon: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
      title: 'Assistive tech with Apple — 300+ students.',
      description:
        'Led iOS assistive learning app as a modern Braille alternative, in collaboration with Apple Asia Head Ashish Chowdhary. Deployed across Chandigarh schools.',
    },
    {
      icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
      title: 'Infosys — Scrum Master & backend.',
      description:
        'Node.js, Express, MongoDB, SQL backends. Led daily standups for a 9-member team and delivered 4 sprint milestones with code reviews.',
    },
    {
      icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
      title: 'B.Tech CSE · Chitkara · 9.41 CGPA.',
      description:
        'Bachelor of Technology in Computer Science and Engineering, Chitkara University Institute of Engineering and Technology (2021–2025).',
    },
    {
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
      title: 'Open work & contact.',
      description:
        'github.com/satwik073 · satwik073.github.io/SatwikPortFolio · satwikkanhere2003@gmail.com · +91 6284486063',
      href: 'https://github.com/satwik073',
    },
  ],
}

function OnlinePresence() {
  const [active, setActive] = useState<'work' | 'projects' | 'impact'>('work')
  const cards = cardsByTab[active]

  return (
    <section id='work' className='wiz-font bg-wiz_navy text-white relative overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-30'
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 0%, rgba(255,123,176,0.18), transparent 35%), radial-gradient(circle at 80% 100%, rgba(255,122,26,0.18), transparent 35%)',
        }}
      />
      <div className='container relative py-14 sm:py-20 lg:py-28'>
        <div className='flex flex-col items-center text-center'>
          <h2
            className='wiz-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px]'
            style={{
              backgroundImage:
                'linear-gradient(90deg, #f7c8ff 0%, var(--brand-pink) 50%, #f7c8ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Selected Work
          </h2>
          <p className='mt-5 max-w-2xl px-2 text-[14px] sm:text-[15px] leading-[1.6] text-white/70'>
            From the resume: WizCommerce production systems, Assembly &amp; Flux
            side projects, Infosys delivery, and Apple-collaborated assistive tech.
          </p>
        </div>

        <div className='mt-8 sm:mt-12 flex justify-center'>
          <div className='inline-flex gap-3 flex-wrap justify-center px-2'>
            {tabs.map((t) => {
              const isActive = active === t.key
              return (
                <button
                  key={t.key}
                  type='button'
                  onClick={() => setActive(t.key as typeof active)}
                  className={`wiz-eyebrow px-6 sm:px-10 py-3 sm:py-3.5 text-[11px] sm:text-[13px] tracking-[0.18em] transition-all
                    ${
                      isActive
                        ? 'bg-gradient-to-r from-[#ff7bb0] via-[var(--brand-pink)] to-[var(--brand)] text-wiz_ink shadow-[0_8px_24px_-12px_rgba(255,122,26,0.6)]'
                        : 'border border-white/25 text-white/85 hover:text-white hover:border-white/60 hover:bg-white/[0.04]'
                    }`}>
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className='mt-12 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10'>
          {cards.map((c, i) => {
            const inner = (
              <>
                <span className='inline-flex h-9 w-9 items-center justify-center text-[#ff7bb0]'>
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d={c.icon} />
                  </svg>
                </span>
                <h3 className='wiz-serif text-[20px] sm:text-[22px] lg:text-[26px] text-white leading-snug'>
                  {c.title}
                </h3>
                <p className='text-[14px] leading-[1.6] text-white/70 max-w-md'>
                  {c.description}
                </p>
                {c.href && (
                  <span className='wiz-eyebrow text-[11px] text-[#ffb38a] mt-auto'>
                    Visit →
                  </span>
                )}
              </>
            )
            return c.href ? (
              <Link
                key={i}
                href={c.href}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-wiz_navy p-5 sm:p-7 lg:p-9 flex flex-col gap-4 sm:gap-5 hover:bg-white/[0.03] transition-colors'>
                {inner}
              </Link>
            ) : (
              <div key={i} className='bg-wiz_navy p-5 sm:p-7 lg:p-9 flex flex-col gap-4 sm:gap-5'>
                {inner}
              </div>
            )
          })}
        </div>

        <div className='mt-10 flex justify-center'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-white text-wiz_ink text-[13px] tracking-[0.16em] uppercase font-medium px-6 py-3.5 hover:bg-white/90 transition'>
            Talk to Satwik
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
              <path
                d='M5 12h14M13 6l6 6-6 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>

        <div className='hidden'>{onlinePresenceList.length}</div>
      </div>
    </section>
  )
}

export default OnlinePresence
