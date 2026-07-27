/* Cache-first + background revalidate — repeat loads ≈ 0ms network. */
const CACHE = 'satwik-instant-v1'

const PRECACHE = [
  '/',
  '/about',
  '/contact',
  '/manifest.json',
  '/favicon.ico',
  '/humans.txt',
  '/llms.txt',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (
    url.pathname.startsWith('/_next/webpack') ||
    url.pathname.startsWith('/api/auth')
  ) {
    return
  }

  event.respondWith(staleWhileRevalidate(event, request))
})

async function staleWhileRevalidate(event, request) {
  const cache = await caches.open(CACHE)
  const cached = await cache.match(request)

  const networkPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok) {
        cache.put(request, fresh.clone())
      }
      return fresh
    })
    .catch(() => null)

  if (cached) {
    // Keep cache warm in background; respond instantly from cache
    event.waitUntil(networkPromise)
    return cached
  }

  const fresh = await networkPromise
  if (fresh) return fresh

  if (request.mode === 'navigate') {
    const home = await cache.match('/')
    if (home) return home
  }

  return new Response('Offline', { status: 503, statusText: 'Offline' })
}
