'use client'

import { ThemeProvider } from 'next-themes'
import ScrollToTop from '../app/components/scroll-to-top'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            {children}
            <ScrollToTop />
        </ThemeProvider>
    )
}
