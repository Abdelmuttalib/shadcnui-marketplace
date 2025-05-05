import { default as BlogSection1 } from "./blog-sections/blog-section-1/page";
import { default as BlogSection2 } from "./blog-sections/blog-section-2/page";

export const registryStyleBlocks = {
  "blog-sections": [
    {
      id: "blog-section-1",
      title: "Blog Section 1",
      description: "a simple and modern blog section template",
      registryType: "blocks",
      plan: "free",
      component: <BlogSection1 />,
    },
    {
      id: "blog-section-2",
      title: "Blog Section 2",
      description: "a simple and modern blog section template",
      registryType: "blocks",
      plan: "free",
      component: <BlogSection2 />,
    },
  ],
};
