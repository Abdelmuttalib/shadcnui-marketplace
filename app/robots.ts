import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = "https://shadcnmarketplace.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blocks", "/styles", "/typography"],
      disallow: [],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
