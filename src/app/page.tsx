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

// Base URL for canonical and social sharing
const siteUrl = "https://satwikkanhere.dev";
const ogImageUrl = `${siteUrl}/images/og-image.jpg`;

export const metadata: Metadata = {
  // ============== BASIC META ==============
  title: "Satwik Kanhere | Software Development Engineer | Full-Stack Developer",
  description: "Satwik Kanhere - Software Development Engineer at WizCommerce. Expert in React.js, Next.js, Node.js, TypeScript. Building scalable enterprise solutions serving 85+ US clients with 99.8% uptime. B.Tech CSE from Chitkara University with 9.41 CGPA. Published researcher in Springer.",
  keywords: [
    "Satwik Kanhere",
    "Software Developer",
    "Software Development Engineer",
    "SDE",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Java Developer",
    "WizCommerce",
    "Infosys",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer India",
    "Chandigarh Developer",
    "Gurugram Developer",
    "Chitkara University",
    "Software Engineer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Ag-Grid",
    "Kafka",
    "Enterprise Software",
    "PIM System",
    "Product Information Management",
    "Hire Developer India",
    "Remote Developer"
  ],
  authors: [{ name: "Satwik Kanhere", url: "https://linkedin.com/in/satwikkanhere0730" }],
  creator: "Satwik Kanhere",
  publisher: "Satwik Kanhere",
  
  // ============== ROBOTS ==============
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ============== CANONICAL URL ==============
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'en-IN': siteUrl,
    },
  },

  // ============== OPEN GRAPH (Facebook, LinkedIn, WhatsApp, Discord, Slack) ==============
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Satwik Kanhere - Software Developer Portfolio",
    title: "Satwik Kanhere | Software Development Engineer at WizCommerce",
    description: "🚀 SDE at WizCommerce | Building enterprise solutions for 85+ US clients | React.js, Next.js, Node.js Expert | Published Researcher | CGPA 9.41",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Satwik Kanhere - Software Development Engineer Portfolio",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/images/og-square.jpg`,
        width: 600,
        height: 600,
        alt: "Satwik Kanhere - SDE",
        type: "image/jpeg",
      },
    ],
    firstName: "Satwik",
    lastName: "Kanhere",
    username: "satwikkanhere",
    gender: "male",
  },

  // ============== TWITTER / X ==============
  twitter: {
    card: "summary_large_image",
    site: "@satwikkanhere",
    creator: "@satwikkanhere",
    title: "Satwik Kanhere | Software Development Engineer",
    description: "🚀 SDE at WizCommerce | React.js, Next.js, Node.js Expert | Building scalable solutions for 85+ US clients | Published Researcher",
    images: {
      url: ogImageUrl,
      alt: "Satwik Kanhere - Software Development Engineer",
    },
  },

  // ============== APP LINKS ==============
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },

  // ============== OTHER META ==============
  category: "Technology",
  classification: "Software Development Portfolio",
  
  // ============== VERIFICATION ==============
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },

  // ============== ADDITIONAL META ==============
  other: {
    // LinkedIn specific
    "linkedin:owner": "satwikkanhere0730",
    
    // Pinterest
    "pinterest-rich-pin": "true",
    
    // Slack
    "slack-app-id": "your-slack-app-id",
    
    // Article info for rich snippets
    "article:author": "Satwik Kanhere",
    "article:published_time": "2025-01-01T00:00:00Z",
    "article:modified_time": new Date().toISOString(),
    
    // Contact info
    "contact:email": "satwikkanhere2003@gmail.com",
    "contact:phone": "+91-6284486063",
    
    // Geo targeting
    "geo.region": "IN-CH",
    "geo.placename": "Chandigarh",
    "geo.position": "30.7333;76.7794",
    "ICBM": "30.7333, 76.7794",
    
    // Language
    "language": "English",
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "Global",
    
    // Mobile
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Satwik Kanhere",
    
    // MS
    "msapplication-TileColor": "#4928fd",
    "msapplication-config": "/browserconfig.xml",
  },
};

// ============== JSON-LD STRUCTURED DATA (Schema.org) ==============

// Person Schema - Main profile
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Satwik Kanhere",
  givenName: "Satwik",
  familyName: "Kanhere",
  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/satwik-kanhere.jpg`,
    width: 400,
    height: 400,
  },
  description: "Software Development Engineer at WizCommerce, specializing in React.js, Next.js, Node.js, and enterprise solutions. Published researcher and B.Tech CSE graduate with 9.41 CGPA.",
  sameAs: [
    "https://linkedin.com/in/satwikkanhere0730",
    "https://github.com/satwik073",
    "https://satwik073.github.io/SatwikPortFolio/",
    "https://twitter.com/satwikkanhere"
  ],
  jobTitle: "Software Development Engineer",
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#wizcommerce`,
    name: "WizCommerce",
    url: "https://wizcommerce.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN"
    }
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chitkara University",
    url: "https://chitkara.edu.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressCountry: "IN"
    }
  },
  email: "satwikkanhere2003@gmail.com",
  telephone: "+91-6284486063",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressCountry: "IN"
  },
  nationality: {
    "@type": "Country",
    name: "India"
  },
  knowsAbout: [
    "JavaScript", "TypeScript", "Java",
    "React.js", "Next.js", "Node.js", "Express.js",
    "PostgreSQL", "MongoDB", "Prisma", "Kafka",
    "Ag-Grid", "TailwindCSS", "React Native",
    "Git", "GitHub", "Sentry", "Grafana",
    "Full-Stack Development", "Enterprise Software",
    "Agile Methodology", "Scrum"
  ],
  knowsLanguage: ["English", "Hindi"],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Technology in Computer Science and Engineering",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Chitkara University"
      }
    }
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Development Engineer",
    occupationLocation: {
      "@type": "City",
      name: "Gurugram"
    },
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      currency: "INR",
      duration: "P1Y"
    },
    skills: "React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB"
  }
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Satwik Kanhere - Software Developer Portfolio",
  url: siteUrl,
  description: "Portfolio website of Satwik Kanhere - Software Development Engineer at WizCommerce",
  publisher: {
    "@id": `${siteUrl}/#person`
  },
  author: {
    "@id": `${siteUrl}/#person`
  },
  inLanguage: "en-US",
  copyrightYear: 2025,
  copyrightHolder: {
    "@id": `${siteUrl}/#person`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Satwik Kanhere | Software Development Engineer",
  description: "Portfolio of Satwik Kanhere - SDE at WizCommerce building enterprise solutions",
  isPartOf: {
    "@id": `${siteUrl}/#website`
  },
  about: {
    "@id": `${siteUrl}/#person`
  },
  author: {
    "@id": `${siteUrl}/#person`
  },
  inLanguage: "en-US",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split('T')[0],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      }
    ]
  }
};

