'use client'
import { useState } from 'react'
import Link from 'next/link'
import { onlinePresenceList } from '@/constants'

const tabs = [
  { key: 'ai', label: 'AI / MCP Tooling' },
  { key: 'systems', label: 'Production Systems' },
  { key: 'open', label: 'Open Source' },
]

type Card = {
  icon: string
  title: string
  description: string
}

const cardsByTab: Record<string, Card[]> = {
  ai: [
    {
      icon: 'M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z',
      title: 'Priscus — AI project analysis with MCP server.',
      description:
        'Generates Kanban boards and React Flow workflows from natural-language prompts. Pluggable agents over MCP, with deterministic fallback for parse failures.',
    },
    {
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      title: 'RAG over CRM, orders and pipeline data.',
      description:
        'Vector-indexed enterprise data, served behind a tight tool-use loop so reps get precise answers — no digging, no switching tabs.',
    },
    {
      icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
      title: 'AI-built quotes during live conversations.',
      description:
        'Describe what the customer wants, get a quote with the right products, pricing and terms — generated in seconds, ERP-validated.',
    },
    {
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
      title: 'Know exactly which customers to follow up with.',
      description:
        'Prioritises customers on buying signals, open quotes, abandoned carts and recent activity — reps always know who to call next.',
    },
  ],
  systems: [
    {
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
      title: 'Enterprise PIM — built from scratch.',
      description:
        '10K+ SKUs processed daily, 85+ B2B clients, 99.8% uptime SLA. Server-side rendered Ag-Grid handles 500K+ records without choking.',
    },
    {
      icon: 'M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4zM3 12c0 2.21 4 4 9 4s9-1.79 9-4',
      title: 'Real-time WebSocket sync at scale.',
      description:
        '50K+ product updates a month flow through Kafka, get normalised, and push live to the rep app. Zero polling, zero drift.',
    },
    {
      icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
      title: 'Arobix — multi-tenant SaaS, subdomain-based.',
      description:
        'Drag-and-drop funnel builder with Stripe-integrated billing, RBAC, and a custom auth layer that took the team off NextAuth.',
    },
    {
      icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
      title: 'Built-in data validation & accuracy controls.',
      description:
        'Detects inconsistencies in PIM imports, surfaces a final review step before anything hits the ERP. Cuts cleanup tickets by 60%.',
    },
  ],
  open: [
    {
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
      title: 'iOS assistive tech for visually-impaired students.',
      description:
        'Accessibility-first Braille companion deployed across schools in Chandigarh — 300+ students rely on it daily.',
    },
    {
      icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
      title: 'Blockchain & IoT for Healthcare.',
      description:
        'Lead author of a Springer publication framing decentralised patient records, encrypted health telemetry, and on-chain consent.',
    },
    {
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
      title: 'Side projects — engineering notes & demos.',
      description:
        'Public GitHub with reproducible setups for SSRM Ag-Grid, Prisma sharding, and Next.js streaming patterns.',
    },
    {
      icon: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
      title: 'Talks, walkthroughs and docs.',
      description:
        'Detailed write-ups of production migrations, query rewrites, and the trade-offs behind picking event-driven over CRUD.',
    },
  ],
}

function OnlinePresence() {
  const [active, setActive] = useState<'ai' | 'systems' | 'open'>('ai')
  const cards = cardsByTab[active]

  return (
    <section id='work' className='wiz-font bg-wiz_navy text-white relative overflow-hidden'>
      {/* gradient grids */}
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
          <h2 className='wiz-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px]'
            style={{
              backgroundImage:
                'linear-gradient(90deg, #f7c8ff 0%, #ffb38a 50%, #f7c8ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            AI Co-Workers
          </h2>
          <p className='mt-5 max-w-2xl px-2 text-[14px] sm:text-[15px] leading-[1.6] text-white/65'>
            The intelligence layer I build into modern engineering workflows —
            automating repetitive tasks, surfacing the right signal at the right
            moment, and delivering real bottom-line revenue growth.
          </p>
        </div>

        {/* Tabs */}
        <div className='mt-8 sm:mt-12 flex justify-center'>
          <div className='inline-flex gap-3 flex-wrap justify-center px-2'>
            {tabs.map(t => {
              const isActive = active === t.key
              return (
                <button
                  key={t.key}
                  type='button'
                  onClick={() => setActive(t.key as typeof active)}
                  className={`wiz-eyebrow px-6 sm:px-10 py-3 sm:py-3.5 text-[11px] sm:text-[13px] tracking-[0.18em] transition-all
                    ${
                      isActive
                        ? 'bg-gradient-to-r from-[#ff7bb0] via-[#ffb38a] to-[#ff7a1a] text-wiz_ink shadow-[0_8px_24px_-12px_rgba(255,122,26,0.6)]'
                        : 'border border-white/25 text-white/85 hover:text-white hover:border-white/60 hover:bg-white/[0.04]'
                    }`}>
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards grid */}
        <div className='mt-12 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10'>
          {cards.map((c, i) => (
            <div key={i} className='bg-wiz_navy p-5 sm:p-7 lg:p-9 flex flex-col gap-4 sm:gap-5'>
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
              <p className='text-[14px] leading-[1.6] text-white/55 max-w-md'>
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
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

        {/* silence unused import warning */}
        <div className='hidden'>{onlinePresenceList.length}</div>
      </div>
    </section>
  )
}

export default OnlinePresence
