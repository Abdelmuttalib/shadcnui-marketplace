import { DEFAULT_ACTIVE_EXAMPLE } from "@/hooks/use-style-store";
import { CustomizeTheme } from "@/lib/customize-params";
import {
  DEFAULT_RADIUS,
  DEFAULT_THEME_PALETTE,
} from "@/registry/registry-palettes";

export const CUSTOMIZE_DEFAULTS = {
  palette: DEFAULT_THEME_PALETTE,
  radius: DEFAULT_RADIUS,
  theme: "light",
  example: DEFAULT_ACTIVE_EXAMPLE,
} as const;

export const CUSTOMIZE_QUERY_KEYS = [
  "palette",
  "radius",
  "theme",
  "example",
] as const;

export type CustomizeQueryKey = (typeof CUSTOMIZE_QUERY_KEYS)[number];

export interface CustomizeUrlState {
  palette: string | null;
  radius: string | null;
  theme: CustomizeTheme | null;
  example: string | null;
}

/**
 * Validate theme values coming from the URL.
 */
export function isCustomizeTheme(
  value: string | null
): value is CustomizeTheme {
  return value === "light" || value === "dark";
}

/**
 * Read customization settings from the current URL.
 */
export function getCustomizeUrlState(): CustomizeUrlState {
  const params = new URLSearchParams(window.location.search);

  const theme = params.get("theme");

  return {
    palette: params.get("palette"),
    radius: params.get("radius"),
    theme: isCustomizeTheme(theme) ? theme : null,
    example: params.get("example"),
  };
}

/**
 * Update customization parameters without removing
 * unrelated parameters such as source and sort.
 *
 * Passing null or an empty string removes the parameter.
 */
export function updateCustomizeUrl(
  updates: Partial<Record<CustomizeQueryKey, string | null | undefined>>
) {
  const url = new URL(window.location.href);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
  });

  const nextUrl = `${url.pathname}${url.search}${url.hash}`;

  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextUrl === currentUrl) return;

  window.history.replaceState(window.history.state, "", nextUrl);
}

/**
 * Remove all customization parameters.
 *
 * Feed filters and other unrelated parameters are preserved.
 */
export function clearCustomizeUrl() {
  const updates: Partial<Record<CustomizeQueryKey, null>> = {};

  CUSTOMIZE_QUERY_KEYS.forEach((key) => {
    updates[key] = null;
  });

  updateCustomizeUrl(updates);
}
