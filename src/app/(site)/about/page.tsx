import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Faq from "@/app/components/home/faq";
import {
  SEO,
  SITE_URL,
  aboutPageSchema,
  faqSchema,
  SCHEMA_IDS,
} from "@/constants";

export const metadata: Metadata = {
  title: "About Satwik Kanhere | Software Development Engineer at WizCommerce",
  description: SEO.longBio[0],
  keywords: [...SEO.searchIntents],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/about`,
    title: "About Satwik Kanhere | Software Development Engineer",
    description: SEO.shortBio,
    firstName: "Satwik",
    lastName: "Kanhere",
    username: "satwikkanhere",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Satwik Kanhere",
    description: SEO.shortBio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const facts = [
  { label: "Role", value: `${SEO.jobTitle} @ ${SEO.company}` },
  { label: "Focus", value: "Java · Spring Boot · React · Next.js" },
  { label: "Location", value: SEO.location },
  { label: "Education", value: "B.Tech CSE · Chitkara · 9.41 CGPA" },
];

const projects = [
  {
    name: "Assembly",
    blurb: "Enterprise design studio SaaS — Next.js, Prisma, MySQL, Cloudflare.",
    href: SEO.assembly,
  },
  {
    name: "Flux",
    blurb: "AI-powered code IDE — WebContainers and MCP-assisted workflows.",
    href: SEO.flux,
  },
  {
    name: "Assistive iOS",
    blurb: "Apple-collaborated learning tech for visually impaired students.",
    href: "/#awards",
  },
];

export default function AboutPage() {
  return (
    <>
      <Script
        id={SCHEMA_IDS.about}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Script
        id={`${SCHEMA_IDS.faq}-about`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="wiz-font bg-white dark:bg-dark_black">
        <article className="container pt-48 sm:pt-52 pb-16 sm:pb-24">
          <header className="max-w-3xl">
            <p className="wiz-eyebrow text-wiz_ink dark:text-white/70">About</p>
            <h1 className="wiz-display mt-4 text-[40px] sm:text-[56px] md:text-[64px] leading-[1.05] text-wiz_ink dark:text-white">
              Satwik Kanhere
            </h1>
            <p className="mt-4 wiz-serif text-[20px] sm:text-[24px] text-wiz_ink/70 dark:text-white/65 leading-snug">
              {SEO.jobTitle} · {SEO.company} · India · {SEO.timezone}
            </p>
          </header>

          <div className="mt-10 sm:mt-14 max-w-3xl space-y-5">
            {SEO.longBio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[15px] sm:text-[17px] leading-[1.75] text-wiz_ink/80 dark:text-white/70">
                {paragraph}
              </p>
            ))}
          </div>

          <section className="mt-14 sm:mt-20" aria-labelledby="about-facts">
            <h2
              id="about-facts"
              className="wiz-display text-[28px] sm:text-[36px] text-wiz_ink dark:text-white">
              At a glance
            </h2>
            <dl className="mt-8 grid sm:grid-cols-2 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white dark:bg-dark_black p-5 sm:p-6">
                  <dt className="wiz-eyebrow text-wiz_muted dark:text-white/45 text-[10px]">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 wiz-serif text-[18px] sm:text-[20px] text-wiz_ink dark:text-white leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14 sm:mt-20 max-w-3xl" aria-labelledby="about-stack">
            <h2
              id="about-stack"
              className="wiz-display text-[28px] sm:text-[36px] text-wiz_ink dark:text-white">
              Tech stack
            </h2>
            <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.75] text-wiz_ink/80 dark:text-white/70">
              {SEO.skillsLine}
            </p>
          </section>

          <section className="mt-14 sm:mt-20" aria-labelledby="about-projects">
            <h2
              id="about-projects"
              className="wiz-display text-[28px] sm:text-[36px] text-wiz_ink dark:text-white">
              Selected work
            </h2>
            <ul className="mt-8 grid sm:grid-cols-3 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10">
              {projects.map((project) => (
                <li key={project.name} className="bg-white dark:bg-dark_black">
                  <Link
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block p-5 sm:p-6 h-full hover:bg-wiz_chip/40 dark:hover:bg-white/[0.04] transition-colors group">
                    <p className="wiz-serif text-[20px] text-wiz_ink dark:text-white group-hover:text-[#ff7a1a] dark:group-hover:text-[#ffb38a] transition-colors">
                      {project.name}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-wiz_ink/70 dark:text-white/60">
                      {project.blurb}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 sm:mt-20 max-w-3xl" aria-labelledby="about-hire">
            <h2
              id="about-hire"
              className="wiz-display text-[28px] sm:text-[36px] text-wiz_ink dark:text-white">
              Hire Satwik Kanhere
            </h2>
            <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.75] text-wiz_ink/80 dark:text-white/70">
              Looking for a full-stack developer, Java / Spring Boot engineer,
              React developer, Next.js developer, TypeScript engineer, or
              Software Development Engineer in India (Chandigarh, Gurugram, or
              remote · IST)? Email{" "}
              <a
                href={`mailto:${SEO.email}`}
                className="underline underline-offset-4 decoration-wiz_border dark:decoration-white/30 hover:text-[#ff7a1a]">
                {SEO.email}
              </a>
              , call {SEO.phone}, or use the contact form.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wiz_ink dark:bg-white text-white dark:text-wiz_ink text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:opacity-90 transition">
                Contact
              </Link>
              <a
                href={SEO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition">
                LinkedIn
              </a>
              <a
                href={SEO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition">
                GitHub
              </a>
              <a
                href={SEO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition">
                Resume
              </a>
            </div>
          </section>
        </article>

        <Faq />
      </main>
    </>
  );
}
