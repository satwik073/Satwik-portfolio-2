/**
 * Site-wide URL and path constants
 */

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL per environment (e.g. https://satwik-kanhere.in);
 * falls back to Vercel's production domain, then the original vercel.app URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://satwik-kanhere.vercel.app'
).replace(/\/$/, '')

export const SITE_HOST = new URL(SITE_URL).host

/** Absolute URL for a site path. */
export const absoluteUrl = (path = '/') => (path === '/' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`)

export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const

export const OG_IMAGE_URL = absoluteUrl('/images/og-image.jpg')
export const OG_IMAGE_SQUARE_URL = absoluteUrl('/images/og-square.jpg')

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

/**
 * Crawl hints for sitemap.xml. Routes themselves are discovered from the
 * app directory at build time — this only tunes priority/frequency.
 * Anything not listed gets SITEMAP_DEFAULTS.
 */
export const SITEMAP_HINTS: Record<string, { changeFrequency: ChangeFrequency; priority: number }> = {
  '/': { changeFrequency: 'weekly', priority: 1 },
  '/about': { changeFrequency: 'weekly', priority: 0.9 },
  '/contact': { changeFrequency: 'monthly', priority: 0.8 },
}

export const SITEMAP_DEFAULTS = { changeFrequency: 'monthly' as ChangeFrequency, priority: 0.6 }

/** Indexable static files (relative to /public) to include in the sitemap. */
export const SITEMAP_FILES = [
  { path: '/satwik-kanhere-resume.pdf', changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
]

/** Paths crawlers should not index (relative to site root). */
export const ROBOTS_DISALLOW_PATHS = ['/api/', '/private/', '/admin/'] as const
