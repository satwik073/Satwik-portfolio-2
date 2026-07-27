'use client'
import Link from 'next/link'

const stories = [
  {
    eyebrow: 'WizCommerce · SDE 1',
    quote:
      'Built CRM Kanban from scratch, designed PIM product-detail UX for 100,000+ SKUs, optimized 10+ apps with Ag-Grid SSRM (500K+ records), and cut page loads by 65% with GCP and Cloudflare for 120+ enterprise clients.',
    name: 'Jul 2024 – Present',
    role: 'Gurugram, India',
    stats: [
      { value: '120+', label: 'Enterprise clients' },
      { value: '100K+', label: 'SKUs in PIM UX' },
    ],
    href: '/#work',
  },
  {
    eyebrow: 'Infosys · Mysuru',
    quote:
      'Application Developer Intern & Scrum Master — Node.js, Express, MongoDB, SQL backends. Led daily standups for a 9-member Agile team and delivered 4 sprint milestones with peer code reviews.',
    name: 'May – Jun 2024',
    role: 'Mysuru, India',
    stats: [
      { value: '4', label: 'Sprint milestones' },
      { value: '9', label: 'Team members led' },
    ],
    href: '/#team',
  },
  {
    eyebrow: 'Apple Collaboration',
    quote:
      'Led an iOS assistive learning app as a modern Braille alternative, in collaboration with Apple Asia Head Ashish Chowdhary — deployed across Chandigarh schools supporting 300+ visually impaired students.',
    name: 'Research & Leadership',
    role: 'Assistive Technology',
    stats: [
      { value: '300+', label: 'Students supported' },
      { value: 'iOS', label: 'Assistive learning app' },
    ],
    href: '/#awards',
  },
]

function CustomerStories() {
  return (
    <section className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='flex items-end justify-between gap-4 sm:gap-6 flex-wrap'>
          <div>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
              Career Highlights
            </p>
            <h2 className='wiz-display mt-3 sm:mt-4 text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] text-wiz_ink dark:text-white max-w-3xl'>
              Outcomes from the resume — production, delivery, impact.
            </h2>
          </div>
          <Link
            href='/#work'
            className='wiz-eyebrow inline-flex items-center gap-2 text-wiz_ink dark:text-white border-b border-wiz_ink dark:border-white pb-1'>
            View projects →
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
                  {s.quote}
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
                  Learn more →
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
