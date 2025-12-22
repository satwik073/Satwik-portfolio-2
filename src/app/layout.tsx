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
// Title: 50-60 chars | Description: 150-160 chars
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // Primary title (55 chars) - includes brand + role + location
  title: {
    default: 'Satwik Kanhere | Full Stack Developer India | SDE',
    template: '%s | Satwik Kanhere - Developer',
  },
  
  // Description (158 chars) - action-oriented with keywords
  description: 'Satwik Kanhere - Software Engineer at WizCommerce. Expert React, Next.js, Node.js developer. Hire top Indian developer for web apps. Contact: +91-6284486063',
  
  // Comprehensive keywords covering all search variations
  keywords: [
    // Name variations (primary)
    'Satwik Kanhere',
    'Satwik',
    'Sat Kanhere',
    'Sat',
    'satwikkanhere',
    'satwik kanhere developer',
    'satwik developer',
    
    // Professional titles
    'Software Developer',
    'Software Engineer',
    'Full Stack Developer',
    'SDE',
    'SDE 1',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    
    // Technology keywords
    'React Developer',
    'React.js Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'MERN Stack Developer',
    
    // Company & education
    'WizCommerce Developer',
    'Infosys Developer',
    'Chitkara University',
    
    // Location keywords
    'Developer India',
    'Developer Chandigarh',
    'Developer Gurugram',
    'Indian Developer',
    'Hire Developer India',
    'Remote Developer India',
    
    // Action keywords
    'Hire React Developer',
    'Hire Full Stack Developer',
    'Best Developer India',
    'Top Developer Portfolio',
    
    // Long-tail keywords
    'Enterprise Software Developer India',
    'PIM System Developer',
    'Ag-Grid Expert',
  ],
  
  applicationName: 'Satwik Kanhere Portfolio',
  authors: [
    { name: 'Satwik Kanhere', url: siteUrl },
    { name: 'Sat Kanhere', url: siteUrl },
  ],
  creator: 'Satwik Kanhere',
  publisher: 'Satwik Kanhere',
  
  // Robots - full indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph (60 char title, 160 char desc)
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Satwik Kanhere - Full Stack Developer',
    title: 'Satwik Kanhere | React & Node.js Developer | Hire Now',
    description: 'Top-rated Full Stack Developer specializing in React, Next.js, Node.js. Building enterprise apps at WizCommerce. Available for freelance & full-time.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Satwik Kanhere - Full Stack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
    firstName: 'Satwik',
    lastName: 'Kanhere',
    username: 'satwikkanhere',
  },
  
  // Twitter (optimized for shares)
  twitter: {
    card: 'summary_large_image',
    site: '@satwikkanhere',
    creator: '@satwikkanhere',
    title: 'Satwik Kanhere | Full Stack Developer | React Expert',
    description: 'SDE at WizCommerce building enterprise solutions. React, Next.js, Node.js expert. Open to opportunities.',
    images: ['/images/og-image.jpg'],
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
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
  
  // Additional SEO meta
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale:alternate': 'en_IN',
    
    // Author variations for search
    'author': 'Satwik Kanhere',
    'designer': 'Satwik Kanhere',
    'owner': 'Satwik Kanhere',
    
    // Contact for rich results
    'contact': 'satwikkanhere2003@gmail.com',
    
    // Geo for local SEO
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurugram, Haryana, India',
    'geo.position': '28.4595;77.0266',
    'ICBM': '28.4595, 77.0266',
    
    // Mobile
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Satwik K',
    
    // Theme
    'theme-color': '#4928fd',
    'msapplication-TileColor': '#4928fd',
    
    // Cache version
    'x-cache-version': CACHE_VERSION,
    
    // Content info
    'classification': 'Software Developer Portfolio',
    'category': 'Technology, Software Development',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    'revisit-after': '3 days',
    
    // Name variations for search engines
    'name': 'Satwik Kanhere',
    'nickname': 'Sat',
    'alternate-name': 'Sat Kanhere',
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
        {/* ============== CRITICAL RESOURCE HINTS ============== */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//code.tidio.co" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Preload LCP images */}
        <link rel="preload" href="/images/home/avatar_1.jpg" as="image" type="image/jpeg" />
        <link rel="prefetch" href="/contact" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* ============== SEO: NAME VARIATIONS ============== */}
        {/* These help search engines understand name variations */}
        <meta name="author" content="Satwik Kanhere" />
        <meta name="creator" content="Satwik Kanhere" />
        <meta itemProp="name" content="Satwik Kanhere" />
        <meta itemProp="alternateName" content="Sat Kanhere" />
        <meta itemProp="alternateName" content="Satwik" />
        <meta itemProp="alternateName" content="Sat" />
        
        {/* ============== SEO: SOCIAL PROFILES ============== */}
        <meta property="og:see_also" content="https://linkedin.com/in/satwikkanhere0730" />
        <meta property="og:see_also" content="https://github.com/satwik073" />
        <meta property="og:see_also" content="https://twitter.com/satwikkanhere" />
        
        {/* Profile structured data */}
        <meta property="profile:first_name" content="Satwik" />
        <meta property="profile:last_name" content="Kanhere" />
        <meta property="profile:username" content="satwikkanhere" />
        
        {/* ============== SEO: BUSINESS INFO ============== */}
        <meta name="contact" content="satwikkanhere2003@gmail.com" />
        <meta name="telephone" content="+91-6284486063" />
        <meta property="business:contact_data:street_address" content="Gurugram" />
        <meta property="business:contact_data:locality" content="Gurugram" />
        <meta property="business:contact_data:region" content="Haryana" />
        <meta property="business:contact_data:country_name" content="India" />
        
        {/* ============== SEO: LANGUAGE ============== */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="en-IN" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        
        {/* ============== SEO: CRAWLING ============== */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        
        {/* ============== SEO: VERIFICATION ============== */}
        <meta name="google-site-verification" content="bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw" />
        
        {/* Cache control */}
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="General" />
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
