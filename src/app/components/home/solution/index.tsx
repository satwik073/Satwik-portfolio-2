'use client'
import Link from 'next/link'

function Solutions() {
  return (
    <section className='wiz-font bg-wiz_cream dark:bg-dark_black'>
      <div className='container py-12 sm:py-16 lg:py-24'>
        <div className='grid lg:grid-cols-12 gap-8 sm:gap-10 items-center'>
          <div className='lg:col-span-6'>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
              Get in Touch
            </p>
            <h2 className='wiz-display mt-4 sm:mt-5 text-[30px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-wiz_ink dark:text-white'>
              Finally, An Engineer
              <br />
              Who Adapts To Your
              <br />
              Workflow — Not The
              <br />
              Other Way Around.
            </h2>

            <div className='mt-7'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-3 bg-[#ff7a1a] text-wiz_ink text-[14px] font-medium px-6 py-3.5 hover:bg-[#ff8c39] transition'>
                Get In Touch
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
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
          </div>

          <div className='lg:col-span-6'>
            <div className='relative aspect-[5/4] bg-[#efe3ce] dark:bg-white/5 border border-wiz_border dark:border-white/10 overflow-hidden'>
              <div
                aria-hidden
                className='absolute inset-0 opacity-[0.12]'
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg,#0a0a0a 0,#0a0a0a 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,#0a0a0a 0,#0a0a0a 1px,transparent 1px,transparent 32px)',
                }}
              />
              <div className='absolute inset-0 grid place-items-center p-6 sm:p-10'>
                <div className='bg-white dark:bg-dark_black shadow-[0_24px_60px_-24px_rgba(15,17,21,0.25)] w-full max-w-sm'>
                  <div className='border-b border-wiz_border dark:border-white/10 px-5 py-4 flex items-center justify-between'>
                    <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                      Now Booking
                    </p>
                    <span className='inline-flex items-center gap-2 wiz-eyebrow text-emerald-700 dark:text-emerald-400 text-[10px]'>
                      <span className='inline-block h-1.5 w-1.5 rounded-full bg-emerald-500' />
                      Open
                    </span>
                  </div>
                  <div className='px-5 py-5'>
                    <p className='wiz-serif text-[26px] sm:text-[30px] text-wiz_ink dark:text-white leading-tight'>
                      Q3 contracts &amp;
                      <br />
                      full-time roles.
                    </p>
                    <div className='mt-5 grid grid-cols-2 gap-3'>
                      <div className='border border-wiz_border dark:border-white/10 px-3 py-2'>
                        <p className='wiz-eyebrow text-wiz_muted text-[9px]'>
                          Reply
                        </p>
                        <p className='wiz-serif text-[18px] text-wiz_ink dark:text-white leading-none mt-1'>
                          &lt; 24h
                        </p>
                      </div>
                      <div className='border border-wiz_border dark:border-white/10 px-3 py-2'>
                        <p className='wiz-eyebrow text-wiz_muted text-[9px]'>
                          Based In
                        </p>
                        <p className='wiz-serif text-[18px] text-wiz_ink dark:text-white leading-none mt-1'>
                          IN · UTC+5:30
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
