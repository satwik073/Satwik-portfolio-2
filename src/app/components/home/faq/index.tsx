'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion'
import { faqList } from '@/constants'

function Faq() {
  return (
    <section className='wiz-font bg-white dark:bg-dark_black py-12 sm:py-16 lg:py-24'>
      <div className='container'>
        <div className='grid lg:grid-cols-12 gap-6 sm:gap-10 items-start'>
          <div className='lg:col-span-4'>
            <p className='wiz-eyebrow text-wiz_ink dark:text-white/80'>
              Frequently Asked Questions
            </p>
          </div>

          <div className='lg:col-span-8'>
            <Accordion
              type='single'
              collapsible
              defaultValue='item-0'
              className='border-y border-wiz_border dark:border-white/10'>
              {faqList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='border-b last:border-b-0 border-wiz_border dark:border-white/10 data-[state=open]:bg-wiz_cream dark:data-[state=open]:bg-white/5 transition-colors'>
                  <AccordionTrigger className='px-5 sm:px-7 py-5 sm:py-6 hover:cursor-pointer group'>
                    <span className='wiz-font text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-wiz_ink dark:text-white text-left flex-1 pr-3 sm:pr-4'>
                      {item.faq_que}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className='px-5 sm:px-7 pb-5 sm:pb-6 pt-0'>
                    <p className='text-[14px] sm:text-[14.5px] leading-[1.7] text-wiz_ink/75 dark:text-white/65 max-w-3xl'>
                      {item.faq_ans}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
