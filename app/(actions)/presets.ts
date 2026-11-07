"use server";

import type { PresetSort, PresetView } from "@/lib/domain/source-labels";
import { type FeedViewResult, listFeedForView } from "@/lib/services/feed";

type FetchPresetsInput = {
  source?: PresetView;
  sort?: PresetSort;
  cursor?: string;
};

export async function fetchPresetsAction(
  input: FetchPresetsInput
): Promise<FeedViewResult> {
  return listFeedForView(input);
}
