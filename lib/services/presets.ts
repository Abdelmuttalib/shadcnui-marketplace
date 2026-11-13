// import { and, asc, desc, eq, gt, lt, or, sql } from "drizzle-orm";
import { cache } from "react";
import { type PresetConfig } from "shadcn/preset";
import { extractStyleFonts, type StyleFonts } from "@/lib/domain/fonts";
import {
  extractStyleColorsVariables,
  type StyleColors,
} from "@/lib/domain/preset-css";
import type { PresetSort, PresetSource } from "@/lib/domain/source-labels";
import { DEFAULT_STYLE, Style, STYLES } from "@/registry/styles";

const FEED_PAGE_SIZE = 24;
const FEATURED_BRAND_SLUGS = ["vercel", "claude", "linear", "stripe"];

// export type PresetWithColors = PresetSummary & {
//   colors: StyleColors | null;
//   fonts: StyleFonts | null;
// };

export type StyleWithColors = Style & {
  colors: StyleColors | null;
  fonts: StyleFonts | null;
};

export function enrichStylesWithColors(items: Style[]): StyleWithColors[] {
  return items.map((s) => {
    const style = STYLES.find((st) => st.name === s.name);
    if (!style) return { ...s, colors: null, fonts: null };
    // if (!config) return { ...p, colors: null, fonts: null };
    return {
      ...s,
      colors: extractStyleColorsVariables(style),
      fonts: extractStyleFonts(style),
    };
  });
}

export const listStylesWithColors = cache(
  (): {
    items: StyleWithColors[];
    nextCursor: string | null;
  } => {
    const { items, nextCursor } = listStyles();
    return { items: enrichStylesWithColors(items), nextCursor };
  }
);

// ---------- CRUD ----------

export type ListFilters = {
  source?: PresetSource;
  sort?: PresetSort;
  cursor?: string;
  limit?: number;
};

export type PresetSummary = {
  id: string;
  code: string;
  name: string | null;
  description: string | null;
  source: PresetSource;
  brandSlug: string | null;
  likesCount: number;
  createdAt: Date;
};

type ListStylesResult = {
  items: Style[];
  nextCursor: string | null;
};

export function listStyles(): ListStylesResult {
  const rows = STYLES;

  const last = STYLES[STYLES.length - 1];

  const nextCursor = null;

  return { items: rows, nextCursor };
}

export const getStyleByName = cache((name: string): Style | null => {
  const style = STYLES.find((s) => s.name === name);
  return style ?? null;
});

export const getDefaultStyle = () => {
  return DEFAULT_STYLE;
};

export type AdjacentFilters = {
  source?: PresetSource;
  sort?: PresetSort;
};

export const getAdjacentCodes = cache(
  async (
    currentCode: string,
    filters: AdjacentFilters = {}
  ): Promise<{ prev: string | null; next: string | null }> => {
    // const sort = filters.sort ?? "popular";
    // if (sort === "random") return { prev: null, next: null };

    // const [current] = await db
    //   .select({
    //     id: preset.id,
    //     createdAt: preset.createdAt,
    //     likesCount: preset.likesCount,
    //   })
    //   .from(preset)
    //   .where(eq(preset.code, currentCode))
    //   .limit(1);
    // if (!current) return { prev: null, next: null };

    // const sourceWhere = filters.source
    //   ? eq(preset.source, filters.source)
    //   : undefined;

    // const tieCol = sort === "newest" ? preset.createdAt : preset.likesCount;
    // const tieVal = sort === "newest" ? current.createdAt : current.likesCount;

    // const prevCondition = or(
    //   gt(tieCol, tieVal),
    //   and(eq(tieCol, tieVal), gt(preset.id, current.id))
    // );
    // const nextCondition = or(
    //   lt(tieCol, tieVal),
    //   and(eq(tieCol, tieVal), lt(preset.id, current.id))
    // );

    // const [prevRow] = await db
    //   .select({ code: preset.code })
    //   .from(preset)
    //   .where(sourceWhere ? and(sourceWhere, prevCondition) : prevCondition)
    //   .orderBy(asc(tieCol), asc(preset.id))
    //   .limit(1);

    // const [nextRow] = await db
    //   .select({ code: preset.code })
    //   .from(preset)
    //   .where(sourceWhere ? and(sourceWhere, nextCondition) : nextCondition)
    //   .orderBy(desc(tieCol), desc(preset.id))
    //   .limit(1);

    // return { prev: prevRow?.code ?? null, next: nextRow?.code ?? null };
    return { prev: null, next: null };
  }
);

