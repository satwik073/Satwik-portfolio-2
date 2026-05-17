import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'

// Above-the-fold — keep static for fast first paint
import HeroSection from './components/home/hero'
import Brand from './components/home/brand'
import WebResult from './components/home/web-result'

// Below-the-fold — lazy load
const Innovation = dynamic(() => import('./components/home/innovation'), {
  loading: () => <div className='min-h-[400px]' />,
})
const OnlinePresence = dynamic(() => import('./components/home/online-presence'), {
  loading: () => <div className='min-h-[600px]' />,
})
const CreativeMind = dynamic(() => import('./components/home/creative-mind'), {
  loading: () => <div className='min-h-[400px]' />,
})
const CustomerStories = dynamic(() => import('./components/home/customer-stories'), {
  loading: () => <div className='min-h-[500px]' />,
})
const Subscription = dynamic(() => import('./components/home/subscription'), {
  loading: () => <div className='min-h-[400px]' />,
})
const Faq = dynamic(() => import('./components/home/faq'), {
  loading: () => <div className='min-h-[300px]' />,
})
const Achievements = dynamic(() => import('./components/home/achievements'), {
  loading: () => <div className='min-h-[400px]' />,
})
const Solutions = dynamic(() => import('./components/home/solution'), {
  loading: () => <div className='min-h-[300px]' />,
})

import {
  getMetadata,
  personSchema,
  websiteSchema,
  webPageSchema,
  professionalServiceSchema,
  projectsSchema,
  faqSchema,
  organizationSchema,
  scholarlyArticleSchema,
  profilePageSchema,
  SCHEMA_IDS,
} from '@/constants'

export const metadata: Metadata = getMetadata()

/**
 * ISR — the page renders to static HTML at build time, gets served from the
 * edge cache, and revalidates in the background every hour. Crawlers and
 * first-time visitors get the fully-rendered page on the first byte.
 */
export const revalidate = 3600
export const dynamicParams = false

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD structured data */}
      <Script
        id={SCHEMA_IDS.person}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id={SCHEMA_IDS.website}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id={SCHEMA_IDS.webpage}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id={SCHEMA_IDS.service}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Script
        id={SCHEMA_IDS.projects}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <Script
        id={SCHEMA_IDS.faq}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={SCHEMA_IDS.org}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id={SCHEMA_IDS.publication}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }}
      />
      <Script
        id={SCHEMA_IDS.profile}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      <main>
        <HeroSection />
        <Brand />
        <WebResult />
        <Innovation />
        <OnlinePresence />
        <CreativeMind />
        <CustomerStories />
        {/* <Subscription /> */}
        <Faq />
        <Achievements />
        <Solutions />
      </main>
    </>
  )
}
