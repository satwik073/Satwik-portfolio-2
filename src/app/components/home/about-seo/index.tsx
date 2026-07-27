import Link from 'next/link'
import { SEO } from '@/constants'
import { SOCIAL_PRIMARY } from '@/constants'

const links = SOCIAL_PRIMARY.slice(0, 4).map((s) => ({
  label: s.label,
  value: s.handle,
  href: s.href,
}))

function AboutSeo() {
  return (
    <section
      id='about'
      className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
          <div className='lg:col-span-4'>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/70'>
              About
            </p>
            <h2 className='wiz-display mt-4 text-[32px] sm:text-[40px] md:text-[48px] leading-[1.08] text-wiz_ink dark:text-white'>
              Satwik Kanhere
            </h2>
            <p className='mt-3 wiz-serif text-[18px] sm:text-[20px] text-wiz_ink/70 dark:text-white/65 leading-snug'>
              {SEO.jobTitle} · India · {SEO.timezone}
            </p>
          </div>

          <div className='lg:col-span-8 space-y-6'>
            <p className='text-[15px] sm:text-[17px] leading-[1.7] text-wiz_ink/80 dark:text-white/70 max-w-2xl'>
              {SEO.longBio[0]}
            </p>
            <p className='text-[15px] sm:text-[17px] leading-[1.7] text-wiz_ink/80 dark:text-white/70 max-w-2xl'>
              {SEO.longBio[1]}
            </p>

            <div className='pt-2 flex flex-wrap gap-3'>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 bg-wiz_ink dark:bg-white text-white dark:text-wiz_ink text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:opacity-90 transition'>
                Full bio
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition'>
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className='bg-white dark:bg-dark_black p-5 sm:p-6 group hover:bg-wiz_chip/40 dark:hover:bg-white/[0.04] transition-colors'>
              <p className='wiz-eyebrow text-wiz_muted dark:text-white/70 text-[10px]'>
                {item.label}
              </p>
              <p className='mt-3 wiz-serif text-[18px] sm:text-[20px] text-wiz_ink dark:text-white leading-snug break-all group-hover:text-[var(--brand)] dark:group-hover:text-[var(--brand-pink)] transition-colors'>
                {item.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSeo
