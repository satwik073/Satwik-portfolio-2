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
    role: 'SDE 1 @ WizCommerce · Jul 2024–Present · Gurugram',
    description:
      'Built CRM Kanban from scratch; designed PIM product-detail UX for 100K+ SKUs; optimized 10+ apps with Ag-Grid SSRM (500K+ records); cut loads 65% with GCP/Cloudflare; integrated eBizCharge, Finix, ACH, CyberSource; migrated WordPress/PHP → Next.js. Full-stack across Java/Spring Boot services and React/Next.js UIs.',
    usedBy: ['Java', 'Spring Boot', 'React', 'Next.js', 'Hibernate'],
  },
  {
    name: 'Enterprise Apps',
    role: 'App Developer Intern & Scrum Master @ Infosys · May–Jun 2024',
    description:
      'Backend services with Node.js, Express.js, MongoDB, and SQL. Led daily standups for a 9-member Agile team and delivered 4 sprint milestones with peer code reviews.',
    usedBy: ['Node.js', 'Express', 'MongoDB', 'SQL'],
  },
  {
    name: 'SaaS Design Studio',
    role: 'Assembly · assembly-stack.vercel.app',
    description:
      'Frontend for a SaaS platform for agency owners: subdomain hosting, drag-and-drop funnel builder, and project management. Next.js, Prisma, MySQL, Cloudflare, Sentry.',
    usedBy: ['Next.js', 'Prisma', 'MySQL', 'Cloudflare'],
  },
  {
    name: 'AI Developer Tools',
    role: 'Flux · flux-code.vercel.app',
    description:
      'AI-powered, Cursor-like code editor UI in Next.js with WebContainers for in-browser environments and MCP server integration for AI-assisted coding.',
    usedBy: ['Next.js', 'WebContainers', 'MCP', 'AI'],
  },
  {
    name: 'Assistive Technology',
    role: 'iOS app · Collaboration with Apple Asia Head',
    description:
      'Led development of an iOS-based assistive learning app as a modern Braille alternative — deployed across Chandigarh schools, supporting 300+ visually impaired students. Collaboration with Ashish Chowdhary.',
    usedBy: ['iOS', 'Accessibility', 'Apple', '300+ users'],
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
              Experience
            </p>
            <h2 className='wiz-display mt-4 sm:mt-5 text-[28px] sm:text-[38px] md:text-[44px] lg:text-[54px] text-wiz_ink dark:text-white'>
              Professional Work Across Products &amp; Impact
            </h2>
          </div>

          <div className='lg:col-span-8'>
            <div className='grid md:grid-cols-12 gap-0 items-stretch border border-wiz_border dark:border-white/10 bg-white dark:bg-white/5'>
              <div className='md:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden border-b md:border-b-0 md:border-r border-wiz_border dark:border-white/10'>
                <div
                  aria-hidden
                  className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ffe2cf_0%,#f5e6d3_45%,#e9d8c2_100%)] dark:hidden'
                />
                <div
                  aria-hidden
                  className='absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,26,0.18)_0%,rgba(0,0,0,0)_55%)]'
                />
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
                  <div className='inline-flex self-start items-center gap-2 bg-white dark:bg-dark_black border border-wiz_border dark:border-white/10 px-3 py-1.5 shadow-sm'>
                    <span className='inline-block h-1.5 w-1.5 rounded-full bg-[#ff7a1a]' />
                    <span className='wiz-eyebrow text-[10px] text-wiz_ink dark:text-white/85'>
                      Now Featured
                    </span>
                  </div>
                  <div>
                    <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                      Resume · Verified
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
                          <div className='mt-5 bg-[#fff3e1] dark:bg-white/5 border border-[#ffd9b5] dark:border-white/10 px-3 py-2.5 flex items-center gap-3 flex-wrap'>
                            <span className='inline-flex items-center gap-2 wiz-eyebrow text-[10px] text-wiz_ink/85'>
                              <span className='inline-block h-2 w-2 bg-[#ff7a1a]' />
                              Stack:
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
