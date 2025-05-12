import { BlockPlan, RegistryType } from "@/config/types";
import { type Style } from "@/hooks/use-style-store";

import { registryStyleBlocks as linearStyleBlocks } from "./linear/block";

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
  | "blocks"
  | "examples"
  | "templates"
  | "components";

export type RegistryItemPlan = "free" | "basic" | "pro";

export type RegistryBlocks = Record<Style, any>;

export type BlocksRegistry = Record<BlockCategory, BlockData[]>;

export const registryBlocks = {
  linear: linearStyleBlocks,
};
