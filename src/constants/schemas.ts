import { SITE_URL } from "./site";
import { faqList } from "./data";
import { SEO } from "./seo";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SEO.name,
  alternateName: [...SEO.alternateNames, "Satvik K", "Satwik Kanhere Developer"],
  givenName: "Satwik",
  familyName: "Kanhere",
  additionalName: "Satvik",
  url: SITE_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/about`,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
    caption: "Satwik Kanhere — Software Development Engineer",
  },
  description: SEO.longBio.join(" "),
  disambiguatingDescription: SEO.shortBio,
  sameAs: [
    SEO.linkedin,
    "https://www.linkedin.com/in/satwikkanhere0730",
    SEO.github,
    "https://www.github.com/satwik073",
    SEO.resume,
    SEO.assembly,
    SEO.flux,
    `${SITE_URL}/about`,
    `${SITE_URL}/contact`,
  ],
  jobTitle: SEO.jobTitle,
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#wizcommerce`,
    name: SEO.company,
    url: "https://wizcommerce.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
  },
  workExperience: [
    {
      "@type": "OrganizationRole",
      roleName: "Software Development Engineer 1",
      startDate: "2024-07",
      worksFor: {
        "@type": "Organization",
        name: "WizCommerce",
        url: "https://wizcommerce.com",
      },
      description:
        "Enterprise full-stack delivery: React.js / Next.js / TypeScript frontends and Java / Spring Boot / Hibernate services — CRM Kanban, PIM product experiences, Ag-Grid SSRM data grids, payment integrations, and CDN performance.",
    },
    {
      "@type": "OrganizationRole",
      roleName: "Application Developer Intern & Scrum Master",
      startDate: "2024-05",
      endDate: "2024-06",
      worksFor: {
        "@type": "Organization",
        name: "Infosys",
        url: "https://www.infosys.com",
      },
      description:
        "Node.js, Express.js, MongoDB, SQL backends; led daily standups for a 9-member Agile team; delivered 4 sprint milestones.",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chitkara University Institute of Engineering and Technology",
    alternateName: "Chitkara University",
    url: "https://chitkara.edu.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
  },
  email: SEO.email,
  telephone: "+91-6284486063",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    addressCountry: "IN",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  gender: "Male",
  knowsAbout: [
    "Java", "Spring Boot", "Hibernate", "JPA", "JavaScript", "TypeScript", "SQL",
    "React.js", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Ag-Grid",
    "Node.js", "Express.js", "REST APIs", "Kafka",
    "MongoDB", "MySQL",
    "CDN Caching", "GCP", "Cloudflare", "Content Hashing", "Cache-Busting", "Sentry", "Grafana",
    "eBizCharge", "Finix", "ACH", "CyberSource",
    "Git", "GitHub", "Docker", "Postman", "Jira",
    "Agile Development", "Full-Stack Development", "Component-Based Architecture", "Code Reviews",
    "Product Information Management", "CRM Kanban", "Server-Side Row Model",
    "Payment Integrations", "Frontend Performance", "iOS Accessibility",
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
        name: "Chitkara University Institute of Engineering and Technology",
      },
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Development Engineer 1",
    occupationalCategory: "15-1252",
    occupationLocation: {
      "@type": "City",
      name: "Gurugram, India",
    },
    skills: SEO.skillsLine,
  },
  award: [
    "iOS assistive learning initiative with Apple Asia leadership for visually impaired students in Chandigarh",
    "Enterprise frontend ownership across CRM, PIM, payments, and CDN performance at WizCommerce",
  ],
};

export const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": `${SITE_URL}/#publication`,
  name: "A Systematic Analysis Based on Blockchain and IoT Are Leading the Way for Effective Data Management",
  headline: "Blockchain Technology with Internet of Things (IoT) for Framing the Exploration Domain in Healthcare System",
  author: { "@id": `${SITE_URL}/#person` },
  publisher: {
    "@type": "Organization",
    name: "Springer",
    url: "https://www.springer.com",
  },
  isPartOf: {
    "@type": "Book",
    name: "Artificial Intelligence and Sustainable Computing",
    publisher: { "@type": "Organization", name: "Springer" },
  },
  datePublished: "2024",
  url: "https://link.springer.com/chapter/10.1007/978-981-97-0327-2_37",
  about: ["Blockchain", "Internet of Things", "Data Management", "Healthcare"],
  inLanguage: "en",
};

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
  description: SEO.shortBio,
  publisher: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
  creator: { "@id": `${SITE_URL}/#person` },
  inLanguage: ["en-US", "en-IN", "en"],
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: { "@id": `${SITE_URL}/#person` },
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Satwik Kanhere | Software Development Engineer | Full-Stack Developer",
  description: SEO.shortBio,
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
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      { "@type": "ListItem", position: 3, name: "Projects", item: `${SITE_URL}/#work` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".hero-description"],
  },
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Satwik Kanhere | Software Development Engineer",
  description: SEO.longBio[0],
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
  dateModified: new Date().toISOString().split("T")[0],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Satwik Kanhere",
        item: `${SITE_URL}/about`,
      },
    ],
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Satwik Kanhere - Software Development Services",
  alternateName: "Satvik Kanhere Development Services",
  description:
    "Full-stack software development by Satwik Kanhere — Java, Spring Boot, Hibernate, React.js, Next.js, TypeScript, Ag-Grid, Node.js, payments, and CDN performance for enterprise products.",
  provider: { "@id": `${SITE_URL}/#person` },
  url: SITE_URL,
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: [
    "Full-Stack Web Development",
    "Java Spring Boot Development",
    "Hibernate / JPA Persistence",
    "React.js Application Development",
    "Next.js Application Development",
    "Node.js Backend Development",
    "Enterprise Software Architecture",
    "API Design & Development",
    "Performance Optimization",
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
          description:
            "Frontend and full-stack development for startups and enterprises shipping production React/Next.js products.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Time Employment",
          description:
            "Open to Software Development Engineer roles at product-driven companies.",
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
        name: "Enterprise PIM — WizCommerce",
        description:
          "Product Information Management product-detail experience for product creation, media, variants, and attributes at enterprise scale.",
        applicationCategory: "Enterprise Software",
        operatingSystem: "Web",
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Assembly — Enterprise Design Studio",
        description:
          "SaaS frontend for agency owners with subdomain hosting, drag-and-drop funnel builder, and project management. Next.js, Prisma, MySQL, Cloudflare, Sentry.",
        applicationCategory: "SaaS Platform",
        operatingSystem: "Web",
        url: SEO.assembly,
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Flux — AI-Powered Code IDE",
        description:
          "Cursor-like code editor UI in Next.js with WebContainers for in-browser development and MCP server integration for AI-assisted coding.",
        applicationCategory: "Developer Tools",
        operatingSystem: "Web",
        url: SEO.flux,
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "iOS Assistive Learning App",
        description:
          "Assistive technology initiative with Apple Asia leadership — modern Braille alternative for visually impaired students in Chandigarh.",
        applicationCategory: "Accessibility",
        operatingSystem: "iOS",
        creator: { "@id": `${SITE_URL}/#person` },
      },
    },
  ],
};

/** Keep FAQPage schema in sync with visible faqList. */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqList.map((item) => ({
    "@type": "Question",
    name: item.faq_que,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.faq_ans,
    },
  })),
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
  about: "schema-about",
  service: "schema-service",
  projects: "schema-projects",
  faq: "schema-faq",
  org: "schema-org",
  publication: "schema-publication",
  profile: "schema-profile",
} as const;
