import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Satwik Kanhere | Hire Full-Stack Java / React Developer",
  description:
    "Contact Satwik Kanhere — Full-Stack SDE 1 at WizCommerce. Hire for Java, Spring Boot, Hibernate, React.js, Next.js, and TypeScript in India (IST). Email satwikkanhere2003@gmail.com · +91 6284486063.",
  keywords: [
    "Hire Satwik Kanhere",
    "Contact Satwik Kanhere",
    "Hire Full Stack Developer India",
    "Hire Java Spring Boot Developer",
    "Hire React Developer India",
    "Hire Next.js Developer",
    "Hire TypeScript Developer",
    "Software Development Engineer contact",
  ],
  openGraph: {
    title: "Contact Satwik Kanhere | Full-Stack Software Development Engineer",
    description:
      "Reach Satwik Kanhere for full-time SDE roles, contract Java/Spring Boot + React/Next.js work, or technical conversations.",
    url: "https://satwikkanhere.dev/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Satwik Kanhere",
    description: "Hire a full-stack Java / Spring Boot / React developer — India · IST",
  },
  alternates: {
    canonical: "https://satwikkanhere.dev/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Satwik Kanhere",
  description: "Contact page for Satwik Kanhere - Software Development Engineer",
  url: "https://satwikkanhere.dev/contact",
  mainEntity: {
    "@type": "Person",
    name: "Satwik Kanhere",
    email: "satwikkanhere2003@gmail.com",
    telephone: "+91-6284486063",
    jobTitle: "Software Development Engineer"
  }
};

export default function Page() {
  return (
    <>
      <Script
        id="contact-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <main>
        <ContactForm />
        <Faq />
      </main>
    </>
  );
}