// Professional Service Schema
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "Satwik Kanhere - Software Development Services",
  description: "Full-stack software development services including React.js, Next.js, Node.js, enterprise solutions, and technical consulting",
  provider: {
    "@id": `${siteUrl}/#person`
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide"
  },
  serviceType: [
    "Full-Stack Web Development",
    "React.js Development",
    "Next.js Development", 
    "Node.js Backend Development",
    "Enterprise Software Development",
    "Technical Consulting",
    "API Development",
    "Database Design"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Freelance Development",
          description: "Custom web development for startups and businesses"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Full-Time Employment",
          description: "Open to SDE roles at innovative tech companies"
        }
      }
    ]
  }
};

// ItemList Schema for Projects
const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#projects`,
  name: "Featured Projects by Satwik Kanhere",
  description: "Portfolio of software development projects",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Product Information Management (PIM) System",
        description: "Enterprise PIM system handling 10,000+ SKUs daily for 85+ US clients with 99.8% uptime",
        applicationCategory: "Enterprise Software",
        operatingSystem: "Web"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Arobix: Enterprise Design Studio",
        description: "SaaS platform with subdomain hosting, funnel building, and project management tools",
        applicationCategory: "SaaS",
        operatingSystem: "Web",
        url: "https://github.com/satwik073"
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Priscus: AI Project Analysis Platform",
        description: "Automated Kanban board and React Flow workflow generators with MCP server integration",
        applicationCategory: "Development Tools",
        operatingSystem: "Web",
        url: "https://priscus.vercel.app"
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "iOS Assistive Technology App",
        description: "Assistive technology app for visually impaired students, serving 300+ students in Chandigarh",
        applicationCategory: "Accessibility",
        operatingSystem: "iOS"
      }
    }
  ]
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies does Satwik Kanhere specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik specializes in JavaScript, TypeScript, Java, React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and has experience with Kafka, Prisma, Ag-Grid, and performance monitoring tools like Sentry and Grafana."
      }
    },
    {
      "@type": "Question",
      name: "Where does Satwik Kanhere currently work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik currently works as a Software Development Engineer 1 at WizCommerce in Gurugram, India, where he built a complete PIM system handling 10,000+ SKUs daily for 85+ US clients."
      }
    },
    {
      "@type": "Question",
      name: "What is Satwik Kanhere's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik completed his Bachelor of Technology in Computer Science and Engineering from Chitkara University, Chandigarh (2021-2025) with a CGPA of 9.41."
      }
    },
    {
      "@type": "Question",
      name: "How can I contact Satwik Kanhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Satwik via email at satwikkanhere2003@gmail.com, connect on LinkedIn at linkedin.com/in/satwikkanhere0730, or call at +91-6284486063."
      }
    }
  ]
};

// Organization Schema for work experience
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#wizcommerce`,
  name: "WizCommerce",
  employee: {
    "@id": `${siteUrl}/#person`
  }
};

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Script
        id="schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        {/* ---------------------Hero section Starts-----------------  */}
        <HeroSection />
        {/* ---------------------Hero section Ends-----------------  */}

        {/* ---------------------Brand logo section Starts-----------------  */}
        <Brand />
        {/* ---------------------Brand logo section Ends-----------------  */}

        {/* ---------------------Web result section Starts-----------------  */}
        <WebResult />
        {/* ---------------------Web result section Ends-----------------  */}

        {/* ---------------------Innovation section Starts-----------------  */}
        <Innovation />
        {/* ---------------------Innovation section Ends-----------------  */}

        {/* ---------------------Online presence section Starts-----------------  */}
        <OnlinePresence />
        {/* ---------------------Online presence section Ends-----------------  */}

        {/* ---------------------Creative mind section Starts-----------------  */}
        <CreativeMind />
        {/* ---------------------Creative mind section Ends-----------------  */}

        {/* ---------------------Customer Stories section Starts-----------------  */}
        <CustomerStories />
        {/* ---------------------Customer Stories section Ends-----------------  */}

        {/* ---------------------Subscription section Starts-----------------  */}
        <Subscription />
        {/* ---------------------Subscription section Ends-----------------  */}

        {/* ---------------------Faq section Starts-----------------  */}
        <Faq />
        {/* ---------------------Faq section Ends-----------------  */}

        {/* ---------------------Achievements section Starts-----------------  */}
        <Achievements />
        {/* ---------------------Achievements section Ends-----------------  */}

        {/* ---------------------Solutions section Starts-----------------  */}
        <Solutions />
        {/* ---------------------Solutions section Ends-----------------  */}
      </main>
    </>
  )
}
