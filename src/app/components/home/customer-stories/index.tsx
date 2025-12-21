"use client"
import Image from 'next/image'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function CustomerStories() {
  // Refs for each box
  const topLeftRef = useRef(null)
  const topRightRef = useRef(null)
  const bottomLeftRef = useRef(null)
  const bottomRightRef = useRef(null)

  // Detect if each box is in view
  const topLeftInView = useInView(topLeftRef, { once: true })
  const topRightInView = useInView(topRightRef, { once: true })
  const bottomLeftInView = useInView(bottomLeftRef, { once: true })
  const bottomRightInView = useInView(bottomRightRef, { once: true })

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex items-center text-center">
              <h2>
                <TextGenerateEffect words="Highlights from my" />
                <TextGenerateEffect
                  words="professional journey"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Top Left Box */}
                <motion.div
                  ref={topLeftRef}
                  initial={{ x: -100, y: -100, opacity: 0 }}
                  animate={topLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
                >
                  <span className="text-white/60 uppercase text-sm font-medium">
                    Current Role
                  </span>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-white">
                      Built complete PIM system from scratch handling 10,000+ SKUs daily serving 85+ US clients
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">WizCommerce, Gurugram</p>
                      <p className="text-white/60 text-sm font-medium">
                        Software Development Engineer 1
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Top Right Box */}
                <motion.div
                  ref={topRightRef}
                  initial={{ x: 100, y: -100, opacity: 0 }}
                  animate={topRightInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8"
                >
                  <div>
                    <span className="uppercase text-sm font-medium text-dark_black/60">
                      Facts & numbers
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-7xl font-medium dark:text-dark_black">9.41</h2>
                    <h3 className="dark:text-dark_black text-2xl">
                      CGPA at Chitkara University, B.Tech CSE
                    </h3>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Bottom Left Box */}
                <motion.div
                  ref={bottomLeftRef}
                  initial={{ x: -100, y: 100, opacity: 0 }}
                  animate={bottomLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Previous Experience
                    </span>
                    <h3 className="text-white text-2xl">
                      Led daily standups & sprint planning for 9-member agile team, delivering 4 sprint milestones on schedule
                    </h3>
                    <div>
                      <Image
                        src="/images/home/customerStories/creativity_img.jpg"
                        alt="image"
                        width={344}
                        height={220}
                        className="w-full h-52"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Right Box */}
                <motion.div
                  ref={bottomRightRef}
                  initial={{ x: 100, y: 100, opacity: 0 }}
                  animate={bottomRightInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium">
                      Key Achievement
                    </span>
                    <h2 className="text-2xl lg:text-5xl">
                      Built 10+ dynamic Ag-Grid tables with Server-Side Row Model, displaying 500K+ records and $10M+ in transactional data
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Infosys, Mysuru</p>
                    <p className="text-dark_black/60 dark:text-white/60 text-sm font-medium">
                      Application Developer Intern & Scrum Master
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
