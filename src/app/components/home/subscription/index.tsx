"use client";
import Image from 'next/image'
import Link from 'next/link'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect';
import { startupPlanList } from '@/constants';

function Subscription() {
  return (
    <section id='pricing'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-2xl text-center mx-auto'>
              <h2>
                <TextGenerateEffect words="How we can" />
                <TextGenerateEffect
                  words="work together"
                  delay={1.2}
                  className="italic font-normal instrument-font"
                />
              </h2>
              <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                Open to contract engagements and full-time roles. I bring the same intensity to both.
              </p>
            </div>
            <div className='grid grid-cols-1 xxl:grid-cols-2 gap-6'>
              {startupPlanList.map((items, index) => (
                <div
                  className={`${items.plan_bg_color} p-6 md:p-10 rounded-2xl`}
                  key={index}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-12 md:pr-6'>
                      <div className='flex flex-col gap-3'>
                        <p className='py-2 px-4 bg-dark_black w-fit text-white rounded-full text-sm font-medium'>
                          {items.plan_name}
                        </p>
                        <p className={`text-${items.descp_color}`}>
                          {items.plan_descp}
                        </p>
                      </div>
                      <div className='flex flex-col gap-3 md:gap-5'>
                        <h2
                          className={`${items.text_color} dark:${items.text_color}`}>
                          {items.plan_price}
                        </h2>
                        <Link
                          href='/contact'
                          className='group text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit'>
                          <span className='transform transition-transform duration-200 ease-in-out'>
                            Start a Conversation
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
                            />
                            <path
                              d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                              stroke='white'
                              strokeWidth='1.42857'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 md:pl-6 md:border-l ${items.border_color}`}>
                      <p className={`${items.text_color} font-medium`}>What You Get</p>
                      <ul className='flex flex-col gap-4'>
                        {items.plan_feature?.map((feature: string, index: number) => {
                          return (
                            <li key={index} className='flex items-center gap-3'>
                              <Image
                                src={items.icon_img}
                                alt='icon'
                                width={20}
                                height={20}
                              />
                              <p className={`${items.text_color}`}>{feature}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
