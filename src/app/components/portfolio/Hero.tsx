import Image from 'next/image'
import { ArrowLink } from '../ui/Reading'
import Words from '../ui/Words'
import CountUp from '../ui/CountUp'
import { RESUME } from '@/constants/resume'
import { SEO } from '@/constants/seo'

const LINKS = [
  { label: 'Download résumé', href: '/satwik-kanhere-resume.pdf', meta: 'PDF' },
  { label: 'Get in touch', href: '/contact', meta: 'Reply < 24h' },
  { label: 'GitHub', href: SEO.github, meta: 'satwik073' },
  { label: 'LinkedIn', href: SEO.linkedin, meta: 'satwikkanhere0730' },
]

export default function Hero() {
  return (
    <section
      data-tone='light'
      aria-labelledby='hero-title'
      className='tone relative px-[6vw] lg:px-[4.5vw] pt-[108px] lg:pt-[120px] pb-[88px] overflow-hidden'>
      {/* soft accent light, top right */}
      <div
        aria-hidden
        className='pointer-events-none absolute -right-[20vw] -top-[30vw] h-[70vw] w-[70vw] rounded-full opacity-70'
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 9%, transparent), transparent 60%)' }}
      />

      <div className='relative flex justify-between gap-6 text-[13px] leading-[1.45]'>
        <p>
          {RESUME.title}
          <br />
          <span className='muted'>{RESUME.headline}</span>
        </p>
        <p className='text-right'>
          {RESUME.location}
          <br />
          <span className='inline-flex items-center gap-2 muted whitespace-nowrap'>
            <span className='relative inline-flex h-1.5 w-1.5'>
              <span className='absolute inset-0 rounded-full bg-blue animate-ping opacity-60' />
              <span className='relative h-1.5 w-1.5 rounded-full bg-blue' />
            </span>
            Open to new roles
          </span>
        </p>
      </div>

      <div className='relative mt-[clamp(40px,5vw,80px)] grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-x-[6vw] gap-y-10 items-end'>
        <Words
          as='h1'
          id='hero-title'
          mode='load'
          text={'Satwik\n*Kanhere*'}
          className='display text-[clamp(64px,10.4vw,200px)] leading-[0.9]'
        />

        <div>
          <figure className='flex items-end gap-5 pb-6'>
            <div className='relative h-[104px] w-[104px] shrink-0 overflow-hidden border border-line p-1'>
              <Image
                src='/images/home/satwik.jpg'
                alt='Satwik Kanhere at work'
                width={256}
                height={256}
                priority
                sizes='104px'
                className='h-full w-full object-cover grayscale contrast-[1.05] transition-[filter] duration-700 hover:grayscale-0'
              />
            </div>
            <figcaption className='text-[12px] leading-[1.5]'>
              <span className='block serif text-[22px] leading-none tracking-[-0.02em]'>At work.</span>
              <span className='mt-2 block muted'>SDE 1 · WizCommerce</span>
              <span className='block font-mono text-[10px] muted'>Gurugram · IST</span>
            </figcaption>
          </figure>
          <ul className='border-b'>
            {LINKS.map((l) => (
              <li key={l.label} className='border-t'>
                <ArrowLink href={l.href} className='grid grid-cols-[1fr_auto_20px] items-center gap-4 py-4 transition-[padding,color] duration-500 ease-[var(--ease-out-3)] hover:pl-2 hover:text-blue'>
                  <span className='text-[15px]'>{l.label}</span>
                  <span className='font-mono text-[11px] muted'>{l.meta}</span>
                  <span className='arrow text-[17px] leading-none'>↗</span>
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='relative mt-[clamp(40px,4.5vw,64px)] grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-x-[6vw] gap-y-5'>
        <p className='text-[clamp(18px,1.45vw,22px)] leading-[1.5] tracking-[-0.012em] max-w-[60ch]'>
          {RESUME.summary}
        </p>
        <p className='text-[15px] leading-[1.6] muted max-w-[52ch] lg:pt-1'>{RESUME.summaryExtra}</p>
      </div>

      <div className='relative mt-[clamp(48px,5vw,80px)] grid grid-cols-2 lg:grid-cols-4 gap-x-[3vw] gap-y-8'>
        {RESUME.stats.map((s, i) => (
          <div key={s.label} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className='border-t border-ink pt-4'>
            <p className='flex items-baseline justify-between'>
              <CountUp value={s.value} className='text-[clamp(40px,3.6vw,64px)] tracking-[-0.05em] leading-none' />
              <span className='font-mono text-[10px] muted'>{String(i + 1).padStart(2, '0')}</span>
            </p>
            <p className='mt-3 text-[12px] muted'>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
