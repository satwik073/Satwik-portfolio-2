'use client'
import { useRef, useState } from 'react'
import { ChapterMeta } from '../ui/Reading'

const WORD = 'SHIP?'
const SLICES = 26
// rounded so server and client render identical style strings
const round = (n: number, f = 100) => Math.round(n * f) / f
const STEP = round(100 / SLICES)

/** Anamorphic word: vertical slices that only line up at 0°. */
export default function SceneEngineer() {
  const [angle, setAngle] = useState(38)
  const drag = useRef<{ x: number; a: number } | null>(null)
  const k = angle / 90

  return (
    <section
      data-tone='dark'
      aria-labelledby='engineer-title'
      className='tone px-[6vw] lg:px-[4.5vw] pt-[110px] pb-[72px] min-h-[100svh] flex flex-col overflow-hidden'>
      <ChapterMeta index='—' total='About' name='The engineer' years='2+ years in production' />

      <h2 id='engineer-title' className='mt-14 sm:ml-[1.5vw] text-[clamp(32px,3.4vw,58px)] tracking-[-0.035em] leading-none'>
        Can a developer
        <span className='sr-only'> ship?</span>
      </h2>

      <div
        aria-hidden
        className='relative flex-1 min-h-[34vw] mt-4 select-none touch-pan-y cursor-ew-resize'
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, a: angle }
          e.currentTarget.setPointerCapture(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (!drag.current) return
          const next = drag.current.a + ((e.clientX - drag.current.x) / e.currentTarget.clientWidth) * 120
          setAngle(Math.round(Math.min(90, Math.max(0, next))))
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}>
        <div
          className='absolute inset-0'
          style={{
            perspective: '900px',
            filter: k > 0.02 ? 'drop-shadow(2px 0 0 color-mix(in srgb, var(--accent) 75%, transparent))' : 'none',
          }}>
          {Array.from({ length: SLICES }).map((_, i) => {
            const l = round((i / SLICES) * 100)
            const r = round(100 - ((i + 1) / SLICES) * 100)
            const dy = round(Math.sin(i * 1.7 + 0.4) * 22 * k + Math.cos(i * 0.6) * 8 * k)
            const sx = round(1 + Math.sin(i * 2.3) * 0.18 * k, 1000)
            const ry = round((i - SLICES / 2) * 1.2 * k)
            return (
              <span
                key={i}
                className='absolute inset-x-0 top-1/2 text-center font-medium leading-[0.8] tracking-[-0.04em] transition-transform duration-700 ease-[var(--ease-out-3)]'
                style={{
                  fontSize: 'clamp(110px, 25.5vw, 460px)',
                  clipPath: `inset(-10% ${r}% -10% ${l}%)`,
                  transform: `translateY(calc(-50% + ${dy}%)) rotateY(${ry}deg) scaleY(${sx})`,
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #dfe5e6 45%, #8d989b 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}>
                {WORD}
              </span>
            )
          })}
        </div>
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent 0 calc(${STEP}% - 1px), #090e13 calc(${STEP}% - 1px) ${STEP}%)`,
          }}
        />
      </div>

      <p className='text-center text-[11px] muted flex items-center justify-center gap-4'>
        Drag to change your point of view <span aria-hidden className='text-[15px]'>↔</span>
      </p>

      <div className='mt-8 grid gap-10 sm:grid-cols-2 items-end'>
        <div>
          <p className='text-[clamp(24px,2vw,32px)] leading-[1.15] tracking-[-0.025em]'>
            Three enterprise products.
            <br />
            Shipped to production.
          </p>
          <p className='mt-3 text-[11px] muted'>PIM · CRM · AI Web Studio — at WizCommerce.</p>
        </div>
        <div>
          <div className='flex justify-between text-[11px]'>
            <span>A question of perspective</span>
            <span className='font-mono'>{angle}°</span>
          </div>
          <input
            type='range'
            min={0}
            max={90}
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            aria-label='Change perspective'
            className='range text-paper'
          />
          <div className='flex justify-between text-[12px]'>
            <button type='button' onClick={() => setAngle(0)} className='draw cursor-pointer'>
              Resolve the word
            </button>
            <a href='#experience' className='group muted inline-flex gap-3'>
              <span className='draw'>See the experience</span>
              <span className='arrow'>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
