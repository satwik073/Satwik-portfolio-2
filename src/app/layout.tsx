import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Atkinson_Hyperlegible, Instrument_Serif } from 'next/font/google'
import { personSchema, websiteSchema, SITE_URL, SITE_HOST } from '@/constants'
import InstantCache from './components/instant-cache'
import { THEME_BOOT_SCRIPT } from '@/constants/themes'
import { A11Y_BOOT_SCRIPT } from '@/constants/a11y'

const siteUrl = SITE_URL

// Self-hosted via next/font — zero third-party font CSS.
const geist = Geist({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-geist',
  weight: ['400', '500'],
  preload: true,
  adjustFontFallback: true,
})

// Editorial italic accent for headings.
const serif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: '400',
  style: ['italic'],
  preload: true,
  adjustFontFallback: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// Accessibility "readable font" — only fetched when a visitor turns it on.
const readable = Atkinson_Hyperlegible({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-readable',
  weight: ['400', '700'],
  preload: false,
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
  weight: '400',
  preload: false,
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#f2f4f1',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Satwik Kanhere | Software Engineer | Next.js · React · TypeScript · FastAPI',
    template: '%s | Satwik Kanhere - Software Engineer',
  },
  description: 'Satwik Kanhere — Software Engineer (SDE 1) at WizCommerce with 2+ years building production web apps in Next.js, React.js, TypeScript and FastAPI. PIM for 100K+ SKUs, Ag-Grid for 500K+ records, 65% faster page loads across 80+ clients. B.Tech CSE, Chitkara (9.41 CGPA).',
  applicationName: 'Satwik Kanhere Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Satwik Kanhere', 'Satvik Kanhere', 'Satwik', 'Satvik', 'satwikkanhere', 'satwik073',
    'Satwik Kanhere developer', 'Satwik Kanhere full stack', 'Satwik Kanhere Java',
    'Satwik Kanhere Spring Boot', 'Satwik Kanhere React', 'Satwik Kanhere Next.js',
    'Full Stack Developer', 'Java Developer', 'Spring Boot Developer', 'Hibernate',
    'Software Developer', 'SDE', 'SDE 1', 'Frontend Developer',
    'React Developer', 'Next.js Developer', 'TypeScript Developer', 'Node.js Developer',
    'WizCommerce', 'Infosys', 'Chitkara University',
    'Software Engineer India', 'Developer Chandigarh', 'Developer Gurugram',
    'Hire Full Stack Developer India', 'Hire Spring Boot Developer', 'Ag-Grid SSRM',
    'Product Information Management', SITE_HOST,
  ],
  authors: [
    { name: 'Satwik Kanhere', url: 'https://linkedin.com/in/satwikkanhere0730' },
    { name: 'Satvik Kanhere', url: 'https://linkedin.com/in/satwikkanhere0730' },
  ],
  creator: 'Satwik Kanhere',
  publisher: 'Satwik Kanhere',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Satwik Kanhere - Software Development Engineer',
    title: 'Satwik Kanhere | Software Engineer at WizCommerce',
    description: 'Software Engineer at WizCommerce | Next.js · React.js · TypeScript · FastAPI | PIM · CRM · AI Web Studio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Satwik Kanhere - Software Development Engineer Portfolio',
        type: 'image/jpeg',
      },
    ],
    firstName: 'Satwik',
    lastName: 'Kanhere',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@satwikkanhere',
    creator: '@satwikkanhere',
    title: 'Satwik Kanhere | Software Engineer',
    description: 'Software Engineer at WizCommerce | Next.js · React.js · TypeScript · FastAPI | PIM · CRM · AI Web Studio',
    images: ['/images/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/manifest.json',

  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'en-IN': siteUrl,
      'en': siteUrl,
    },
  },

  verification: {
    google: 'bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw',
  },

  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'linkedin:owner': 'satwikkanhere0730',
    'pinterest-rich-pin': 'true',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Satwik Kanhere',
    'msapplication-TileColor': '#234ae8',
    'geo.region': 'IN-CH',
    'geo.placename': 'Chandigarh, India',
    'geo.position': '30.7333;76.7794',
    'ICBM': '30.7333, 76.7794',
    'revisit-after': '3 days',
    'rating': 'General',
    'distribution': 'Global',
    'coverage': 'Worldwide',
    'dc.title': 'Satwik Kanhere - Software Development Engineer',
    'dc.creator': 'Satwik Kanhere',
    'dc.subject': 'Software Development, Full-Stack Engineering',
    'dc.language': 'en',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${serif.variable} ${readable.variable}`}>
      <head>
        <meta name="google-site-verification" content="bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Social meta tags */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Satwik Kanhere - Software Development Engineer" />

        {/* Profile metadata */}
        <meta property="profile:first_name" content="Satwik" />
        <meta property="profile:last_name" content="Kanhere" />
        <meta property="profile:username" content="satwikkanhere" />

        {/* Article metadata for rich previews */}
        <meta property="article:author" content="Satwik Kanhere" />
        <meta property="article:publisher" content="https://linkedin.com/in/satwikkanhere0730" />

        {/* Ownership & authorship */}
        <meta name="author" content="Satwik Kanhere" />
        <meta name="designer" content="Satwik Kanhere" />
        <meta name="owner" content="Satwik Kanhere" />
        <meta name="contact" content="satwikkanhere2003@gmail.com" />
        <link rel="author" href="/humans.txt" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="llms.txt — AI agent site index"
        />
        <link rel="describedby" href="/llms.txt" />

        {/* Language & region */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        {/* First paint: our paper white (or dark) before any stylesheet loads */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              'html,body{background:#f2f4f1;color:#202623}html.dark,html.dark body{background:#10161b;color:#f2f4f1;color-scheme:dark}',
          }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT + A11Y_BOOT_SCRIPT }}
        />
        {/* Chrome/Edge: prerender primary routes for ~0ms navigations */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: {
                    href_matches: ['/', '/about', '/contact'],
                  },
                  eagerness: 'moderate',
                },
              ],
              prefetch: [
                {
                  where: {
                    href_matches: ['/', '/about', '/contact'],
                  },
                  eagerness: 'eager',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [personSchema, websiteSchema],
            }),
          }}
        />
        {/* Paper grain — purely decorative */}
        <div aria-hidden className='grain' />
        <Providers>
          <Header />
          {children}
          <Footer />
          <InstantCache />
        </Providers>
      </body>
    </html>
  )
}
