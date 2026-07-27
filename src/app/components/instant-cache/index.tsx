'use client'

import { useEffect } from 'react'

/**
 * Registers the cache-first service worker and warms route caches
 * so revisits / in-app navigations feel near-instant.
 */
export default function InstantCache() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    if (!('serviceWorker' in navigator)) return

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }

    const warm = () => {
      ;['/about', '/contact', '/'].forEach((href) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        link.as = 'document'
        document.head.appendChild(link)
      })
    }

    const ric = window.requestIdleCallback?.bind(window)
    if (ric) {
      ric(register, { timeout: 2500 })
      ric(warm, { timeout: 4000 })
    } else {
      setTimeout(register, 1200)
      setTimeout(warm, 2000)
    }
  }, [])

  return null
}
