'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { innovationList } from '@/constants'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id='services'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <div className='max-w-(--breakpoint-Xsm) text-center'>
                <h2>
                  <TextGenerateEffect words="What I bring to" delay={0.4} />
                  <TextGenerateEffect
                    words="the table"
                    delay={1}
                    className="italic font-normal instrument-font"
                  />
                </h2>
                <p className='text-dark_black/60 dark:text-white/60 mt-4 max-w-2xl mx-auto'>
                  Deep expertise across the modern web stack, battle-tested in production systems serving enterprise clients.
                </p>
              </div>
              <div ref={ref} className='w-full'>
                <div
                  className='grid auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 w-full'>
                  {innovationList.map((items, index) => {
                    return (
                      <motion.div
                        key={index}
                        className={`${items.bg_color} flex flex-col p-8 rounded-2xl gap-4 lg:gap-6 group hover:shadow-lg transition-shadow duration-300`}
                        initial={{ scale: 1, opacity: 0, filter: 'blur(8px)' }}
                        animate={inView ? { scale: 1, opacity: 1, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: 'easeInOut' }}
                      >
                        <div>
                          <Image
                            src={items.image}
                            alt='image'
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <h3 className={`text-2xl ${items.txt_color}`}>
                            {items.title.split('\n')?.map((line: string, i: number) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </h3>
                          <p className='text-sm text-dark_black/50 dark:text-white/50 leading-relaxed'>
                            {items.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
              <h4 className='text-white text-center xl:text-left'>
                Want to see how I solve real engineering problems?
                <br /> Let&apos;s talk architecture.
              </h4>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <Link
                  href='/contact'
                  className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='transform transition-transform duration-200 ease-in-out'>
                    Contact Me
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transition-all duration-200 ease-in-out'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='#1B1D1E'
                      className=' transition-colors duration-200 ease-in-out group-hover:fill-white'
                    />
                    <path
                      d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                      stroke='white'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='group-hover:stroke-black'
                    />
                  </svg>
                </Link>
                <Link
                  href='/#work'
                  className='group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='transform transition-transform duration-200 ease-in-out'>
                    View Projects
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transition-all duration-200 ease-in-out'>
                    <rect width='32' height='32' rx='16' fill='white' />
                    <path
                      d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                      stroke='#1B1D1E'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
