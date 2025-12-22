import { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

// Critical above-the-fold components
import HeroSection from "./components/home/hero";
import Brand from "./components/home/brand";
import WebResult from "./components/home/web-result";

// Lazy-loaded below-fold components
const Innovation = dynamic(() => import("./components/home/innovation"), {
  loading: () => <div className="min-h-[400px]" />,
});
const OnlinePresence = dynamic(() => import("./components/home/online-presence"), {
  loading: () => <div className="min-h-[600px]" />,
});
const CreativeMind = dynamic(() => import("./components/home/creative-mind"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CustomerStories = dynamic(() => import("./components/home/customer-stories"), {
  loading: () => <div className="min-h-[500px]" />,
});
const Subscription = dynamic(() => import("./components/home/subscription"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Faq = dynamic(() => import("./components/home/faq"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Achievements = dynamic(() => import("./components/home/achievements"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Solutions = dynamic(() => import("./components/home/solution"), {
  loading: () => <div className="min-h-[300px]" />,
});

const siteUrl = "https://satwik-kanhere.vercel.app";
const ogImageUrl = `${siteUrl}/images/og-image.jpg`;

// ============== SEO-OPTIMIZED METADATA ==============
// Title: 55 chars (Google limit: 60) | Description: 155 chars (Google limit: 160)
export const metadata: Metadata = {
  // Primary title with brand + role + differentiator
  title: "Satwik Kanhere | Full Stack Developer | React Expert",
  
  // Action-oriented description with keywords + contact
  description: "Satwik Kanhere - Top React & Node.js Developer. SDE at WizCommerce building enterprise apps. Hire best Indian developer. Call: +91-6284486063",
  
  // Comprehensive keywords for all search variations
  keywords: [
    // Name variations (critical for personal branding)
    "Satwik Kanhere", "Satwik", "Sat", "Sat Kanhere", "satwikkanhere",
    "satwik kanhere portfolio", "satwik developer", "sat developer",
    
    // Job titles
    "Software Developer", "Full Stack Developer", "SDE", "Software Engineer",
    "React Developer", "Node.js Developer", "Frontend Developer", "Backend Developer",
    
    // Skills
    "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "Java",
    "PostgreSQL", "MongoDB", "Express.js", "MERN Stack",
    
    // Companies
    "WizCommerce", "Infosys", "Chitkara University",
    
    // Location
    "Developer India", "Developer Gurugram", "Developer Chandigarh",
    "Hire Developer India", "Indian Developer", "Remote Developer",
    
    // Action keywords
    "Hire React Developer", "Best Developer India", "Top Developer Portfolio",
  ],
  
  authors: [
    { name: "Satwik Kanhere", url: siteUrl },
    { name: "Sat", url: siteUrl },
  ],
  creator: "Satwik Kanhere",
  publisher: "Satwik Kanhere",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Satwik Kanhere - Developer Portfolio",
    title: "Satwik Kanhere | Hire Top Full Stack Developer India",
    description: "React, Next.js, Node.js Expert. SDE at WizCommerce. Building apps for 85+ US clients. Available for hire.",
    images: [{
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: "Satwik Kanhere - Full Stack Developer",
    }],
    firstName: "Satwik",
    lastName: "Kanhere",
    username: "satwikkanhere",
  },

  twitter: {
    card: "summary_large_image",
    site: "@satwikkanhere",
    creator: "@satwikkanhere",
    title: "Satwik Kanhere | React & Node.js Developer",
    description: "Full Stack Developer at WizCommerce. React, Next.js, Node.js expert. Open to opportunities.",
    images: [ogImageUrl],
  },

  verification: {
    google: "bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw",
  },

  category: "Technology",
};

// ============== STRUCTURED DATA (Schema.org) ==============
// Comprehensive JSON-LD for rich search results

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Satwik Kanhere",
  alternateName: ["Sat", "Sat Kanhere", "Satwik", "satwikkanhere"],
  givenName: "Satwik",
  familyName: "Kanhere",
  url: siteUrl,
  image: `${siteUrl}/images/satwik-kanhere.jpg`,
  description: "Full Stack Developer specializing in React.js, Next.js, Node.js. Software Development Engineer at WizCommerce building enterprise solutions.",
  sameAs: [
    "https://linkedin.com/in/satwikkanhere0730",
    "https://github.com/satwik073",
    "https://twitter.com/satwikkanhere",
    siteUrl,
  ],
  jobTitle: "Software Development Engineer",
  worksFor: {
    "@type": "Organization",
    name: "WizCommerce",
    url: "https://wizcommerce.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chitkara University",
    url: "https://chitkara.edu.in",
  },
  email: "satwikkanhere2003@gmail.com",
  telephone: "+91-6284486063",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  knowsAbout: [
    "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "Java",
    "PostgreSQL", "MongoDB", "Express.js", "Full-Stack Development",
    "Enterprise Software", "Agile Methodology",
  ],
  knowsLanguage: ["English", "Hindi"],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Development Engineer",
    skills: "React.js, Next.js, Node.js, TypeScript, PostgreSQL",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Satwik Kanhere - Full Stack Developer Portfolio",
  alternateName: ["Sat Kanhere Portfolio", "Satwik Developer", "Sat Developer"],
  url: siteUrl,
  description: "Portfolio of Satwik Kanhere - Full Stack Developer & Software Engineer",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  mainEntity: { "@id": `${siteUrl}/#person` },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split('T')[0],
  name: "Satwik Kanhere - Developer Profile",
  description: "Professional portfolio of Satwik Kanhere, Full Stack Developer",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "Satwik Kanhere - Software Development Services",
  alternateName: "Sat Kanhere Development",
  description: "Full-stack development services: React.js, Next.js, Node.js, enterprise solutions",
  provider: { "@id": `${siteUrl}/#person` },
  areaServed: { "@type": "Country", name: "Worldwide" },
  serviceType: [
    "Full-Stack Web Development",
    "React.js Development",
    "Next.js Development",
    "Node.js Backend Development",
    "Enterprise Software Development",
  ],
  telephone: "+91-6284486063",
  email: "satwikkanhere2003@gmail.com",
  priceRange: "$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Satwik Kanhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik Kanhere (also known as Sat) is a Full Stack Developer and Software Development Engineer at WizCommerce. He specializes in React.js, Next.js, Node.js, and TypeScript, building enterprise solutions for 85+ US clients.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Satwik Kanhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Satwik via email at satwikkanhere2003@gmail.com, connect on LinkedIn at linkedin.com/in/satwikkanhere0730, or call +91-6284486063. He is available for freelance projects and full-time opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Satwik specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik specializes in React.js, Next.js, Node.js, TypeScript, JavaScript, Java, PostgreSQL, MongoDB, Express.js, Prisma, Ag-Grid, and Kafka. He has expertise in building enterprise-grade applications.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Satwik Kanhere located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik is based in Gurugram, Haryana, India. He works remotely and is available for projects worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "What is Satwik's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik completed B.Tech in Computer Science and Engineering from Chitkara University, Chandigarh (2021-2025) with a CGPA of 9.41. He is also a published researcher in Springer.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Satwik Kanhere",
      item: siteUrl,
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="schema-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-profilepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
