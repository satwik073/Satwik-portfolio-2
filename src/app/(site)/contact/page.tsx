import { absoluteUrl } from "@/constants/site";
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/ui/Faq";
import Ending from "@/app/components/ui/Ending";
import { Metadata } from "next";
import Script from "next/script";

/** Fully static until redeploy */
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact Satwik Kanhere | Hire a Next.js / React Software Engineer",
  description:
    "Contact Satwik Kanhere — Software Engineer (SDE 1) at WizCommerce. Hire for Next.js, React.js, TypeScript and FastAPI roles in India (IST). Email satwikkanhere2003@gmail.com · +91 6284486063.",
  keywords: [
    "Hire Satwik Kanhere",
    "Contact Satwik Kanhere",
    "Hire Full Stack Developer India",
    "Hire FastAPI Developer",
    "Hire React Developer India",
    "Hire Next.js Developer",
    "Hire TypeScript Developer",
    "Software Development Engineer contact",
  ],
  openGraph: {
    title: "Contact Satwik Kanhere | Full-Stack Software Development Engineer",
    description:
      "Reach Satwik Kanhere for Software Engineer, frontend and full-stack roles — Next.js, React.js, TypeScript, FastAPI.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Satwik Kanhere",
    description: "Hire a Next.js / React / TypeScript Software Engineer — India · IST",
  },
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Satwik Kanhere",
  description: "Contact page for Satwik Kanhere - Software Development Engineer",
  url: absoluteUrl("/contact"),
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
      <main id="main">
        <ContactForm />
        <Faq />
        <Ending />
      </main>
    </>
  );
}
