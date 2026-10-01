import type { MetadataRoute } from "next";
import { SITE_HOST, ROBOTS_DISALLOW_PATHS, absoluteUrl } from "@/constants";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Do not disallow /_next/: crawlers need static assets for rendering.
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = absoluteUrl("/sitemap.xml");
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
    host: SITE_HOST,
  };
}
