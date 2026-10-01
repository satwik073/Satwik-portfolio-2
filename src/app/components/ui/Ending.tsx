import { ArrowLink } from './Reading'
import Words from './Words'
import { SEO } from '@/constants/seo'

const COLS = [
  { title: 'Hiring for a frontend or full-stack role?', link: 'Get in touch', href: '/contact' },
  { title: 'Prefer email.', link: SEO.email, href: `mailto:${SEO.email}` },
  { title: 'The full résumé.', link: 'Download PDF', href: '/satwik-kanhere-resume.pdf' },
]

export default function Ending({
  first = 'Let’s work',
  second = 'together.',
  id,
  section,
}: {
  first?: string
  second?: string
  id?: string
  section?: number
}) {
  return (
    <section id={id} data-section={section} data-tone='blue' aria-labelledby='ending-title' className='tone px-[6vw] pt-[95px] pb-[100px] scroll-mt-16'>
      <h2 id='ending-title' className='display text-[clamp(76px,12.4vw,240px)] leading-[0.86]'>
        <Words text={first} className='block' />
        <Words text={`*${second}*`} className='block pl-[5vw]' />
      </h2>
      <div className='mt-16 grid sm:grid-cols-3 gap-10 sm:gap-[3.4vw]'>
        {COLS.map((c) => (
          <div key={c.title} data-reveal className='border-t border-paper/70 pt-5'>
            <p className='text-[clamp(19px,1.7vw,24px)] tracking-[-0.015em] leading-[1.3]'>{c.title}</p>
            <ArrowLink href={c.href} className='mt-8 inline-flex gap-2 text-[13px]'>
              <span className='draw'>{c.link}</span>
              <span className='arrow'>↗</span>
            </ArrowLink>
          </div>
        ))}
      </div>
    </section>
  )
}
