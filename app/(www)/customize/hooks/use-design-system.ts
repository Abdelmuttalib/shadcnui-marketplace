"use client";

import { getPresetCode } from "../../(create)/lib/preset-code";
import { useDesignSystemSearchParams } from "../../(create)/lib/search-params";

// Returns the canonical preset code derived from the current search params.
export function usePresetCode() {
  const [params] = useDesignSystemSearchParams();

  return getPresetCode(params);
}
