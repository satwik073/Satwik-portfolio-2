'use client'
import { useState } from 'react'
import { ArrowLink, ChapterMeta } from '../ui/Reading'
import { SEO } from '@/constants/seo'

const PATHS = [
  {
    tab: 'Full-time',
    question: 'Hiring a Software Engineer?',
    sub: 'Next.js · React.js · TypeScript on the frontend, FastAPI and Node.js behind it. Gurugram, Chandigarh or remote, IST.',
    links: [
      { year: 'Email', title: SEO.email, href: `mailto:${SEO.email}` },
      { year: 'LinkedIn', title: 'linkedin.com/in/satwikkanhere0730', href: SEO.linkedin },
    ],
  },
  {
    tab: 'Contract',
    question: 'Something that needs to ship?',
    sub: 'Scoped frontend or full-stack work — data grids, admin tools, migrations to Next.js, and page-load performance.',
    links: [
      { year: 'Form', title: 'Tell me about the project', href: '/contact' },
      { year: 'WhatsApp', title: SEO.phone, href: SEO.whatsapp },
    ],
  },
  {
    tab: 'Conversation',
    question: 'Just want to talk shop?',
    sub: 'Code reviews, frontend architecture, or comparing notes on building with AI tools.',
    links: [
      { year: 'X', title: '@satwikkanhere', href: SEO.twitter },
      { year: 'GitHub', title: 'github.com/satwik073', href: SEO.github },
    ],
  },
]

/** Dark contact section — three paths. */
export default function SceneNext() {
  const [i, setI] = useState(0)
  const p = PATHS[i]

  return (
    <section
      id='contact'
      data-section={4}
      data-tone='dark'
      aria-labelledby='next-title'
      className='tone relative px-[6vw] pt-[110px] pb-[90px] overflow-hidden scroll-mt-0'>
      <div
        aria-hidden
        className='absolute right-[-10vw] top-[-10vw] h-[60vw] w-[60vw] rounded-full pointer-events-none opacity-60'
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 35%, transparent), transparent 62%)' }}
      />
      <ChapterMeta index='05' total='05' name='Contact' years='Open to new roles' className='relative' />

      <div className='relative mt-14 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] gap-10 items-end'>
        <h2 id='next-title' className='display text-[clamp(64px,9vw,170px)] leading-[0.88]'>
          The next
          <br />
          role.
        </h2>
        <p className='text-[clamp(18px,1.5vw,23px)] leading-[1.35] tracking-[-0.015em] max-w-[28ch] lg:justify-self-end'>
          Choose the conversation. Replies usually within 24 hours.
        </p>
      </div>

      <div role='tablist' aria-label='Ways to work together' className='relative mt-16 grid sm:grid-cols-3 gap-x-[3vw] border-t'>
        {PATHS.map((x, k) => (
          <button
            key={x.tab}
            role='tab'
            type='button'
            aria-selected={i === k}
            onClick={() => setI(k)}
            className={`group flex items-center justify-between text-left py-5 text-[clamp(28px,2.75vw,50px)] tracking-[-0.045em] border-b-2 cursor-pointer transition-colors ${
              i === k ? 'border-paper' : 'border-transparent text-paper/55 hover:text-paper'
            }`}>
            {x.tab}
            <span className='arrow text-[20px]'>↗</span>
          </button>
        ))}
      </div>

      <div key={p.tab} className='relative mt-14 grid lg:grid-cols-2 gap-10 animate-[fadeUp_.6s_var(--ease-out-3)]'>
        <div>
          <h3 className='text-[clamp(28px,2.8vw,48px)] tracking-[-0.045em] leading-[1.04]'>{p.question}</h3>
          <p className='mt-5 text-[14px] leading-[1.6] muted max-w-[48ch]'>{p.sub}</p>
        </div>
        <ul className='border-b self-end'>
          {p.links.map((l) => (
            <li key={l.year} className='border-t'>
              <ArrowLink href={l.href} className='grid grid-cols-[90px_1fr_20px] items-center gap-3 py-[18px] hover:text-silver transition-colors'>
                <span className='font-mono text-[11px] muted'>{l.year}</span>
                <span className='text-[14px] break-all'>{l.title}</span>
                <span className='arrow text-[17px]'>↗</span>
              </ArrowLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
