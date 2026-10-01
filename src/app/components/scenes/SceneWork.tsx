'use client'
import { useEffect, useState } from 'react'
import { ChapterMeta } from '../ui/Reading'

const STRIPS = 7
const SHIFTS = [-7, 9, -4, 12, -10, 5, -6]
const CAPTIONS = ['A system takes shape.', 'A system meets its scale.']

/** Dark banner that opens the Experience section. */
export default function SceneWork() {
  const [sliced, setSliced] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      if (document.documentElement.dataset.motion !== 'off') setSliced((v) => !v)
    }, 3600)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div data-tone='dark' className='tone relative px-[6vw] lg:px-[4.5vw] pt-[110px] pb-[72px] min-h-[100svh] flex flex-col overflow-hidden'>
      <div
        aria-hidden
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 45% 60% at 72% 30%, rgba(184,196,197,0.22), transparent 70%), linear-gradient(115deg, transparent 52%, rgba(242,244,241,0.08) 56%, transparent 62%)',
        }}
      />
      <div
        aria-hidden
        className='absolute right-0 top-0 h-full w-[48%] opacity-[0.18] pointer-events-none'
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #b8c4c5 0 1px, transparent 1px 22px)',
          maskImage: 'linear-gradient(to left, #000, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, #000, transparent)',
        }}
      />

      <ChapterMeta index='01' total='05' name='Experience' years='Jul 2024 — Present' className='relative' />

      <p className='relative mt-[8vh] flex-1 flex flex-col justify-center' aria-hidden>
        <span className='block text-[clamp(44px,5vw,90px)] tracking-[-0.045em] leading-none'>The</span>
        <span className='relative block mt-[1vw] h-[0.95em] text-[clamp(110px,24vw,440px)] tracking-[-0.06em] leading-[0.95] select-none'>
          {Array.from({ length: STRIPS }).map((_, i) => (
            <span
              key={i}
              className='absolute inset-0 transition-transform duration-[900ms] ease-[var(--ease-out-3)]'
              style={{
                clipPath: `inset(${Math.round((i / STRIPS) * 10000) / 100}% 0 ${Math.round((100 - ((i + 1) / STRIPS) * 100) * 100) / 100}% 0)`,
                transform: `translateX(${sliced ? SHIFTS[i] : 0}vw)`,
                transitionDelay: `${i * 40}ms`,
              }}>
              work.
            </span>
          ))}
        </span>
      </p>

      <div className='relative mt-10 grid gap-8 sm:grid-cols-[1fr_minmax(0,220px)_1fr] items-end'>
        <div>
          <p className='text-[13px]' aria-live='polite'>
            {CAPTIONS[sliced ? 1 : 0]}
          </p>
          <p className='mt-2 text-[11px] muted'>PIM · CRM · AI Web Studio</p>
        </div>
        <div aria-hidden className='h-px bg-hair-dark relative overflow-hidden'>
          <span
            className='absolute inset-y-0 left-0 bg-paper transition-[width] duration-[3600ms] ease-linear'
            style={{ width: sliced ? '100%' : '12%' }}
          />
        </div>
        <div className='sm:text-right'>
          <p className='text-[clamp(20px,1.6vw,25px)] leading-[1.3] tracking-[-0.02em] sm:ml-auto max-w-[22ch]'>
            What does it take to serve 80+ enterprise clients?
          </p>
          <p className='mt-6 text-[11px] muted'>WizCommerce · Gurugram</p>
        </div>
      </div>
    </div>
  )
}
