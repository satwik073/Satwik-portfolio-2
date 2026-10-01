'use client'
import { useMemo, useState } from 'react'
import { ChapterMeta } from '../ui/Reading'
import { SEO } from '@/constants/seo'

const PROJECTS = [
  {
    tab: 'Arobix Design Studio',
    word: 'build',
    gloss: 'an AI-powered, multi-tenant platform for agencies',
    text: 'Sub-accounts, Kanban-style lane pipelines, an AI website builder, team invitations and a management dashboard. Next.js, Node.js, Prisma, MySQL, Cloudflare, Sentry.',
    href: SEO.assembly,
  },
  {
    tab: 'Flux',
    word: 'code',
    gloss: 'an AI-powered, browser-based code IDE',
    text: 'In-browser project creation and code execution on WebContainers, AI-assisted generation and contextual autocomplete, with background jobs for long-running AI work.',
    href: SEO.flux,
  },
  {
    tab: 'GitHub',
    word: 'ship',
    gloss: 'the work, in public',
    text: 'Experiments, components and the source of this portfolio — github.com/satwik073.',
    href: SEO.github,
  },
]

function waves(amp: number) {
  return Array.from({ length: 34 }, (_, i) => {
    const y = 20 + i * 18
    const a = Math.round(amp * (0.6 + Math.sin(i * 0.7) * 0.4) * 100) / 100
    return `M-100 ${y} C 200 ${y - a}, 400 ${y + a}, 700 ${y} S 1200 ${y - a}, 1500 ${y} S 2000 ${y + a}, 2300 ${y}`
  })
}

/** Blue banner that opens the Projects section. */
export default function SceneProjects() {
  const [i, setI] = useState(0)
  const [bend, setBend] = useState(40)
  const p = PROJECTS[i]
  const paths = useMemo(() => waves(bend), [bend])

  return (
    <div data-tone='blue' className='tone relative px-[6vw] pt-[110px] pb-[80px] min-h-[100svh] flex flex-col overflow-hidden'>
      <svg
        aria-hidden
        className='absolute left-0 top-[18%] h-[62%] w-[200%] pointer-events-none animate-[drift_40s_linear_infinite]'
        viewBox='0 0 2200 640'
        preserveAspectRatio='none'>
        {paths.map((d, k) => (
          <path key={k} d={d} fill='none' stroke='#f2f4f1' strokeOpacity={0.16} strokeWidth='1' vectorEffect='non-scaling-stroke' />
        ))}
      </svg>

      <ChapterMeta index='02' total='05' name='Projects' years='Live' className='relative' />

      <div className='relative mt-8 grid gap-6 sm:grid-cols-2'>
        <p className='text-[clamp(40px,3.4vw,62px)] tracking-[-0.045em] leading-none'>Side projects.</p>
        <p className='sm:justify-self-end text-[clamp(18px,1.5vw,23px)] leading-[1.3] tracking-[-0.015em] max-w-[24ch]'>
          Built, deployed and maintained like products.
        </p>
      </div>

      <div className='relative flex-1 flex flex-col items-center justify-center py-10'>
        <p
          key={p.word}
          aria-hidden
          className='font-medium leading-[0.85] tracking-[-0.05em] select-none animate-[fadeUp_.8s_var(--ease-out-3)]'
          style={{
            fontSize: 'clamp(120px, 26vw, 470px)',
            backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #dfe5fb 30%, rgba(255,255,255,0.55) 52%, #eef1fd 64%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 18px 30px rgba(9,14,19,0.35))',
          }}>
          {p.word}
        </p>
        <p className='mt-2 text-[13px]' aria-live='polite'>
          {p.gloss}
        </p>
      </div>

      <div className='relative flex flex-wrap justify-between items-center gap-4 text-[11px]'>
        <span>Choose a project</span>
        <label className='flex items-center gap-4'>
          Bend the field
          <input
            type='range'
            min={0}
            max={80}
            value={bend}
            onChange={(e) => setBend(Number(e.target.value))}
            className='range text-paper w-36'
          />
        </label>
      </div>

      <div role='tablist' aria-label='Projects' className='relative mt-4 grid sm:grid-cols-3 gap-x-[3vw] border-b border-paper/30'>
        {PROJECTS.map((x, k) => (
          <button
            key={x.tab}
            role='tab'
            type='button'
            aria-selected={i === k}
            onClick={() => setI(k)}
            onMouseEnter={() => setI(k)}
            className={`text-left py-4 text-[clamp(18px,1.5vw,23px)] tracking-[-0.015em] border-b-2 -mb-px cursor-pointer transition-colors ${
              i === k ? 'border-paper font-medium' : 'border-transparent text-paper/90 hover:text-paper'
            }`}>
            {x.tab}
          </button>
        ))}
      </div>
      <div className='relative mt-5 grid sm:grid-cols-[1fr_auto] gap-6 items-end'>
        <p className='text-[14px] leading-[1.55] max-w-[60ch]'>{p.text}</p>
        <a href={p.href} target='_blank' rel='noopener noreferrer' className='group inline-flex gap-3 text-[13px]'>
          <span className='draw'>Visit {p.tab}</span>
          <span className='arrow'>↗</span>
        </a>
      </div>
    </div>
  )
}
