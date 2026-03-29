import type { MetadataRoute } from "next";
import { SITE_URL, ROBOTS_DISALLOW_PATHS } from "@/constants";

/**
 * Do not disallow /_next/: crawlers need static assets for rendering.
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL("/sitemap.xml", SITE_URL).toString();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...ROBOTS_DISALLOW_PATHS],
      },
    ],
    sitemap: sitemapUrl,
    /** Canonical host for Yandex and similar crawlers that honor the Host directive */
    host: new URL(SITE_URL).host,
  };
}
