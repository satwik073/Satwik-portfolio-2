'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { avatarList } from '@/constants'

function HeroSection() {
  const fade = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='wiz-font bg-white dark:bg-dark_black pt-[80px]'>
      {/* Full-bleed 50/50 split — no container wrap so right side reaches the
          viewport edge, matching the wizcommerce hero. */}
      <div className='grid lg:grid-cols-2 items-stretch'>
        {/* ---------- LEFT — content, padded to match the container ---------- */}
        <motion.div
          {...fade}
          className='flex items-center bg-white dark:bg-dark_black'>
          <div className='w-full px-5 sm:px-8 lg:px-12 xl:pl-[max(48px,calc((100vw-1536px)/2+48px))] xl:pr-16 py-10 lg:py-14'>
            <div className='max-w-xl'>
              <p className='wiz-eyebrow text-wiz_ink dark:text-white/80 text-[8px] und'>
                Engineer for modernizing enterprise systems.
              </p>

              <h1 className='wiz-display mt-4 sm:mt-5 text-[34px] Xsm:text-[38px] sm:text-[44px] md:text-[54px] lg:text-[58px] xl:text-[68px] text-wiz_ink dark:text-white'>
                Production Systems
                <br className='hidden sm:inline' />
                <span className='sm:hidden'> </span>
                Shouldn&rsquo;t Rely On
                <br className='hidden sm:inline' />
                <span className='sm:hidden'> </span>
                Constant Manual Fixes.
              </h1>

              <p className='mt-5 sm:mt-6 max-w-xl text-[14.5px] sm:text-[16px] leading-[1.55] text-wiz_muted dark:text-white/60'>
                I&rsquo;m Satwik Kanhere — Software Development Engineer at
                WizCommerce. I architect rep-led, online, and back-office systems in
                one platform, eliminate repetitive operational work with
                engineering rigor, and ship reliable products at scale.
              </p>

              <div className='mt-6 sm:mt-7'>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-2.5 bg-wiz_ink text-white text-[14px] font-medium px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-black transition-colors'>
                  Get In Touch
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M5 12h14M13 6l6 6-6 6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>

              {/* ---------- Testimonial card ---------- */}
              <div className='mt-8 sm:mt-10 bg-wiz_peach/70 dark:bg-white/5 p-4 sm:p-5 lg:p-6 max-w-xl'>
                <div className='flex items-start gap-4'>
                  <div className='shrink-0'>
                    <Image
                      src={avatarList[0].image}
                      alt={avatarList[0].title}
                      width={56}
                      height={56}
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h1 className='text-[14px] leading-[1.5] text-wiz_ink dark:text-white/90'>
                      &ldquo;From streamlining our entire PIM workflow to offering
                      customizable features and exceptional ownership, Satwik has
                      made us more efficient, saved us time, and helped us ship
                      faster.&rdquo;
                    </h1>
                    <div className='mt-4 flex items-center gap-3 text-[12px] wiz-eyebrow'>
                      <span>Engineering Lead</span>
                      <span className='w-px h-3 bg-wiz_ink/30' />
                      <span>WizCommerce</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---------- RIGHT — full-height dark navy product showcase ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className='relative bg-wiz_navy text-white overflow-hidden min-h-[420px] lg:min-h-full flex'>
          {/* Ambient gradient glow */}
          <div
            aria-hidden
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 25%, rgba(255,123,176,0.20) 0%, transparent 45%), radial-gradient(circle at 75% 80%, rgba(255,122,26,0.18) 0%, transparent 50%)',
            }}
          />

          {/* Faint grid texture */}
          <svg
            aria-hidden
            className='absolute inset-0 w-full h-full opacity-[0.06]'
            xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern id='hero-grid' width='40' height='40' patternUnits='userSpaceOnUse'>
                <path d='M40 0 L0 0 0 40' fill='none' stroke='#ffffff' strokeWidth='0.6' />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#hero-grid)' />
          </svg>

          {/* Floating product cards composition — fills available column height */}
          <div className='relative flex-1 px-6 sm:px-10 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-20'>
            <div className='relative w-full h-full min-h-[420px]'>
              {/* Card 1 — top-left, Frontend */}
              <div className='absolute top-[6%] left-[2%] w-[60%] bg-white text-wiz_ink p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] -rotate-[3deg]'>
                <div className='flex items-center gap-2.5'>
                  <span className='inline-flex h-9 w-9 items-center justify-center bg-[#ff7a1a]/15 text-[#ff7a1a]'>
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'>
                      <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
                    </svg>
                  </span>
                  <div>
                    <p className='wiz-eyebrow text-wiz_muted text-[9px]'>Frontend</p>
                    <p className='wiz-serif text-[18px] leading-none mt-0.5'>React Systems</p>
                  </div>
                </div>
                <div className='mt-3 flex items-end justify-between'>
                  <p className='text-[11px] text-wiz_muted'>Live · Production</p>
                  <p className='wiz-serif text-[24px] leading-none'>4 yrs</p>
                </div>
              </div>

              {/* Card 2 — top-right, AI / MCP */}
              <div className='absolute top-[2%] right-[2%] w-[56%] bg-gradient-to-br from-[#ff7bb0] via-[#ffb38a] to-[#ff7a1a] text-wiz_ink p-4 shadow-[0_24px_60px_-20px_rgba(255,123,176,0.55)] rotate-[2.5deg]'>
                <p className='wiz-eyebrow text-[9px] text-wiz_ink/85'>AI / MCP</p>
                <p className='wiz-serif text-[22px] leading-tight mt-1'>
                  Priscus
                  <br />
                  <span className='italic instrument-font text-wiz_ink/80'>now shipping</span>
                </p>
                <div className='mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-wiz_ink' />
                  Tool-using agent · live
                </div>
              </div>

              {/* Card 3 — center, big metric */}
              <div className='absolute top-[38%] left-[14%] w-[70%] bg-white text-wiz_ink p-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]'>
                <div className='flex items-center justify-between'>
                  <p className='wiz-eyebrow text-wiz_muted text-[10px] inline-flex items-center gap-2'>
                    <span className='inline-block h-1.5 w-1.5 rounded-full bg-emerald-500' />
                    Production · Live
                  </p>
                  <p className='wiz-eyebrow text-wiz_muted text-[10px]'>30d</p>
                </div>
                <p className='wiz-display mt-3 text-[52px] leading-none'>
                  99.8<span className='text-wiz_muted'>%</span>
                </p>
                <p className='wiz-eyebrow text-wiz_ink text-[10px] mt-2'>Uptime SLA</p>
                <div className='mt-3 flex items-end gap-1 h-7'>
                  {[40, 28, 52, 42, 60, 52, 70, 64, 78, 72, 88, 96].map((h, i, arr) => (
                    <span
                      key={i}
                      style={{ height: `${(h / 100) * 28}px` }}
                      className={`flex-1 ${
                        i === arr.length - 1 ? 'bg-[#ff7a1a]' : 'bg-wiz_ink/85'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Card 4 — bottom-left, Backend / Database */}
              <div className='absolute bottom-[2%] left-[0%] w-[58%] bg-white text-wiz_ink p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] -rotate-[2deg]'>
                <p className='wiz-eyebrow text-wiz_muted text-[9px]'>Backend · Data</p>
                <p className='wiz-serif text-[22px] leading-tight mt-1'>
                  Node + Postgres
                </p>
                <div className='mt-3 grid grid-cols-2 gap-2'>
                  <div className='border border-wiz_border px-2 py-1'>
                    <p className='wiz-eyebrow text-wiz_muted text-[8px]'>SKUs</p>
                    <p className='wiz-serif text-[14px] leading-none mt-0.5'>10K+</p>
                  </div>
                  <div className='border border-wiz_border px-2 py-1'>
                    <p className='wiz-eyebrow text-wiz_muted text-[8px]'>Clients</p>
                    <p className='wiz-serif text-[14px] leading-none mt-0.5'>85+</p>
                  </div>
                </div>
              </div>

              {/* Card 5 — bottom-right, Open source */}
              <div className='absolute bottom-[8%] right-[3%] w-[42%] bg-[#0f0d24] border border-white/10 text-white p-3.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] rotate-[3deg]'>
                <div className='flex items-center justify-between'>
                  <span className='wiz-eyebrow text-white/60 text-[9px]'>Open Source</span>
                  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7'>
                    <path
                      d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p className='wiz-serif text-[18px] leading-tight mt-2'>iOS Ally</p>
                <p className='text-[11px] text-white/55 mt-1 leading-tight'>
                  300+ students daily
                </p>
              </div>
            </div>
          </div>

          {/* Bottom badge bar */}
          <div className='absolute inset-x-0 bottom-0 border-t border-white/10 backdrop-blur-sm bg-white/[0.02]'>
            <div className='flex items-center justify-between gap-3 px-6 sm:px-10 lg:px-16 py-3.5'>
              <span className='wiz-eyebrow text-white/55 text-[10px]'>
                Currently shipping at
              </span>
              <span className='wiz-serif text-[16px] text-white'>WizCommerce</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
