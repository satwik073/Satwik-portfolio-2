'use client'
import Link from 'next/link'

const cols = [
  {
    title: 'Skills',
    links: [
      { name: 'Frontend Engineering', url: '/#services' },
      { name: 'Backend Engineering', url: '/#services' },
      { name: 'Databases', url: '/#services' },
      { name: 'System Architecture', url: '/#services' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Arobix', url: '/#work' },
      { name: 'Priscus', url: '/#work' },
      { name: 'Enterprise PIM', url: '/#work' },
      { name: 'iOS Assistive App', url: '/#work' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { name: 'WizCommerce', url: '/#team' },
      { name: 'Infosys', url: '/#team' },
      { name: 'Chitkara University', url: '/#team' },
      { name: 'Springer Publication', url: '/#team' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', url: '/#awards' },
      { name: 'Documentation', url: '/documentation' },
      { name: 'Resume', url: 'https://satwik073.github.io/SatwikPortFolio/' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Terms & Conditions', url: '/terms-and-conditions' },
    ],
  },
  {
    title: 'Satwik vs Others',
    links: [
      { name: 'vs Junior Devs', url: '/#aboutus' },
      { name: 'vs Contractors', url: '/#aboutus' },
      { name: 'vs Agencies', url: '/#aboutus' },
      { name: 'vs Outsourced Teams', url: '/#aboutus' },
    ],
  },
]

const Footer: React.FC = () => {
  return (
    <footer className='wiz-font bg-wiz_ink text-white'>
      <div className='container pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10'>
        {/* Top: logo */}
        <div className='flex items-center gap-3'>
          <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden>
            <path
              d='M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5z'
              stroke='#ffffff'
              strokeWidth='1.6'
              strokeLinejoin='round'
            />
            <path
              d='M3.5 7.25L12 12l8.5-4.75M12 12v9.5'
              stroke='#ffffff'
              strokeWidth='1.6'
              strokeLinejoin='round'
            />
            <path
              d='M7.5 9.5l9 5M16.5 9.5l-9 5'
              stroke='#ff7a1a'
              strokeWidth='1.4'
              strokeLinecap='round'
            />
          </svg>
          <span className='text-[20px] font-semibold tracking-[-0.015em]'>
            Satwikkanhere
          </span>
        </div>

        {/* Columns */}
        <div className='mt-8 sm:mt-12 grid grid-cols-2 Xsm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10'>
          <div className='col-span-2 Xsm:col-span-3 lg:col-span-1 max-w-xs'>
            <p className='text-[14px] leading-[1.6] text-white/60'>
              Software Development Engineer · Building enterprise systems at
              WizCommerce. Architecting reliable products for 85+ B2B clients.
            </p>
          </div>

          {cols.map((c, i) => (
            <div key={i} className='flex flex-col gap-4'>
              <p className='text-[14px] font-semibold text-white'>{c.title}</p>
              <ul className='flex flex-col gap-2.5'>
                {c.links.map((l, li) => {
                  const external = l.url.startsWith('http')
                  return (
                    <li key={li}>
                      <Link
                        href={l.url}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className='text-[13.5px] text-white/55 hover:text-white inline-block hover:translate-x-0.5'>
                        {l.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Connect strip */}
        <div className='mt-14 border-t border-white/10 pt-8 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center'>
          <div className='flex flex-col gap-3'>
            <p className='wiz-eyebrow text-white/70'>Connect With Me</p>
            <div className='flex items-center gap-5'>
              <Link
                href='https://linkedin.com/in/satwikkanhere0730'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition'>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7'>
                  <path
                    d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                LinkedIn
              </Link>
              <Link
                href='https://github.com/satwik073'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition'>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7'>
                  <path
                    d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                GitHub
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Link
              href='https://github.com/satwik073'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[14px] text-white/70 hover:text-white transition'>
              Log In
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 border border-white text-white text-[14px] font-medium px-5 py-2.5 hover:bg-white hover:text-wiz_ink transition'>
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-10 flex flex-col lg:flex-row justify-between gap-3 text-[13px] text-white/40'>
          <p>© {new Date().getFullYear()} Satwik Kanhere. All rights reserved.</p>
          <p>Chandigarh, India · satwikkanhere2003@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
