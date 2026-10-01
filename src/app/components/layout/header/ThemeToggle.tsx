'use client'
import { useEffect, useRef, useState } from 'react'
import { ACCENTS, THEME_KEYS, applyTheme, type ThemeMode } from '@/constants/themes'

/** Theme builder: light/dark mode + accent color, persisted locally. */
export default function ThemeToggle() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<ThemeMode>('light')
  const [accent, setAccent] = useState<string>(ACCENTS[0].id)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      setMode(localStorage.getItem(THEME_KEYS.mode) === 'dark' ? 'dark' : 'light')
      setAccent(localStorage.getItem(THEME_KEYS.accent) ?? ACCENTS[0].id)
    } catch {}
  }, [])

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const update = (nextMode: ThemeMode, nextAccent: string) => {
    setMode(nextMode)
    setAccent(nextAccent)
    applyTheme(nextMode, nextAccent)
    try {
      localStorage.setItem(THEME_KEYS.mode, nextMode)
      localStorage.setItem(THEME_KEYS.accent, nextAccent)
    } catch {}
  }

  return (
    <div ref={ref} className='relative'>
      <button
        type='button'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup='true'
        aria-label='Theme settings'
        className='inline-flex h-10 items-center gap-2 cursor-pointer text-[13px]'>
        <span className='h-3 w-3 rounded-full bg-blue ring-1 ring-current/30' />
        <span className='draw hidden sm:inline'>Theme</span>
      </button>

      {open && (
        <div
          role='dialog'
          aria-label='Theme settings'
          className='absolute right-0 top-full mt-2 w-[248px] border border-line bg-surface text-ink p-4 shadow-[0_24px_48px_-24px_rgba(9,14,19,0.45)] z-[60]'>
          <p className='caps muted'>Mode</p>
          <div className='mt-3 grid grid-cols-2 border border-line'>
            {(['light', 'dark'] as const).map((m) => (
              <button
                key={m}
                type='button'
                onClick={() => update(m, accent)}
                aria-pressed={mode === m}
                className={`py-2 text-[13px] capitalize cursor-pointer transition-colors ${
                  mode === m ? 'bg-ink text-surface' : 'hover:bg-line'
                }`}>
                {m}
              </button>
            ))}
          </div>

          <p className='caps muted mt-5'>Accent</p>
          <div className='mt-3 grid grid-cols-6 gap-2'>
            {ACCENTS.map((a) => (
              <button
                key={a.id}
                type='button'
                onClick={() => update(mode, a.id)}
                aria-pressed={accent === a.id}
                aria-label={a.label}
                title={a.label}
                className={`h-7 w-7 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                  accent === a.id ? 'ring-2 ring-offset-2 ring-offset-[var(--bg)] ring-[var(--fg)]' : ''
                }`}
                style={{ background: a.value }}
              />
            ))}
          </div>
          <p className='mt-4 text-[11px] muted'>
            {ACCENTS.find((a) => a.id === accent)?.label} · {mode === 'dark' ? 'Dark' : 'Light'}
          </p>
        </div>
      )}
    </div>
  )
}
