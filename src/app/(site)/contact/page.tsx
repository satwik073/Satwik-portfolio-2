import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Satwik Kanhere | Hire a Software Developer",
  description: "Get in touch with Satwik Kanhere for software development projects, freelance work, or full-time opportunities. Expert in React.js, Next.js, Node.js, and enterprise solutions.",
  keywords: [
    "Hire Software Developer",
    "Contact Satwik Kanhere",
    "Freelance Developer India",
    "React Developer for Hire",
    "Next.js Developer",
    "Full Stack Developer Contact",
    "Software Development Services"
  ],
  openGraph: {
    title: "Contact Satwik Kanhere | Software Development Engineer",
    description: "Reach out for software development projects, consulting, or career opportunities",
    url: "https://satwikkanhere.dev/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Satwik Kanhere",
    description: "Get in touch for software development projects",
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
