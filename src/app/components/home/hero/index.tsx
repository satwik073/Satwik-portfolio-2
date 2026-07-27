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
      <div className='grid lg:grid-cols-2 items-stretch'>
        <motion.div
          {...fade}
          className='flex items-center bg-white dark:bg-dark_black'>
          <div className='w-full px-5 sm:px-8 lg:px-12 xl:pl-[max(48px,calc((100vw-1536px)/2+48px))] xl:pr-16 py-10 lg:py-14'>
            <div className='max-w-xl'>
              <p className='wiz-eyebrow text-wiz_ink dark:text-white/80 text-[8px] und'>
                Full-Stack Software Engineer · 2+ Years
              </p>

              <h1 className='wiz-display mt-4 sm:mt-5 text-[34px] Xsm:text-[38px] sm:text-[44px] md:text-[54px] lg:text-[58px] xl:text-[68px] text-wiz_ink dark:text-white'>
                Full-Stack Systems
                <br className='hidden sm:inline' />
                <span className='sm:hidden'> </span>
                For Enterprise
                <br className='hidden sm:inline' />
                <span className='sm:hidden'> </span>
                Products That Ship.
              </h1>

              <p className='mt-5 sm:mt-6 max-w-xl text-[14.5px] sm:text-[16px] leading-[1.55] text-wiz_muted dark:text-white/60'>
                I&rsquo;m Satwik Kanhere — SDE 1 at WizCommerce. Full-stack across
                React/Next.js frontends and Java · Spring Boot · Hibernate
                backends, plus Ag-Grid, payments, and CDN performance for 120+
                enterprise clients.
              </p>

              <div className='mt-6 sm:mt-7 flex flex-wrap gap-3'>
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
                <Link
                  href='https://satwik073.github.io/SatwikPortFolio/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2.5 border border-wiz_ink/20 text-wiz_ink dark:text-white dark:border-white/25 text-[14px] font-medium px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-wiz_chip/40 transition-colors'>
                  Resume
                </Link>
              </div>

              <div className='mt-8 sm:mt-10 bg-wiz_peach/70 dark:bg-white/5 p-4 sm:p-5 lg:p-6 max-w-xl'>
                <div className='flex items-start gap-4'>
                  <div className='shrink-0'>
                    <Image
                      src={avatarList[0].image}
                      alt={avatarList[0].title}
                      width={56}
                      height={56}
                      priority
                      fetchPriority='high'
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <p className='text-[14px] leading-[1.5] text-wiz_ink dark:text-white/90'>
                      Designed the PIM product-detail experience from scratch —
                      product creation, media, variants, and attributes for
                      100,000+ SKUs — plus CRM Kanban, Ag-Grid SSRM, and payment
                      integrations.
                    </p>
                    <div className='mt-4 flex items-center gap-3 text-[12px] wiz-eyebrow flex-wrap'>
                      <span>SDE 1</span>
                      <span className='w-px h-3 bg-wiz_ink/30' />
                      <span>WizCommerce · Jul 2024–Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className='relative bg-wiz_navy text-white overflow-hidden min-h-[520px] lg:min-h-full flex flex-col'>
          {/* Peach accent slab — same position, translucent (rgba so opacity always applies) */}
          <motion.div
            aria-hidden
            initial={{ x: '40%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className='absolute -right-8 -top-16 z-[1] h-[55%] w-[70%] rotate-[14deg] pointer-events-none'
            style={{ backgroundColor: 'rgba(255, 244, 232, 0.28)' }}
          />
          <motion.div
            aria-hidden
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 1, delay: 0.35 }}
            className='absolute -left-6 bottom-[18%] wiz-display text-[180px] sm:text-[220px] leading-none text-white select-none pointer-events-none'>
            SK
          </motion.div>

          <div className='relative flex-1 flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-14 pt-10 sm:pt-12 pb-0'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className='flex items-center justify-between gap-3'>
              <p className='inline-flex items-center gap-2.5 bg-[#ff7a1a] text-wiz_ink px-3 py-1.5 wiz-eyebrow text-[10px]'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inset-0 animate-ping bg-wiz_ink/50' />
                  <span className='relative h-2 w-2 bg-wiz_ink' />
                </span>
                Live from Gurugram
              </p>
              <p className='wiz-serif text-[15px] text-white/80 rotate-[-2deg]'>
                no cap, I ship
              </p>
            </motion.div>

            <div className='my-10 sm:my-12 lg:my-auto py-4 relative z-10'>
              <motion.p
                initial={{ opacity: 0, rotate: -3 }}
                animate={{ opacity: 1, rotate: -2 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className='inline-block wiz-eyebrow text-wiz_navy bg-wiz_peach px-2.5 py-1 text-[10px]'>
                Satwik Kanhere · SDE 1
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className='wiz-display mt-4 text-[44px] sm:text-[58px] md:text-[68px] lg:text-[76px] xl:text-[84px] leading-[0.94] tracking-[-0.03em] text-white'>
                Full-stack
                <br />
                that doesn&rsquo;t
                <br />
                <span className='instrument-font italic text-[#ffb38a]'>cry at 100K SKUs.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className='mt-5 max-w-sm text-[14.5px] sm:text-[15.5px] leading-[1.55] text-white/60'>
                Java, Spring Boot, Hibernate on the backend — React, Next.js,
                TypeScript up front. Plus Ag-Grid, payments, and CDN. The boring
                stuff that makes enterprise products actually fun to use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className='mt-7 flex flex-wrap gap-2'>
                {['Java', 'Spring Boot', 'Hibernate', 'React', 'Next.js'].map((tag, i) => (
                  <span
                    key={tag}
                    style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                    className='border border-white/25 px-3 py-1.5 text-[12px] text-white/85 hover:border-[#ff7a1a] hover:text-[#ffb38a] transition-colors'>
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Goofy infinite marquee */}
          <div className='relative z-10 border-t border-white/10 bg-white/[0.03] overflow-hidden py-3.5'>
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              className='flex w-max whitespace-nowrap'>
              {[0, 1].map((dup) => (
                <p
                  key={dup}
                  className='wiz-serif text-[15px] sm:text-[17px] text-white/70 px-2'>
                  Java&nbsp;&nbsp;·&nbsp;&nbsp;Spring Boot&nbsp;&nbsp;·&nbsp;&nbsp;Hibernate&nbsp;&nbsp;·&nbsp;&nbsp;JPA&nbsp;&nbsp;·&nbsp;&nbsp;React.js&nbsp;&nbsp;·&nbsp;&nbsp;Next.js&nbsp;&nbsp;·&nbsp;&nbsp;TypeScript&nbsp;&nbsp;·&nbsp;&nbsp;Node.js&nbsp;&nbsp;·&nbsp;&nbsp;Ag-Grid&nbsp;&nbsp;·&nbsp;&nbsp;Kafka&nbsp;&nbsp;·&nbsp;&nbsp;MySQL&nbsp;&nbsp;·&nbsp;&nbsp;MongoDB&nbsp;&nbsp;·&nbsp;&nbsp;full-stack before standup ends&nbsp;&nbsp;·&nbsp;&nbsp;
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
