'use client'
import { useState } from 'react'

type Industry = {
  name: string
  role: string
  description: string
  usedBy: string[]
}

const industries: Industry[] = [
  {
    name: 'Wholesale Commerce',
    role: 'SDE @ WizCommerce',
    description:
      'PIM, ERP integrations, rep-led + online + EDI in one platform. Shipped to 85+ US clients.',
    usedBy: ['WizCommerce', 'PIM', 'ERP Sync', 'B2B'],
  },
  {
    name: 'Enterprise Apps',
    role: 'Application Developer @ Infosys',
    description:
      'Led a 9-member agile team, owned 4 sprint milestones, built Ag-Grid SSRM tables over $10M+ in data.',
    usedBy: ['Infosys', 'Ag-Grid', 'SSRM', '$10M+'],
  },
  {
    name: 'AI / MCP Tooling',
    role: 'Priscus (side project)',
    description:
      'Natural-language → Kanban + React Flow workflows over an MCP server, with deterministic fallbacks.',
    usedBy: ['MCP', 'React Flow', 'RAG', 'LLM'],
  },
  {
    name: 'Multi-Tenant SaaS',
    role: 'Arobix (founding engineer)',
    description:
      'Subdomain-based tenancy, drag-and-drop funnel builder, Stripe billing, custom RBAC auth layer.',
    usedBy: ['Next.js', 'Prisma', 'Stripe', 'Cloudflare'],
  },
  {
    name: 'Assistive Technology',
    role: 'iOS Braille app',
    description:
      'Accessibility-first companion deployed across schools serving 300+ visually-impaired students daily.',
    usedBy: ['Swift', 'iOS A11y', '300+ users'],
  },
]

function CreativeMind() {
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <section
      id='team'
      className='wiz-font bg-wiz_cream dark:bg-dark_black border-y border-wiz_border dark:border-white/10'>
      <div className='container py-12 sm:py-16 lg:py-24'>
        <div className='grid lg:grid-cols-12 gap-6 sm:gap-10 items-start'>
          <div className='lg:col-span-4'>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
              Industries
            </p>
            <h2 className='wiz-display mt-4 sm:mt-5 text-[28px] sm:text-[38px] md:text-[44px] lg:text-[54px] text-wiz_ink dark:text-white'>
              Powering Engineering Teams Across Industries
            </h2>
          </div>

          <div className='lg:col-span-8'>
            <div className='grid md:grid-cols-12 gap-0 items-stretch border border-wiz_border dark:border-white/10 bg-white dark:bg-white/5'>
              {/* LEFT — visual panel that feels editorial */}
              <div className='md:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden border-b md:border-b-0 md:border-r border-wiz_border dark:border-white/10'>
                {/* warm radial backdrop */}
                <div
                  aria-hidden
                  className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ffe2cf_0%,#f5e6d3_45%,#e9d8c2_100%)] dark:hidden'
                />
                <div
                  aria-hidden
                  className='absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,26,0.18)_0%,rgba(0,0,0,0)_55%)]'
                />

                {/* faint grid texture */}
                <svg
                  aria-hidden
                  className='absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.12]'>
                  <defs>
                    <pattern
                      id='ind-grid'
                      width='40'
                      height='40'
                      patternUnits='userSpaceOnUse'>
                      <path
                        d='M 40 0 L 0 0 0 40'
                        fill='none'
                        stroke='#0a0a0a'
                        strokeWidth='0.5'
                      />
                    </pattern>
                  </defs>
                  <rect width='100%' height='100%' fill='url(#ind-grid)' />
                </svg>

                <div className='relative h-full flex flex-col justify-between p-6 sm:p-8'>
                  {/* Top: "Now Featured" pill */}
                  <div className='inline-flex self-start items-center gap-2 bg-white dark:bg-dark_black border border-wiz_border dark:border-white/10 px-3 py-1.5 shadow-sm'>
                    <span className='inline-block h-1.5 w-1.5 rounded-full bg-[#ff7a1a]' />
                    <span className='wiz-eyebrow text-[10px] text-wiz_ink dark:text-white/85'>
                      Now Featured
                    </span>
                  </div>

                  {/* Bottom: serif label */}
                  <div>
                    <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                      Most Recent · 2025
                    </p>
                    <p className='wiz-serif text-[28px] sm:text-[36px] lg:text-[44px] text-wiz_ink dark:text-white mt-2 leading-[1.05]'>
                      {current.name}
                    </p>
                    <p className='mt-3 text-[13px] text-wiz_ink/75 dark:text-white/65 max-w-xs leading-[1.5]'>
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT — accordion list */}
              <div className='md:col-span-7'>
                {industries.map((ind, i) => {
                  const isOpen = i === active
                  return (
                    <div
                      key={i}
                      className={`border-b last:border-b-0 border-wiz_border dark:border-white/10 ${
                        isOpen ? 'bg-wiz_cream_soft dark:bg-white/[0.03]' : ''
                      }`}>
                      <button
                        type='button'
                        onClick={() => setActive(i)}
                        className='w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left'>
                        <span className='wiz-serif text-[18px] sm:text-[20px] lg:text-[24px] text-wiz_ink dark:text-white leading-tight'>
                          {ind.name}
                        </span>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 24 24'
                          fill='none'
                          className={`shrink-0 transition-transform duration-300 text-wiz_ink/60 dark:text-white/60 ${
                            isOpen ? 'rotate-90 text-[#ff7a1a]' : ''
                          }`}>
                          <path
                            d='M5 12h14M13 6l6 6-6 6'
                            stroke='currentColor'
                            strokeWidth='1.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className='px-5 sm:px-7 pb-5 sm:pb-6 pt-1'>
                          <p className='text-[14px] leading-[1.55] text-wiz_ink/75 dark:text-white/65 max-w-prose'>
                            {ind.description}
                          </p>
                          {/* USED BY badges row */}
                          <div className='mt-5 bg-[#fff3e1] dark:bg-white/5 border border-[#ffd9b5] dark:border-white/10 px-3 py-2.5 flex items-center gap-3 flex-wrap'>
                            <span className='inline-flex items-center gap-2 wiz-eyebrow text-[10px] text-wiz_ink/85'>
                              <span className='inline-block h-2 w-2 bg-[#ff7a1a]' />
                              Used:
                            </span>
                            {ind.usedBy.map((u, ui) => (
                              <span
                                key={ui}
                                className='wiz-serif text-[14px] sm:text-[15px] text-wiz_ink dark:text-white/90'>
                                {u}
                                {ui < ind.usedBy.length - 1 && (
                                  <span className='ml-3 text-wiz_ink/30'>·</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeMind
