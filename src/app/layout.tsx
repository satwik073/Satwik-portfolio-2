import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Instrument_Serif } from 'next/font/google'
import { personSchema, websiteSchema } from '@/constants'
import { COLOR_THEME_BOOTSTRAP_SCRIPT } from '@/constants/theme-bootstrap'
import InstantCache from './components/instant-cache'

const siteUrl = 'https://satwik-kanhere.vercel.app'

// Self-hosted via next/font — zero third-party font CSS for these faces.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-display',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  preload: true,
  adjustFontFallback: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-instrument',
  weight: '400',
  style: ['italic'],
  preload: false,
  adjustFontFallback: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1d1e' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Satwik Kanhere | Full-Stack SDE | Java Spring Boot React Next.js',
    template: '%s | Satwik Kanhere - Full-Stack Developer',
  },
  description: 'Satwik Kanhere — Full-Stack Software Development Engineer 1 at WizCommerce. Java, Spring Boot, Hibernate, React, Next.js, TypeScript. CRM, PIM, Ag-Grid, payments, CDN. B.Tech CSE Chitkara (9.41 CGPA). Chandigarh, India.',
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
    'Product Information Management', 'satwik-kanhere.vercel.app',
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
    title: 'Satwik Kanhere | Full-Stack Software Development Engineer at WizCommerce',
    description: 'Full-stack SDE 1 at WizCommerce | Java · Spring Boot · Hibernate · React · Next.js · TypeScript | Assembly & Flux | Apple assistive tech',
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
    title: 'Satwik Kanhere | Full-Stack Software Development Engineer',
    description: 'Full-stack SDE 1 | Java/Spring Boot/Hibernate + React/Next.js/TypeScript | Ag-Grid · payments · CDN | Assembly · Flux',
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
    'msapplication-TileColor': '#4928fd',
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
      className={`${inter.variable} ${playfair.variable} ${instrumentSerif.variable}`}>
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
        <meta name="theme-color" content="#ff7a1a" />
        <script
          dangerouslySetInnerHTML={{ __html: COLOR_THEME_BOOTSTRAP_SCRIPT }}
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
