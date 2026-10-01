import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Faq from "@/app/components/ui/Faq";
import Ending from "@/app/components/ui/Ending";
import Reading, { Archive, ChapterMeta } from "@/app/components/ui/Reading";
import { RESUME } from "@/constants/resume";
import {
  SEO,
  SITE_URL,
  SOCIAL_PRIMARY,
  aboutPageSchema,
  faqSchema,
  SCHEMA_IDS,
} from "@/constants";

/** Fully static until redeploy */
export const dynamic = "force-static";
export const revalidate = false;

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
  { year: "Role", title: `${RESUME.title} · SDE 1 @ ${SEO.company}` },
  { year: "Focus", title: RESUME.headline },
  { year: "Location", title: RESUME.location },
  { year: "Education", title: "B.Tech CSE · Chitkara · 9.41 CGPA" },
];

const work = [
  ...RESUME.experience.map((j) => ({ year: j.dates.replace(" — ", "–"), title: `${j.role} · ${j.company}`, href: "/#experience" })),
  { year: "2021–2025", title: `${RESUME.education.degree} · Chitkara University` },
];

const projects = RESUME.projects.map((p) => ({ year: p.name.split(" ")[0], title: `${p.name} — ${p.stack.join(", ")}`, href: p.href }));

const channels = SOCIAL_PRIMARY.map((s) => ({
  year: s.label,
  title: s.handle,
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

      <main id="main">
        <section data-tone="light" className="tone px-[6vw] sm:px-[4.5vw] pt-[108px] lg:pt-[110px] pb-[72px] min-h-[88svh] flex flex-col">
          <ChapterMeta index="—" total="About" name="The person" years={`${SEO.location} · ${SEO.timezone}`} />
          <h1 className="display mt-auto text-[clamp(84px,15.2vw,300px)] leading-[0.84]">
            <span className="block">Satwik</span>
            <span className="block text-right">Kanhere.</span>
          </h1>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 items-end">
            <p className="text-[clamp(20px,1.7vw,26px)] leading-[1.3] tracking-[-0.02em] max-w-[28ch]">
              {SEO.jobTitle} at {SEO.company}. Full-stack, from the database to the pixel.
            </p>
            <div className="flex sm:justify-end gap-8 text-[14px]">
              <Link href="/contact" className="group inline-flex gap-2"><span className="draw">Get in touch</span><span className="arrow">↗</span></Link>
              <a href={SEO.resume} target="_blank" rel="noopener noreferrer" className="group inline-flex gap-2"><span className="draw">Résumé</span><span className="arrow">↗</span></a>
            </div>
          </div>
        </section>

        <div>
          <Reading
            label="01 — Who"
            as="h2"
            claim="A software engineer who ships production web apps."
            readHref="/contact"
            readLabel="Start a conversation"
            note="Also searched as Satvik Kanhere · satwik073 · satwikkanhere."
            archive={<Archive title="At a glance" note="Snapshot" items={facts} />}>
            {SEO.longBio.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Reading>
        </div>

        <div id="work" className="border-t">
          <Reading
            label="02 — Work"
            as="h2"
            claim="Experience and projects."
            readHref="/#experience"
            readLabel="See full experience"
            archive={
              <>
                <Archive title="Experience" note="Timeline" items={work} />
                <Archive title="Projects" note="Live" items={projects} />
              </>
            }>
            <p>
              Three enterprise products at WizCommerce — PIM, CRM and AI Web Studio — plus two live side
              projects, Arobix Design Studio and Flux.
            </p>
          </Reading>
        </div>

        <div id="stack" className="border-t">
          <Reading
            label="03 — Stack"
            as="h2"
            claim="Languages to delivery."
            readHref="/satwik-kanhere-resume.pdf"
            readLabel="Download résumé"
            archive={
              <Archive
                title="Inside the stack"
                note={`${RESUME.skills.length} groups`}
                items={RESUME.skills.map((g) => ({ year: g.group, title: g.items.join(" · ") }))}
              />
            }>
            <p>{SEO.skillsLine}.</p>
          </Reading>
        </div>

        <div className="border-t">
          <Reading
            label="04 — Elsewhere"
            as="h2"
            claim="Every channel, one person."
            archive={<Archive title="Channels" note="Replies within 24h" items={channels} />}>
            <p>
              Next.js · React.js · TypeScript · FastAPI. Gurugram, Chandigarh, or remote · IST. Open to
              Software Engineer, frontend and full-stack roles.
            </p>
          </Reading>
        </div>

        <Faq />
        <Ending first="Let’s" second="build." />
      </main>
    </>
  );
}
