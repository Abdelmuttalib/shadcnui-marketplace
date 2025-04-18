// themePaletteStore.ts
import { create } from "zustand";

export type ThemePaletteName =
  | "palette-1"
  | "palette-2"
  | "palette-3"
  | "palette-4"
  | "palette-5"
  | "palette-6"
  | "palette-7"
  | "palette-8"
  | "palette-9"
  | "palette-10"
  | "palette-11"
  | "palette-12";

export type ThemeRadius =
  | "0rem"
  | "0.1rem"
  | "0.2rem"
  | "0.3rem"
  | "0.4rem"
  | "0.5rem"
  | "0.6rem"
  | "0.7rem"
  | "0.8rem"
  | "0.9rem"
  | "1rem"
  | "";

export const DEFAULT_THEME_PALETTE: ThemePaletteName = "palette-11";
export const DEFAULT_RADIUS: ThemeRadius = "";

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
