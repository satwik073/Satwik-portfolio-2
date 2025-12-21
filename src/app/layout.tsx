import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'
import { interTight, instrumentSerif } from '@/lib/fonts'
import Script from 'next/script'
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration'

const siteUrl = "https://satwik-kanhere.vercel.app";

// Build-time cache version
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
    default: 'Satwik Kanhere | Software Development Engineer',
    template: '%s | Satwik Kanhere',
  },
  description: 'Satwik Kanhere - Software Development Engineer at WizCommerce. React.js, Next.js, Node.js Expert. Building enterprise solutions.',
  applicationName: 'Satwik Kanhere Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Satwik Kanhere', 'Software Developer', 'SDE', 'Full Stack Developer', 'React Developer', 'Next.js', 'Node.js', 'WizCommerce'],
  authors: [{ name: 'Satwik Kanhere', url: 'https://linkedin.com/in/satwikkanhere0730' }],
  creator: 'Satwik Kanhere',
  publisher: 'Satwik Kanhere',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // Open Graph
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Satwik Kanhere - Software Developer',
    title: 'Satwik Kanhere | Software Development Engineer',
    description: '🚀 SDE at WizCommerce | React.js, Next.js, Node.js Expert | Building scalable enterprise solutions',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Satwik Kanhere - Software Development Engineer',
        type: 'image/jpeg',
      },
    ],
    firstName: 'Satwik',
    lastName: 'Kanhere',
  },
  
  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    site: '@satwikkanhere',
    creator: '@satwikkanhere',
    title: 'Satwik Kanhere | Software Development Engineer',
    description: '🚀 SDE at WizCommerce | React.js, Next.js, Node.js Expert',
    images: ['/images/og-image.jpg'],
  },
  
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
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#4928fd' },
    ],
  },
  
  manifest: '/manifest.json',
  
  alternates: {
    canonical: siteUrl,
  },
  
  verification: {
    google: 'bJZ1VDoftPbrcFtzdlTF5ffCR0lLUjqOJH6IRxw8qQw',
  },
  
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'linkedin:owner': 'satwikkanhere0730',
    'pinterest-rich-pin': 'true',
    'instagram:creator': '@satwikkanhere',
    'skype_toolbar': 'skype_toolbar_parser_compatible',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Satwik Kanhere',
    'msapplication-TileColor': '#4928fd',
    'msapplication-TileImage': '/mstile-144x144.png',
    'theme-color': '#4928fd',
    'format-detection': 'telephone=yes',
    'geo.region': 'IN-CH',
    'geo.placename': 'Chandigarh, India',
    // Cache version for debugging
    'x-cache-version': CACHE_VERSION,
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
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
        {/* DNS Prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//code.tidio.co" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical assets for LCP optimization */}
        <link 
          rel="preload" 
          href="/images/home/avatar_1.jpg" 
          as="image" 
          type="image/jpeg"
        />
        <link 
          rel="preload" 
          href="/images/home/avatar_2.jpg" 
          as="image" 
          type="image/jpeg"
        />
        
        {/* Prefetch likely next navigations */}
        <link rel="prefetch" href="/contact" />
        
        {/* ============== FAVICON & ICONS ============== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* ============== SOCIAL META TAGS ============== */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Satwik Kanhere - Software Development Engineer" />
        <meta name="telegram:channel" content="@satwikkanhere" />
        <meta name="theme-color" content="#4928fd" />
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:admins" content="your-facebook-admin-id" />
        <meta property="article:author" content="Satwik Kanhere" />
        <meta property="article:publisher" content="https://linkedin.com/in/satwikkanhere0730" />
        <meta property="profile:first_name" content="Satwik" />
        <meta property="profile:last_name" content="Kanhere" />
        <meta property="profile:username" content="satwikkanhere" />
        
        {/* ============== CONTACT & BUSINESS ============== */}
        <meta name="author" content="Satwik Kanhere" />
        <meta name="designer" content="Satwik Kanhere" />
        <meta name="owner" content="Satwik Kanhere" />
        <meta name="contact" content="satwikkanhere2003@gmail.com" />
        
        {/* ============== LANGUAGE & REGION ============== */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        
        {/* ============== CACHE CONTROL META ============== */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="x-build-version" content={CACHE_VERSION} />
      </head>
      <body className={interTight.className}>
        {/* Service Worker Registration for offline caching */}
        <ServiceWorkerRegistration />
        
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        
        {/* Tidio Chat Widget - Loaded after page is interactive */}
        <Script
          src="//code.tidio.co/vimkwl9xsfgphj7hjmxld2h2mnvywtal.js"
          strategy="lazyOnload"
          id="tidio-chat-widget"
        />
      </body>
    </html>
  )
}
