import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Faq from "@/app/components/home/faq";
import {
  SEO,
  SITE_URL,
  SOCIAL_PRIMARY,
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

const channels = SOCIAL_PRIMARY.map((s) => ({
  label: s.label,
  value: s.handle,
  href: s.href,
}));

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
        <article className="pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-24">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="wiz-eyebrow text-wiz_ink dark:text-white/70">
                  About
                </p>
                <h1 className="wiz-display mt-4 sm:mt-5 text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1] text-wiz_ink dark:text-white">
                  Satwik Kanhere
                </h1>
                <p className="mt-3 wiz-serif text-[18px] sm:text-[20px] text-wiz_ink/70 dark:text-white/65 leading-snug">
                  {SEO.jobTitle} · India · {SEO.timezone}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-5">
                {SEO.longBio.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[14.5px] sm:text-[16px] leading-[1.65] text-wiz_muted dark:text-white/60 max-w-2xl">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-wiz_ink dark:bg-white text-white dark:text-wiz_ink text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:opacity-90 transition">
                    Contact
                  </Link>
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition">
                    Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10">
              {channels.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="bg-white dark:bg-dark_black p-5 sm:p-6 group hover:bg-wiz_chip/40 dark:hover:bg-white/[0.04] transition-colors">
                  <p className="wiz-eyebrow text-wiz_muted dark:text-white/45 text-[10px]">
                    {item.label}
                  </p>
                  <p className="mt-3 wiz-serif text-[18px] sm:text-[20px] text-wiz_ink dark:text-white leading-snug break-all group-hover:text-[#ff7a1a] dark:group-hover:text-[#ffb38a] transition-colors">
                    {item.value}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-14 sm:mt-20 grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="wiz-eyebrow text-wiz_ink dark:text-white/70">
                  Snapshot
                </p>
                <h2 className="wiz-display mt-4 text-[28px] sm:text-[36px] md:text-[44px] text-wiz_ink dark:text-white">
                  At a glance
                </h2>
              </div>
              <div className="lg:col-span-8">
                <dl className="grid sm:grid-cols-2 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10">
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
              </div>
            </div>

            <div className="mt-14 sm:mt-20 grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="wiz-eyebrow text-wiz_ink dark:text-white/70">
                  Stack
                </p>
                <h2 className="wiz-display mt-4 text-[28px] sm:text-[36px] md:text-[44px] text-wiz_ink dark:text-white">
                  Languages to delivery
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[14.5px] sm:text-[16px] leading-[1.65] text-wiz_muted dark:text-white/60 max-w-2xl">
                  {SEO.skillsLine}
                </p>
                <Link
                  href="/#services"
                  className="mt-6 inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition">
                  View skills
                </Link>
              </div>
            </div>

            <div className="mt-14 sm:mt-20">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-4">
                  <p className="wiz-eyebrow text-wiz_ink dark:text-white/70">
                    Work
                  </p>
                  <h2 className="wiz-display mt-4 text-[28px] sm:text-[36px] md:text-[44px] text-wiz_ink dark:text-white">
                    Selected work
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[14.5px] sm:text-[16px] leading-[1.55] text-wiz_muted dark:text-white/60 max-w-xl">
                    Side projects and initiatives that sit alongside product work
                    at WizCommerce.
                  </p>
                </div>
              </div>

              <ul className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10">
                {projects.map((project) => (
                  <li key={project.name} className="bg-white dark:bg-dark_black">
                    <Link
                      href={project.href}
                      target={
                        project.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block p-5 sm:p-6 h-full hover:bg-wiz_chip/40 dark:hover:bg-white/[0.04] transition-colors group">
                      <p className="wiz-eyebrow text-wiz_muted dark:text-white/45 text-[10px]">
                        Project
                      </p>
                      <p className="mt-3 wiz-serif text-[20px] sm:text-[22px] text-wiz_ink dark:text-white group-hover:text-[#ff7a1a] dark:group-hover:text-[#ffb38a] transition-colors">
                        {project.name}
                      </p>
                      <p className="mt-3 text-[14px] leading-relaxed text-wiz_ink/70 dark:text-white/60">
                        {project.blurb}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 sm:mt-20 grid lg:grid-cols-12 gap-px bg-wiz_border dark:bg-white/10 border border-wiz_border dark:border-white/10">
              <div className="lg:col-span-5 bg-wiz_cream dark:bg-white/[0.03] p-6 sm:p-8 lg:p-10">
                <p className="wiz-eyebrow text-wiz_muted dark:text-white/45 text-[10px]">
                  Hire
                </p>
                <h2 className="wiz-serif mt-3 text-[28px] sm:text-[34px] text-wiz_ink dark:text-white leading-tight">
                  Looking for a full-stack SDE?
                </h2>
              </div>
              <div className="lg:col-span-7 bg-white dark:bg-dark_black p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                <p className="text-[14.5px] sm:text-[16px] leading-[1.6] text-wiz_muted dark:text-white/60 max-w-xl">
                  Java / Spring Boot / Hibernate + React / Next.js / TypeScript.
                  Chandigarh, Gurugram, or remote · IST. Open to full-time and
                  contract roles.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-wiz_ink dark:bg-white text-white dark:text-wiz_ink text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:opacity-90 transition">
                    Get in touch
                  </Link>
                  <a
                    href={`mailto:${SEO.email}`}
                    className="inline-flex items-center gap-2 border border-wiz_border dark:border-white/20 text-wiz_ink dark:text-white text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-3.5 hover:bg-wiz_chip/50 dark:hover:bg-white/5 transition">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Faq />
      </main>
    </>
  );
}
