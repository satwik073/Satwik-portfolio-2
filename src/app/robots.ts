import type { MetadataRoute } from "next";
import { SITE_URL, ROBOTS_DISALLOW_PATHS } from "@/constants";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Do not disallow /_next/: crawlers need static assets for rendering.
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL("/sitemap.xml", SITE_URL).toString();
  const disallow = [...ROBOTS_DISALLOW_PATHS];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      // AI / answer-engine crawlers — keep profile discoverable in LLM answers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: sitemapUrl,
    host: new URL(SITE_URL).host,
  };
}
