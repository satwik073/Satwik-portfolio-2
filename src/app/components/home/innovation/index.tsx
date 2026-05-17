'use client'
import Link from 'next/link'

type Product = {
  title: string
  description: string
  pillLabel: string
  pillBg: string
  iconBg: string
  iconColor: string
  iconPath: string
  href: string
}

const products: Product[] = [
  {
    title: 'Modernize the frontend stack',
    description: 'React, Next.js & production UI systems',
    pillLabel: 'Frontend Engineering',
    pillBg: 'bg-[#ffe2cf]',
    iconBg: 'bg-[#ff7a1a]/15',
    iconColor: 'text-[#ff7a1a]',
    iconPath: 'M3 7h18M3 12h18M3 17h18',
    href: '/#services',
  },
  {
    title: 'Turn ideas into shipped APIs',
    description: 'Node.js, Express & event-driven services',
    pillLabel: 'Backend Engineering',
    pillBg: 'bg-[#cfeaf2]',
    iconBg: 'bg-[#26a3c2]/15',
    iconColor: 'text-[#26a3c2]',
    iconPath:
      'M16 18l6-6-6-6M8 6l-6 6 6 6',
    href: '/#services',
  },
  {
    title: 'Design data models that scale',
    description: 'PostgreSQL, MongoDB & query optimisation',
    pillLabel: 'Databases',
    pillBg: 'bg-[#e9d8ff]',
    iconBg: 'bg-[#7c4dff]/15',
    iconColor: 'text-[#7c4dff]',
    iconPath:
      'M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4zM3 12c0 2.21 4 4 9 4s9-1.79 9-4',
    href: '/#services',
  },
  {
    title: 'Architect for real-world load',
    description: 'Microservices, Kafka, SSR & CI/CD',
    pillLabel: 'System Architecture',
    pillBg: 'bg-[#d6f5dc]',
    iconBg: 'bg-[#1ea34c]/15',
    iconColor: 'text-[#1ea34c]',
    iconPath:
      'M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3M5 5h14v14H5z',
    href: '/#services',
  },
]

function Innovation() {
  return (
    <section id='services' className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='flex flex-col items-center text-center'>
          <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
            Products
          </p>
          <h2 className='wiz-display mt-4 sm:mt-5 text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-wiz_ink dark:text-white max-w-4xl'>
            All Your Engineering Workflows,
            <br className='hidden sm:inline' />{' '}
            In One Production Platform
          </h2>
        </div>

        <div className='mt-10 sm:mt-14 grid grid-cols-1 Xsm:grid-cols-2 lg:grid-cols-4 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          {products.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className='bg-white dark:bg-dark_black flex flex-col items-center text-center gap-4 sm:gap-5 p-6 sm:p-8 hover:bg-wiz_chip/40 dark:hover:bg-white/5 transition-colors'>
              <span
                className={`inline-flex items-center justify-center h-14 w-14 ${p.iconBg} ${p.iconColor}`}>
                <svg
                  width='26'
                  height='26'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d={p.iconPath} />
                </svg>
              </span>
              <p className='text-[14px] text-wiz_muted dark:text-white/70 max-w-[24ch] leading-relaxed'>
                {p.description}
              </p>
              <span
                className={`inline-flex ${p.pillBg} text-wiz_ink wiz-eyebrow px-4 py-2 mt-2`}>
                {p.pillLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovation
