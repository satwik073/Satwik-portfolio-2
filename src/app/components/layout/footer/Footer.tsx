import Link from 'next/link'

const cols = [
  {
    title: 'Skills',
    links: [
      { name: 'Languages', url: '/#services' },
      { name: 'Frontend', url: '/#services' },
      { name: 'Backend & Databases', url: '/#services' },
      { name: 'Performance & Payments', url: '/#services' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Enterprise PIM', url: '/#work' },
      { name: 'Assembly', url: 'https://assembly-stack.vercel.app' },
      { name: 'Flux', url: 'https://flux-code.vercel.app' },
      { name: 'iOS Assistive App', url: '/#awards' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { name: 'WizCommerce', url: '/#team' },
      { name: 'Infosys', url: '/#team' },
      { name: 'Chitkara University', url: '/#team' },
      { name: 'Apple Collaboration', url: '/#awards' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Achievements', url: '/#awards' },
      { name: 'Resume Site', url: 'https://satwik073.github.io/SatwikPortFolio/' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/satwikkanhere0730' },
      { name: 'GitHub', url: 'https://github.com/satwik073' },
      { name: 'Email', url: 'mailto:satwikkanhere2003@gmail.com' },
      { name: 'About Satwik', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
  },
]

/** Solid light greys on #0a0a0a — opacity whites fail Lighthouse contrast. */
const muted = 'text-[#e8e8e8]'
const mutedHover = 'hover:text-white'

const Footer: React.FC = () => {
  return (
    <footer className='wiz-font bg-[#0a0a0a] text-white'>
      <div className='container pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8'>
        <p className='text-[18px] sm:text-[20px] font-semibold tracking-[-0.015em] text-white'>
          Satwikkanhere
        </p>

        <div className='mt-6 sm:mt-8 grid grid-cols-2 Xsm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 lg:gap-8'>
          <div className='col-span-2 Xsm:col-span-3 lg:col-span-1 max-w-xs'>
            <p className='text-[13.5px] sm:text-[14px] leading-[1.55] text-[#e8e8e8]'>
              Full-stack SDE 1 at WizCommerce. Java, Spring Boot, Hibernate,
              React, Next.js, TypeScript — enterprise products for 120+ clients.
              B.Tech CSE, Chitkara University (9.41 CGPA).
            </p>
          </div>

          {cols.map((c, i) => (
            <div key={i} className='flex flex-col gap-2.5'>
              <p className='text-[13.5px] sm:text-[14px] font-semibold text-white'>
                {c.title}
              </p>
              <ul className='flex flex-col gap-1.5'>
                {c.links.map((l, li) => {
                  const external = l.url.startsWith('http')
                  return (
                    <li key={li}>
                      <Link
                        href={l.url}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className={`text-[13px] ${muted} ${mutedHover} inline-flex items-center py-1`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-8 sm:mt-10 border-t border-white/20 pt-6 flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center'>
          <div className='flex flex-col gap-2.5'>
            <p className={`wiz-eyebrow ${muted}`}>Connect With Me</p>
            <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
              <Link
                href='https://wa.me/916284486063?text=Hi%20Satwik%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect.'
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center gap-2 text-[13.5px] ${muted} ${mutedHover} py-1`}>
                WhatsApp
              </Link>
              <Link
                href='https://linkedin.com/in/satwikkanhere0730'
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center gap-2 text-[13.5px] ${muted} ${mutedHover} py-1`}>
                LinkedIn
              </Link>
              <Link
                href='https://github.com/satwik073'
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center gap-2 text-[13.5px] ${muted} ${mutedHover} py-1`}>
                GitHub
              </Link>
              <Link
                href='https://x.com/satwikkanhere'
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center gap-2 text-[13.5px] ${muted} ${mutedHover} py-1`}>
                X / Twitter
              </Link>
            </div>
          </div>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 border border-white text-white text-[13.5px] font-medium px-4 py-2.5 hover:bg-white hover:text-[#0a0a0a] transition'>
            Get In Touch
          </Link>
        </div>

        <div className='mt-6 flex flex-col lg:flex-row justify-between gap-2 text-[13px]'>
          <p className='text-white'>
            © {new Date().getFullYear()} Satwik Kanhere. All rights reserved.
          </p>
          <p className='text-white'>
            Chandigarh, India · IST · satwikkanhere2003@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
