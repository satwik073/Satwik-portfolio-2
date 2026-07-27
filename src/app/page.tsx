import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Above-the-fold — static RSC for fast first paint (no client JS)
import HeroSection from './components/home/hero'
import Brand from './components/home/brand'
import WebResult from './components/home/web-result'

const sectionFallback = <div className='min-h-[320px] cv-auto' aria-hidden />

// Below-the-fold — lazy load
const Innovation = dynamic(() => import('./components/home/innovation'), {
  loading: () => sectionFallback,
})
const AboutSeo = dynamic(() => import('./components/home/about-seo'), {
  loading: () => sectionFallback,
})
const OnlinePresence = dynamic(() => import('./components/home/online-presence'), {
  loading: () => sectionFallback,
})
const CreativeMind = dynamic(() => import('./components/home/creative-mind'), {
  loading: () => sectionFallback,
})
const CustomerStories = dynamic(() => import('./components/home/customer-stories'), {
  loading: () => sectionFallback,
})
const Faq = dynamic(() => import('./components/home/faq'), {
  loading: () => sectionFallback,
})
const Achievements = dynamic(() => import('./components/home/achievements'), {
  loading: () => sectionFallback,
})
const Solutions = dynamic(() => import('./components/home/solution'), {
  loading: () => sectionFallback,
})

import {
  getMetadata,
  webPageSchema,
  professionalServiceSchema,
  projectsSchema,
  faqSchema,
  organizationSchema,
  scholarlyArticleSchema,
  profilePageSchema,
} from '@/constants'

export const metadata: Metadata = getMetadata()

/**
 * ISR — static HTML at the edge, background revalidate hourly.
 */
export const revalidate = 3600
export const dynamicParams = false

const homeGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageSchema,
    professionalServiceSchema,
    projectsSchema,
    faqSchema,
    organizationSchema,
    scholarlyArticleSchema,
    profilePageSchema,
  ],
}

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph) }}
      />

      <main>
        <HeroSection />
        <Brand />
        <WebResult />
        <div className='cv-auto'>
          <AboutSeo />
        </div>
        <div className='cv-auto'>
          <Innovation />
        </div>
        <div className='cv-auto'>
          <OnlinePresence />
        </div>
        <div className='cv-auto'>
          <CreativeMind />
        </div>
        <div className='cv-auto'>
          <CustomerStories />
        </div>
        <div className='cv-auto'>
          <Faq />
        </div>
        <div className='cv-auto'>
          <Achievements />
        </div>
        <div className='cv-auto'>
          <Solutions />
        </div>
      </main>
    </>
  )
}
