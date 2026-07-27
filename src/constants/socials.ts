/**
 * Social / contact channels — single source for footer, contact, about, schema.
 * Only include profiles you actually own (dead links hurt SEO + trust).
 */
import { SEO } from "./seo";

export type SocialLink = {
  id: string;
  label: string;
  handle: string;
  href: string;
  external?: boolean;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "satwikkanhere0730",
    href: SEO.linkedin,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "satwik073",
    href: SEO.github,
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: SEO.phone,
    href: SEO.whatsapp,
    external: true,
  },
  {
    id: "email",
    label: "Email",
    handle: SEO.email,
    href: `mailto:${SEO.email}`,
  },
  {
    id: "x",
    label: "X / Twitter",
    handle: "@satwikkanhere",
    href: "https://x.com/satwikkanhere",
    external: true,
  },
  {
    id: "resume",
    label: "Resume",
    handle: "View CV",
    href: SEO.resume,
    external: true,
  },
  {
    id: "assembly",
    label: "Assembly",
    handle: "assembly-stack.vercel.app",
    href: SEO.assembly,
    external: true,
  },
  {
    id: "flux",
    label: "Flux",
    handle: "flux-code.vercel.app",
    href: SEO.flux,
    external: true,
  },
];

/** Icon / connect strips */
export const SOCIAL_PRIMARY = SOCIAL_LINKS.filter((s) =>
  ["linkedin", "github", "whatsapp", "x", "email", "resume"].includes(s.id)
);

export const SOCIAL_SAME_AS = [
  SEO.linkedin,
  "https://www.linkedin.com/in/satwikkanhere0730",
  SEO.github,
  "https://www.github.com/satwik073",
  "https://x.com/satwikkanhere",
  "https://twitter.com/satwikkanhere",
  SEO.resume,
  SEO.assembly,
  SEO.flux,
  SEO.whatsapp,
  `${SEO.site}/about`,
  `${SEO.site}/contact`,
];
