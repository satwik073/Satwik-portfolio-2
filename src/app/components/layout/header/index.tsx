'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import A11yPanel from './A11yPanel'
import MegaMenu, { MEGA, type MegaKey } from './MegaMenu'
import { SEO } from '@/constants/seo'
import { SECTIONS } from '@/constants/resume'

type Tone = 'light' | 'dark' | 'blue'

type NavItem = { label: string; href: string; mega?: MegaKey }

const NAV: NavItem[] = [
  { label: 'Work', href: '/#experience', mega: 'work' },
  { label: 'Projects', href: '/#projects', mega: 'projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact', mega: 'contact' },
]

function WhatsAppIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
      <path d='M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.88 9.88 0 0 1 9.88 9.89c0 5.45-4.43 9.88-9.88 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.49-8.42' />
    </svg>
  )
}

const pad2 = (n: number) => String(n).padStart(2, '0')
const TOTAL = pad2(SECTIONS.length)

/** Tone of the deepest [data-tone] section under a viewport y. */
function toneAt(y: number): Tone {
  let tone: Tone = 'light'
  document.querySelectorAll<HTMLElement>('main [data-tone], footer[data-tone]').forEach((el) => {
    const r = el.getBoundingClientRect()
    if (r.top <= y && r.bottom > y) tone = (el.dataset.tone as Tone) ?? 'light'
  })
  return tone
}

function useIstClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = window.setInterval(tick, 15000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

function Ticks({ active }: { active: number }) {
  return (
    <svg width='16' height='14' viewBox='0 0 16 14' aria-hidden>
      {SECTIONS.map((_, i) => (
        <rect
          key={i}
          x={i * 3}
          y={i === active ? 0 : 3}
          width='1'
          height={i === active ? 14 : 11}
          fill='currentColor'
          opacity={i === active ? 1 : 0.55}
        />
      ))}
    </svg>
  )
}

const Header = () => {
  const pathname = usePathname()
  const [topTone, setTopTone] = useState<Tone>('light')
  const [footTone, setFootTone] = useState<Tone>('light')
  const [section, setSection] = useState(-1)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mega, setMega] = useState<MegaKey | null>(null)
  const megaTimer = useRef<number | null>(null)
  const triggers = useRef<Partial<Record<MegaKey, HTMLButtonElement | null>>>({})
  const time = useIstClock()

  const cancelMega = () => {
    if (megaTimer.current) window.clearTimeout(megaTimer.current)
    megaTimer.current = null
  }
  const openMega = (k: MegaKey) => {
    cancelMega()
    megaTimer.current = window.setTimeout(() => setMega(k), 90)
  }
  const closeMega = (delay = 160) => {
    cancelMega()
    megaTimer.current = window.setTimeout(() => setMega(null), delay)
  }
  const closeMegaNow = useCallback(() => {
    if (megaTimer.current) window.clearTimeout(megaTimer.current)
    setMega(null)
  }, [])

  useEffect(() => closeMegaNow(), [pathname, closeMegaNow])

  useEffect(() => {
    if (!mega) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggers.current[mega]?.focus()
        closeMegaNow()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mega, closeMegaNow])

  // Tone + current-section tracking
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setTopTone(toneAt(42))
      setScrolled(window.scrollY > 24)
      setFootTone(toneAt(window.innerHeight - 24))
      const mid = window.innerHeight * 0.5
      let current = -1
      document.querySelectorAll<HTMLElement>('[data-section]').forEach((el) => {
        if (el.getBoundingClientRect().top <= mid) current = Number(el.dataset.section)
      })
      setSection(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  // Scroll reveals
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, closeMenu])

  return (
    <>
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-surface focus:text-ink focus:px-3 focus:py-2 text-[13px]'>
        Skip to content
      </a>

      <header
        data-tone={mega ? 'light' : topTone}
        className={`fixed inset-x-0 top-0 z-50 text-[var(--fg)] transition-[background-color,color,backdrop-filter] duration-500 ${mega ? 'bg-surface' : ''} ${scrolled && !mega ? 'backdrop-blur-md border-b border-line' : ''}`}
        style={
          mega
            ? undefined
            : scrolled
              ? { background: 'color-mix(in srgb, var(--bg) 78%, transparent)' }
              : {
                  background:
                    'linear-gradient(to bottom, color-mix(in srgb, var(--bg) 94%, transparent) 0%, color-mix(in srgb, var(--bg) 70%, transparent) 70%, transparent 100%)',
                }
        }>
        <div className={`flex items-center justify-between px-[6vw] lg:px-[4.5vw] transition-[height] duration-500 ease-[var(--ease-out-3)] ${scrolled ? 'h-[60px] lg:h-[64px]' : 'h-[68px] lg:h-[84px]'}`}>
          <Logo />
          <div className='flex items-center gap-5 lg:gap-8'>
            <nav aria-label='Primary' className='hidden lg:block' onMouseLeave={() => mega && closeMega()}>
              <ul className='flex items-center gap-8 text-[13px]'>
                {NAV.map((item) => {
                  const active = item.href === pathname
                  if (item.mega) {
                    const key = item.mega
                    const isOpen = mega === key
                    return (
                      <li key={item.label}>
                        <button
                          ref={(el) => {
                            triggers.current[key] = el
                          }}
                          type='button'
                          aria-expanded={isOpen}
                          aria-controls='mega-panel'
                          onMouseEnter={() => openMega(key)}
                          onClick={() => (isOpen ? closeMegaNow() : setMega(key))}
                          className={`draw inline-flex items-center gap-1.5 min-h-10 cursor-pointer ${isOpen ? 'bg-[length:100%_1px]' : ''}`}>
                          {item.label}
                          <svg width='8' height='5' viewBox='0 0 8 5' aria-hidden className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <path d='M.5.5L4 4 7.5.5' fill='none' stroke='currentColor' strokeWidth='1.1' />
                          </svg>
                        </button>
                      </li>
                    )
                  }
                  return (
                    <li key={item.label} onMouseEnter={() => mega && closeMega(60)}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`draw inline-flex items-center min-h-10 ${active ? 'bg-[length:100%_1px]' : ''}`}>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <ThemeToggle />
            <button
              type='button'
              onClick={() => setMenuOpen(true)}
              aria-haspopup='dialog'
              aria-expanded={menuOpen}
              aria-label='Open menu'
              className='lg:hidden inline-flex h-10 items-center gap-3 text-[13px] cursor-pointer'>
              Menu
              <span className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/30'>
                <svg width='14' height='10' viewBox='0 0 14 10' aria-hidden>
                  <path d='M0 1h14M0 5h14M0 9h14' stroke='currentColor' strokeWidth='1.2' />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {mega && (
          <div className='hidden lg:block'>
            <MegaMenu
              active={mega}
              id='mega-panel'
              onNavigate={closeMegaNow}
              onEnter={cancelMega}
              onLeave={() => closeMega()}
            />
          </div>
        )}
      </header>

      {/* Dim the page while a mega menu is open */}
      <div
        aria-hidden
        onClick={closeMegaNow}
        className={`hidden lg:block fixed inset-0 z-40 bg-night/35 backdrop-blur-[2px] transition-opacity duration-300 ${
          mega ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Bottom bar */}
      <div
        data-tone={footTone}
        className='fixed inset-x-0 bottom-0 z-50 h-12 border-t hairline tone flex items-center justify-between px-[6vw] sm:px-[4.5vw] text-[12px] transition-colors duration-300'>
        <button
          type='button'
          onClick={() => setMenuOpen(true)}
          aria-haspopup='dialog'
          aria-expanded={menuOpen}
          className='group inline-flex items-center gap-4 h-full cursor-pointer'>
          <Ticks active={section} />
          <span className='draw'>Sections</span>
          <span className='font-mono text-[11px] muted'>
            {section >= 0 ? pad2(section + 1) : '—'} / {TOTAL}
          </span>
        </button>
        <div className='flex items-center h-full gap-5 sm:gap-7'>
          <span className='hidden lg:inline-flex items-center gap-2'>
            <span className='inline-block h-1.5 w-1.5 rounded-full bg-[currentColor] opacity-70' />
            IST {time}
          </span>
          <A11yPanel />
          <a
            href={SEO.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            className='group inline-flex h-full items-center gap-2'>
            <WhatsAppIcon />
            <span className='draw hidden md:inline'>WhatsApp</span>
          </a>
          <a
            href='/satwik-kanhere-resume.pdf'
            target='_blank'
            rel='noopener'
            aria-label='Résumé (PDF)'
            className='group inline-flex h-full items-center gap-2'>
            <span className='draw'>Résumé</span>
            <span className='arrow hidden sm:inline'>↗</span>
          </a>
          <button
            type='button'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label='Back to top'
            className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-current/30 cursor-pointer hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors'>
            <svg width='10' height='12' viewBox='0 0 10 12' aria-hidden>
              <path d='M5 11V1M1 5l4-4 4 4' fill='none' stroke='currentColor' strokeWidth='1.2' />
            </svg>
          </button>
        </div>
      </div>

      {/* Sections overlay */}
      {menuOpen && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label='Menu'
          className='fixed inset-0 z-[100] bg-surface text-ink overflow-y-auto'>
          <div className='min-h-full flex flex-col px-[4.5vw] pt-6 pb-10'>
            <div className='flex items-center justify-between h-14'>
              <p className='text-[13px]'>Satwik Kanhere — Software Engineer</p>
              <button
                type='button'
                onClick={closeMenu}
                className='group inline-flex items-center gap-4 text-[13px] cursor-pointer'>
                <span className='draw'>Close</span>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-line'>
                  <svg width='12' height='12' viewBox='0 0 12 12' aria-hidden>
                    <path d='M1 1l10 10M11 1L1 11' stroke='currentColor' strokeWidth='1.3' />
                  </svg>
                </span>
              </button>
            </div>

            <ol className='mt-8 border-t border-line lg:ml-[30vw]'>
              {[...SECTIONS, { id: 'about', label: 'About' }].map((s, i) => (
                <li key={s.id} className='border-b border-line'>
                  <Link
                    href={s.id === 'about' ? '/about' : `/#${s.id}`}
                    onClick={closeMenu}
                    className='group grid grid-cols-[32px_1fr_auto] items-center gap-4 py-2 sm:py-3'>
                    <span className={`font-mono text-[11px] ${i === section ? 'text-blue' : 'text-ink-2'}`}>
                      {pad2(i + 1)}
                    </span>
                    <span className='text-[clamp(28px,2.65vw,46px)] leading-[1.15] tracking-[-0.045em]'>
                      {s.label}
                    </span>
                    <span className='arrow text-[17px]'>↗</span>
                  </Link>
                </li>
              ))}
            </ol>

            <div className='mt-10 lg:ml-[30vw]'>
              <p className='caps muted'>Quick links</p>
              <ul className='mt-3 grid grid-cols-2 gap-x-6'>
                {[...MEGA.work.columns[1].links, ...MEGA.projects.columns[0].links].map((l) => {
                  const ext = l.href.startsWith('http')
                  return (
                    <li key={l.label} className='border-t border-line'>
                      <a
                        href={l.href}
                        target={ext ? '_blank' : undefined}
                        rel={ext ? 'noopener noreferrer' : undefined}
                        onClick={closeMenu}
                        className='block py-3'>
                        <span className='block text-[15px] tracking-[-0.01em]'>{l.label}</span>
                        <span className='block text-[11px] muted'>{l.desc}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='mt-10 lg:ml-[30vw] grid grid-cols-2 sm:grid-cols-4 gap-6 text-[13px]'>
              {[
                { label: 'WhatsApp', href: SEO.whatsapp },
                { label: 'LinkedIn', href: SEO.linkedin },
                { label: 'GitHub', href: SEO.github },
                { label: 'Email', href: `mailto:${SEO.email}` },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  className='group inline-flex gap-2 border-t border-line pt-3'>
                  <span className='draw'>{l.label}</span>
                  <span className='arrow'>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
