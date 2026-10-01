import type { MetadataRoute } from 'next'
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { SITEMAP_DEFAULTS, SITEMAP_FILES, SITEMAP_HINTS, absoluteUrl } from '@/constants/site'

/** Generated once per build — nothing is computed per request. */
export const dynamic = 'force-static'
export const revalidate = false

const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, 'src/app')
const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/
const BUILD_TIME = new Date()

/** Content every page renders from — a change here touches every route. */
const SHARED_SOURCES = ['src/constants', 'src/app/components', 'src/app/layout.tsx']

/** Walk the app directory and turn every static page.* into a public route. */
function discoverRoutes(dir = APP_DIR, segments: string[] = []): { route: string; file: string }[] {
  const out: { route: string; file: string }[] = []
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) {
      // skip private (_x), parallel (@x), dynamic ([x]) segments, API routes and component folders
      if (/^[_@[]/.test(entry) || entry === 'api' || entry === 'components') continue
      // route groups "(x)" don't appear in the URL
      out.push(...discoverRoutes(full, /^\(.*\)$/.test(entry) ? segments : [...segments, entry]))
    } else if (PAGE_FILE.test(entry)) {
      out.push({ route: `/${segments.join('/')}`, file: path.relative(ROOT, full) })
    }
  }
  return out
}

/** Last commit date touching any of the given paths; build time if git is unavailable. */
function lastModified(paths: string[]): Date {
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...paths], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return iso ? new Date(iso) : BUILD_TIME
  } catch {
    return BUILD_TIME
  }
}

const entry = (url: string, modified: Date, hints: typeof SITEMAP_DEFAULTS) => ({
  url,
  lastModified: modified,
  changeFrequency: hints.changeFrequency,
  priority: hints.priority,
})

/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * Routes are discovered from src/app; crawl hints live in SITEMAP_HINTS.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = discoverRoutes()
    .sort((a, b) => a.route.length - b.route.length || a.route.localeCompare(b.route))
    .map(({ route, file }) => {
      const url = absoluteUrl(route)
      return {
        ...entry(url, lastModified([path.dirname(file), ...SHARED_SOURCES]), SITEMAP_HINTS[route] ?? SITEMAP_DEFAULTS),
        alternates: { languages: { 'en-US': url, 'en-IN': url, 'x-default': url } },
      }
    })

  const files = SITEMAP_FILES.filter((f) => existsSync(path.join(ROOT, 'public', f.path))).map((f) =>
    entry(absoluteUrl(f.path), lastModified([path.join('public', f.path)]), f)
  )

  return [...pages, ...files]
}
