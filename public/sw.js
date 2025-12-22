/**
 * Service Worker for Advanced Caching
 * Implements stale-while-revalidate and cache-first strategies
 */

const CACHE_VERSION = 'v1.0.0'
const CACHE_NAME = `satwik-portfolio-${CACHE_VERSION}`

// Assets to pre-cache (critical path)
const PRECACHE_ASSETS = [
  '/',
  '/contact',
  '/manifest.json',
]

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, then network (for static assets)
  cacheFirst: [
    /\/_next\/static\//,
    /\/images\//,
    /\/fonts\//,
    /\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico|woff|woff2)$/,
  ],
  // Network first, fallback to cache (for HTML pages)
  networkFirst: [
    /^\/$/,
    /^\/contact/,
    /^\/documentation/,
    /^\/privacy-policy/,
    /^\/terms-and-conditions/,
  ],
  // Stale while revalidate (for API and dynamic content)
  staleWhileRevalidate: [
    /\/api\//,
  ],
  // Network only (never cache)
  networkOnly: [
    /\/api\/auth/,
  ],
}

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precaching critical assets')
      return cache.addAll(PRECACHE_ASSETS)
    }).then(() => {
      // Activate immediately
      return self.skipWaiting()
    })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('satwik-portfolio-') && name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name)
            return caches.delete(name)
          })
      )
    }).then(() => {
      // Take control of all clients
      return self.clients.claim()
    })
  )
})

// Fetch event - apply caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    return
  }

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Determine caching strategy
  const strategy = getStrategy(url.pathname)

  switch (strategy) {
    case 'cacheFirst':
      event.respondWith(cacheFirst(request))
      break
    case 'networkFirst':
      event.respondWith(networkFirst(request))
      break
    case 'staleWhileRevalidate':
      event.respondWith(staleWhileRevalidate(request))
      break
    case 'networkOnly':
      event.respondWith(fetch(request))
      break
    default:
      event.respondWith(networkFirst(request))
  }
})

// Get caching strategy for a path
function getStrategy(pathname) {
  for (const [strategy, patterns] of Object.entries(CACHE_STRATEGIES)) {
    for (const pattern of patterns) {
      if (pattern.test(pathname)) {
        return strategy
      }
    }
  }
  return 'networkFirst'
}

// Cache First strategy
async function cacheFirst(request) {
  const cached = await caches.match(request)
  if (cached) {
    return cached
  }

  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.error('[SW] Cache first failed:', error)
    throw error
  }
}

// Network First strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.log('[SW] Network failed, falling back to cache')
    const cached = await caches.match(request)
    if (cached) {
      return cached
    }
    throw error
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request)

  // Fetch in background
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  }).catch((error) => {
    console.error('[SW] Background fetch failed:', error)
    return cached
  })

  // Return cached immediately, or wait for network
  return cached || fetchPromise
}

// Message handler for cache control
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      console.log('[SW] Cache cleared')
    })
  }

  if (event.data?.type === 'CACHE_URLS') {
    const urls = event.data.urls
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urls)
    })
  }
})



