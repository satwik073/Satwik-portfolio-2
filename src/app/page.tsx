import type { Metadata } from 'next'
import Hero from './components/portfolio/Hero'
import { Experience, Projects, Skills, Education } from './components/portfolio/Sections'
import Faq from './components/ui/Faq'
import Ending from './components/ui/Ending'
import SceneEngineer from './components/scenes/SceneEngineer'
import ScenePeople from './components/scenes/ScenePeople'
import SceneNext from './components/scenes/SceneNext'

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

      <main id='main'>
        <Hero />
        <SceneEngineer />
        <Experience />
        <Projects />
        <Skills />
        <ScenePeople />
        <Education />
        <Faq />
        <SceneNext />
        <Ending />
      </main>
    </>
  )
}
