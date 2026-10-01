'use client'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { A11Y_DEFAULTS, A11Y_KEY, applyA11y, isA11yActive, readA11y, type A11yPrefs } from '@/constants/a11y'

type Key = keyof A11yPrefs
type Feature = { key: Key; label: string; stages?: string[]; icon: ReactNode }

const I = (d: ReactNode) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
    {d}
  </svg>
)

const FEATURES: Feature[] = [
  { key: 'contrast', label: 'Contrast +', stages: ['High contrast', 'Inverted'], icon: I(<><circle cx='12' cy='12' r='9' /><path d='M12 3a9 9 0 0 1 0 18z' fill='currentColor' /></>) },
  { key: 'links', label: 'Highlight links', icon: I(<><path d='M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1' /><path d='M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1' /></>) },
  { key: 'text', label: 'Bigger text', stages: ['Large', 'Larger', 'Largest'], icon: I(<><path d='M3 7V5h8v2M7 5v14M5 19h4' /><path d='M13 10V9h8v1M17 9v10M15 19h4' /></>) },
  { key: 'spacing', label: 'Text spacing', stages: ['Light', 'Medium', 'Heavy'], icon: I(<><path d='M6 8l-4 4 4 4M18 8l4 4-4 4' /><path d='M9 12h.01M12 12h.01M15 12h.01' strokeWidth='2' /></>) },
  { key: 'lineHeight', label: 'Line height', stages: ['1.75×', '2×', '2.3×'], icon: I(<><path d='M10 6h11M10 12h11M10 18h11' /><path d='M4 4v16M2 6l2-2 2 2M2 18l2 2 2-2' /></>) },
  { key: 'motion', label: 'Pause animations', icon: I(<><circle cx='12' cy='12' r='9' /><path d='M10 9v6M14 9v6' /></>) },
  { key: 'images', label: 'Hide images', icon: I(<><rect x='3' y='5' width='18' height='14' /><path d='M3 16l5-5 5 5 3-3 5 5' /><path d='M3 3l18 18' /></>) },
  { key: 'font', label: 'Readable font', icon: I(<><path d='M4 19L9 5l5 14M6 14h6' /><path d='M15 19v-6.5a2.5 2.5 0 0 1 5 0V19M20 15.5h-5' /></>) },
  { key: 'cursor', label: 'Big cursor', icon: I(<path d='M5 3l14 9.5-6 1 3.5 6.5-2.5 1.2-3.5-6.6L5 19z' />) },
  { key: 'align', label: 'Align left', icon: I(<path d='M4 6h16M4 10h10M4 14h16M4 18h10' />) },
  { key: 'saturation', label: 'Saturation', stages: ['Low', 'High', 'Grayscale'], icon: I(<><path d='M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z' /><path d='M12 9v11' /></>) },
  { key: 'guide', label: 'Reading guide', icon: I(<><path d='M3 12h18' strokeWidth='2.2' /><path d='M5 7h14M5 17h14' opacity='.45' /></>) },
]

