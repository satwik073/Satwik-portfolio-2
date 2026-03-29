'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SingleCreativeMind from './SingleCreativeMind'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { creativeMindList } from '@/constants'

function CreativeMind() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: number) => ({
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })
  return (
    <section id='team'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-2xl text-center'>
              <h2>
                <TextGenerateEffect words="Where I've worked &" duration={0.5} />
                <TextGenerateEffect
                  words="what I've learned"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
              <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                From enterprise product development to academic research &mdash; every role sharpened a different edge.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
              {creativeMindList.map((item, index) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
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
