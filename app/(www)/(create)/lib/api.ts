import "server-only";

import { registryItemSchema } from "shadcn/schema";

import {
  ALLOWED_ITEM_TYPES,
  EXCLUDED_ITEMS,
} from "@/app/(www)/(create)/lib/constants";
import { type BaseName, BASES, getThemesForBaseColor } from "@/registry/config";
import { DEFAULT_STYLE, Style } from "@/registry/styles";

const defaultStyle = DEFAULT_STYLE;

export async function getItemsForBase(
  base: BaseName,
  styleName: Style["name"] = defaultStyle.name
) {
  const style = defaultStyle;
  const { Index } = await import(`@/registry/bases/__index__`);
  const index = Index[base][styleName];

  if (!index) {
    return [];
  }

  return Object.values(index).filter(
    (item) =>
      ALLOWED_ITEM_TYPES.includes(item.type) &&
      !EXCLUDED_ITEMS.includes(item.name)
  );
}

export async function getStyleItemsForBase(
  base: BaseName,
  styleName: Style["name"]
) {
  const { Index } = await import(`@/registry/bases/__index__`);
  const index = Index[base][styleName];

  if (!index) {
    return [];
  }

  return Object.values(index).filter(
    (item) =>
      ALLOWED_ITEM_TYPES.includes(item.type) &&
      !EXCLUDED_ITEMS.includes(item.name)
  );
}

export async function getBaseItem(
  name: string,
  base: BaseName,
  styleName: Style["name"] = defaultStyle.name
) {
  const { Index } = await import("@/registry/bases/__index__");
  const index = Index[base][styleName];

  if (!index?.[name] || EXCLUDED_ITEMS.includes(name)) {
    return null;
  }

  return registryItemSchema.parse(index[name]);
}

export async function getBaseComponent(
  name: string,
  base: BaseName,
  styleName: Style["name"] = defaultStyle.name
) {
  const { Index } = await import("@/registry/bases/__index__");
  const index = Index[base][styleName];

  if (!index?.[name] || EXCLUDED_ITEMS.includes(name)) {
    return null;
  }

  const { getComponent } = await import("@/registry/bases/__components__");
  return getComponent(base, name) ?? null;
}

export async function getAllItems() {
  const entries = await Promise.all(
    BASES.map(async (base) => {
      const items = await getItemsForBase(base.name as BaseName);
      const filtered: Pick<
        NonNullable<(typeof items)[number]>,
        "name" | "title" | "type"
      >[] = [];
      for (const item of items) {
        if (item !== null && !/\d+$/.test(item.name)) {
          filtered.push({
            name: item.name,
            title: item.title,
            type: item.type,
          });
        }
      }
      return [base.name, filtered] as const;
    })
  );
  return Object.fromEntries(entries);
}

// Re-export for server-side use.
export { getThemesForBaseColor };