export function A11yIcon() {
  return (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden>
      <circle cx='12' cy='12' r='10.5' />
      <circle cx='12' cy='6.6' r='1.4' fill='currentColor' stroke='none' />
      <path d='M6.5 9.4l5.5 1.2 5.5-1.2M12 10.6v4M9.4 19l2.6-4.4 2.6 4.4' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

/** Horizontal guide that follows the pointer to help track lines of text. */
function ReadingGuide() {
  const [y, setY] = useState(-100)
  useEffect(() => {
    const move = (e: PointerEvent) => setY(e.clientY)
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <div aria-hidden className='fixed inset-x-0 z-[115] pointer-events-none' style={{ top: y - 18 }}>
      <div className='h-9 bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] border-y-2 border-blue' />
    </div>
  )
}

/** Native accessibility widget — bottom-bar trigger + side drawer. */
export default function A11yPanel() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [prefs, setPrefs] = useState<A11yPrefs>(A11Y_DEFAULTS)
  const trigger = useRef<HTMLButtonElement>(null)
  const drawer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    setPrefs(readA11y())
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    trigger.current?.focus()
  }, [])

  // Ctrl+U toggles the widget from anywhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && !e.metaKey && e.key.toLowerCase() === 'u') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Focus management, Esc and a focus trap while open
  useEffect(() => {
    if (!open) return
    drawer.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close()
      if (e.key !== 'Tab' || !drawer.current) return
      const items = drawer.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]')
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const save = (next: A11yPrefs) => {
    setPrefs(next)
    applyA11y(next)
    try {
      localStorage.setItem(A11Y_KEY, JSON.stringify(next))
    } catch {}
  }

  const press = (f: Feature) => {
    const v = prefs[f.key]
    const next = f.stages ? (Number(v) + 1) % (f.stages.length + 1) : !v
    save({ ...prefs, [f.key]: next })
  }

  const activeCount = FEATURES.filter((f) => prefs[f.key] !== A11Y_DEFAULTS[f.key]).length

  return (
    <div className='relative h-full flex items-center'>
      <button
        ref={trigger}
        type='button'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls='a11y-drawer'
        aria-keyshortcuts='Control+U'
        aria-label='Accessibility settings'
        className='group inline-flex h-full items-center gap-2 cursor-pointer'>
        <span className='relative'>
          <A11yIcon />
          {isA11yActive(prefs) && <span className='absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-blue' />}
        </span>
        <span className='draw hidden md:inline'>Accessibility</span>
      </button>

      {mounted &&
        createPortal(
          <div className='a11y-drawer'>
            {prefs.guide && <ReadingGuide />}
            {open && (
              <>
                <div aria-hidden onClick={close} className='fixed inset-0 z-[118] bg-night/25' />
                <div
                  ref={drawer}
                  id='a11y-drawer'
                  role='dialog'
                  aria-modal='true'
                  aria-labelledby='a11y-title'
                  data-tone='light'
                  className='tone fixed inset-y-0 right-0 z-[120] w-[min(420px,100vw)] border-l border-line shadow-[-32px_0_64px_-32px_rgba(9,14,19,0.45)] flex flex-col animate-[a11yIn_.35s_var(--ease-out-3)]'>
                  <div className='flex items-start justify-between gap-4 px-6 pt-6 pb-5 border-b border-line'>
                    <div>
                      <p className='mono-label'>— Settings</p>
                      <h2 id='a11y-title' className='mt-3 text-[28px] leading-none tracking-[-0.035em]'>
                        Accessibility
                      </h2>
                      <p className='mt-3 text-[11px] muted'>
                        <kbd className='font-mono border border-line px-1.5 py-0.5'>Ctrl</kbd> +{' '}
                        <kbd className='font-mono border border-line px-1.5 py-0.5'>U</kbd> to open anywhere
                      </p>
                    </div>
                    <button
                      type='button'
                      data-autofocus
                      onClick={close}
                      aria-label='Close accessibility settings'
                      className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line cursor-pointer hover:bg-ink hover:text-surface transition-colors'>
                      <svg width='12' height='12' viewBox='0 0 12 12' aria-hidden>
                        <path d='M1 1l10 10M11 1L1 11' stroke='currentColor' strokeWidth='1.3' />
                      </svg>
                    </button>
                  </div>

                  <div className='flex-1 overflow-y-auto px-6 py-6'>
                    <ul className='grid grid-cols-2 gap-px bg-line border border-line'>
                      {FEATURES.map((f) => {
                        const v = prefs[f.key]
                        const stage = f.stages ? Number(v) : v ? 1 : 0
                        const on = stage > 0
                        const status = f.stages ? (on ? f.stages[stage - 1] : 'Off') : on ? 'On' : 'Off'
                        return (
                          <li key={f.key} className='bg-surface'>
                            <button
                              type='button'
                              onClick={() => press(f)}
                              aria-pressed={on}
                              aria-label={`${f.label}: ${status}`}
                              className={`relative w-full h-full min-h-[118px] flex flex-col justify-between gap-4 p-4 text-left cursor-pointer transition-colors ${
                                on ? 'text-blue' : 'hover:bg-[color-mix(in_srgb,var(--fg)_5%,transparent)]'
                              }`}>
                              {on && <span aria-hidden className='absolute inset-0 border border-blue pointer-events-none' />}
                              <span className='flex items-start justify-between'>
                                {f.icon}
                                {f.stages ? (
                                  <span aria-hidden className='flex gap-1 pt-1'>
                                    {f.stages.map((_, i) => (
                                      <span key={i} className={`h-1 w-3 ${i < stage ? 'bg-blue' : 'bg-line'}`} />
                                    ))}
                                  </span>
                                ) : (
                                  <span aria-hidden className={`mt-1 h-2 w-2 rounded-full ${on ? 'bg-blue' : 'border border-line'}`} />
                                )}
                              </span>
                              <span>
                                <span className={`block text-[14px] tracking-[-0.01em] ${on ? '' : 'text-ink'}`}>{f.label}</span>
                                <span className='block mt-0.5 font-mono text-[10px] muted'>{status}</span>
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className='px-6 py-5 border-t border-line flex items-center justify-between gap-4'>
                    <p className='text-[11px] muted'>
                      {activeCount ? `${activeCount} adjustment${activeCount > 1 ? 's' : ''} on` : 'Saved on this device'}
                    </p>
                    <button
                      type='button'
                      onClick={() => save(A11Y_DEFAULTS)}
                      disabled={!activeCount}
                      className='inline-flex items-center border border-ink px-4 py-2.5 text-[13px] cursor-pointer hover:bg-ink hover:text-surface transition-colors disabled:opacity-40 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-ink'>
                      Reset all
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>,
          document.body
        )}
    </div>
  )
}
