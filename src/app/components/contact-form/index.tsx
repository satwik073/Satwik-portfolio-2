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
  'w-full mt-2 bg-transparent border-0 border-b border-ink/40 px-0 py-3 text-[17px] text-ink outline-none rounded-none transition-colors focus:border-blue placeholder:text-ink-2/70'

const labelClass = 'text-[12px] text-ink-2'

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
    <section data-tone='light' className='tone'>
      <div className='px-[6vw] sm:px-[4.5vw] pt-[108px] lg:pt-[110px] pb-[72px] min-h-[78svh] flex flex-col'>
        <div className='flex items-center justify-between text-[12px]'>
          <p className='flex gap-8'><span>— / Contact</span><span>The next role</span></p>
          <p>Replies within 24h · IST</p>
        </div>
        <h1 className='display mt-auto text-[clamp(76px,12.4vw,240px)] leading-[0.86]'>
          <span className='block'>Let&rsquo;s build</span>
          <span className='block pl-[5vw]'>something.</span>
        </h1>
        <p className='mt-10 text-[clamp(20px,1.7vw,26px)] leading-[1.3] tracking-[-0.02em] max-w-[34ch]'>
          Open to full-time roles, contract work, and technical conversations. Based in India (IST).
        </p>
      </div>

      <div className='border-t px-[8vw] py-[clamp(72px,9vw,140px)] grid lg:grid-cols-[33fr_54fr] gap-x-[11vw] gap-y-14'>
        <div className='lg:sticky lg:top-28 self-start'>
          <p className='mono-label'>01 — Direct channels</p>
          <h2 className='claim mt-10'>Reach me anytime.</h2>
          <ul className='mt-10 border-b'>
            {contactLinks.map((item) => {
              const ext = item.href.startsWith('http')
              return (
                <li key={item.label} className='border-t'>
                  <Link
                    href={item.href}
                    target={ext ? '_blank' : undefined}
                    rel={ext ? 'noopener noreferrer' : undefined}
                    className='group grid grid-cols-[84px_1fr_20px] items-center gap-3 py-4 hover:text-blue transition-colors'>
                    <span className='font-mono text-[11px] text-ink-2'>{item.label}</span>
                    <span className='text-[14px] break-all'>{item.value}</span>
                    <span className='arrow text-[17px]'>↗</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='min-w-0'>
          {submitted ? (
            <div className='flex flex-col gap-8 max-w-xl'>
              <p className='mono-label text-blue'>Message sent</p>
              <h2 className='claim'>Thanks for reaching out — I&rsquo;ll get back to you soon.</h2>
              <Link href='/' className='group inline-flex w-fit items-center justify-between gap-16 border-b border-ink py-4 text-[14px]'>
                <span>Back to the beginning</span>
                <span className='arrow'>↗</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-9'>
              <div>
                <p className='mono-label'>02 — Send a message</p>
                <p className='mt-6 text-[clamp(26px,2.4vw,40px)] tracking-[-0.035em] leading-[1.15]'>
                  Tell me about the opportunity.
                </p>
              </div>

              <div className='grid sm:grid-cols-2 gap-9'>
                <div>
                  <label htmlFor='name' className={labelClass}>Your name</label>
                  <input className={fieldClass} id='name' type='text' name='name' required value={formData.name} onChange={handleChange} placeholder='Ada Lovelace' />
                </div>
                <div>
                  <label htmlFor='email' className={labelClass}>Your email</label>
                  <input className={fieldClass} id='email' type='email' name='email' required value={formData.email} onChange={handleChange} placeholder='you@company.com' />
                </div>
              </div>

              <div className='grid sm:grid-cols-2 gap-9'>
                <div>
                  <label htmlFor='interest' className={labelClass}>Interest</label>
                  <select className={fieldClass} name='interest' id='interest' value={formData.interest} onChange={handleChange}>
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor='budget' className={labelClass}>Timeline</label>
                  <select className={fieldClass} name='budget' id='budget' value={formData.budget} onChange={handleChange}>
                    {timelineOptions.map((opt) => (
                      <option key={opt.value || 'empty'} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor='message' className={labelClass}>Message</label>
                <textarea
                  className={`${fieldClass} min-h-[150px] resize-y`}
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
                <p className='text-[13px] text-coral'>
                  Something went wrong. Email me directly at satwikkanhere2003@gmail.com.
                </p>
              )}

              <div className='flex flex-wrap items-center gap-8'>
                <button
                  type='submit'
                  disabled={loader}
                  className='bg-blue text-paper text-[14px] px-6 py-4 cursor-pointer hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-60'>
                  {loader ? 'Sending…' : 'Send message →'}
                </button>
                <p className='text-[10px] text-ink-2'>Usually replies within 24 hours.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
