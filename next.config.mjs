/** @type {import('next').NextConfig} */

/** 1 year — safe for content-hashed / versioned assets */
const IMMUTABLE = 'public, max-age=31536000, immutable'

/**
 * HTML / SEO documents — most aggressive practical setup:
 * - Browser keeps a full day (survives reloads)
 * - Vercel/CDN edge keeps a year and serves stale while revalidating
 * - Redeploys still ship new builds; edge picks up new deployment IDs
 */
const HTML_CACHE =
  'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=31536000, stale-if-error=31536000'

/** Pure CDN override used by Vercel (takes precedence over Cache-Control s-maxage) */
const VERCEL_CDN =
  'public, max-age=31536000, stale-while-revalidate=31536000, stale-if-error=31536000'

const htmlCacheHeaders = [
  { key: 'Cache-Control', value: HTML_CACHE },
  { key: 'CDN-Cache-Control', value: VERCEL_CDN },
  { key: 'Vercel-CDN-Cache-Control', value: VERCEL_CDN },
]

const immutableHeaders = [{ key: 'Cache-Control', value: IMMUTABLE }]

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  generateEtags: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizePackageImports: ['@iconify/react', 'lucide-react', 'motion'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async headers() {
    return [
      // ── Security (no Cache-Control here — don't clobber route caches) ──
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1',
          },
        ],
      },

      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          { key: 'Service-Worker-Allowed', value: '/' },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: immutableHeaders,
      },

      // ── Public media / icons — forever ───────────────────────────────
      {
        source: '/images/:path*',
        headers: immutableHeaders,
      },
      {
        source: '/fonts/:path*',
        headers: [
          ...immutableHeaders,
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: immutableHeaders,
      },
      {
        source: '/apple-touch-icon.png',
        headers: immutableHeaders,
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=604800, s-maxage=31536000, stale-while-revalidate=31536000',
          },
          { key: 'CDN-Cache-Control', value: VERCEL_CDN },
          { key: 'Vercel-CDN-Cache-Control', value: VERCEL_CDN },
        ],
      },

      // ── SEO / text discovery files ───────────────────────────────────
      {
        source: '/sitemap.xml',
        headers: htmlCacheHeaders,
      },
      {
        source: '/robots.txt',
        headers: htmlCacheHeaders,
      },
      {
        source: '/humans.txt',
        headers: htmlCacheHeaders,
      },
      {
        source: '/llms.txt',
        headers: htmlCacheHeaders,
      },

      // ── HTML pages — max CDN + day-long browser ──────────────────────
      {
        source: '/',
        headers: htmlCacheHeaders,
      },
      {
        source: '/about',
        headers: htmlCacheHeaders,
      },
      {
        source: '/contact',
        headers: htmlCacheHeaders,
      },

      // ── Static JSON APIs ─────────────────────────────────────────────
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=31536000, stale-if-error=31536000',
          },
          { key: 'CDN-Cache-Control', value: VERCEL_CDN },
          { key: 'Vercel-CDN-Cache-Control', value: VERCEL_CDN },
        ],
      },
    ]
  },

  async redirects() {
    return [
      { source: '/signin', destination: '/', permanent: true },
      { source: '/signup', destination: '/', permanent: true },
      { source: '/forgot-password', destination: '/', permanent: true },
      { source: '/api/auth/:path*', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
