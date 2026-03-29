/**
 * Site-wide URL and path constants
 */
export const SITE_URL = "https://satwikkanhere.dev";

export const PATHS = {
  HOME: "/",
  CONTACT: "/contact",
  DOCUMENTATION: "/documentation",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
} as const;

export const OG_IMAGE_URL = `${SITE_URL}/images/og-image.jpg`;
export const OG_IMAGE_SQUARE_URL = `${SITE_URL}/images/og-square.jpg`;

/** Public indexable routes for sitemap.xml (path + crawl hints). */
export const SITEMAP_ROUTES = [
  {
    path: PATHS.HOME,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: PATHS.CONTACT,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: PATHS.DOCUMENTATION,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: PATHS.PRIVACY_POLICY,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
  {
    path: PATHS.TERMS_AND_CONDITIONS,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
] as const;

/** Paths crawlers should not index (relative to site root). */
export const ROBOTS_DISALLOW_PATHS = [
  "/api/",
  "/private/",
  "/admin/",
] as const;
