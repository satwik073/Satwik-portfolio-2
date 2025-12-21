'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SingleCreativeMind from './SingleCreativeMind'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { usePageData } from '@/providers/PageDataContext'

function CreativeMind() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const { data } = usePageData()
  const creativeMindList = data?.creativeMindList

  // GPU-accelerated animation using transform3d
  const bottomAnimation = (index: number) => ({
    initial: { opacity: 0, transform: 'translate3d(0, 5%, 0)' },
    animate: inView 
      ? { opacity: 1, transform: 'translate3d(0, 0, 0)' } 
      : { opacity: 0, transform: 'translate3d(0, 10%, 0)' },
    transition: { duration: 0.4, delay: 0.4 + index * 0.15 },
  })

  return (
    <section id='team'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-32 text-center'>
              <h2>
                <TextGenerateEffect words="Professional experience &" duration={0.5} />
                <TextGenerateEffect
                  words="career journey"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
              {creativeMindList?.map((item: any, index: number) => {
                return (
                  <motion.div 
                    {...bottomAnimation(index)} 
                    key={index}
                    className='gpu-accelerated'
                  >
                    <SingleCreativeMind key={index} creativemind={item} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeMind
