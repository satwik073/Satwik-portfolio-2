import { SITE_URL } from "./site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Satwik Kanhere",
  alternateName: [
    "Satvik Kanhere",
    "Satwik K",
    "Satvik K",
    "satwikkanhere",
    "satwik073",
    "Satwik Kanhere Developer",
  ],
  givenName: "Satwik",
  familyName: "Kanhere",
  additionalName: "Satvik",
  url: SITE_URL,
  mainEntityOfPage: SITE_URL,
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  description:
    "Satwik Kanhere is a Software Development Engineer at WizCommerce who architects enterprise-scale systems. He built a production PIM system handling 10,000+ SKUs daily for 85+ US B2B clients with 99.8% uptime. Expert in React.js, Next.js, Node.js, TypeScript, PostgreSQL. Published researcher in Springer. B.Tech CSE from Chitkara University with 9.41 CGPA.",
  disambiguatingDescription:
    "Satwik Kanhere the software developer and engineer from Chandigarh, India - not to be confused with any other person. Software Development Engineer at WizCommerce, previously at Infosys.",
  sameAs: [
    "https://linkedin.com/in/satwikkanhere0730",
    "https://www.linkedin.com/in/satwikkanhere0730",
    "https://github.com/satwik073",
    "https://www.github.com/satwik073",
    "https://satwik073.github.io/SatwikPortFolio/",
    "https://satwik-pro.github.io/portfolio-version-2/",
    "https://twitter.com/satwikkanhere",
    "https://www.zoominfo.com/p/Satwik-Kanhere/12955827579",
  ],
  jobTitle: "Software Development Engineer",
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#wizcommerce`,
    name: "WizCommerce",
    url: "https://wizcommerce.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chitkara University",
    url: "https://chitkara.edu.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
  },
  email: "satwikkanhere2003@gmail.com",
  telephone: "+91-6284486063",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    addressCountry: "IN",
  },
  birthPlace: {
    "@type": "Place",
    name: "India",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  gender: "Male",
  knowsAbout: [
    "JavaScript", "TypeScript", "Java", "Python",
    "React.js", "Next.js", "Node.js", "Express.js",
    "PostgreSQL", "MongoDB", "MySQL", "Redis",
    "Prisma", "Kafka", "Ag-Grid", "React Flow",
    "TailwindCSS", "HTML5", "CSS3", "SASS",
    "REST APIs", "GraphQL", "WebSocket",
    "Docker", "AWS", "Cloudflare", "Vercel",
    "Git", "GitHub", "CI/CD", "Jenkins",
    "Sentry", "Grafana", "New Relic",
    "Agile Methodology", "Scrum", "Sprint Planning",
    "Full-Stack Development", "Enterprise Software", "SaaS",
    "System Design", "Database Design", "API Architecture",
    "Performance Optimization", "Server-Side Rendering",
    "Microservices", "Monorepo Architecture",
    "Unit Testing", "Integration Testing",
    "Blockchain", "IoT", "Machine Learning",
    "iOS Development", "Swift", "Accessibility",
    "Software Architecture", "Design Patterns",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Hindi", alternateName: "hi" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Technology in Computer Science and Engineering",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Chitkara University",
      },
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Development Engineer",
    occupationalCategory: "15-1252",
    occupationLocation: {
      "@type": "City",
      name: "Gurugram, India",
    },
    skills: "React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Java, Kafka, System Design, Enterprise Software",
  },
  award: [
    "Springer Publication - Lead Author of Blockchain and IoT for Healthcare Research",
    "Built iOS assistive technology app serving 300+ visually impaired students",
    "Architected enterprise PIM system serving 85+ US clients with 99.8% uptime",
  ],
};

// === Scholarly Article Schema ===
export const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": `${SITE_URL}/#publication`,
  name: "Blockchain and IoT for Healthcare: A Systematic Analysis",
  headline: "Blockchain Technology with Internet of Things (IoT) for Framing the Exploration Domain in Healthcare System",
  author: { "@id": `${SITE_URL}/#person` },
  publisher: {
    "@type": "Organization",
    name: "Springer",
    url: "https://www.springer.com",
  },
  isPartOf: {
    "@type": "Book",
    name: "Algorithms for Intelligent Systems",
    publisher: { "@type": "Organization", name: "Springer" },
  },
  datePublished: "2024",
  about: ["Blockchain", "Internet of Things", "Healthcare", "Data Integrity", "Decentralized Systems"],
  inLanguage: "en",
};

// === ProfilePage Schema (Google loves this for personal sites) ===
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  name: "Satwik Kanhere - Software Development Engineer Portfolio",
  url: SITE_URL,
  mainEntity: { "@id": `${SITE_URL}/#person` },
  dateCreated: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Satwik Kanhere - Software Development Engineer",
  alternateName: [
    "Satwik Kanhere Portfolio",
    "Satvik Kanhere Portfolio",
    "Satwik Developer Portfolio",
    "satwikkanhere.dev",
  ],
  url: SITE_URL,
  description:
    "Official portfolio website of Satwik Kanhere (Satvik Kanhere) - Software Development Engineer at WizCommerce. Full-stack developer specializing in React.js, Next.js, Node.js, TypeScript.",
  publisher: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
  creator: { "@id": `${SITE_URL}/#person` },
  inLanguage: ["en-US", "en-IN", "en"],
  copyrightYear: 2025,
  copyrightHolder: { "@id": `${SITE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Satwik Kanhere | Software Development Engineer | Full-Stack Developer",
  description:
    "Satwik Kanhere (Satvik Kanhere) - SDE at WizCommerce building enterprise systems handling 10K+ SKUs for 85+ US clients. React.js, Next.js, Node.js expert. Springer published researcher.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/#aboutus` },
      { "@type": "ListItem", position: 3, name: "Projects", item: `${SITE_URL}/#work` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".hero-description"],
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Satwik Kanhere - Software Development Services",
  alternateName: "Satvik Kanhere Development Services",
  description:
    "Full-stack software development services by Satwik Kanhere. Specializing in React.js, Next.js, Node.js, enterprise solutions, API development, database architecture, and technical consulting. Proven track record with 85+ enterprise clients.",
  provider: { "@id": `${SITE_URL}/#person` },
  url: SITE_URL,
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: [
    "Full-Stack Web Development",
    "React.js Application Development",
    "Next.js Application Development",
    "Node.js Backend Development",
    "Enterprise Software Architecture",
    "API Design & Development",
    "Database Design & Optimization",
    "Technical Consulting",
    "System Design",
    "Performance Optimization",
    "Real-time Data Systems",
    "SaaS Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Development",
          description: "Full-stack development for startups and enterprises needing production-ready code shipped fast",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Time Employment",
          description: "Open to SDE roles at product-driven companies solving engineering problems at scale",
        },
      },
    ],
  },
};

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#projects`,
  name: "Featured Projects by Satwik Kanhere",
  description: "Production software systems and applications built by Satwik Kanhere",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Enterprise PIM System - WizCommerce",
        description:
          "Production-grade Product Information Management system handling 10,000+ SKUs daily for 85+ US B2B clients with 99.8% uptime. Built with React.js, Next.js, Node.js, PostgreSQL, Ag-Grid SSRM, and WebSocket real-time sync.",
        applicationCategory: "Enterprise Software",
        operatingSystem: "Web",
        creator: { "@id": `${SITE_URL}/#person` },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Arobix - Enterprise Design Studio",
        description:
          "Full-stack SaaS platform with subdomain-based multi-tenancy, drag-and-drop funnel builder, Stripe billing, and role-based access control. Built with Next.js, Prisma, MySQL, Cloudflare.",
        applicationCategory: "SaaS Platform",
        operatingSystem: "Web",
        url: "https://github.com/satwik073",
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Priscus - AI Project Analysis Platform",
        description:
          "AI-powered development tool with automated Kanban board generation, React Flow workflow visualization, and MCP server integration for intelligent project scaffolding.",
        applicationCategory: "Developer Tools",
        operatingSystem: "Web",
        url: "https://priscus.vercel.app",
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "iOS Assistive Technology App",
        description:
          "Accessibility-first iOS application providing Braille alternatives for visually impaired students. Deployed across schools in Chandigarh serving 300+ daily active users.",
        applicationCategory: "Accessibility",
        operatingSystem: "iOS",
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Satwik Kanhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik Kanhere (also spelled Satvik Kanhere) is a Software Development Engineer at WizCommerce based in India. He is a full-stack developer specializing in React.js, Next.js, Node.js, and TypeScript. He built the enterprise PIM system at WizCommerce that handles 10,000+ SKUs daily for 85+ US clients with 99.8% uptime. He is also a published researcher in Springer and a B.Tech CSE graduate from Chitkara University with a 9.41 CGPA.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Satwik Kanhere specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik Kanhere specializes in TypeScript, JavaScript, Java, React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, Kafka, Ag-Grid, and has experience with Docker, AWS, CI/CD pipelines, Sentry, and Grafana for monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Satwik Kanhere work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik Kanhere currently works as a Software Development Engineer 1 (SDE 1) at WizCommerce in Gurugram, India. Previously he worked at Infosys in Mysuru as an Application Developer and Scrum Master.",
      },
    },
    {
      "@type": "Question",
      name: "What is Satwik Kanhere's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik Kanhere completed his Bachelor of Technology (B.Tech) in Computer Science and Engineering from Chitkara University, Chandigarh (2021-2025) with a CGPA of 9.41 out of 10.",
      },
    },
    {
      "@type": "Question",
      name: "Has Satwik Kanhere published any research papers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Satwik Kanhere is the Lead Author of 'Blockchain and IoT for Healthcare: A Systematic Analysis' published in Springer's Algorithms for Intelligent Systems series in 2024. The paper explores blockchain integration with IoT networks in healthcare systems.",
      },
    },
    {
      "@type": "Question",
      name: "How to contact Satwik Kanhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satwik Kanhere can be reached via email at satwikkanhere2003@gmail.com, on LinkedIn at linkedin.com/in/satwikkanhere0730, on GitHub at github.com/satwik073, or by phone at +91-6284486063. His portfolio website is satwikkanhere.dev.",
      },
    },
    {
      "@type": "Question",
      name: "Is Satwik Kanhere available for hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Satwik Kanhere is open to both contract/freelance engagements and full-time SDE roles. He specializes in full-stack development, enterprise software architecture, and building scalable production systems. Contact him at satwikkanhere2003@gmail.com.",
      },
    },
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#wizcommerce`,
  name: "WizCommerce",
  url: "https://wizcommerce.com",
  employee: { "@id": `${SITE_URL}/#person` },
};

export const SCHEMA_IDS = {
  person: "schema-person",
  website: "schema-website",
  webpage: "schema-webpage",
  service: "schema-service",
  projects: "schema-projects",
  faq: "schema-faq",
  org: "schema-org",
  publication: "schema-publication",
  profile: "schema-profile",
} as const;
