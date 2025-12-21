import { MetadataRoute } from 'next'
import { generateContentHash, ContentVersion, BUILD_METADATA } from '@/lib/cache'

// Generate sitemap hash for cache validation
const SITEMAP_HASH = generateContentHash(
  `${ContentVersion.PAGES}-${BUILD_METADATA.timestamp}`
)

// Page metadata with accurate timestamps
const pages = {
  home: {
    path: '',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  contact: {
    path: '/contact',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  aboutus: {
    path: '/#aboutus',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  services: {
    path: '/#services',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  work: {
    path: '/#work',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  team: {
    path: '/#team',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  awards: {
    path: '/#awards',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  pricing: {
    path: '/#pricing',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  },
  privacy: {
    path: '/privacy-policy',
    lastModified: new Date('2025-01-01T00:00:00Z'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  terms: {
    path: '/terms-and-conditions',
    lastModified: new Date('2025-01-01T00:00:00Z'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  documentation: {
    path: '/documentation',
    lastModified: new Date('2025-12-21T12:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  },
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://satwik-kanhere.vercel.app'
  
  return Object.values(pages).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}

// Export for cache validation
export { SITEMAP_HASH, pages }