export function getRandomStyleName(
  options: { exclude?: string; source?: PresetSource } = {}
): string | null {
  const stylesLength = STYLES.length;
  if (stylesLength === 0) return null;

  let randomIndex = Math.floor(Math.random() * stylesLength);
  if (options.exclude) {
    const excludeIndex = STYLES.findIndex((s) => s.name === options.exclude);
    if (excludeIndex !== -1 && stylesLength > 1) {
      while (randomIndex === excludeIndex) {
        randomIndex = Math.floor(Math.random() * stylesLength);
      }
    }
  }

  return STYLES[randomIndex].name;
}

export async function listFeaturedBrand(): Promise<PresetSummary[]> {
  // const rows = await db.select().from(preset).where(eq(preset.source, "brand"));
  // return rows
  //   .filter((r) => r.brandSlug && FEATURED_BRAND_SLUGS.includes(r.brandSlug))
  //   .map(rowToSummary);

  return [];
}

export type UpsertBrandInput = {
  slug: string;
  name: string;
  description?: string | null;
  config: PresetConfig;
};

export async function upsertBrandPreset(
  input: UpsertBrandInput
): Promise<PresetSummary> {
  // const code = encodePreset(input.config);
  // const existing = await db
  //   .select()
  //   .from(preset)
  //   .where(eq(preset.code, code))
  //   .limit(1);
  // const found = existing[0];
  // if (found) {
  //   const updated = await db
  //     .update(preset)
  //     .set({
  //       name: input.name,
  //       description: input.description ?? null,
  //       source: "brand",
  //       brandSlug: input.slug,
  //     })
  //     .where(eq(preset.id, found.id))
  //     .returning();
  //   const row = updated[0];
  //   if (!row) throw new Error("Failed to update brand preset");
  //   return rowToSummary(row);
  // }
  // const inserted = await db
  //   .insert(preset)
  //   .values({
  //     code,
  //     name: input.name,
  //     description: input.description ?? null,
  //     source: "brand",
  //     brandSlug: input.slug,
  //   })
  //   .returning();
  // const row = inserted[0];
  // if (!row) throw new Error("Failed to insert brand preset");
  // return rowToSummary(row);
  return {
    id: "0",
    code: "",
    name: input.name,
    description: input.description ?? null,
    source: "brand",
    brandSlug: input.slug,
    likesCount: 0,
    createdAt: new Date(),
  };
}

export type InsertRandomInput = {
  name: string;
  config: PresetConfig;
};

export async function insertRandomPreset(
  input: InsertRandomInput
): Promise<PresetSummary | null> {
  // const code = encodePreset(input.config);
  // const inserted = await db
  //   .insert(preset)
  //   .values({ code, name: input.name, source: "random" })
  //   .onConflictDoNothing({ target: preset.code })
  //   .returning();
  // const row = inserted[0];
  // return row ? rowToSummary(row) : null;
  return null;
}

export type CreateCommunityInput = {
  code: string;
  name: string;
  description?: string;
  userId?: string | null;
};

export async function createCommunityPreset(
  input: CreateCommunityInput
): Promise<
  | { status: "created"; preset: PresetSummary }
  | { status: "exists"; preset: PresetSummary }
> {
  // const existing = await getPresetByCode(input.code);
  // if (existing) return { status: "exists", preset: existing };

  // const inserted = await db
  //   .insert(preset)
  //   .values({
  //     code: input.code,
  //     name: input.name,
  //     description: input.description ?? null,
  //     source: "community",
  //     createdBy: input.userId ?? null,
  //   })
  //   .returning();
  // const row = inserted[0];
  // if (!row) throw new Error("Failed to insert community preset");
  // return { status: "created", preset: rowToSummary(row) };
  return {
    status: "created",
    preset: {
      id: "0",
      code: input.code,
      name: input.name,
      description: input.description ?? null,
      source: "community",
      brandSlug: null,
      likesCount: 0,
      createdAt: new Date(),
    },
  };
}

export async function listIndexableForSitemap(): Promise<
  Array<{ code: string; updatedAt: Date }>
> {
  // const rows = await db
  //   .select()
  //   .from(preset)
  //   .where(sql`${preset.source} <> 'random' OR ${preset.likesCount} > 0`);
  // return rows.map((r) => ({ code: r.code, updatedAt: r.createdAt }));
  return [];
}
