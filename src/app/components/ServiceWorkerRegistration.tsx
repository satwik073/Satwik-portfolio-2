'use client'

import { useEffect } from 'react'

/**
 * Service Worker Registration Component
 * Handles SW lifecycle and provides cache control
 */
export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    // Register service worker
    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none',
        })

        console.log('[App] Service Worker registered:', registration.scope)

        // Check for updates periodically
        setInterval(() => {
          registration.update()
        }, 60 * 60 * 1000) // Every hour

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (!newWorker) return

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available
              console.log('[App] New content available, will update on next visit')
              
              // Optionally, prompt user to refresh
              if (window.confirm('New version available! Reload to update?')) {
                newWorker.postMessage('SKIP_WAITING')
                window.location.reload()
              }
            }
          })
        })

        // Handle controller change (new SW took over)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('[App] Controller changed, page will reload')
        })

      } catch (error) {
        console.error('[App] Service Worker registration failed:', error)
      }
    }

    // Register after page load for better performance
    if (document.readyState === 'complete') {
      registerSW()
    } else {
      window.addEventListener('load', registerSW)
      return () => window.removeEventListener('load', registerSW)
    }
  }, [])

  return null
}

/**
 * Utility to clear all caches
 */
export function clearAllCaches(): Promise<boolean[]> {
  return caches.keys().then((names) => {
    return Promise.all(names.map((name) => caches.delete(name)))
  })
}

/**
 * Utility to precache specific URLs
 */
export function precacheUrls(urls: string[]): void {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'CACHE_URLS',
      urls,
    })
  }
}

