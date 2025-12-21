import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'

const siteUrl = "https://satwikkanhere.dev";

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
  
  // Open Graph - Works on Facebook, LinkedIn, WhatsApp, Discord, Slack, Telegram
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
    google: 'your-google-verification-code',
  },
  
  // Additional meta for social platforms
  other: {
    // WhatsApp/Telegram specific (uses OG tags but these help)
    'og:image:width': '1200',
    'og:image:height': '630',
    
    // LinkedIn
    'linkedin:owner': 'satwikkanhere0730',
    
    // Pinterest
    'pinterest-rich-pin': 'true',
    
    // Instagram (limited, but helps with link previews)
    'instagram:creator': '@satwikkanhere',
    
    // Skype
    'skype_toolbar': 'skype_toolbar_parser_compatible',
    
    // Mobile app banners
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Satwik Kanhere',
    
    // Windows/MS
    'msapplication-TileColor': '#4928fd',
    'msapplication-TileImage': '/mstile-144x144.png',
    
    // Theme
    'theme-color': '#4928fd',
    
    // Format detection
    'format-detection': 'telephone=yes',
    
    // Geo
    'geo.region': 'IN-CH',
    'geo.placename': 'Chandigarh, India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Additional social meta tags that Next.js Metadata doesn't cover */}
        
        {/* WhatsApp specific */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Satwik Kanhere - Software Development Engineer" />
        
        {/* Telegram */}
        <meta name="telegram:channel" content="@satwikkanhere" />
        
        {/* Discord */}
        <meta name="theme-color" content="#4928fd" />
        
        {/* Slack */}
        <meta name="slack-app-id" content="your-slack-app-id" />
        
        {/* Facebook App */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:admins" content="your-facebook-admin-id" />
        
        {/* Article metadata for rich previews */}
        <meta property="article:author" content="Satwik Kanhere" />
        <meta property="article:publisher" content="https://linkedin.com/in/satwikkanhere0730" />
        
        {/* Profile metadata */}
        <meta property="profile:first_name" content="Satwik" />
        <meta property="profile:last_name" content="Kanhere" />
        <meta property="profile:username" content="satwikkanhere" />
        
        {/* Business/Contact */}
        <meta name="author" content="Satwik Kanhere" />
        <meta name="designer" content="Satwik Kanhere" />
        <meta name="owner" content="Satwik Kanhere" />
        <meta name="contact" content="satwikkanhere2003@gmail.com" />
        
        {/* Language & Region */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        
        {/* Refresh/Cache */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
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
