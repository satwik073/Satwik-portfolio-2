'use client'
import { skillGroups } from '@/constants'

const CATEGORY_CAPTION: Record<string, string> = {
  Languages: 'LANGUAGE',
  Frontend: 'FRONTEND',
  Backend: 'BACKEND',
  Databases: 'DATABASE',
  'Performance & Monitoring': 'PERFORMANCE',
  Payments: 'PAYMENTS',
  Tools: 'TOOLING',
  Practices: 'PRACTICE',
}

function Innovation() {
  return (
    <section id='services' className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='grid lg:grid-cols-12 gap-6 lg:gap-10 items-start'>
          <div className='lg:col-span-4'>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/70'>
              Technical Skills
            </p>
          </div>
          <div className='lg:col-span-8'>
            <h2 className='wiz-display text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-wiz_ink dark:text-white'>
              Languages to Delivery.
              <br />
              The Full Stack.
            </h2>
          </div>
        </div>

        <div className='mt-8 sm:mt-12 border border-wiz_border dark:border-white/10'>
          {skillGroups.map((group, groupIndex) => {
            const caption = CATEGORY_CAPTION[group.title] ?? group.title.toUpperCase()
            const cols = 6
            const remainder = group.items.length % cols
            const padCount = remainder === 0 ? 0 : cols - remainder

            return (
              <div
                key={group.title}
                className={
                  groupIndex < skillGroups.length - 1
                    ? 'border-b border-wiz_border dark:border-white/10'
                    : ''
                }>
                {/* Category row — full width */}
                <div className='flex items-center justify-between gap-4 bg-[#cfeae8] dark:bg-white/10 px-4 sm:px-5 py-2.5 sm:py-3'>
                  <p className='wiz-eyebrow text-[10px] sm:text-[11px] tracking-[0.2em] text-wiz_ink dark:text-white/90'>
                    {String(groupIndex + 1).padStart(2, '0')} — {group.title}
                  </p>
                  <p className='wiz-eyebrow text-[9px] sm:text-[10px] tracking-[0.16em] text-wiz_ink/45 dark:text-white/40'>
                    {String(group.items.length).padStart(2, '0')}
                  </p>
                </div>

                {/* Same Brand cell grid */}
                <div className='grid grid-cols-2 Xsm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-wiz_border dark:bg-white/10'>
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={item}
                      className='bg-white dark:bg-dark_black aspect-[4/3] flex flex-col group hover:bg-wiz_chip/30 dark:hover:bg-white/5 transition-colors'>
                      <div className='flex-1 flex items-center justify-center px-3 sm:px-4 text-center'>
                        <span
                          className={`wiz-serif text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-wiz_ink dark:text-white leading-tight ${
                            itemIndex % 2 === 1 ? 'italic' : ''
                          }`}>
                          {item}
                        </span>
                      </div>
                      <div className='w-full bg-[#cfeae8] dark:bg-white/10 py-2 px-2'>
                        <p className='wiz-eyebrow text-[8px] sm:text-[9px] md:text-[10px] text-wiz_ink/85 dark:text-white/80 text-center tracking-[0.16em] sm:tracking-[0.18em]'>
                          {caption}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Pad last row so the category block stays even on large screens */}
                  {Array.from({ length: padCount }).map((_, i) => (
                    <div
                      key={`pad-${group.title}-${i}`}
                      aria-hidden
                      className='hidden lg:flex bg-white dark:bg-dark_black aspect-[4/3] flex-col'>
                      <div className='flex-1' />
                      <div className='w-full bg-[#cfeae8]/50 dark:bg-white/5 py-2 px-2'>
                        <p className='wiz-eyebrow text-[10px] text-transparent text-center'>·</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Innovation
