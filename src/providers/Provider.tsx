'use client'

import { ThemeProvider } from 'next-themes'
import ScrollToTop from '../app/components/scroll-to-top'
import WhatsAppFab from '../app/components/whatsapp-fab'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='light'>
      {children}
      <ScrollToTop />
      <WhatsAppFab />
    </ThemeProvider>
  )
}
