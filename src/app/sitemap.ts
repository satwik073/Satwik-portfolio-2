import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_ROUTES } from "@/constants";

/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * Single source of truth: SITEMAP_ROUTES in @/constants/site
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => {
    const url =
      path === "/" ? SITE_URL : `${SITE_URL.replace(/\/$/, "")}${path}`;

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "en-US": url,
          "en-IN": url,
          "x-default": url,
        },
      },
    };
  });
}
