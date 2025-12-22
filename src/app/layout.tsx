import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'
import { interTight, instrumentSerif } from '@/lib/fonts'
import Script from 'next/script'
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration'

const siteUrl = "https://satwik-kanhere.vercel.app";

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

// SEO-Optimized Metadata following Google's best practices
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: {
    default: 'Satwik Kanhere | Full Stack Developer India | SDE',
    template: '%s | Satwik Kanhere',
  },
  
  description: 'Satwik Kanhere - Software Engineer at WizCommerce. Expert React, Next.js, Node.js developer. Hire top Indian developer for web apps. Contact: +91-6284486063',
  
  keywords: [
    'Satwik Kanhere', 'Satwik', 'Sat Kanhere', 'Sat', 'satwikkanhere',
    'Software Developer', 'Full Stack Developer', 'SDE', 'React Developer',
    'Next.js Developer', 'Node.js Developer', 'Developer India', 'Hire Developer India',
  ],
  
  applicationName: 'Satwik Kanhere Portfolio',
  authors: [{ name: 'Satwik Kanhere', url: siteUrl }],
  creator: 'Satwik Kanhere',
  publisher: 'Satwik Kanhere',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Satwik Kanhere - Full Stack Developer',
    title: 'Satwik Kanhere | React & Node.js Developer | Hire Now',
    description: 'Top-rated Full Stack Developer specializing in React, Next.js, Node.js. Building enterprise apps at WizCommerce. Available for hire.',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Satwik Kanhere - Full Stack Developer Portfolio',
    }],
    firstName: 'Satwik',
    lastName: 'Kanhere',
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@satwikkanhere',
    creator: '@satwikkanhere',
    title: 'Satwik Kanhere | Full Stack Developer | React Expert',
    description: 'SDE at WizCommerce building enterprise solutions. React, Next.js, Node.js expert.',
    images: ['/images/og-image.jpg'],
  },
  
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  
  manifest: '/manifest.json',
  
  // Single canonical - no duplicates
  alternates: {
    canonical: siteUrl,
  },
  
  verification: {
    google: 'bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw',
  },
  
  // Fixed: Using ISO standard language codes only
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'author': 'Satwik Kanhere',
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurugram, Haryana, India',
    'geo.position': '28.4595;77.0266',
    'ICBM': '28.4595, 77.0266',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Satwik K',
    'theme-color': '#4928fd',
    'msapplication-TileColor': '#4928fd',
    'x-cache-version': CACHE_VERSION,
    'classification': 'Software Developer Portfolio',
    'category': 'Technology',
    'coverage': 'Worldwide',
    'rating': 'General',
    'revisit-after': '3 days',
  },
  
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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
      className={`${interTight.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//code.tidio.co" />
        
        {/* Preload LCP images */}
        <link rel="preload" href="/images/home/avatar_1.jpg" as="image" type="image/jpeg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Single canonical hreflang - no duplicates */}
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        
        {/* Author and profile meta */}
        <meta name="author" content="Satwik Kanhere" />
        <meta itemProp="name" content="Satwik Kanhere" />
        <meta itemProp="alternateName" content="Sat Kanhere" />
        
        {/* Social profiles */}
        <meta property="og:see_also" content="https://linkedin.com/in/satwikkanhere0730" />
        <meta property="og:see_also" content="https://github.com/satwik073" />
        
        {/* Profile data */}
        <meta property="profile:first_name" content="Satwik" />
        <meta property="profile:last_name" content="Kanhere" />
        <meta property="profile:username" content="satwikkanhere" />
        
        {/* Contact info */}
        <meta name="contact" content="satwikkanhere2003@gmail.com" />
        
        {/* Crawler instructions */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="robots" content="index, follow" />
        
        {/* Google verification */}
        <meta name="google-site-verification" content="bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw" />
      </head>
      <body className={interTight.className}>
        <ServiceWorkerRegistration />
        
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        
        <Script
          src="//code.tidio.co/vimkwl9xsfgphj7hjmxld2h2mnvywtal.js"
          strategy="lazyOnload"
          id="tidio-chat-widget"
        />
      </body>
    </html>
  )
}
