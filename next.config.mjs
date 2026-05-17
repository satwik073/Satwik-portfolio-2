/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Omit X-Powered-By for cleaner responses + minor hardening. */
  poweredByHeader: false,

  /** Enable gzip / brotli compression (default true, explicit for clarity). */
  compress: true,

  /** Strip the build-time React property checks → smaller production JS. */
  reactStrictMode: true,

  /** Defaults to 'no-cache' for HTML routes — we override per-route below. */
  generateEtags: true,

  /** Image pipeline — AVIF/WebP, long-cache, content-hashed by Next. */
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year — content-hashed in Next's image cache
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /** Production build optimizations. */
  experimental: {
    // Tree-shake icon libs so we don't ship every icon in the bundle.
    optimizePackageImports: [
      '@iconify/react',
      'lucide-react',
      'motion',
    ],
  },

  async headers() {
    return [
      // ── Security headers across the whole site ──────────────────────
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
          // Tell crawlers everything is indexable + image-rich.
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1',
          },
        ],
      },

      // ── Next's content-hashed JS / CSS chunks: cache forever ────────
      // Filenames are like /_next/static/chunks/main-9f6b…hash.js → safe
      // to mark immutable; any content change produces a new URL.
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // ── Next-served images (after Image Optimization) ──────────────
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // ── Static images, fonts in /public ─────────────────────────────
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },

      // ── SEO files: short browser cache, longer CDN cache ───────────
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },

      // ── Home page — ISR-friendly: CDN serves cached HTML to crawlers
      //    instantly, revalidates in background. Browser doesn't cache.
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
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
