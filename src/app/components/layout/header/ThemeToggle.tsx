'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { useColorTheme } from '@/providers/ColorThemeProvider'

const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { themeId, themes, setThemeId, theme: colorTheme } = useColorTheme()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('mousedown', onPointer)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onPointer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isDark = mounted && (resolvedTheme ?? theme) === 'dark'
  const swatch = mounted ? colorTheme.swatch : '#ff7a1a'

  return (
    <div className='relative' ref={panelRef}>
      <button
        type='button'
        aria-label='Theme settings'
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex h-10 items-center gap-2 border px-2.5 transition-colors ${
          open
            ? 'border-wiz_ink dark:border-white bg-wiz_chip/50 dark:bg-white/5'
            : 'border-wiz_border dark:border-white/15 hover:border-wiz_ink/40 dark:hover:border-white/40'
        }`}>
        <span
          className='h-3.5 w-3.5 shrink-0'
          style={{ backgroundColor: swatch }}
        />
        <svg
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          className='text-wiz_ink dark:text-white'
          aria-hidden>
          {isDark ? (
            <path
              d='M21 14.3A9 9 0 1 1 9.7 3a7 7 0 1 0 11.3 11.3Z'
              fill='currentColor'
            />
          ) : (
            <path
              d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4m12.8-12.8 1.4-1.4'
              stroke='currentColor'
              strokeWidth='1.8'
              strokeLinecap='round'
            />
          )}
        </svg>
      </button>

      {open && (
        <div className='absolute right-0 top-[calc(100%+12px)] z-[60] w-[272px] border border-wiz_border dark:border-white/10 bg-white dark:bg-dark_black shadow-wiz_dropdown'>
          <div className='px-4 pt-4 pb-3 border-b border-wiz_border dark:border-white/10'>
            <p className='wiz-eyebrow text-[10px] text-wiz_muted dark:text-white/45 mb-3'>
              Mode
            </p>
            <div className='grid grid-cols-2 gap-px bg-wiz_border dark:bg-white/15'>
              <button
                type='button'
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium transition-colors ${
                  mounted && !isDark
                    ? 'bg-wiz_ink text-white dark:bg-white dark:text-wiz_ink'
                    : 'bg-white dark:bg-dark_black text-wiz_ink dark:text-white/80 hover:bg-wiz_chip/70 dark:hover:bg-white/5'
                }`}>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path
                    d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4m12.8-12.8 1.4-1.4'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                  />
                </svg>
                Light
              </button>
              <button
                type='button'
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium transition-colors ${
                  mounted && isDark
                    ? 'bg-wiz_ink text-white dark:bg-white dark:text-wiz_ink'
                    : 'bg-white dark:bg-dark_black text-wiz_ink dark:text-white/80 hover:bg-wiz_chip/70 dark:hover:bg-white/5'
                }`}>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
                  <path d='M21 14.3A9 9 0 1 1 9.7 3a7 7 0 1 0 11.3 11.3Z' />
                </svg>
                Dark
              </button>
            </div>
          </div>

          <div className='px-4 py-4'>
            <div className='flex items-baseline justify-between gap-3 mb-3'>
              <p className='wiz-eyebrow text-[10px] text-wiz_muted dark:text-white/45'>
                Accent
              </p>
              <p className='text-[12px] text-wiz_ink dark:text-white/70'>
                {mounted ? colorTheme.label : 'Classic'}
              </p>
            </div>

            <div className='flex flex-wrap gap-2.5'>
              {themes.map((t) => {
                const active = themeId === t.id
                return (
                  <button
                    key={t.id}
                    type='button'
                    onClick={() => setThemeId(t.id)}
                    title={t.label}
                    aria-label={t.label}
                    aria-pressed={active}
                    className={`relative h-8 w-8 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wiz_ink dark:focus-visible:outline-white ${
                      active
                        ? 'ring-2 ring-wiz_ink dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-dark_black'
                        : ''
                    }`}
                    style={{ backgroundColor: t.swatch }}
                  >
                    {active && (
                      <span className='absolute inset-0 flex items-center justify-center'>
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 24 24'
                          fill='none'
                          aria-hidden>
                          <path
                            d='M5 12.5 10 17.5 19 7.5'
                            stroke='#fff'
                            strokeWidth='2.6'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeToggler
