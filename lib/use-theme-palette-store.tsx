// theme-palette-store.ts
import { create } from "zustand";

import {
  DEFAULT_RADIUS,
  DEFAULT_THEME_PALETTE,
  ThemePaletteName,
  ThemeRadius,
} from "@/registry/registry-palettes";

type ThemePaletteState = {
  activePalette: ThemePaletteName | "";
  setActivePalette: (value: ThemePaletteName | "") => void;
  activeRadius: ThemeRadius;
  setActiveRadius: (value: ThemeRadius) => void;
  onResetPalette: () => void;
  onResetRadius: () => void;
};

export const useThemePaletteStore = create<ThemePaletteState>((set) => ({
  activePalette: DEFAULT_THEME_PALETTE,
  setActivePalette: (value) => set({ activePalette: value }),

  activeRadius: DEFAULT_RADIUS,
  setActiveRadius: (value) => set({ activeRadius: value }),

  onResetPalette: () => set({ activePalette: DEFAULT_THEME_PALETTE }),
  onResetRadius: () => set({ activeRadius: DEFAULT_RADIUS }),
}));
