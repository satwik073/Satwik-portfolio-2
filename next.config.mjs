/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Next.js Image Optimization for better performance
  images: {
    // Enable modern image formats for smaller file sizes
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shifts
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports for smaller bundles
    optimizePackageImports: ['motion', 'lucide-react', '@iconify/react'],
  },

  // Production optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
