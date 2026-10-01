'use client'
import { useRef, useState } from 'react'
import { ChapterMeta } from '../ui/Reading'
import { SEO } from '@/constants/seo'

/** "Code. | The team." — a draggable seam. Leadership at Infosys. */
export default function ScenePeople() {
  const [seam, setSeam] = useState(48)
  const stage = useRef<HTMLDivElement>(null)

  const dragTo = (clientX: number) => {
    const r = stage.current?.getBoundingClientRect()
    if (!r) return
    setSeam(Math.min(80, Math.max(20, ((clientX - r.left) / r.width) * 100)))
  }

  return (
    <section
      data-tone='dark'
      aria-labelledby='people-title'
      className='tone relative px-[6vw] lg:px-[4.5vw] pt-[110px] pb-[72px] min-h-[100svh] flex flex-col overflow-hidden'>
      <ChapterMeta index='—' total='Leadership' name='Infosys · Scrum Master' years='May — Jun 2024' className='relative z-10' />

      <div ref={stage} className='relative flex-1 min-h-[52vh] mt-6'>
        <h2 id='people-title' className='absolute inset-0'>
          <span
            className='absolute top-1/2 -translate-y-1/2 left-0 pr-[3vw] text-right tracking-[-0.06em] leading-[0.9]'
            style={{ width: `${seam}%`, fontSize: 'clamp(70px, 13.5vw, 250px)', opacity: 0.35 + seam / 120 }}>
            Code.
          </span>
          <span
            className='absolute top-1/2 -translate-y-1/2 right-0 pl-[4vw] tracking-[-0.055em] leading-[0.92]'
            style={{ width: `${100 - seam}%`, fontSize: 'clamp(48px, 8vw, 150px)', opacity: 0.35 + (100 - seam) / 120 }}>
            The
            <br />
            team.
          </span>
        </h2>

        <div
          className='absolute top-0 bottom-0 -translate-x-1/2 w-[clamp(48px,4.4vw,80px)] touch-none cursor-ew-resize'
          style={{ left: `${seam}%` }}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId)
            dragTo(e.clientX)
          }}
          onPointerMove={(e) => e.buttons && dragTo(e.clientX)}>
          <div
            aria-hidden
            className='absolute inset-0'
            style={{
              backgroundImage:
                'repeating-linear-gradient(180deg, rgba(184,196,197,0.55) 0 2px, transparent 2px 9px), linear-gradient(90deg, #090e13, #3b4650 50%, #090e13)',
              maskImage: 'linear-gradient(180deg, transparent, #000 15%, #000 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 15%, #000 85%, transparent)',
            }}
          />
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-paper/40 bg-night text-[18px]'>
            ↔
          </span>
        </div>
      </div>

      <div className='relative z-10 mt-8 grid gap-10 sm:grid-cols-2 items-end'>
        <div>
          <p className='text-[clamp(22px,1.95vw,31px)] leading-[1.25] tracking-[-0.025em] max-w-[28ch]'>
            Coordinated a 9-member Agile team across 4 sprint milestones.
          </p>
          <p className='mt-5 text-[11px] muted'>Standups · technical discussions · peer code reviews · delivery tracking.</p>
        </div>
        <div>
          <a href={SEO.linkedin} target='_blank' rel='noopener noreferrer' className='group flex justify-between items-center text-[clamp(17px,1.3vw,20px)]'>
            <span>View on LinkedIn</span>
            <span className='arrow text-[22px]'>↗</span>
          </a>
          <input
            type='range'
            min={20}
            max={80}
            value={Math.round(seam)}
            onChange={(e) => setSeam(Number(e.target.value))}
            aria-label='Move the seam between code and team'
            className='range text-paper'
          />
          <p className='text-[11px] muted'>Drag the seam. Change the distance.</p>
        </div>
      </div>
    </section>
  )
}
