'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeaderLink from './Navigation/HeaderLink'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'
import { headerData } from '@/constants'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mega menu on Escape
  useEffect(() => {
    if (activeIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIdx(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIdx])

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const requestOpen = (idx: number) => {
    cancelClose()
    setActiveIdx(idx)
  }

  const requestClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setActiveIdx(null), 140)
  }

  const closeImmediate = () => {
    cancelClose()
    setActiveIdx(null)
  }

  const activeItem = activeIdx !== null ? headerData[activeIdx] : null
  const activeChildren = activeItem?.children ?? []
  const activeCols = activeItem?.columns ?? 3

  return (
    <header className='wiz-font fixed top-0 left-0 right-0 z-50'>
      <div
        className={`relative z-[51] transition-all duration-200 border-b ${
          sticky || activeIdx !== null
            ? 'bg-white dark:bg-dark_black border-wiz_border/80 dark:border-white/10'
            : 'bg-white dark:bg-dark_black border-transparent'
        }`}>
        <div className='container'>
          <nav className='flex items-center justify-between gap-6 h-[80px]'>
            <div className='flex items-center shrink-0'>
              <Logo />
            </div>

            <div className='hidden lg:flex flex-1 justify-center'>
              <ul
                className='flex items-center gap-1'
                onMouseLeave={requestClose}>
                {headerData.map((item, idx) => (
                  <HeaderLink
                    key={idx}
                    item={item}
                    isOpen={activeIdx === idx}
                    onHover={() => (item.children ? requestOpen(idx) : closeImmediate())}
                    onClick={() => {
                      if (item.children) {
                        setActiveIdx(activeIdx === idx ? null : idx)
                      } else {
                        closeImmediate()
                      }
                    }}
                  />
                ))}
              </ul>
            </div>

            <div className='flex items-center gap-2 xl:gap-4 shrink-0'>
              <Link
                href='https://github.com/satwik073'
                target='_blank'
                rel='noopener noreferrer'
                className='hidden lg:inline-flex text-[15px] font-medium text-wiz_ink/85 dark:text-white/85 hover:text-wiz_ink dark:hover:text-white px-1'>
                Log In
              </Link>
              <Link
                href='/contact'
                className='hidden md:inline-flex items-center gap-2 text-[14px] font-medium text-wiz_ink dark:text-white border border-wiz_ink dark:border-white/70 px-5 py-2.5 hover:bg-wiz_ink hover:text-white dark:hover:bg-white dark:hover:text-wiz_ink'>
                Get In Touch
              </Link>

              <ThemeToggler />

              <button
                type='button'
                aria-label='Open menu'
                onClick={() => setSidebarOpen(true)}
                className='lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-wiz_border dark:border-white/15'>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M4 7h16M4 12h16M4 17h16'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Full-width mega menu panel — flush with header, exact wizcommerce grid */}
        {activeItem?.children && (
          <div
            className='wiz-dropdown absolute left-0 right-0 top-full z-[51] bg-white dark:bg-dark_black border-b border-wiz_border dark:border-white/10 shadow-wiz_dropdown'
            onMouseEnter={cancelClose}
            onMouseLeave={requestClose}>
            <div className='container pt-4 pb-5'>
              <div
                className={`grid gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10 ${
                  activeCols === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                {activeChildren.map((child, i) => {
                  const external = child.href.startsWith('http')
                  return (
                    <Link
                      key={i}
                      href={child.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      onClick={closeImmediate}
                      className='group flex items-start gap-4 bg-white dark:bg-dark_black px-5 py-4 lg:px-6 lg:py-5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition-colors'>
                      {child.icon && (
                        <span className='inline-flex shrink-0 items-center justify-center h-11 w-11 bg-wiz_chip dark:bg-white/5 text-wiz_ink dark:text-white group-hover:bg-[#ff7a1a]/15 group-hover:text-[#ff7a1a] transition-colors'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.7'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d={child.icon} />
                          </svg>
                        </span>
                      )}
                      <span className='min-w-0 flex flex-col gap-1'>
                        <span className='inline-flex items-center gap-1.5 wiz-serif text-[19px] lg:text-[21px] text-wiz_ink dark:text-white leading-[1.15]'>
                          {child.label}
                          <svg
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            className='opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all'>
                            <path
                              d='M5 12h14M13 6l6 6-6 6'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </span>
                        <span className='block text-[13.5px] text-wiz_muted dark:text-white/55 leading-[1.5] max-w-[34ch]'>
                          {child.description}
                        </span>
                      </span>
                    </Link>
                  )
                })}
              </div>

              {/* Footer CTA strip inside the panel */}
              <div className='mt-3 flex flex-wrap items-center justify-between gap-3 px-1 py-1'>
                <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                  Looking for something specific?
                </p>
                <div className='flex items-center gap-4'>
                  <Link
                    href='/contact'
                    onClick={closeImmediate}
                    className='inline-flex items-center gap-1.5 text-[13px] font-medium text-wiz_ink dark:text-white hover:text-[#ff7a1a]'>
                    Talk to Satwik
                    <svg width='12' height='12' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M5 12h14M13 6l6 6-6 6'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                  <Link
                    href='https://satwik073.github.io/SatwikPortFolio/'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={closeImmediate}
                    className='inline-flex items-center gap-1.5 text-[13px] font-medium text-wiz_muted hover:text-wiz_ink dark:hover:text-white'>
                    View Resume ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop: lighter frosted dim layer over the page when mega menu is open */}
      <div
        onClick={closeImmediate}
        className={`fixed inset-0 top-[80px] z-[40] bg-wiz_ink/45 transition-opacity duration-200 ${
          activeIdx !== null
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(10px) saturate(115%)',
          WebkitBackdropFilter: 'blur(10px) saturate(115%)',
        }}
        aria-hidden
      />

      {/* Mobile drawer (unchanged) */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-[88%] max-w-sm bg-white dark:bg-dark_black z-50 shadow-2xl transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex items-center justify-between px-5 h-[80px] border-b border-wiz_border dark:border-white/10'>
          <Logo />
          <button
            type='button'
            aria-label='Close menu'
            onClick={() => setSidebarOpen(false)}
            className='h-10 w-10 inline-flex items-center justify-center rounded-full border border-wiz_border dark:border-white/15'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
              <path
                d='M6 6l12 12M6 18L18 6'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
        <div className='overflow-y-auto h-[calc(100%-80px)] px-3 py-4'>
          <ul className='flex flex-col gap-1'>
            {headerData.map((item, idx) => (
              <MobileHeader
                key={idx}
                item={item}
                onNavigate={() => setSidebarOpen(false)}
              />
            ))}
          </ul>
          <div className='mt-5 flex flex-col gap-2 px-2'>
            <Link
              href='https://github.com/satwik073'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setSidebarOpen(false)}
              className='w-full inline-flex items-center justify-center text-[15px] font-medium text-wiz_ink dark:text-white py-3'>
              Log In
            </Link>
            <Link
              href='/contact'
              onClick={() => setSidebarOpen(false)}
              className='w-full inline-flex items-center justify-center text-[15px] font-medium border border-wiz_ink dark:border-white text-wiz_ink dark:text-white py-3'>
              Get In Touch
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}

export default Header
