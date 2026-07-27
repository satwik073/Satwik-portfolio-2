'use client'
import Link from 'next/link'
import { useState } from 'react'

const interestOptions = [
  { value: 'web development', label: 'Web Development' },
  { value: 'mobile development', label: 'Mobile Development' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'full-time', label: 'Full-Time Opportunity' },
]

const timelineOptions = [
  { value: '', label: 'Select timeline' },
  { value: '1-2 weeks', label: '1–2 Weeks' },
  { value: '1-3 months', label: '1–3 Months' },
  { value: '3-6 months', label: '3–6 Months' },
  { value: 'ongoing', label: 'Ongoing' },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'satwikkanhere2003@gmail.com',
    href: 'mailto:satwikkanhere2003@gmail.com',
  },
  {
    label: 'WhatsApp',
    value: '+91 6284486063',
    href: 'https://wa.me/916284486063?text=Hi%20Satwik%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect.',
  },
  {
    label: 'Phone',
    value: '+91 6284486063',
    href: 'tel:+916284486063',
  },
  {
    label: 'LinkedIn',
    value: 'satwikkanhere0730',
    href: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    label: 'GitHub',
    value: 'satwik073',
    href: 'https://github.com/satwik073',
  },
  {
    label: 'X / Twitter',
    value: '@satwikkanhere',
    href: 'https://x.com/satwikkanhere',
  },
  {
    label: 'Resume',
    value: 'View CV',
    href: 'https://satwik073.github.io/SatwikPortFolio/',
  },
]

const fieldClass =
  'w-full mt-2 border border-wiz_border dark:border-white/15 bg-white dark:bg-dark_black px-4 py-3 text-[14px] sm:text-[15px] text-wiz_ink dark:text-white outline-none transition focus:border-wiz_ink dark:focus:border-white/50 placeholder:text-wiz_muted/70'

