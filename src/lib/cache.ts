/**
 * Advanced Cache Management System
 * Provides content hashing, cache busting, and version control
 */

// Build metadata - captured at build time
export const BUILD_METADATA = {
  timestamp: Date.now(),
  date: new Date().toISOString(),
  version: process.env.npm_package_version || '1.0.0',
} as const

/**
 * Generate a deterministic hash from content
 * Uses FNV-1a algorithm for fast, consistent hashing
 */
export function generateContentHash(content: string): string {
  let hash = 2166136261 // FNV offset basis
  for (let i = 0; i < content.length; i++) {
    hash ^= content.charCodeAt(i)
    hash = Math.imul(hash, 16777619) // FNV prime
  }
  return (hash >>> 0).toString(36).padStart(7, '0')
}

/**
 * Generate a unique build hash
 * Combines version, timestamp, and random entropy
 */
export function generateBuildHash(): string {
  const data = `${BUILD_METADATA.version}-${BUILD_METADATA.timestamp}-${Math.random()}`
  return generateContentHash(data)
}

/**
 * Generate ETag for content
 * Follows HTTP ETag specification
 */
export function generateETag(content: string, weak = false): string {
  const hash = generateContentHash(content)
  return weak ? `W/"${hash}"` : `"${hash}"`
}

/**
 * Cache Control Presets for different content types
 */
export const CacheControl = {
  // Immutable assets (hashed filenames) - cache forever
  IMMUTABLE: 'public, max-age=31536000, immutable',
  
  // Static assets that may change - long cache with revalidation
  STATIC: 'public, max-age=86400, stale-while-revalidate=604800',
  
  // Dynamic content - short cache, always revalidate
  DYNAMIC: 'public, max-age=0, must-revalidate',
  
  // Private user content - no shared caching
  PRIVATE: 'private, max-age=0, must-revalidate',
  
  // No caching at all
  NO_STORE: 'no-store, no-cache, must-revalidate, proxy-revalidate',
  
  // Stale-while-revalidate pattern for perceived performance
  SWR: 'public, max-age=60, stale-while-revalidate=86400',
  
  // CDN optimized - edge caching
  CDN: 'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800',
} as const

/**
 * Content versioning for cache invalidation
 */
export const ContentVersion = {
  // Increment these when content changes significantly
  PAGES: '2025.12.21.1',
  STYLES: '2025.12.21.1',
  SCRIPTS: '2025.12.21.1',
  IMAGES: '2025.12.21.1',
  API: '2025.12.21.1',
} as const

/**
 * Generate versioned URL for cache busting
 */
export function versionedUrl(path: string, version?: string): string {
  const v = version || generateBuildHash()
  const separator = path.includes('?') ? '&' : '?'
  return `${path}${separator}v=${v}`
}

/**
 * Generate integrity hash for subresource integrity (SRI)
 * Note: In production, use crypto.subtle for proper SHA hashing
 */
export function generateIntegrityHash(content: string): string {
  // Simple hash for demonstration - use proper SHA-384 in production
  const hash = generateContentHash(content)
  return `sha256-${Buffer.from(hash).toString('base64')}`
}

/**
 * Cache key generator for consistent caching
 */
export function generateCacheKey(
  type: 'page' | 'api' | 'asset' | 'image',
  path: string,
  params?: Record<string, string>
): string {
  const version = ContentVersion[type.toUpperCase() as keyof typeof ContentVersion] || ContentVersion.PAGES
  const paramString = params ? JSON.stringify(params) : ''
  return generateContentHash(`${type}:${path}:${version}:${paramString}`)
}

/**
 * Preload hints for critical resources
 */
export const PreloadHints = {
  // Critical fonts
  fonts: [
    { href: '/fonts/inter-tight.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { href: '/fonts/instrument-serif.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  ],
  // Critical images (LCP candidates)
  images: [
    { href: '/images/home/avatar_1.jpg', as: 'image' },
    { href: '/images/home/avatar_2.jpg', as: 'image' },
  ],
  // Critical scripts
  scripts: [] as { href: string; as: 'script' }[],
} as const

/**
 * Resource hints for performance
 */
export const ResourceHints = {
  // DNS prefetch for third-party domains
  dnsPrefetch: [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
    '//code.tidio.co',
  ],
  // Preconnect for critical origins
  preconnect: [
    { href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ],
  // Prefetch for likely next navigations
  prefetch: [
    '/contact',
  ],
} as const

// Export build hash for use in templates
export const BUILD_HASH = generateBuildHash()

