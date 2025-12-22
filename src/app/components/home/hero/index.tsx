'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion } from 'motion/react'
import StarRating from '../../shared/star-rating'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { usePageData } from '@/providers/PageDataContext'

function HeroSection() {
  const ref = useRef(null)
  const { data } = usePageData()
  const avatarList = data?.avatarList

  const bottomAnimation = {
    initial: { opacity: 0, transform: 'translateY(20px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: { duration: 0.8, delay: 0.8 },
  }

  return (
    <section aria-labelledby="hero-heading">
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            {/* Main heading */}
            <header className='relative flex flex-col text-center items-center'>
              <h1 id="hero-heading" className="leading-none">
                <TextGenerateEffect className='text-3xl md:text-6xl lg:text-8xl leading-none' words="Hi, I'm Satwik Kanhere" />
                <TextGenerateEffect
                  words="Full Stack Developer"
                  delay={0.8}
                  className="italic font-normal instrument-font text-3xl md:text-6xl lg:text-8xl leading-none md:-mt-1 block"
                />
              </h1>
              <p className='max-w-xl text-dark_black/60 dark:text-white/60 mt-4 text-lg'>
                Software Development Engineer at WizCommerce, building enterprise solutions that serve 85+ US clients. 
                I specialize in React.js, Next.js, Node.js, TypeScript, and high-performance systems that process 
                50,000+ product updates monthly with 99.8% uptime.
              </p>
              <p className='max-w-lg text-dark_black/50 dark:text-white/50 mt-2'>
                Available for freelance projects and full-time opportunities. Based in Gurugram, India.
              </p>
            </header>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4 gpu-accelerated'>
              <div className='flex flex-col items-center justify-center gap-8 w-full sm:flex-row'>
                <Link
                  href='/contact'
                  className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue'
                  aria-label="Contact Satwik Kanhere for development projects">
                  <span className='flex transform transition-transform duration-200 text-center ease-in-out'>
                    Let's Connect
                  </span>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden="true"
                    className='transform transition-transform duration-200 ease-in-out group-hover:rotate-45'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
                    />
                    <path
                      d='M15.832 15.3334H24.1654V23.6667'
                      className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.832 23.6667L24.1654 15.3334'
                      className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                <div className='flex items-center gap-7'>
                  <ul className='avatar flex flex-row items-center' aria-label="Client testimonials">
                    {avatarList?.map((items: any, index: number) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={items.image}
                          alt={`Client testimonial from ${items.title || 'satisfied client'}`}
                          width={44}
                          height={44}
                          quality={75}
                          loading={index < 2 ? undefined : 'lazy'}
                          priority={index < 2}
                          className='rounded-full border-2 border-white'
                        />
                      </li>
                    ))}
                  </ul>
                  <div className='gap-1 flex flex-col'>
                    <div>
                      <StarRating count={4} color='#F59E0B' />
                    </div>
                    <p className='text-sm font-normal text-dark_black/60 dark:text-white/60'>
                      Trusted by clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
