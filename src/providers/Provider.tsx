'use client'

import { useEffect, useState, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { ColorThemeProvider } from './ColorThemeProvider'

const SocialDock = dynamic(() => import('../app/components/social-dock'), {
  ssr: false,
})

function AfterIdle({ children, ms = 3500 }: { children: ReactNode; ms?: number }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const enable = () => {
      if (!cancelled) setReady(true)
    }

    const schedule = () => {
      const ric = window.requestIdleCallback?.bind(window)
      if (ric) ric(enable, { timeout: ms })
      else setTimeout(enable, ms)
    }

    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })

    return () => {
      cancelled = true
    }
  }, [ms])

  if (!ready) return null
  return children
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='light'>
      <ColorThemeProvider>
        {children}
        <AfterIdle>
          <SocialDock />
        </AfterIdle>
      </ColorThemeProvider>
    </ThemeProvider>
  )
}
