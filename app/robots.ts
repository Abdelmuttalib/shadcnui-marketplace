import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = "https://shadcn-ui-marketplace.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blocks"],
      disallow: [],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
