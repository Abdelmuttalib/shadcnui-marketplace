import { BlockCategory } from "@/registry/registry-blocks";

import { blocksRegistry } from "./blocks-registry";

export const blocksPreviewImagesData = Object.keys(blocksRegistry).map(
  (block) => ({
    title: block.replace("-", " "),
    href: `/blocks/${block}`,
    // prefix src with '-${theme}' for theme support
    imageSrc: `/images/blocks/${block}-preview`,
    blocksCount: blocksRegistry[block as BlockCategory]?.length,
  })
);
