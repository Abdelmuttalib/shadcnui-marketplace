import type { PresetSort, PresetView } from "@/lib/domain/source-labels";
import {
  enrichStylesWithColors,
  listStyles,
  type StyleWithColors,
} from "@/lib/services/presets";

export type FeedViewInput = {
  source?: PresetView;
  sort?: PresetSort;
  cursor?: string;
};

export type FeedViewResult = {
  items: StyleWithColors[];
  nextCursor: string | null;
};

export function listFeedForView(input: FeedViewInput = {}): FeedViewResult {
  const { items, nextCursor } = listStyles();
  return { items: enrichStylesWithColors(items), nextCursor };
}