const labelClass =
  'wiz-eyebrow text-[10px] tracking-[0.16em] text-wiz_muted dark:text-white/55'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'web development',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      interest: 'web development',
      budget: '',
      message: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)
    setError(false)

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/satwikkanhere2003@gmail.com',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            interest: formData.interest,
            budget: formData.budget,
            message: formData.message,
          }),
        }
      )
      const data = await response.json()
      setSubmitted(Boolean(data.success))
      if (data.success) reset()
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setLoader(false)
    }
  }

  return (
    <section className='wiz-font bg-white dark:bg-dark_black pt-48 sm:pt-52 lg:pt-56 pb-12 sm:pb-16 lg:pb-24 overflow-visible'>
      <div className='container'>
        <div className='max-w-4xl'>
          <p className='wiz-eyebrow text-wiz_ink dark:text-white/70'>
            Contact
          </p>
          <h1 className='wiz-display mt-4 sm:mt-5 text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.12] sm:leading-[1.1] text-wiz_ink dark:text-white overflow-visible'>
            Let&rsquo;s Build Something
            <br className='hidden sm:block' />
            <span className='sm:hidden'> </span>
            Worth Shipping.
          </h1>
          <p className='mt-4 sm:mt-5 max-w-xl text-[14.5px] sm:text-[16px] leading-[1.55] text-wiz_muted dark:text-white/60'>
            Open to full-time roles, contract work, and technical conversations.
            Based in India (IST). Usually replies within 24 hours.
          </p>
        </div>

        <div className='mt-10 sm:mt-14 grid lg:grid-cols-12 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10'>
          {/* Left — direct contact */}
          <div className='lg:col-span-4 bg-wiz_cream dark:bg-white/[0.03] p-6 sm:p-8 lg:p-10 flex flex-col gap-8'>
            <div>
              <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                Direct Channels
              </p>
              <p className='wiz-serif text-[24px] sm:text-[28px] text-wiz_ink dark:text-white mt-3 leading-tight'>
                Reach me anytime.
              </p>
            </div>

            <ul className='flex flex-col gap-0 border border-wiz_border dark:border-white/10'>
              {contactLinks.map((item) => (
                <li
                  key={item.label}
                  className='border-b last:border-b-0 border-wiz_border dark:border-white/10'>
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className='flex flex-col gap-1 px-4 py-4 hover:bg-white/70 dark:hover:bg-white/5 transition-colors'>
                    <span className='wiz-eyebrow text-[9px] tracking-[0.16em] text-wiz_muted'>
                      {item.label}
                    </span>
                    <span className='text-[14px] sm:text-[15px] text-wiz_ink dark:text-white break-all'>
                      {item.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className='grid grid-cols-2 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10 mt-auto'>
              <div className='bg-white dark:bg-dark_black p-4'>
                <p className='wiz-eyebrow text-wiz_muted text-[9px]'>Reply</p>
                <p className='wiz-serif text-[22px] text-wiz_ink dark:text-white leading-none mt-2'>
                  &lt; 24h
                </p>
              </div>
              <div className='bg-white dark:bg-dark_black p-4'>
                <p className='wiz-eyebrow text-wiz_muted text-[9px]'>Timezone</p>
                <p className='wiz-serif text-[22px] text-wiz_ink dark:text-white leading-none mt-2'>
                  IST
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className='lg:col-span-8 bg-white dark:bg-dark_black p-6 sm:p-8 lg:p-10'>
            {submitted ? (
              <div className='flex flex-col gap-6 max-w-lg py-6'>
                <p className='wiz-eyebrow text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-2'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-emerald-500' />
                  Message sent
                </p>
                <h2 className='wiz-serif text-[28px] sm:text-[34px] text-wiz_ink dark:text-white leading-tight'>
                  Thanks for reaching out — I&rsquo;ll get back to you soon.
                </h2>
                <Link
                  href='/'
                  className='inline-flex w-fit items-center gap-2.5 bg-wiz_ink text-white text-[14px] font-medium px-5 py-3.5 hover:bg-black transition-colors'>
                  Back to home
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M5 12h14M13 6l6 6-6 6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div>
                  <p className='wiz-eyebrow text-wiz_muted text-[10px]'>
                    Send a message
                  </p>
                  <p className='wiz-serif text-[24px] sm:text-[28px] text-wiz_ink dark:text-white mt-2 leading-tight'>
                    Tell me about the opportunity.
                  </p>
                </div>

                <div className='grid sm:grid-cols-2 gap-5'>
                  <div>
                    <label htmlFor='name' className={labelClass}>
                      Your Name
                    </label>
                    <input
                      className={fieldClass}
                      id='name'
                      type='text'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className={labelClass}>
                      Your Email
                    </label>
                    <input
                      className={fieldClass}
                      id='email'
                      type='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                    />
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-5'>
                  <div>
                    <label htmlFor='interest' className={labelClass}>
                      Interest
                    </label>
                    <select
                      className={fieldClass}
                      name='interest'
                      id='interest'
                      value={formData.interest}
                      onChange={handleChange}>
                      {interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor='budget' className={labelClass}>
                      Timeline
                    </label>
                    <select
                      className={fieldClass}
                      name='budget'
                      id='budget'
                      value={formData.budget}
                      onChange={handleChange}>
                      {timelineOptions.map((opt) => (
                        <option key={opt.value || 'empty'} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className={labelClass}>
                    Message
                  </label>
                  <textarea
                    className={`${fieldClass} min-h-[140px] resize-y`}
                    name='message'
                    id='message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project or opportunity'
                    rows={5}
                  />
                </div>

                {error && (
                  <p className='text-[13px] text-red-600 dark:text-red-400'>
                    Something went wrong. Email me directly at
                    satwikkanhere2003@gmail.com.
                  </p>
                )}

                <div>
                  <button
                    type='submit'
                    disabled={loader}
                    className='inline-flex items-center gap-2.5 bg-[var(--brand)] text-wiz_ink text-[14px] font-medium px-6 py-3.5 hover:bg-[var(--brand-hover)] transition disabled:opacity-60'>
                    {loader ? 'Sending…' : 'Send Message'}
                    {!loader && (
                      <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                        <path
                          d='M5 12h14M13 6l6 6-6 6'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
