'use client'

type Company = {
  name: string
  /** Optional serif-italic flourish for the logo treatment */
  italic?: boolean
  /** What I did there / shipped with */
  caption: string
}

const companies: Company[] = [
  { name: 'WizCommerce', italic: true, caption: 'BUILT · PIM SYSTEM' },
  { name: 'Infosys', caption: 'SHIPPED · 4 SPRINTS' },
  { name: 'Chitkara', italic: true, caption: 'CGPA · 9.41 / 10' },
  { name: 'Springer', caption: 'PUBLISHED · 2024' },
  { name: 'Arobix', italic: true, caption: 'BUILT · SAAS PLATFORM' },
  { name: 'Priscus', caption: 'BUILT · AI TOOLING' },
  { name: 'iOS Ally', italic: true, caption: 'SHIPPED · A11Y APP' },
  { name: 'React.js', caption: 'PROD · 4 YRS' },
  { name: 'Next.js', italic: true, caption: 'PROD · SSR / ISR' },
  { name: 'Node.js', caption: 'PROD · APIs' },
  { name: 'PostgreSQL', italic: true, caption: 'SCHEMA · 500K REC' },
  { name: 'TypeScript', caption: 'PROD · 4 YRS' },
]

function Brand() {
  return (
    <section className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='grid lg:grid-cols-12 gap-6 lg:gap-10 items-start'>
          <div className='lg:col-span-4'>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/70'>
              Our Customers
            </p>
          </div>
          <div className='lg:col-span-8'>
            <h2 className='wiz-display text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-wiz_ink dark:text-white'>
              Built for Scale.
              <br />
              Powered by Engineering.
            </h2>
          </div>
        </div>

        {/* Logo grid — wizcommerce-style with cyan caption band */}
        <div className='mt-8 sm:mt-12 grid grid-cols-2 Xsm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          {companies.map((c, i) => (
            <div
              key={i}
              className='bg-white dark:bg-dark_black aspect-[4/3] flex flex-col group hover:bg-wiz_chip/30 dark:hover:bg-white/5 transition-colors'>
              <div className='flex-1 flex items-center justify-center px-3 sm:px-4 text-center'>
                <span
                  className={`wiz-serif text-[18px] sm:text-[22px] md:text-[24px] text-wiz_ink dark:text-white leading-none ${
                    c.italic ? 'italic' : ''
                  }`}>
                  {c.name}
                </span>
              </div>
              <div className='w-full bg-[#cfeae8] dark:bg-white/10 py-2 px-2'>
                <p className='wiz-eyebrow text-[9px] sm:text-[10px] text-wiz_ink/85 dark:text-white/80 text-center tracking-[0.18em]'>
                  {c.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brand
