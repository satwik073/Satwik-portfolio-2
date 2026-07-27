import type { Metadata } from 'next'
import nextDynamic from 'next/dynamic'

// Above-the-fold — static RSC for fast first paint (no client JS)
import HeroSection from './components/home/hero'
import Brand from './components/home/brand'
import WebResult from './components/home/web-result'

const sectionFallback = <div className='min-h-[320px] cv-auto' aria-hidden />

// Below-the-fold — lazy load
const Innovation = nextDynamic(() => import('./components/home/innovation'), {
  loading: () => sectionFallback,
})
const AboutSeo = nextDynamic(() => import('./components/home/about-seo'), {
  loading: () => sectionFallback,
})
const OnlinePresence = nextDynamic(() => import('./components/home/online-presence'), {
  loading: () => sectionFallback,
})
const CreativeMind = nextDynamic(() => import('./components/home/creative-mind'), {
  loading: () => sectionFallback,
})
const CustomerStories = nextDynamic(() => import('./components/home/customer-stories'), {
  loading: () => sectionFallback,
})
const Faq = nextDynamic(() => import('./components/home/faq'), {
  loading: () => sectionFallback,
})
const Achievements = nextDynamic(() => import('./components/home/achievements'), {
  loading: () => sectionFallback,
})
const Solutions = nextDynamic(() => import('./components/home/solution'), {
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
 * Fully static until the next deploy — longest-lived ISR (no timed revalidate).
 */
export const dynamic = 'force-static'
export const revalidate = false
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
