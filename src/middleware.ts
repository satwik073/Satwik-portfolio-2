import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Build ID for cache validation
const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID || Date.now().toString(36)

/**
 * Generate ETag from content
 */
function generateETag(content: string): string {
  let hash = 2166136261
  for (let i = 0; i < content.length; i++) {
    hash ^= content.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return `"${(hash >>> 0).toString(36)}"`
}

/**
 * Middleware for advanced caching and ETag support
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const { pathname } = request.nextUrl

  // Skip for API routes and static files
  if (pathname.startsWith('/api/') || pathname.startsWith('/_next/')) {
    return response
  }

  // Generate ETag based on pathname and build ID
  const etag = generateETag(`${pathname}-${BUILD_ID}`)
  
  // Check if client has valid cached version
  const ifNoneMatch = request.headers.get('if-none-match')
  if (ifNoneMatch === etag) {
    // Return 304 Not Modified
    return new NextResponse(null, {
      status: 304,
      headers: {
        'ETag': etag,
        'Cache-Control': 'public, max-age=0, must-revalidate',
        'X-Cache': 'HIT',
      },
    })
  }

  // Add ETag and cache headers to response
  response.headers.set('ETag', etag)
  response.headers.set('X-Build-ID', BUILD_ID)
  response.headers.set('X-Cache', 'MISS')

  // Add Vary header for proper cache key generation
  response.headers.set('Vary', 'Accept-Encoding, Accept')

  // Add timing headers for debugging
  response.headers.set('X-Response-Time', Date.now().toString())

  return response
}

export const config = {
  matcher: [
    // Match all pages except static files and API
    '/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)',
  ],
}



