'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SOCIAL_PRIMARY } from '@/constants'

const SIZE = 'h-14 w-14'
const iconWrap = `flex ${SIZE} items-center justify-center shadow-[0_14px_36px_-14px_rgba(0,0,0,0.5)] transition-colors`

const icons: Record<string, ReactNode> = {
  whatsapp: (
    <svg width='26' height='26' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
    </svg>
  ),
  linkedin: (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  ),
  github: (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  ),
  x: (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' />
    </svg>
  ),
  email: (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
      <path d='M4 4h16v16H4z' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4 7l8 6 8-6' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  ),
  resume: (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M14 2v6h6M8 13h8M8 17h8M8 9h2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  ),
}

const fabColors: Record<string, string> = {
  linkedin: 'bg-[#0A66C2] text-white hover:bg-[#0958a8]',
  github: 'bg-[#24292f] text-white hover:bg-black',
  x: 'bg-[#111111] text-white hover:bg-black',
  email: 'bg-[#ff7a1a] text-wiz_ink hover:bg-[#ff8c39]',
  resume: 'bg-wiz_peach text-wiz_ink hover:bg-[#ffe8d2]',
}

const extraIds = ['linkedin', 'github', 'x', 'email', 'resume'] as const

function WhatsAppFab() {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  const extras = extraIds
    .map((id) => SOCIAL_PRIMARY.find((s) => s.id === id))
    .filter(Boolean)
  const whatsapp = SOCIAL_PRIMARY.find((s) => s.id === 'whatsapp')

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className='fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[1000] flex flex-col items-end'>
      {/* Vertical rocket stack */}
      <div className='relative flex flex-col items-center'>
        {/* Glow rail when open */}
        <AnimatePresence>
          {open && (
            <motion.div
              aria-hidden
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className='absolute bottom-16 top-0 w-px origin-bottom bg-gradient-to-t from-[#25D366] via-[#ff7a1a] to-transparent'
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && showTop && (
            <motion.button
              key='top'
              type='button'
              initial={{ opacity: 0, y: 24, rotate: -12, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.7 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label='Back to top'
              title='Back to top'
              className={`${iconWrap} mb-3 bg-wiz_ink text-white hover:bg-black -rotate-3`}>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden>
                <path d='M12 19V5M5 12l7-7 7 7' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open &&
            extras.map((item, i) => {
              if (!item) return null
              const tilt = i % 2 === 0 ? -7 : 7
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  title={item.label}
                  initial={{ opacity: 0, y: 28, scale: 0.5, rotate: tilt * 2 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: tilt }}
                  exit={{ opacity: 0, y: 18, scale: 0.6, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 460,
                    damping: 20,
                    delay: i * 0.05,
                  }}
                  whileHover={{ scale: 1.08, rotate: 0 }}
                  className='group relative mb-3 flex items-center'>
                  <span className='pointer-events-none absolute right-full mr-3 wiz-eyebrow text-[10px] tracking-[0.16em] uppercase bg-wiz_ink text-white px-3 py-2 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all'>
                    {item.label}
                  </span>
                  <span
                    className={`${iconWrap} ${fabColors[item.id] ?? 'bg-wiz_ink text-white'}`}>
                    {icons[item.id]}
                  </span>
                </motion.a>
              )
            })}
        </AnimatePresence>

        {/* + sits ABOVE WhatsApp */}
        <motion.button
          type='button'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close social links' : 'Open social links'}
          title={open ? 'Close' : 'More socials'}
          whileTap={{ scale: 0.92 }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 18 }}
          className={`${iconWrap} mb-3 bg-white text-wiz_ink border-2 border-wiz_ink hover:bg-[#ff7a1a] hover:border-[#ff7a1a] hover:text-white`}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' aria-hidden>
            <path d='M12 5v14M5 12h14' strokeLinecap='round' />
          </svg>
        </motion.button>

        {whatsapp && (
          <motion.a
            href={whatsapp.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            title='WhatsApp'
            whileHover={{ scale: 1.06, rotate: -3 }}
            whileTap={{ scale: 0.94 }}
            className='group relative'>
            {/* crazy pulse rings */}
            <span
              aria-hidden
              className='absolute inset-0 bg-[#25D366]/40 animate-ping pointer-events-none'
            />
            <span
              aria-hidden
              className='absolute -inset-2 border-2 border-[#25D366]/30 rotate-6 pointer-events-none'
            />
            <span
              aria-hidden
              className='absolute -inset-2 border-2 border-[#ff7a1a]/25 -rotate-6 pointer-events-none'
            />
            <span className='pointer-events-none absolute right-full mr-3 wiz-eyebrow text-[10px] tracking-[0.16em] uppercase bg-wiz_ink text-white px-3 py-2 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all'>
              WhatsApp · say hi
            </span>
            <span className={`${iconWrap} relative bg-[#25D366] text-white hover:bg-[#1ebe57]`}>
              {icons.whatsapp}
            </span>
          </motion.a>
        )}
      </div>
    </div>
  )
}

export default WhatsAppFab
