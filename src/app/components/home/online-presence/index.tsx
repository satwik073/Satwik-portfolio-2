'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { onlinePresenceList } from '@/constants'

function OnlinePresence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const bottomAnimation = (index: number) => ({
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.8, delay: 0.4 + index * 0.2 },
  })

  return (
    <section id='work'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-2xl text-center'>
              <h2>
                <TextGenerateEffect words="Things I've built &" duration={0.5} />
                <TextGenerateEffect
                  words="shipped"
                  delay={1.2}
                  className="italic font-normal instrument-font"
                />
              </h2>
              <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                Production systems, SaaS platforms, and open-source tools &mdash; each solving a real problem.
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-10 w-full'>
              {onlinePresenceList.map((items, index) => (
                <motion.div
                  key={index}
                  className='group flex flex-col gap-5 cursor-pointer'
                  {...bottomAnimation(index)}
                >
                  <div className='relative overflow-hidden rounded-2xl'>
                    <Image
                      src={items.image}
                      alt={items.title}
                      width={625}
                      height={410}
                      className='rounded-2xl transition-transform duration-500 group-hover:scale-105'
                    />
                    <Link
                      href={items.link}
                      target='_blank'
                      className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'
                    >
                      <span className='flex justify-end p-5 w-full'>
                        <Icon
                          icon='icon-park-solid:circle-right-up'
                          width='50'
                          height='50'
                          style={{ color: '#fbfbfb' }}
                        />
                      </span>
                    </Link>
                  </div>

                  <div className='flex flex-col items-start gap-3'>
                    <h3 className='group-hover:text-purple_blue text-2xl'>
                      {items.title}
                    </h3>
                    <p className='text-dark_black/50 dark:text-white/50 text-sm leading-relaxed'>
                      {items.description}
                    </p>
                    <div className='flex gap-2 flex-wrap'>
                      {items.tag?.map((tag: string, idx: number) => (
                        <p
                          key={idx}
                          className='text-xs font-medium border border-dark_black/10 dark:border-white/30 w-fit py-1.5 px-3 rounded-full hover:bg-dark_black hover:text-white transition-colors duration-200'
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
