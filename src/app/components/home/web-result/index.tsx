'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { WebResultTagList } from '@/constants'

function WebResult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id='aboutus'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h2 className='max-w-5xl'>
                <TextGenerateEffect words='Engineering software that handles real-world scale, driven by' duration={0.2} />
              </h2>
              <div>
                <h2>
                  {WebResultTagList.map((items, index) => (
                    <span
                      key={index}
                      className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center`}>
                      <Image
                        src={items.image}
                        alt={items.name}
                        width={40}
                        height={40}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      <span className='instrument-font italic font-normal'>
                        {items.name}
                      </span>
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className='flex-col md:flex md:flex-row justify-center items-center text-center'>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <h2 ref={ref} className='2xl:text-9xl md:text-7xl text-5xl'>
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : '0'}K
                </h2>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  SKUs Processed Daily
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                  {inView ? <CountUp start={0} end={99.8} duration={3} decimals={1} /> : '0'}%
                </h2>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  Production Uptime
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                  {inView ? <CountUp start={0} end={85} duration={3} /> : '0'}
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  Enterprise Clients Served
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
