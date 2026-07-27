'use client'

import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { ColorThemeProvider } from './ColorThemeProvider'

/** Dock is interactive + below-fold — keep it out of the critical JS path. */
const WhatsAppFab = dynamic(() => import('../app/components/whatsapp-fab'), {
  ssr: false,
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='light'>
      <ColorThemeProvider>
        {children}
        <WhatsAppFab />
      </ColorThemeProvider>
    </ThemeProvider>
  )
}
