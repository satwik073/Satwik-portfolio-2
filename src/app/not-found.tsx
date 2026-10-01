import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 Page | Satwik Kanhere',
}

const ErrorPage = () => (
  <main id='main'>
    <section data-tone='light' className='tone min-h-[100svh] px-[6vw] sm:px-[4.5vw] pt-[108px] lg:pt-[110px] pb-[90px] flex flex-col'>
      <div className='flex items-center justify-between text-[12px]'>
        <p className='flex gap-8'><span>404</span><span>Not found</span></p>
        <p>An open question</p>
      </div>
      <h1 className='display mt-auto text-[clamp(96px,22vw,420px)] leading-[0.84]'>Lost.</h1>
      <div className='mt-10 grid gap-8 sm:grid-cols-2 items-end'>
        <p className='text-[clamp(20px,1.7vw,26px)] leading-[1.3] tracking-[-0.02em] max-w-[28ch]'>
          The page you are looking for doesn&rsquo;t exist. The story continues elsewhere.
        </p>
        <Link href='/' className='group sm:justify-self-end inline-flex items-center gap-6'>
          <span className='text-[15px]'>Back to the beginning</span>
          <span className='inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink text-[27px] leading-none transition-colors group-hover:bg-ink group-hover:text-surface'>
            ↖
          </span>
        </Link>
      </div>
    </section>
  </main>
)

export default ErrorPage
