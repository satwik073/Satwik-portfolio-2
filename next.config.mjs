/** @type {import('next').NextConfig} */

// Build-time constants for cache busting
const BUILD_TIME = Date.now()
const BUILD_ID = `${BUILD_TIME.toString(36)}-${Math.random().toString(36).substring(2, 8)}`

const nextConfig = {
  // Enable Next.js Image Optimization for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['motion', 'lucide-react', '@iconify/react'],
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Unique build ID for cache busting
  generateBuildId: async () => BUILD_ID,

  // Compression
  compress: true,

  // Powered by header removal
  poweredByHeader: false,

  // Strict mode for better debugging
  reactStrictMode: true,

  // Output configuration
  output: 'standalone',

  // Environment variables exposed to browser
  env: {
    NEXT_PUBLIC_BUILD_ID: BUILD_ID,
    NEXT_PUBLIC_BUILD_TIME: BUILD_TIME.toString(),
  },

  // Advanced cache headers
  async headers() {
    return [
      // ============== IMMUTABLE ASSETS (Content-hashed by Next.js) ==============
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Hash',
            value: BUILD_ID,
          },
        ],
      },

      // ============== STATIC CHUNKS (JS/CSS with hashes) ==============
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // ============== STATIC MEDIA ==============
      {
        source: '/_next/static/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // ============== OPTIMIZED IMAGES ==============
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
          },
        ],
      },

      // ============== PUBLIC IMAGES ==============
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },

      // ============== SVG ASSETS ==============
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, s-maxage=2592000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
        ],
      },

      // ============== FONTS ==============
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },

      // ============== FAVICON & ICONS ==============
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:path*.(ico|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },

      // ============== MANIFEST & PWA ==============
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },

      // ============== SITEMAP & ROBOTS ==============
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200',
          },
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },

      // ============== API ROUTES (No Cache) ==============
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store',
          },
        ],
      },

      // ============== HTML PAGES (Stale-While-Revalidate) ==============
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
          },
          {
            key: 'X-Build-ID',
            value: BUILD_ID,
          },
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Rewrites for versioned assets
  async rewrites() {
    return {
      beforeFiles: [
        // Version-agnostic asset URLs
        {
          source: '/assets/:version/:path*',
          destination: '/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

export default nextConfig
