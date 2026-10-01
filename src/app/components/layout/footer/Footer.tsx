import Link from 'next/link'
import { Mark } from '../header/Logo'
import { SEO } from '@/constants/seo'

const cols = [
  {
    title: 'Portfolio',
    links: [
      { name: 'Experience', url: '/#experience' },
      { name: 'Projects', url: '/#projects' },
      { name: 'Skills', url: '/#skills' },
      { name: 'About', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { name: 'LinkedIn', url: SEO.linkedin },
      { name: 'GitHub', url: SEO.github },
      { name: 'X / Twitter', url: SEO.twitter },
      { name: 'WhatsApp', url: SEO.whatsapp },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Arobix Design Studio', url: SEO.assembly },
      { name: 'Flux', url: SEO.flux },
      { name: 'Résumé (PDF)', url: '/satwik-kanhere-resume.pdf' },
    ],
  },
  {
    title: 'Data',
    links: [
      { name: 'llms.txt', url: '/llms.txt' },
      { name: 'humans.txt', url: '/humans.txt' },
      { name: 'sitemap.xml', url: '/sitemap.xml' },
    ],
  },
]

const Footer = () => (
  <footer data-tone='dark' className='tone border-t hairline px-[6vw] pt-10 pb-[100px]'>
    <div className='grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12'>
      <div className='flex flex-col justify-end gap-5'>
        <Link href='/' className='inline-flex items-center gap-[18px] text-[15px] font-medium tracking-[-0.01em]'>
          <Mark />
          Satwik Kanhere
        </Link>
        <p className='text-[13px] muted max-w-[42ch]'>
          Software Engineer at WizCommerce. Next.js, React.js,
          TypeScript, FastAPI.
        </p>
      </div>

      <dl className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
        {cols.map((c) => (
          <div key={c.title}>
            <dt className='caps muted'>{c.title}</dt>
            <dd className='mt-3 flex flex-col gap-1'>
              {c.links.map((l) => {
                const external = l.url.startsWith('http') || l.url.endsWith('.pdf')
                return (
                  <Link
                    key={l.name}
                    href={l.url}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className='text-[13px] leading-[1.85] text-silver hover:text-paper transition-colors w-fit'>
                    {l.name}
                  </Link>
                )
              })}
            </dd>
          </div>
        ))}
      </dl>
    </div>

    <div className='mt-14 pt-5 border-t hairline flex flex-col sm:flex-row justify-between gap-2 text-[12px] muted'>
      <p>© {new Date().getFullYear()} Satwik Kanhere. All rights reserved.</p>
      <p className='font-mono text-[11px]'>
        {SEO.location} · {SEO.timezone} · {SEO.email}
      </p>
    </div>
  </footer>
)

export default Footer
