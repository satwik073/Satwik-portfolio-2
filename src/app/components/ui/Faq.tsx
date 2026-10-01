import { faqList } from '@/constants/data'
import Words from './Words'

/** Questions, answered — native <details>, no client JS. */
export default function Faq() {
  return (
    <section
      id='questions'
      data-tone='light'
      aria-labelledby='faq-title'
      className='tone px-[8vw] py-[clamp(72px,10vw,150px)] grid lg:grid-cols-[33fr_54fr] gap-x-[11vw] gap-y-12 border-t'>
      <div className='lg:sticky lg:top-28 self-start'>
        <p className='mono-label'>— Questions</p>
        <Words as='h2' id='faq-title' text='Questions, *answered.*' className='claim mt-10' />
        <p className='mt-6 text-[13px] muted max-w-[34ch]'>
          The things people ask most often, in plain words.
        </p>
      </div>
      <ul data-reveal className='border-b min-w-0'>
        {faqList.map((f, i) => (
          <li key={f.faq_que} className='border-t'>
            <details className='group' open={i === 0}>
              <summary className='grid grid-cols-[40px_1fr_24px] items-baseline gap-3 py-5 cursor-pointer'>
                <span className='font-mono text-[11px] muted'>{String(i + 1).padStart(2, '0')}</span>
                <span className='text-[17px] sm:text-[19px] leading-[1.35] tracking-[-0.01em]'>{f.faq_que}</span>
                <span aria-hidden className='text-[18px] leading-none transition-transform duration-500 group-open:rotate-45'>
                  +
                </span>
              </summary>
              <p className='pl-[52px] pr-8 pb-6 text-[15px] leading-[1.65] muted max-w-[64ch]'>{f.faq_ans}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
