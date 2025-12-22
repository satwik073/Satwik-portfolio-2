import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://satwik-kanhere.vercel.app";

// SEO-Optimized: Title 52 chars, Description 155 chars
export const metadata: Metadata = {
  title: "Contact Satwik Kanhere | Hire React Developer",
  description: "Hire Satwik Kanhere for React, Next.js, Node.js projects. Available for freelance & full-time. Call +91-6284486063. Top Indian developer.",
  
  keywords: [
    // Name variations
    "Contact Satwik Kanhere", "Hire Satwik", "Contact Sat", "Hire Sat Kanhere",
    
    // Action keywords
    "Hire Software Developer", "Hire React Developer", "Hire Full Stack Developer",
    "Hire Node.js Developer", "Hire Indian Developer",
    
    // Service keywords
    "Freelance Developer India", "Remote Developer", "Software Development Services",
    "React Developer for Hire", "Next.js Developer for Hire",
    
    // Location
    "Developer Gurugram Contact", "Developer India Contact",
  ],
  
  openGraph: {
    title: "Hire Satwik Kanhere | React & Node.js Developer",
    description: "Get in touch for software projects. React, Next.js, Node.js expert available for hire.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [{
      url: `${siteUrl}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "Contact Satwik Kanhere - Developer",
    }],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Hire Satwik Kanhere | Full Stack Developer",
    description: "Contact for React, Next.js, Node.js projects. Available worldwide.",
  },
  
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact#contactpage`,
  name: "Contact Satwik Kanhere",
  alternateName: "Hire Sat Kanhere",
  description: "Contact page for hiring Satwik Kanhere - Full Stack Developer",
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Satwik Kanhere",
    alternateName: ["Sat", "Sat Kanhere"],
    email: "satwikkanhere2003@gmail.com",
    telephone: "+91-6284486063",
    jobTitle: "Software Development Engineer",
    url: siteUrl,
    sameAs: [
      "https://linkedin.com/in/satwikkanhere0730",
      "https://github.com/satwik073",
    ],
  },
  potentialAction: {
    "@type": "CommunicateAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/contact`,
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Satwik Kanhere - Software Development",
  alternateName: "Sat Kanhere Development",
  description: "Full Stack Development Services by Satwik Kanhere",
  url: siteUrl,
  telephone: "+91-6284486063",
  email: "satwikkanhere2003@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="contact-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Script
        id="local-business-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main>
        <ContactForm />
        <Faq />
      </main>
    </>
  );
}
