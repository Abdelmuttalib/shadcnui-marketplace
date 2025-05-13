import type { MetadataRoute } from "next";

import { blocksRegistry } from "@/config/blocks-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://shadcn-ui-marketplace.com";

  const routes = Object.keys(blocksRegistry).map((slug) => ({
    url: `${BASE_URL}/blocks/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blocks`,
      lastModified: new Date(),
    },
    ...routes,
  ];
}
