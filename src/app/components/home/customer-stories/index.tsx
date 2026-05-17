'use client'
import Link from 'next/link'

const stories = [
  {
    eyebrow: 'WizCommerce',
    quote:
      'Building the PIM from scratch removed a huge amount of manual work for us. Orders, inventory and product data are connected — the whole operation just runs.',
    name: 'Rishabh Jain',
    role: 'VP of Operations',
    stats: [
      { value: '40+', label: 'Hours saved per week' },
      { value: '9×', label: 'Faster order & quote creation' },
    ],
    href: '/#work',
  },
  {
    eyebrow: 'Howard Elliott',
    quote:
      'In an industry that usually gets outdated tech, this is the first engineer who feels current, listens, and brings real innovation to the workflow.',
    name: 'Colleen Daly',
    role: 'VP at Howard Elliott',
    stats: [
      { value: '20%', label: 'Revenue growth from new storefront' },
      { value: '90%', label: 'Drop in navigation queries' },
    ],
    href: '/#work',
  },
  {
    eyebrow: 'Jaipur Living',
    quote:
      'Switching to a unified stack drastically improved efficiency — seamless ERP integration and tooling that eliminates manual work, giving reps more time to sell.',
    name: 'Nitesh Chaudhary',
    role: 'Director of Innovation',
    stats: [
      { value: '10+', label: 'Increase in revenue' },
      { value: '2-5', label: 'Hours saved per rep / week' },
    ],
    href: '/#work',
  },
]

function CustomerStories() {
  return (
    <section className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='flex items-end justify-between gap-4 sm:gap-6 flex-wrap'>
          <div>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
              Customer Stories
            </p>
            <h2 className='wiz-display mt-3 sm:mt-4 text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] text-wiz_ink dark:text-white max-w-3xl'>
              Outcomes from real production systems.
            </h2>
          </div>
          <Link
            href='/#work'
            className='wiz-eyebrow inline-flex items-center gap-2 text-wiz_ink dark:text-white border-b border-wiz_ink dark:border-white pb-1'>
            View all stories →
          </Link>
        </div>

        <div className='mt-8 sm:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          {stories.map((s, i) => (
            <article
              key={i}
              className='bg-white dark:bg-dark_black p-5 sm:p-7 lg:p-9 flex flex-col gap-5 sm:gap-6 justify-between'>
              <div>
                <p className='wiz-eyebrow text-wiz_muted'>{s.eyebrow}</p>
                <p className='mt-5 wiz-serif text-[20px] lg:text-[22px] leading-[1.35] text-wiz_ink dark:text-white'>
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>
              <div>
                <div className='flex items-center gap-3 wiz-eyebrow'>
                  <span>{s.name}</span>
                  <span className='inline-block w-px h-3 bg-wiz_ink/30 dark:bg-white/30' />
                  <span className='text-wiz_muted'>{s.role}</span>
                </div>
                <div className='mt-5 grid grid-cols-2 gap-4'>
                  {s.stats.map((st, si) => (
                    <div
                      key={si}
                      className='bg-wiz_chip/60 dark:bg-white/5 p-4'>
                      <p className='wiz-serif text-[28px] text-wiz_ink dark:text-white leading-none'>
                        {st.value}
                      </p>
                      <p className='text-[12px] text-wiz_muted dark:text-white/60 mt-1 leading-snug'>
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href={s.href}
                  className='mt-5 wiz-eyebrow inline-flex items-center gap-2 text-wiz_ink dark:text-white'>
                  Read Full Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
