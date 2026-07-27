'use client'
import Link from 'next/link'
import { achievementsList } from '@/constants'

const featured = {
  eyebrow: 'Research & Leadership',
  title:
    'Assistive Technology Initiative for Visually Impaired Students — in collaboration with Apple Asia Head Ashish Chowdhary. iOS learning app as a modern Braille alternative; 300+ students across Chandigarh schools.',
  date: 'Leadership · Apple Collaboration',
  bg: '#e9d8ff',
  href: 'https://linkedin.com/in/satwikkanhere0730',
}

const cards = [
  {
    eyebrow: 'WizCommerce',
    title: '65% faster page loads with GCP CDN, Cloudflare, content hashing & cache-busting for 120+ clients',
    date: 'Performance Engineering',
    bg: '#f7e6d2',
    href: '/#work',
  },
  {
    eyebrow: 'Assembly',
    title: 'Enterprise Design Studio — subdomain hosting, funnel builder, project tooling',
    date: 'assembly-stack.vercel.app',
    bg: '#cfeaf2',
    href: 'https://assembly-stack.vercel.app',
  },
  {
    eyebrow: 'Flux',
    title: 'AI-Powered Code IDE — WebContainers + MCP for in-browser AI coding',
    date: 'flux-code.vercel.app',
    bg: '#ffd9c0',
    href: 'https://flux-code.vercel.app',
  },
]

function Achievements() {
  return (
    <section id='awards' className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='flex flex-col items-center text-center'>
          <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>Achievements</p>
          <h2 className='wiz-display mt-4 sm:mt-5 text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-wiz_ink dark:text-white max-w-3xl'>
            Impact, Products &amp;
            <br />
            Leadership Work
          </h2>
        </div>

        <div className='mt-10 sm:mt-14 grid lg:grid-cols-12 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          <Link
            href={featured.href}
            target='_blank'
            rel='noopener noreferrer'
            className='lg:col-span-7 group block bg-white dark:bg-dark_black'>
            <div
              className='aspect-[16/10] flex items-end p-5 sm:p-8'
              style={{ background: featured.bg }}>
              <p className='wiz-serif text-[22px] sm:text-[32px] md:text-[40px] lg:text-[44px] text-wiz_ink leading-[1.05] max-w-md'>
                Apple Collaboration
                <br />
                300+ Students
              </p>
            </div>
          </Link>
          <div className='lg:col-span-5 bg-white dark:bg-dark_black p-5 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 justify-center'>
            <p className='wiz-eyebrow text-wiz_muted'>{featured.eyebrow}</p>
            <h3 className='wiz-serif text-[20px] sm:text-[24px] lg:text-[30px] text-wiz_ink dark:text-white leading-[1.2]'>
              {featured.title}
            </h3>
            <p className='wiz-eyebrow text-wiz_muted'>{featured.date}</p>
            <Link
              href={featured.href}
              target='_blank'
              rel='noopener noreferrer'
              className='wiz-eyebrow inline-flex items-center gap-2 text-wiz_ink dark:text-white'>
              Learn More →
            </Link>
          </div>
        </div>

        <div className='mt-px grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-wiz_border dark:bg-white/10 border-x border-b border-wiz_border dark:border-white/10'>
          {cards.map((c, i) => {
            const external = c.href.startsWith('http')
            return (
              <Link
                key={i}
                href={c.href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className='bg-white dark:bg-dark_black group block'>
                <div
                  className='aspect-[16/11] flex items-center justify-center px-4 sm:px-6 text-center'
                  style={{ background: c.bg }}>
                  <p className='wiz-serif text-[18px] sm:text-[22px] lg:text-[26px] text-wiz_ink leading-[1.15]'>
                    {c.title}
                  </p>
                </div>
                <div className='p-5 sm:p-6 flex flex-col gap-2'>
                  <p className='wiz-eyebrow text-wiz_muted'>{c.eyebrow}</p>
                  <h3 className='wiz-serif text-[18px] text-wiz_ink dark:text-white leading-snug'>
                    {c.title}
                  </h3>
                  <p className='wiz-eyebrow text-wiz_muted mt-1'>{c.date}</p>
                  <span className='wiz-eyebrow inline-flex items-center gap-2 text-wiz_ink dark:text-white mt-3'>
                    Learn More →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className='hidden'>{achievementsList.length}</div>
      </div>
    </section>
  )
}

export default Achievements
