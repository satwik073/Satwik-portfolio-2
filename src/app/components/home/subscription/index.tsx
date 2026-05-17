'use client'
import { Icon } from '@iconify/react'

type Cell = {
  /** Iconify icon name (e.g. simple-icons:react). Empty string = blank cell. */
  icon?: string
  /** Tooltip label */
  label?: string
  /** mark as the bright orange accent cell (renders the SK cube logo) */
  accent?: boolean
}

// 5x5 grid (25 cells). Sparse, with strategic logos & one orange accent.
const grid: Cell[] = [
  /* row 1 */
  {},
  { icon: 'simple-icons:react', label: 'React' },
  { icon: 'simple-icons:nextdotjs', label: 'Next.js' },
  {},
  { icon: 'simple-icons:typescript', label: 'TypeScript' },
  /* row 2 */
  { icon: 'simple-icons:nodedotjs', label: 'Node.js' },
  {},
  {},
  { icon: 'simple-icons:postgresql', label: 'Postgres' },
  {},
  /* row 3 */
  {},
  { icon: 'simple-icons:prisma', label: 'Prisma' },
  { accent: true },
  { icon: 'simple-icons:mongodb', label: 'MongoDB' },
  { icon: 'simple-icons:redis', label: 'Redis' },
  /* row 4 */
  { icon: 'simple-icons:apachekafka', label: 'Kafka' },
  {},
  { icon: 'simple-icons:docker', label: 'Docker' },
  {},
  {},
  /* row 5 */
  {},
  { icon: 'simple-icons:amazonaws', label: 'AWS' },
  {},
  { icon: 'simple-icons:stripe', label: 'Stripe' },
  { icon: 'simple-icons:sentry', label: 'Sentry' },
]

const ORANGE = '#ff7a1a'

function Subscription() {
  return (
    <section
      id='pricing'
      className='wiz-font bg-wiz_peach dark:bg-dark_black border-y border-wiz_border dark:border-white/10'>
      <div className='container py-12 sm:py-16 lg:py-24'>
        <div className='grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-stretch'>
          {/* LEFT — copy */}
          <div className='lg:col-span-6 xl:col-span-7 flex flex-col justify-between'>
            <div>
              <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
                Integrations
              </p>
              <h2 className='wiz-display mt-4 sm:mt-5 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[64px] text-wiz_ink dark:text-white'>
                Plug Into Your
                <br className='hidden sm:inline' />{' '}
                Engineering Stack
                <br className='hidden sm:inline' />{' '}
                With Zero Friction.
              </h2>
            </div>
            <p className='mt-10 sm:mt-12 max-w-md text-[14px] sm:text-[14.5px] leading-[1.6] text-wiz_ink/75 dark:text-white/65'>
              I plug deeply into the tools your team already relies on — frontend
              frameworks, data layers, observability, payments, and infra — all
              with real-time, two-way understanding of each.
            </p>
          </div>

          {/* RIGHT — sparse 5x5 logo grid, stretches to match left column height */}
          <div className='lg:col-span-6 xl:col-span-5 lg:ml-auto w-full max-w-[520px] flex'>
            <div
              className='grid grid-cols-5 grid-rows-5 border w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px]'
              style={{ borderColor: ORANGE, gap: '1px', backgroundColor: ORANGE }}>
              {grid.map((cell, i) => {
                if (cell.accent) {
                  // bright orange accent cell with SK cube
                  return (
                    <div
                      key={i}
                      className='flex items-center justify-center'
                      style={{ backgroundColor: ORANGE }}>
                      <svg
                        width='44%'
                        viewBox='0 0 24 24'
                        fill='none'
                        aria-hidden>
                        <path
                          d='M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5z'
                          stroke='#0a0a0a'
                          strokeWidth='1.6'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.5 7.25L12 12l8.5-4.75M12 12v9.5'
                          stroke='#0a0a0a'
                          strokeWidth='1.6'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  )
                }
                return (
                  <div
                    key={i}
                    title={cell.label}
                    className={`flex items-center justify-center ${
                      (i + Math.floor(i / 5)) % 2 === 0
                        ? 'bg-wiz_peach'
                        : 'bg-[#fff1de]'
                    } dark:bg-white/5`}>
                    {cell.icon && (
                      <Icon
                        icon={cell.icon}
                        className='text-wiz_ink dark:text-white/85'
                        width='38%'
                        height='38%'
                        aria-label={cell.label}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
