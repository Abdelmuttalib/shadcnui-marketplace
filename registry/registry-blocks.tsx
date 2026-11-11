import { registryStyleBlocks as linearStyleBlocks } from "./bases/base/linear/block";
import { StyleName } from "./styles";

export type BlockCategory =
  | "blog-sections"
  | "hero-sections"
  | "footers"
  | "features"
  | "landing-pages"
  | "pricings"
  | "portfolios";

export type BlockData = {
  id: string;
  title: string;
  description: string;
  registryType: RegistryItemType;
  plan: RegistryItemPlan;
  category: BlockCategory;
  href: string;
  localHref: string;
  code: string;
  codePath: string;
  localCodePath: string;
  fileName: string;
};

export type RegistryItemType =
  "blocks" | "examples" | "templates" | "components";

export type RegistryItemPlan = "free" | "basic" | "pro";

export type RegistryBlocks = Record<StyleName, any>;

export type BlocksRegistry = Record<BlockCategory, BlockData[]>;

export const blockCategories: BlockCategory[] = [
  "blog-sections",
  "hero-sections",
  "footers",
  "features",
  "landing-pages",
  "pricings",
  "portfolios",
];

export const registryBlocks = {
  linear: linearStyleBlocks,
};
