'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { usePageData } from '@/providers/PageDataContext'

function WebResult() {
  const { data: pageData } = usePageData()
  const webResultTagList = pageData?.WebResultTagList

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id='aboutus' aria-labelledby="about-heading">
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h2 id="about-heading" className='max-w-6xl'>
                <TextGenerateEffect words='Building high-performance applications with modern technologies and best practices driven by' duration={0.2} />
              </h2>
              <div className='flex flex-wrap justify-center'>
                {webResultTagList?.map((items: any, index: number) => (
                  <span
                    key={index}
                    className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center text-2xl md:text-4xl font-medium`}>
                    <Image
                      src={items.image}
                      alt={items.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <span className='instrument-font italic font-normal'>
                      {items.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div className='flex-col md:flex md:flex-row justify-center items-center text-center'>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <p ref={ref} className='2xl:text-9xl md:text-7xl text-5xl font-medium text-dark_black dark:text-white'>
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : '0'}K
                </p>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  SKUs Handled Daily
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <p className='2xl:text-9xl md:text-7xl text-5xl font-medium text-dark_black dark:text-white'>
                  {inView ? <CountUp start={0} end={99.8} duration={3} decimals={1} /> : '0'}%
                </p>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  System Uptime
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <p className='2xl:text-9xl md:text-7xl text-5xl font-medium text-dark_black dark:text-white'>
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={50} duration={3} /> : '0'}K
                </p>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  Monthly Updates Processed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
