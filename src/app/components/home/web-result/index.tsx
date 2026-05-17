'use client'
import Link from 'next/link'

const stats = [
  {
    brand: 'WizCommerce',
    metric: '10K+',
    label: 'SKUs Processed Daily Across 85+ Clients',
    href: '/#work',
  },
  {
    brand: 'Production PIM',
    metric: '99.8%',
    label: 'Uptime SLA Maintained In Production',
    href: '/#work',
  },
  {
    brand: 'Infosys Sprint',
    metric: '4',
    label: 'Sprint Milestones Shipped On Schedule',
    href: '/#work',
  },
]

function WebResult() {
  return (
    <section id='aboutus' className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        {/* Big testimonial */}
        <div className='grid lg:grid-cols-12 gap-6 sm:gap-10 items-center'>
          <div className='lg:col-span-5'>
            <div className='relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] bg-wiz_cream dark:bg-white/5 border border-wiz_border dark:border-white/10 overflow-hidden'>
              {/* subtle ambient gradient */}
              <div
                aria-hidden
                className='absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,122,26,0.18),transparent_45%),radial-gradient(circle_at_75%_75%,rgba(255,123,176,0.16),transparent_45%)]'
              />
              {/* faint dotted grid */}
              <svg
                aria-hidden
                className='absolute inset-0 w-full h-full opacity-[0.18]'
                xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <pattern id='wr-dots' width='24' height='24' patternUnits='userSpaceOnUse'>
                    <circle cx='1' cy='1' r='1' fill='#0a0a0a' />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' fill='url(#wr-dots)' />
              </svg>

              {/* Quote mark */}
              <div className='absolute top-6 left-6 wiz-serif text-[96px] leading-none text-wiz_ink/20 select-none'>
                &ldquo;
              </div>

              {/* Center metric tile */}
              <div className='absolute inset-0 flex items-center justify-center px-6'>
                <div className='bg-white border border-wiz_border px-5 py-5 shadow-[0_18px_40px_-18px_rgba(15,17,21,0.18)] w-full max-w-[260px]'>
                  <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                    Production · Real-time
                  </p>
                  <p className='wiz-serif text-[44px] text-wiz_ink leading-none mt-2'>
                    +28%
                  </p>
                  <p className='text-[12px] text-wiz_muted mt-1'>
                    Order-throughput lift, QoQ
                  </p>
                </div>
              </div>

              {/* Bottom caption */}
              <div className='absolute inset-x-0 bottom-0 p-5 sm:p-6'>
                <div className='bg-white/90 backdrop-blur-sm border border-wiz_border px-4 py-3'>
                  <p className='wiz-eyebrow text-wiz_ink text-[10px]'>
                    Engineering Lead
                  </p>
                  <p className='wiz-serif text-[18px] text-wiz_ink mt-1 leading-tight'>
                    Satwik Kanhere
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <h2 className='wiz-display text-[26px] sm:text-[36px] md:text-[44px] lg:text-[54px] text-wiz_ink dark:text-white'>
              &ldquo;In an industry that usually gets outdated tooling, this is
              the first engineer who feels current, listens to the team, and
              brings real innovation to the codebase.&rdquo;
            </h2>
            <div className='mt-8 flex items-center gap-4 wiz-eyebrow'>
              <span>Colleen Daly</span>
              <span className='inline-block w-px h-3 bg-wiz_ink/30' />
              <span>VP Engineering · Howard Elliott Collection</span>
            </div>
            <div className='mt-6'>
              <Link
                href='/#work'
                className='inline-flex items-center gap-2 bg-wiz_ink text-white text-[13px] tracking-[0.16em] uppercase font-medium px-6 py-3.5 hover:bg-black transition-colors'>
                Read Full Story
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className='mt-10 sm:mt-16 grid sm:grid-cols-3 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          {stats.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className='bg-white dark:bg-dark_black p-5 sm:p-7 lg:p-9 flex flex-col gap-4 sm:gap-6 group hover:bg-wiz_chip/40 dark:hover:bg-white/5 transition-colors'>
              <p className='wiz-eyebrow text-wiz_muted'>{s.brand}</p>
              <div className='flex items-end justify-between gap-4'>
                <div>
                  <p className='wiz-serif text-[44px] sm:text-[56px] lg:text-[72px] text-wiz_ink dark:text-white leading-none'>
                    {s.metric}
                  </p>
                  <p className='wiz-eyebrow text-wiz_ink dark:text-white/80 mt-3 max-w-[14ch]'>
                    {s.label}
                  </p>
                </div>
                <span className='inline-flex items-center justify-center h-11 w-11 bg-wiz_pink text-wiz_ink shrink-0 group-hover:translate-x-1 transition-transform'>
                  <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M5 12h14M13 6l6 6-6 6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebResult
