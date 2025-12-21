'use client'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import SingleAchievement from './SingleAchievement'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { usePageData } from '@/providers/PageDataContext'

function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const { data } = usePageData()
  const achievementsList = data?.achievementsList

  // GPU-accelerated animation using transform3d
  const bottomAnimation = (index: number) => ({
    initial: { opacity: 0, transform: 'translate3d(0, 5%, 0)' },
    animate: inView 
      ? { opacity: 1, transform: 'translate3d(0, 0, 0)' } 
      : { opacity: 0, transform: 'translate3d(0, 10%, 0)' },
    transition: { duration: 0.4, delay: 0.4 + index * 0.15 },
  })

  return (
    <section id='awards'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-3xl text-center mx-auto'>
              <h2>
                <TextGenerateEffect words="Achievements & milestones in my" />
                <TextGenerateEffect
                  words="development journey"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {achievementsList?.map((item: any, index: number) => {
                return (
                  <motion.div 
                    {...bottomAnimation(index)} 
                    key={index}
                    className='gpu-accelerated'
                  >
                    <SingleAchievement key={index} achievements={item} />
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

export default Achievements
