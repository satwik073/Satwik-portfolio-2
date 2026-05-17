import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display, Instrument_Serif } from 'next/font/google'

const siteUrl = 'https://satwikkanhere.dev'

// Self-host fonts via next/font — eliminates external Google Fonts request,
// kills FOUT, and gives a tighter FCP. General Sans is still loaded via
// Fontshare in globals.css since it isn't on Google Fonts.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

// Playfair Display — primary heading face. Classic editorial display serif
// with variable weights and elegant italics.
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: 'variable',
  style: ['normal', 'italic'],
})

// Instrument Serif — kept for the existing .instrument-font utility (italic
// accent on a few words in the hero).
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
  weight: '400',
  style: ['normal', 'italic'],
})

const CACHE_VERSION = process.env.NEXT_PUBLIC_BUILD_ID || '1.0.0'

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
    default: 'Satwik Kanhere | Software Development Engineer | Full-Stack Developer',
    template: '%s | Satwik Kanhere - Software Developer',
  },
  description: 'Satwik Kanhere (Satvik Kanhere) - Software Development Engineer at WizCommerce. Full-stack developer: React.js, Next.js, Node.js, TypeScript. Building enterprise systems for 85+ US clients. Published researcher. Chandigarh, India.',
  applicationName: 'Satwik Kanhere Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Satwik Kanhere', 'Satvik Kanhere', 'Satwik', 'Satvik', 'satwikkanhere',
    'Satwik Kanhere developer', 'Satwik Kanhere portfolio', 'Satwik Kanhere software engineer',
    'Software Developer', 'SDE', 'Full Stack Developer', 'React Developer',
    'Next.js Developer', 'Node.js Developer', 'WizCommerce',
    'Software Engineer India', 'Developer Chandigarh', 'Hire developer India',
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
    title: 'Satwik Kanhere | Software Development Engineer at WizCommerce',
    description: 'SDE at WizCommerce | Architecting enterprise systems for 85+ US clients | React.js, Next.js, Node.js, TypeScript | Published Researcher',
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
    title: 'Satwik Kanhere | Software Development Engineer',
    description: 'SDE at WizCommerce | Full-stack engineer building enterprise systems at scale | React, Next.js, Node.js | Published researcher',
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
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://cdn.fontshare.com" />

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

        {/* Language & region */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="theme-color" content="#4928fd" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
