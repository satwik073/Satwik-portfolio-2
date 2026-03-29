"use client"
import Image from 'next/image'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function CustomerStories() {
  const topLeftRef = useRef(null)
  const topRightRef = useRef(null)
  const bottomLeftRef = useRef(null)
  const bottomRightRef = useRef(null)

  const topLeftInView = useInView(topLeftRef, { once: true })
  const topRightInView = useInView(topRightRef, { once: true })
  const bottomLeftInView = useInView(bottomLeftRef, { once: true })
  const bottomRightInView = useInView(bottomRightRef, { once: true })

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex flex-col items-center text-center">
              <h2>
                <TextGenerateEffect words="Impact that speaks" />
                <TextGenerateEffect
                  words="for itself"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
              <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                Real numbers from real production systems I&apos;ve architected and shipped.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Top Left Box */}
                <motion.div
                  ref={topLeftRef}
                  initial={{ opacity: 0 }}
                  animate={topLeftInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
                >
                  <span className="text-white/60 uppercase text-xs font-semibold tracking-widest">
                    Current Role &mdash; WizCommerce
                  </span>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-white">
                      Architected the entire PIM system from scratch &mdash; now the core product serving 85+ US enterprise clients with 10,000+ SKUs processed daily
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">Software Development Engineer 1</p>
                      <p className="text-white/60 text-sm font-medium">
                        Full-stack &middot; React &middot; Next.js &middot; Node.js &middot; PostgreSQL
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Top Right Box */}
                <motion.div
                  ref={topRightRef}
                  initial={{ opacity: 0 }}
                  animate={topRightInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8"
                >
                  <div>
                    <span className="uppercase text-xs font-semibold tracking-widest text-dark_black/60">
                      Academic Excellence
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-7xl font-medium dark:text-dark_black">9.41</h2>
                    <h3 className="dark:text-dark_black text-2xl">
                      CGPA &mdash; B.Tech CSE
                    </h3>
                    <p className="text-dark_black/60 text-sm">
                      Chitkara University, 2021&ndash;2025
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Bottom Left Box */}
                <motion.div
                  ref={bottomLeftRef}
                  initial={{ opacity: 0 }}
                  animate={bottomLeftInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-xs font-semibold tracking-widest">
                      Leadership &mdash; Infosys
                    </span>
                    <h3 className="text-white text-2xl">
                      Led daily standups & sprint planning for a 9-member agile team, delivering 4 sprint milestones on schedule with zero critical blockers
                    </h3>
                    <div>
                      <Image
                        src="/images/home/customerStories/creativity_img.jpg"
                        alt="Agile team collaboration"
                        width={344}
                        height={220}
                        className="w-full h-52 rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Right Box */}
                <motion.div
                  ref={bottomRightRef}
                  initial={{ opacity: 0 }}
                  animate={bottomRightInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-dark_black/60 dark:text-white/60 uppercase text-xs font-semibold tracking-widest">
                      Technical Depth
                    </span>
                    <h2 className="text-2xl lg:text-5xl">
                      10+ complex Ag-Grid implementations with Server-Side Row Model &mdash; rendering 500K+ records and $10M+ in transactional data
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Enterprise Data Systems</p>
                    <p className="text-dark_black/60 dark:text-white/60 text-sm font-medium">
                      Real-time sync &middot; WebSockets &middot; Optimized queries
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
