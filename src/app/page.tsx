import { Metadata } from "next";
import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import Subscription from "./components/home/subscription";
import WebResult from "./components/home/web-result";
import Script from "next/script";
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
} from "@/constants";

export const metadata: Metadata = getMetadata();

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data - Maximum SEO */}
      <Script
        id={SCHEMA_IDS.person}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id={SCHEMA_IDS.website}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id={SCHEMA_IDS.webpage}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id={SCHEMA_IDS.service}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id={SCHEMA_IDS.projects}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <Script
        id={SCHEMA_IDS.faq}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={SCHEMA_IDS.org}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id={SCHEMA_IDS.publication}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(scholarlyArticleSchema),
        }}
      />
      <Script
        id={SCHEMA_IDS.profile}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />

      <main>
        <HeroSection />
        <Brand />
        <WebResult />
        <Innovation />
        <OnlinePresence />
        <CreativeMind />
        <CustomerStories />
        <Subscription />
        <Faq />
        <Achievements />
        <Solutions />
      </main>
    </>
  )
}
