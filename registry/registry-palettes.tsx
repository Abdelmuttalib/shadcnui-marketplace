export const MAIN_PALETTE_COLORS_KEYS = [
  "primary",
  "secondary",
  "background",
  // "foreground",
  "card",
  // "border",
  // "destructive-foreground",
  "accent",
];

export const mainPaletteColorsKeys = MAIN_PALETTE_COLORS_KEYS;

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
  | "palette-12"
  | "palette-13"
  | "palette-14"
  | "palette-15"
  | "palette-16"
  | "palette-17"
  | "palette-18"
  | "palette-19";

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

export type ThemePaletteVariableKey =
  | "background"
  | "foreground"
  | "card"
  | "card-foreground"
  | "popover"
  | "popover-foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "destructive"
  | "destructive-foreground"
  | "muted"
  | "muted-foreground"
  | "accent"
  | "accent-foreground"
  | "border"
  | "input"
  | "ring"
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5"
  | "sidebar-background"
  | "sidebar-foreground"
  | "sidebar-primary"
  | "sidebar-primary-foreground"
  | "sidebar-accent"
  | "sidebar-accent-foreground"
  | "sidebar-border"
  | "sidebar-ring";

export type ThemePalette = Record<
  ThemePaletteName,
  Record<"light" | "dark", Record<ThemePaletteVariableKey, string>>
>;

/*
  #FFFCF2
  #CCC5B9
  #403D39
  #252422
  #EB5E28

  __________


  oklch(1 0 0) #FFFFFF
  oklch(0 0 0) #000000
  oklch(0.93 0.1703 128.84) #C6FF7D
  oklch(0.85 0 0) #CDCDCD
*/

// /* CSS HEX */
// --floral-white: #fffcf2ff;
// --timberwolf: #ccc5b9ff;
// --black-olive: #403d39ff;
// --eerie-black: #252422ff;
// --flame: #eb5e28ff;

// /* CSS HSL */
// --floral-white: hsla(46, 100%, 97%, 1);
// --timberwolf: hsla(38, 16%, 76%, 1);
// --black-olive: hsla(34, 6%, 24%, 1);
// --eerie-black: hsla(40, 4%, 14%, 1);
// --flame: hsla(17, 83%, 54%, 1);

// /* SCSS HEX */
// $floral-white: #fffcf2ff;
// $timberwolf: #ccc5b9ff;
// $black-olive: #403d39ff;
// $eerie-black: #252422ff;
// $flame: #eb5e28ff;

// /* SCSS HSL */
// $floral-white: hsla(46, 100%, 97%, 1);
// $timberwolf: hsla(38, 16%, 76%, 1);
// $black-olive: hsla(34, 6%, 24%, 1);
// $eerie-black: hsla(40, 4%, 14%, 1);
// $flame: hsla(17, 83%, 54%, 1);

// /* SCSS RGB */
// $floral-white: rgba(255, 252, 242, 1);
// $timberwolf: rgba(204, 197, 185, 1);
// $black-olive: rgba(64, 61, 57, 1);
// $eerie-black: rgba(37, 36, 34, 1);
// $flame: rgba(235, 94, 40, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-right: linear-gradient(90deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-bottom: linear-gradient(180deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-left: linear-gradient(270deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-top-right: linear-gradient(45deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-bottom-right: linear-gradient(135deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-top-left: linear-gradient(225deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-bottom-left: linear-gradient(315deg, #fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);
// $gradient-radial: radial-gradient(#fffcf2ff, #ccc5b9ff, #403d39ff, #252422ff, #eb5e28ff);

// /* CSS HEX */
// --oxford-blue: #001427ff;
// --hookers-green: #708d81ff;
// --jasmine: #f4d58dff;
// --engineering-orange: #bf0603ff;
// --dark-red: #8d0801ff;

// /* CSS HSL */
// --oxford-blue: hsla(209, 100%, 8%, 1);
// --hookers-green: hsla(155, 11%, 50%, 1);
// --jasmine: hsla(42, 82%, 75%, 1);
// --engineering-orange: hsla(1, 97%, 38%, 1);
// --dark-red: hsla(3, 99%, 28%, 1);

// /* SCSS HEX */
// $oxford-blue: #001427ff;
// $hookers-green: #708d81ff;
// $jasmine: #f4d58dff;
// $engineering-orange: #bf0603ff;
// $dark-red: #8d0801ff;

// /* SCSS HSL */
// $oxford-blue: hsla(209, 100%, 8%, 1);
// $hookers-green: hsla(155, 11%, 50%, 1);
// $jasmine: hsla(42, 82%, 75%, 1);
// $engineering-orange: hsla(1, 97%, 38%, 1);
// $dark-red: hsla(3, 99%, 28%, 1);

// /* SCSS RGB */
// $oxford-blue: rgba(0, 20, 39, 1);
// $hookers-green: rgba(112, 141, 129, 1);
// $jasmine: rgba(244, 213, 141, 1);
// $engineering-orange: rgba(191, 6, 3, 1);
// $dark-red: rgba(141, 8, 1, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-right: linear-gradient(90deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-bottom: linear-gradient(180deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-left: linear-gradient(270deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-top-right: linear-gradient(45deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-bottom-right: linear-gradient(135deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-top-left: linear-gradient(225deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-bottom-left: linear-gradient(315deg, #001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);
// $gradient-radial: radial-gradient(#001427ff, #708d81ff, #f4d58dff, #bf0603ff, #8d0801ff);

// "color-gray-50": "0.985 0 250" /* oklch(0.985 0 250) */,
// "color-gray-100": "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
// "color-gray-200": "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
// "color-gray-300": "0.86 0.008 250" /* oklch(0.86 0.008 250) */,
// "color-gray-400": "0.7 0.018 250" /* oklch(0.70 0.018 250) */,
// "color-gray-500": "0.55 0.019 250" /* oklch(0.55 0.019 250) */,
// "color-gray-600": "0.44 0.02 250" /* oklch(0.44 0.020 250) */,
// "color-gray-700": "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
// "color-gray-800": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
// "color-gray-900": "0.19 0.007 250" /* oklch(0.19 0.007 250) */,
// "color-gray-950": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

export const themePalettes: ThemePalette = {
  "palette-1": {
    light: {
      primary: "0.56 0.007 250" /* oklch(0.56 0.007 250) */,
      "primary-foreground": "100% 0 250" /* oklch(100% 0 250) */,
      destructive: "56% 0.22 20" /* oklch(56% 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,

      "chart-1": "0.55 0.22 260" /* oklch(0.55 0.22 260) */,
      "chart-2": "0.63 0.1 190" /* oklch(0.63 0.1 190) */,
      "chart-3": "0.67 0.18 360" /* oklch(0.67 0.18 360) */,
      "chart-4": "0.64 0.15 245" /* oklch(0.64 0.15 245) */,
      "chart-5": "0.66 0.2 25" /* oklch(0.66 0.2 25) */,

      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      secondary: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      "secondary-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      muted: "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "muted-foreground": "0.44 0.02 250" /* oklch(0.44 0.020 250) */,
      accent: "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      border: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      input: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      ring: "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "sidebar-primary": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "sidebar-primary-foreground": "100% 0 250" /* oklch(100% 0 250) */,
      "sidebar-accent": "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "sidebar-accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-border": "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,
    },

    dark: {
      background: "0.19 0.007 250" /* oklch(0.19 0.007 250) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "muted-foreground": "0.7 0.018 250" /* oklch(0.70 0.018 250) */,
      accent: "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "56.92% 0.21 25.92" /* oklch(56.92% 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      input: "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      ring: "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,

      "chart-1": "62.65% 0.24 261.95" /* oklch(62.65% 0.24 261.95) */,
      "chart-2": "68.91% 0.1 192.36" /* oklch(68.91% 0.1 192.36) */,
      "chart-3": "69.89% 0.19 357.26" /* oklch(69.89% 0.19 357.26) */,
      "chart-4": "69.06% 0.16 246.5" /* oklch(69.06% 0.16 246.5) */,
      "chart-5": "69.62% 0.2 22.13" /* oklch(69.62% 0.2 22.13) */,

      "sidebar-background": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-foreground": "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "sidebar-primary": "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      "sidebar-primary-foreground": "1 0 0",
      "sidebar-accent": "0.19 0.007 250" /* oklch(0.19 0.007 250) */,
      "sidebar-accent-foreground": "1 0 0",
      "sidebar-border": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,
    },
  },
  "palette-2": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

      primary: "44.93% 0.0493 217.02" /* oklch(44.93% 0.0493 217.02) */,
      "primary-foreground": "100% 0 285" /* oklch(100% 0 285) */,
      destructive: "50% 0.18 25" /* oklch(50% 0.18 25) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,

      secondary: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      "secondary-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

      muted: "0.97 0 285" /* oklch(0.85 0 285) */,
      "muted-foreground": "0.48 0.020 285" /* oklch(0.36 0.020 285) */,
      accent: "0.97 0 285" /* oklch(0.97 0 285) */,
      "accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      border: "0.90 0.005 285" /* oklch(0.90 0.005 285) */,
      input: "0.90 0.005 285" /* oklch(0.90 0.005 285) */,
      ring: "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,

      "chart-1": "50% 0.2 260" /* oklch(50% 0.2 260) */,
      "chart-2": "55% 0.08 190" /* oklch(55% 0.08 190) */,
      "chart-3": "60% 0.16 360" /* oklch(60% 0.16 360) */,
      "chart-4": "58% 0.14 245" /* oklch(58% 0.14 245) */,
      "chart-5": "62% 0.18 22" /* oklch(62% 0.18 22) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "sidebar-primary":
        "44.93% 0.0493 217.02" /* oklch(44.93% 0.0493 217.02) */,
      "sidebar-primary-foreground": "100% 0 285" /* oklch(100% 0 285) */,
      "sidebar-accent": "0.97 0 285" /* oklch(0.85 0 285) */,
      "sidebar-accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-border": "0.90 0.005 285" /* oklch(0.90 0.005 285) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },
    dark: {
      background: "0.17 0.007 285" /* oklch(0.17 0.007 285) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,

      primary: "44.93% 0.0493 217.02" /* oklch(44.93% 0.0493 217.02) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "62.92% 0.21 25.92" /* oklch(62.92% 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,

      card: "0.23 0.007 285" /* oklch(0.23 0.007 285) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.32 0.007 285" /* oklch(0.32 0.007 285) */,
      "muted-foreground": "0.58 0.018 285" /* oklch(0.58 0.018 285) */,
      accent: "0.32 0.03 217.02" /* oklch(0.32 0.03 217.02) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.22 0.007 285" /* oklch(0.22 0.007 285) */,
      input: "0.28 0.015 285" /* oklch(0.28 0.015 285) */,
      ring: "44.93% 0.0493 217.02" /* oklch(44.93% 0.0493 217.02) */,

      "chart-1": "50% 0.2 260" /* oklch(50% 0.2 260) */,
      "chart-2": "55% 0.08 190" /* oklch(55% 0.08 190) */,
      "chart-3": "60% 0.16 360" /* oklch(60% 0.16 360) */,
      "chart-4": "58% 0.14 245" /* oklch(58% 0.14 245) */,
      "chart-5": "62% 0.18 22" /* oklch(62% 0.18 22) */,

      "sidebar-background": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary":
        "44.93% 0.0493 217.02" /* oklch(44.93% 0.0493 217.02) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.19 0.007 285" /* oklch(0.13 0.007 285) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },
  },

  "palette-3": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      primary: "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "90.67% 0.01 250" /* oklch(90.67% 0.01 250) */,
      "secondary-foreground": "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      muted: "90.67% 0.01 250" /* oklch(90.67% 0.01 250) */,
      "muted-foreground": "54.17% 0.01 250" /* oklch(54.17% 0.01 250) */,
      accent: "96.72% 0.01 250" /* oklch(96.72% 0.01 250) */,
      "accent-foreground": "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      destructive: "56.92% 0.21 25.92" /* oklch(56.92% 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "90.67% 0.01 250" /* oklch(90.67% 0.01 250) */,
      input: "86.66% 0.01 250" /* oklch(86.66% 0.01 250) */,
      ring: "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
      "chart-1": "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
      "chart-2": "62.91% 0.1 192.36" /* oklch(62.91% 0.1 192.36) */,
      "chart-3": "66.89% 0.19 357.26" /* oklch(66.89% 0.19 357.26) */,
      "chart-4": "64.06% 0.16 246.5" /* oklch(64.06% 0.16 246.5) */,
      "chart-5": "66.62% 0.2 22.13" /* oklch(66.62% 0.2 22.13) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "28.46% 0.01 250" /* oklch(28.46% 0.01 250) */,
      "sidebar-primary": "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "96.72% 0.01 250" /* oklch(96.72% 0.01 250) */,
      "sidebar-accent-foreground":
        "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      "sidebar-border": "90.67% 0.01 250" /* oklch(90.67% 0.01 250) */,
      "sidebar-ring": "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
    },
    dark: {
      background: "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "22% 0.01 250" /* oklch(22% 0.01 250) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "23.86% 0.01 250" /* oklch(23.86% 0.01 250) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "28.46% 0.01 250" /* oklch(28.46% 0.01 250) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "28.46% 0.01 250" /* oklch(28.46% 0.01 250) */,
      "muted-foreground": "73.16% 0.01 250" /* oklch(73.16% 0.01 250) */,
      accent: "28.46% 0.01 250" /* oklch(28.46% 0.01 250) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "56.92% 0.21 25.92" /* oklch(56.92% 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "28.46% 0.01 250" /* oklch(28.46% 0.01 250) */,
      input: "40.86% 0.01 250" /* oklch(40.86% 0.01 250) */,
      ring: "96.72% 0.01 250" /* oklch(96.72% 0.01 250) */,

      "chart-1": "62.65% 0.24 261.95" /* oklch(62.65% 0.24 261.95) */,
      "chart-2": "68.91% 0.1 192.36" /* oklch(68.91% 0.1 192.36) */,
      "chart-3": "69.89% 0.19 357.26" /* oklch(69.89% 0.19 357.26) */,
      "chart-4": "69.06% 0.16 246.5" /* oklch(69.06% 0.16 246.5) */,
      "chart-5": "69.62% 0.2 22.13" /* oklch(69.62% 0.2 22.13) */,

      "sidebar-background": "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      "sidebar-foreground": "90.67% 0.01 250" /* oklch(90.67% 0.01 250) */,
      "sidebar-primary": "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "96.72% 0.01 250" /* oklch(96.72% 0.01 250) */,
      "sidebar-accent-foreground":
        "20.02% 0.01 250" /* oklch(20.02% 0.01 250) */,
      "sidebar-border": "28.46% 0.01 250" /* oklch(28.46% 0.01 250) */,
      "sidebar-ring": "55.65% 0.24 261.95" /* oklch(55.65% 0.24 261.95) */,
    },
  },

  "palette-4": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0% 0 0" /* oklch(0% 0 0) */,
      card: "97% 0.0013 286.38" /* oklch(97% 0.0013 286.38) */,
      "card-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      primary: "0% 0 0" /* oklch(0% 0 0) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.93 0.0602 258.65" /* oklch(0.93 0.0602 258.65) */,
      "secondary-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      muted: "0.93 0 0" /* oklch(0.93 0 0) */,
      "muted-foreground": "0.60 0 0" /* oklch(0.60 0 0) */,
      accent: "96% 0 0" /* oklch(96% 0 0) */,
      "accent-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      destructive: "66% 0.2204 25.5" /* oklch(66% 0.2204 25.5) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "90% 0 0" /* oklch(90% 0 0) */,
      input: "90% 0 0" /* oklch(90% 0 0) */,
      ring: "89% 0.0602 258.65" /* oklch(89% 0.0602 258.65) */,

      "chart-1": "73.81% 0.1275 282.83" /* oklch(73.81% 0.1275 282.83) */,
      "chart-2": "85.98% 0.0772 183.48" /* oklch(85.98% 0.0772 183.48) */,
      "chart-3": "0% 0 0" /* oklch(0% 0 0) */,
      "chart-4":
        "79.68% 0.103455 257.2023" /* oklch(79.68% 0.103455 257.2023) */,
      "chart-5": "82.38% 0.0602 13.35" /* oklch(82.38% 0.0602 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      "sidebar-primary": "0% 0 0" /* oklch(0% 0 0) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "96% 0 0" /* oklch(96% 0 0) */,
      "sidebar-accent-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      "sidebar-border": "90% 0 0" /* oklch(90% 0 0) */,
      "sidebar-ring": "89% 0.0602 258.65" /* oklch(89% 0.0602 258.65) */,
    },

    dark: {
      background: "0.21 0.006 285.885" /* oklch(0.21 0.006 285.885) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.24 0.006 286.033" /* oklch(0.24 0.006 286.033) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "primary-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      secondary: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "muted-foreground":
        "0.705 0.015 286.067" /* oklch(0.705 0.015 286.067) */,
      accent: "0.34 0.013 285.805" /* oklch(0.34 0.013 285.805) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "68.92% 0.21 25.92" /* oklch(68.92% 0.21 25.92) */,
      "destructive-foreground": "0% 0.0099 269.97" /* oklch(1 0 0) */,
      border: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      input: "0.37 0.013 285.805" /* oklch(0.37 0.013 285.805) */,
      ring: "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,

      "chart-1": "62.65% 0.24 261.95" /* oklch(62.65% 0.24 261.95) */,
      "chart-2": "68.91% 0.1 192.36" /* oklch(68.91% 0.1 192.36) */,
      "chart-3": "69.89% 0.19 357.26" /* oklch(69.89% 0.19 357.26) */,
      "chart-4": "69.06% 0.16 246.5" /* oklch(69.06% 0.16 246.5) */,
      "chart-5": "69.62% 0.2 22.13" /* oklch(69.62% 0.2 22.13) */,

      "sidebar-background":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      "sidebar-foreground":
        "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "sidebar-primary": "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "sidebar-primary-foreground": "0% 0 0" /* oklch(0% 0 0) */,
      "sidebar-accent": "0.34 0.013 285.805" /* oklch(0.34 0.013 285.805) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },
  },
  "palette-5": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      primary: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "secondary-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      muted: "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "muted-foreground":
        "0.542 0.017 285.786" /* oklch(0.542 0.017 285.786) */,
      accent: "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "accent-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      destructive: "56.92% 0.21 25.92" /* oklch(56.92% 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      input: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      ring: "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,

      "chart-1": "73.81% 0.1275 282.83" /* oklch(73.81% 0.1275 282.83) */,
      "chart-2": "85.98% 0.0772 183.48" /* oklch(85.98% 0.0772 183.48) */,
      "chart-3": "0% 0 0" /* oklch(0% 0 0) */,
      "chart-4":
        "79.68% 0.103455 257.2023" /* oklch(79.68% 0.103455 257.2023) */,
      "chart-5": "82.38% 0.0602 13.35" /* oklch(82.38% 0.0602 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground":
        "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "sidebar-primary": "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "sidebar-accent-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      "sidebar-border": "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },

    dark: {
      background: "21.5% 0.0099 269.97" /* oklch(21.5% 0 0) */,
      foreground: "100% 0.0099 269.97" /* oklch(1 0 0) */,
      card: "24% 0.0099 269.97" /* oklch(24% 0 0) */,
      "card-foreground": "100% 0.0099 269.97" /* oklch(1 0 0) */,
      popover: "24% 0.0099 269.97" /* oklch(24% 0 0) */,
      "popover-foreground": "100% 0.0099 269.97" /* oklch(1 0 0) */,
      primary: "73.81% 0.0602 258.65" /* oklch(73.81% 0.0602 258.65) */,
      "primary-foreground": "0% 0.0099 269.97" /* oklch(0% 0 0) */,
      secondary: "28.4% 0.0099 269.97" /* oklch(28.4% 0 0) */,
      "secondary-foreground": "100% 0.0099 269.97" /* oklch(1 0 0) */,
      muted: "27.4% 0.006 286.033" /* oklch(27.4% 0.006 286.033) */,
      "muted-foreground":
        "70.5% 0.0099 269.97" /* oklch(70.5% 0.0099 269.97) */,
      accent: "31% 0.0099 269.97" /* oklch(31% 0 0) */,
      "accent-foreground": "100% 0.0099 269.97" /* oklch(1 0 0) */,
      destructive: "83% 0.2804 25.5" /* oklch(83% 0.2804 25.5) */,
      "destructive-foreground": "0% 0.0099 269.97" /* oklch(1 0 0) */,
      border: "30.4% 0.0099 269.97" /* oklch(30.4% 0 0) */,
      input: "37% 0.0099 269.97" /* oklch(37% 0 0) */,
      ring: "89% 0.0602 258.65" /* oklch(89% 0.0602 258.65) */,

      "chart-1": "62.65% 0.24 261.95" /* oklch(62.65% 0.24 261.95) */,
      "chart-2": "68.91% 0.1 192.36" /* oklch(68.91% 0.1 192.36) */,
      "chart-3": "69.89% 0.19 357.26" /* oklch(69.89% 0.19 357.26) */,
      "chart-4": "69.06% 0.16 246.5" /* oklch(69.06% 0.16 246.5) */,
      "chart-5": "69.62% 0.2 22.13" /* oklch(69.62% 0.2 22.13) */,

      "sidebar-background": "0% 0 0" /* oklch(0% 0 0) */,
      "sidebar-foreground":
        "96.7% 0.001 286.375" /* oklch(96.7% 0.001 286.375) */,
      "sidebar-primary":
        "73.81% 0.0602 258.65" /* oklch(73.81% 0.0602 258.65) */,
      "sidebar-primary-foreground": "0% 0.0099 269.97" /* oklch(0% 0 0) */,
      "sidebar-accent": "21% 0.006 285.885" /* oklch(21% 0.006 285.885) */,
      "sidebar-accent-foreground": "100% 0.0099 269.97" /* oklch(1 0 0) */,
      "sidebar-border": "30.4% 0.0099 269.97" /* oklch(30.4% 0 0) */,
      "sidebar-ring": "89% 0.0602 258.65" /* oklch(89% 0.0602 258.65) */,
    },
  },

  "palette-6": {
    // #442121 #713637, #bc7576 #d3a3a4 #504237, #9D8F81, #A2988A, #DAD2C8, #26201C
    /*
    oklch(0.3 0.0538 20.82)
    oklch(0.41 0.0835 20.35)
    oklch(0.64 0.0897 18.95)
    oklch(0.76 0.057 17.1)
    oklch(0.39 0.0264 60.06)
    oklch(0.66 0.0263 67.34)
    oklch(0.68 0.0233 76.45)
    oklch(0.87 0.0162 73.66)
    oklch(0.25 0.0119 55.78)
    */
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      primary: "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.63 0.0264 60.06" /* oklch(0.63 0.0264 60.06) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.92 0.0233 76.45" /* oklch(0.92 0.0233 76.45) */,
      "muted-foreground": "0.62 0.0119 55.78" /* oklch(0.62 0.0119 55.78) */,
      accent: "0.95 0.0233 76.45" /* oklch(0.95 0.0233 76.45) */,
      "accent-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      destructive: "56% 0.22 20" /* oklch(56% 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.93 0.0162 73.66" /* oklch(0.93 0.0162 73.66) */,
      input: "0.89 0.0162 73.66" /* oklch(0.89 0.0162 73.66) */,

      ring: "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,

      "chart-1": "0.76 0.057 17.1" /* oklch(0.76 0.057 17.1) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      "sidebar-primary": "0.3 0.0538 20.82" /* oklch(0.3 0.0538 20.82) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.68 0.0233 76.45" /* oklch(0.68 0.0233 76.45) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.93 0.0162 73.66" /* oklch(0.93 0.0162 73.66) */,
      "sidebar-ring": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
    },
    dark: {
      background: "0.20 0.0119 55.78" /* oklch(0.20 0.0119 55.78) */,
      foreground: "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,

      card: "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      "card-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      popover: "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      "popover-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      primary: "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "primary-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,

      secondary: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "secondary-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,

      muted: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "muted-foreground": "0.67 0.0162 73.66" /* oklch(0.67 0.0162 73.66) */,
      accent: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "accent-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      destructive: "56% 0.22 20" /* oklch(56% 0.22 20) */,
      "destructive-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      border: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      input: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      ring: "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,

      "chart-1": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "0.20 0.0119 55.78" /* oklch(0.20 0.0119 55.78) */,
      "sidebar-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      "sidebar-primary": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "sidebar-primary-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      "sidebar-accent": "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "sidebar-accent-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      "sidebar-border": "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "sidebar-ring": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
    },
  },

  "palette-7": {
    // #C33149 #A8C256 #C1CA74 #DAD193 #F3D9B1 #A22522 #2f4858
    /*
    oklch(0.55 0.1814 16.77)
    oklch(0.77 0.1378 121.01)
    oklch(0.81 0.1104 131.76)
    oklch(0.85 0.081 100.9)
    oklch(0.9 0.0598 78.49)
    oklch(0.47 0.1619 27.1)
    oklch(0.39 0.041 237.32)
    oklch(0.18 0.041 237.32)



    */
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      primary: "0.55 0.1814 19.77" /* oklch(0.55 0.1814 19.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.39 0.041 237.32" /* oklch(0.39 0.041 237.32) */,
      "secondary-foreground": "1 0 0" /* oklch(0% 0 0) */,
      muted: "0.92 0.019 237.32" /* oklch(0.92 0.019 237.32) */,
      "muted-foreground": "0.62 0.041 237.32" /* oklch(0.62 0.041 237.32) */,
      accent: "0.95 0.019 237.32" /* oklch(0.95 0.019 237.32) */,
      "accent-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      destructive: "56% 0.22 20" /* oklch(56% 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.93 0.021 237.32" /* oklch(0.93 0.021 237.32) */,
      input: "0.90 0.021 237.32" /* oklch(0.90 0.021 237.32) */,

      ring: "0.55 0.1814 19.77" /* oklch(0.55 0.1814 19.77) */,

      "chart-1": "0.76 0.057 17.1" /* oklch(0.76 0.057 17.1) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      "sidebar-primary": "0.55 0.1814 16.77" /* oklch(0.55 0.1814 16.77) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.041 237.32" /* oklch(0.95 0.021 237.32) */,
      "sidebar-accent-foreground":
        "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      "sidebar-border": "0.93 0.041 237.32" /* oklch(0.93 0.021 237.32) */,
      "sidebar-ring": "0.55 0.1814 16.77" /* oklch(0.55 0.1814 16.77) */,
    },
    dark: {
      background: "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,

      card: "0.22 0.041 237.32" /* oklch(0.22 0.041 237.32) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.20 0.041 237.32" /* oklch(0.20 0.041 237.32) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.59 0.1814 16.77" /* oklch(0.59 0.1814 16.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,

      secondary: "0.60 0.041 237.32" /* oklch(0.60 0.041 237.32) */,
      "secondary-foreground": "0% 0 0" /* oklch(0% 0 0) */,

      muted: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "muted-foreground": "0.67 0.041 237.32" /* oklch(0.67 0.041 237.32) */,
      accent: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "56% 0.22 20" /* oklch(56% 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      input: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      ring: "0.59 0.1814 16.77" /* oklch(0.59 0.1814 16.77) */,

      "chart-1": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "0.20 0.041 237.32" /* oklch(0.20 0.041 237.32) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "sidebar-ring": "0.59 0.1814 16.77" /* oklch(0.59 0.1814 16.77) */,
    },
  },

  "palette-8": {
    /*
    #D88C9A
    #F2D0A9
    #F1E3D3
    #99C1B9
    #8E7DBE
    */
    /*

    #1B3022
    #395756
    #4F5D75


    #090809
    #F44E3F
    #F4796B
    #F4897C
    #F49185
    #F4998D


    #E6E49F
    #25291C
    #989C94
    #BDC2BF
    #E3E7D3


    #353D2F
    #515B3A
    #6BA368
    #9CFC97
    #E6FAFC


    #3F6C51
    #F39A9D
    #FFEAEC
    #6DB1BF
    #301A4B

    #1E2019
    #587B7F
    #E2C044
    #D3D0CB
    #393E41

    #f8f5f3
    #f8ca47
    #272824
    #fffefe

    chart
    #d54988
    #29ab93
    #94a1c7
    #f3c849
    #2c2d2b
    #fbf1ef
    #c4c1c0

    oklch(0.66 0.1613 269.03) #6b8bf5
    oklch(0.66 0.1809 265.3) #5b8aff
    oklch(0.18 0.0581 267.75) #070F2B
    oklch(0.26 0.1037 277.24) #1B1A55
    oklch(0.49 0.0856 275.46) #535C91
    oklch(0.67 0.0749 286) #9290C3
    oklch(0.74 0.0534 280.17) #a5a9ce
    oklch(0.39 0.156787 9.9243) #840032
    oklch(0.74 0.1337 279.34) #9ba2ff
    oklch(0.51 0.0377 241.68) #546A7B
    oklch(0.67 0.0772 208.77) #58A4B0
    oklch(0.81 0.0928 58.44) #EDB183

    */
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      primary: "0.30 0.1037 277.24" /* oklch(0.30 0.1037 277.24) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.90 0.0534 280.17" /* oklch(0.90 0.0534 280.17) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.92 0.0534 280.17" /* oklch(0.92 0.0534 280.17) */,
      "muted-foreground": "0.62 0.0534 280.17" /* oklch(0.62 0.0534 280.17) */,
      accent: "0.95 0.0749 286" /* oklch(0.95 0.0749 286) */,
      "accent-foreground": "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      destructive: "0.53 0.2 8.9243" /* oklch(0.53 0.2 8.9243) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.93 0.0749 286" /* oklch(0.93 0.0749 286) */,
      input: "0.90 0.0749 286" /* oklch(0.90 0.0749 286) */,

      ring: "0.38 0.1037 277.24" /* oklch(0.38 0.1037 277.24) */,

      "chart-1": "0.30 0.1037 277.24" /* oklch(0.30 0.1037 277.24) */,
      "chart-2": "0.67 0.0772 208.77" /* oklch(0.67 0.0772 208.77) */,
      "chart-3": "0.53 0.2 8.9243" /* oklch(0.53 0.2 8.9243) */,
      "chart-4": "0.66 0.1809 265.3" /* oklch(0.66 0.1809 265.3) */,
      "chart-5": "0.81 0.0928 58.44" /* oklch(0.81 0.0928 58.44) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground":
        "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      "sidebar-primary": "0.30 0.1037 277.24" /* oklch(0.30 0.1037 277.24) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.0749 286" /* oklch(0.95 0.0749 286) */,
      "sidebar-accent-foreground":
        "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      "sidebar-border": "0.93 0.0749 286" /* oklch(0.93 0.0749 286) */,
      "sidebar-ring": "0.38 0.1037 277.24" /* oklch(0.38 0.1037 277.24) */,
    },
    dark: {
      background: "0.18 0.0258 267.75" /* oklch(0.18 0.0258 267.75) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,

      card: "0.22 0.0258 267.75" /* oklch(0.22 0.0258 267.75) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.22 0.0258 267.75" /* oklch(0.22 0.0258 267.75) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,

      secondary: "0.34 0.0258 267.75" /* oklch(0.34 0.0258 267.75) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,

      muted: "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "muted-foreground": "0.67 0.0258 267.75" /* oklch(0.67 0.0258 267.75) */,
      accent: "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.60 0.2 8.9243" /* oklch(0.60 0.2 8.9243) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.28 0.0258 267.75" /* oklch(0.28 0.0258 267.75) */,
      input: "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      ring: "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,

      "chart-1": "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
      "chart-2": "0.67 0.0772 208.77" /* oklch(0.55 0.0772 208.77) */,
      "chart-3": "0.59 0.1301 8.9243" /* oklch(0.59 0.1301 8.9243) */,
      "chart-4": "0.66 0.1809 265.3" /* oklch(0.66 0.1809 265.3) */,
      "chart-5": "0.66 0.0928 58.44" /* oklch(0.66 0.0928 58.44) */,

      "sidebar-background":
        "0.18 0.0258 267.75" /* oklch(0.18 0.0258 267.75) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary": "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "sidebar-ring": "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
    },
  },
  "palette-9": {
    // oklch(1 0 0) #FFFFFF
    // oklch(0 0 0) #000000
    // oklch(0.93 0.1703 128.84) #C6FF7D
    // oklch(0.85 0 0) #CDCDCD

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.89 0.1703 128.84" /* oklch(0.89 0.1703 128.84) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.30 0.0095 253" /* oklch(0.30 0.0095 253) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0095 253" /* oklch(0.90 0.0095 253) */,
      "muted-foreground": "0.61 0.0095 253" /* oklch(0.61 0.0095 253) */,
      accent: "0.95 0.0095 253" /* oklch(0.95 0.0095 253) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "56% 0.22 20" /* oklch(56% 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0095 253" /* oklch(0.92 0.0095 253) */,
      input: "0.90 0.0095 253" /* oklch(0.90 0.0095 253) */,
      ring: "0.30 0.0095 253" /* oklch(0.30 0.0095 253) */,

      "chart-1": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-2": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-3": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-4": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-5": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.89 0.1703 128.84" /* oklch(0.89 0.1703 128.84) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.95 0.0095 253" /* oklch(0.95 0.0095 253) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0.0095 253" /* oklch(0.92 0.0095 253) */,
      "sidebar-ring": "0.30 0.0095 253" /* oklch(0.30 0.0095 253) */,
    },

    dark: {
      background: "0 0 0" /* oklch(0 0 0) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.14 0.0095 253" /* oklch(0.14 0.0095 253) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.15 0.0095 253" /* oklch(0.15 0.0095 253) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.93 0.1703 128.84" /* oklch(0.93 0.1703 128.84) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.40 0.0095 253" /* oklch(0.40 0.0095 253) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0.0095 253" /* oklch(0.28 0.0095 253) */,
      "muted-foreground": "0.58 0.0095 253" /* oklch(0.58 0.0095 253) */,
      accent: "0.28 0.0095 253" /* oklch(0.28 0.0095 253) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.71 0.22 20" /* oklch(0.71 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.26 0.0095 253" /* oklch(0.26 0.0095 253) */,
      input: "0.29 0.0095 253" /* oklch(0.29 0.0095 253) */,
      ring: "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "chart-1": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-2": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-3": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-4": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-5": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "sidebar-background": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary": "0.93 0.1703 128.84" /* oklch(0.93 0.1703 128.84) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.28 0.0095 253" /* oklch(0.28 0.0095 253) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0095 253" /* oklch(0.26 0.0095 253) */,
      "sidebar-ring": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
    },
  },

  "palette-10": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.96 0.025 106.86) #F3F3E0
    oklch(0.20 0.025 106.86) #F3F3E0
    oklch(0.38 0.1312 260.45) #133E87
    oklch(0.63 0.0948 254.63) #608BC1
    oklch(0.89 0.0276 244.71) #CBDCEB

    */

    light: {
      background: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.38 0.1312 260.45" /* oklch(0.38 0.1312 260.45) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.025 106.86" /* oklch(0.90 0.025 106.86) */,
      "muted-foreground": "0.61 0.025 106.86" /* oklch(0.61 0.025 106.86) */,
      accent: "0.89 0.0276 244.71" /* oklch(0.89 0.0276 244.71) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.025 106.86" /* oklch(0.92 0.025 106.86) */,
      input: "0.90 0.025 106.86" /* oklch(0.90 0.025 106.86) */,
      ring: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,

      "chart-1": "0.38 0.1312 260.45" /* oklch(0.38 0.1312 260.45) */,
      "chart-2": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "chart-3": "0.63 0.15948 154.63" /* oklch(0.63 0.15948 154.63) */,
      "chart-4": "0.63 0.20 20" /* oklch(0.63 0.20 20) */,
      "chart-5": "0 0 0" /* oklch(0 0 0) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.89 0.1703 128.84" /* oklch(0.89 0.1703 128.84) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.99 0.1203 128.84" /* oklch(0.99 0.1203 128.84) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0.0095 253" /* oklch(0.92 0.0095 253) */,
      "sidebar-ring": "0.93 0.1703 128.84" /* oklch(0.93 0.1703 128.84) */,
    },

    dark: {
      background: "0.18 0.025 106.86" /* oklch(0.18 0.025 106.86) */,
      foreground: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      card: "0.22 0.025 106.86" /* oklch(0.22 0.025 106.86) */,
      "card-foreground": "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      popover: "0.22 0.025 106.86" /* oklch(0.22 0.025 106.86) */,
      "popover-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      primary: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.40 0.025 106.86" /* oklch(0.40 0.025 106.86) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0.0138 106.86" /* oklch(0.28 0.0138 106.86) */,
      "muted-foreground": "0.58 0.0138 106.86" /* oklch(0.58 0.0138 106.86) */,
      accent: "0.29 0.0138 106.86" /* oklch(0.28 0.0138 106.86) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.71 0.22 20" /* oklch(0.71 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.26 0.0138 106.86" /* oklch(0.26 0.0138 106.86) */,
      input: "0.29 0.0138 106.86" /* oklch(0.29 0.0138 106.86) */,
      ring: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,

      "chart-1": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-2": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-3": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-4": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-5": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "sidebar-background": "0.16 0.025 106.86" /* oklch(0.16 0.025 106.86) */,
      "sidebar-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      "sidebar-primary": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0.0138 106.86" /* oklch(0.28 0.0138 106.86) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0138 106.86" /* oklch(0.26 0.0138 106.86) */,
      "sidebar-ring": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
    },
  },

  "palette-11": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.61 0.053 271.98) #7882A4
    oklch(0.73 0.0581 66.7) #C0A080
    oklch(0.86 0 0) #D1D1D1
    oklch(0.95 0 0) #EFEFEF
    oklch(0.74 0.0264 273.38) #a6abbd
    oklch(0.60 0.0594 11.88) #a6777c
    oklch(0.62 0.0947 37.47) #b7715c

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.60 0.0581 66.7" /* oklch(0.60 0.0581 66.7) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0 0" /* oklch(0.90 0 0) */,
      "muted-foreground": "0.61 0 0" /* oklch(0.61 0 0) */,
      accent: "0.95 0.053 271.98" /* oklch(0.95 0.053 271.98) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.60 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0 0" /* oklch(0.92 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,

      "chart-1": "0.65 0.0581 66.7" /* oklch(0.65 0.0581 66.7) */,
      "chart-2": "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,
      "chart-3": "0.60 0.0594 11.88" /* oklch(0.60 0.0594 11.88) */,
      "chart-4": "0.74 0.0264 273.38" /* oklch(0.74 0.0264 273.38) */,
      "chart-5": "0.62 0.0947 37.47" /* oklch(0.62 0.0947 37.47) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.60 0.0581 66.7" /* oklch(0.60 0.0581 66.7) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.053 271.98" /* oklch(0.95 0.053 271.98) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,
    },

    dark: {
      background: "0.20 0.0275 274.07" /* oklch(0.20 0.0275 274.07) */,
      foreground: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      card: "0.23 0.0275 274.07" /* oklch(0.23 0.0275 274.07) */,
      "card-foreground": "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      popover: "0.23 0.0275 274.07" /* oklch(0.23 0.0275 274.07) */,
      "popover-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      primary: "0.48 0.0381 66.7" /* oklch(0.48 0.0381 66.7) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.28 0.0275 274.07" /* oklch(0.28 0.0275 274.07) */,
      "muted-foreground": "0.58 0.0275 274.07" /* oklch(0.58 0.0275 274.07) */,
      accent: "0.29 0.0275 274.07" /* oklch(0.28 0.0275 274.07) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.71 0.22 20" /* oklch(0.73 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.26 0.0275 274.07" /* oklch(0.26 0.0275 274.07) */,
      input: "0.29 0.0275 274.07" /* oklch(0.29 0.0275 274.07) */,
      ring: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,

      "chart-1": "0.54 0.0381 66.7" /* oklch(0.54 0.0381 66.7) */,
      "chart-2": "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "chart-3": "0.60 0.0594 11.88" /* oklch(0.60 0.0594 11.88) */,
      "chart-4": "0.74 0.0264 273.38" /* oklch(0.74 0.0264 273.38) */,
      "chart-5": "0.52 0.0947 37.47" /* oklch(0.52 0.0947 37.47) */,

      "sidebar-background":
        "0.19 0.0275 274.07" /* oklch(0.19 0.0275 274.07) */,
      "sidebar-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      "sidebar-primary": "0.48 0.0381 66.7" /* oklch(0.48 0.0381 66.7) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.29 0.0275 274.07" /* oklch(0.28 0.0275 274.07) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0275 274.07" /* oklch(0.26 0.0275 274.07) */,
      "sidebar-ring": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
    },
  },

  "palette-12": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    #7900FF
    #548CFF
    #93FFD8
    #CFFFDC

    _______________

    oklch(0.3 0.1562 276.6) #22177A
    oklch(0.51 0.1045 283.45) #605EA1
    oklch(0.7 0.024 207.06) #8EA3A6
    oklch(0.92 0.0752 110.26) #E6E9AF

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.36 0.1562 276.6" /* oklch(0.36 0.1562 276.6) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.87 0.024 207.06" /* oklch(0.87 0.024 207.06) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0 0" /* oklch(0.90 0 0) */,
      "muted-foreground": "0.61 0 0" /* oklch(0.61 0 0) */,
      accent: "0.96 0.1045 283.45" /* oklch(0.96 0.1045 283.45) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0 0" /* oklch(0.92 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.46 0.1562 276.6" /* oklch(0.46 0.1562 276.6) */,

      "chart-1": "0.44 0.1562 276.6" /* oklch(0.44 0.1562 276.6) */,
      "chart-2": "0.66 0.024 207.06" /* oklch(0.66 0.024 207.06) */,
      "chart-3": "0.66 0.18 20" /* oklch(0.66 0.18 20) */,
      "chart-4": "0.51 0.1045 283.45" /* oklch(0.51 0.1045 283.45) */,
      "chart-5": "0.67 0.0948 254.63" /* oklch(0.67 0.0948 254.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.36 0.1562 276.6" /* oklch(0.36 0.1562 276.6) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0.1045 283.45" /* oklch(0.96 0.1045 283.45) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.46 0.1562 276.6" /* oklch(0.46 0.1562 276.6) */,
    },

    dark: {
      background: "0.20 0.022 274.07" /* oklch(0.20 0.022 274.07) */,
      foreground: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      card: "0.22 0.022 274.07" /* oklch(0.22 0.022 274.07) */,
      "card-foreground": "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      popover: "0.23 0.022 274.07" /* oklch(0.23 0.022 274.07) */,
      "popover-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      primary: "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.28 0.022 274.07" /* oklch(0.28 0.022 274.07) */,
      "muted-foreground": "0.58 0.022 274.07" /* oklch(0.58 0.022 274.07) */,
      accent: "0.29 0.022 274.07" /* oklch(0.29 0.022 274.07) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.75 0.22 20" /* oklch(0.75 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.27 0.022 274.07" /* oklch(0.27 0.022 274.07) */,
      input: "0.30 0.022 274.07" /* oklch(0.30 0.022 274.07) */,
      ring: "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,

      "chart-1": "0.52 0.1562 276.6" /* oklch(0.52 0.1562 276.6) */,
      "chart-2": "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "chart-3": "0.75 0.22 20" /* oklch(0.75 0.22 20) */,
      "chart-4": "0.67 0.081 210.63" /* oklch(0.67 0.081 210.63) */,
      "chart-5": "0.67 0.0948 254.63" /* oklch(0.67 0.0948 254.63) */,

      "sidebar-background": "0.18 0.022 274.07" /* oklch(0.18 0.022 274.07) */,
      "sidebar-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      "sidebar-primary": "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0.022 274.07" /* oklch(0.29 0.022 274.07) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.022 274.07" /* oklch(0.26 0.022 274.07) */,
      "sidebar-ring": "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,
    },
  },

  "palette-13": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    #7900FF
    #548CFF
    #93FFD8
    #CFFFDC

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7


    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)

    _______________

    oklch(0.3 0.1562 276.6) #22177A
    oklch(0.51 0.1045 283.45) #605EA1
    oklch(0.7 0.024 207.06) #8EA3A6
    oklch(0.92 0.0752 110.26) #E6E9AF

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      primary: "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.87 0.024 207.06" /* oklch(0.87 0.024 207.06) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.012 207.06" /* oklch(0.90 0.012 207.06) */,
      "muted-foreground": "0.61 0.012 207.06" /* oklch(0.61 0.012 207.06) */,
      accent: "0.96 0.012 207.06" /* oklch(0.96 0.012 207.06) */,
      "accent-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      destructive: "0.59 0.1653 13.06" /* oklch(0.59 0.1653 13.06) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.019 230.11" /* oklch(0.92 0.019 230.11) */,
      input: "0.90 0.019 230.11" /* oklch(0.90 0.019 230.11) */,
      ring: "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,

      "chart-1": "0.43 0.0663 195.320" /* oklch(0.22 0.0663 195.320) */,
      "chart-2": "0.75 0.0495 168.74" /* oklch(0.66 0.0495 168.74) */,
      "chart-3": "0.59 0.1653 13.06" /* oklch(0.59 0.1653 13.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.64 0.1367 254.63" /* oklch(0.64 0.1367 254.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      "sidebar-primary": "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0.012 207.06" /* oklch(0.96 0.012 207.06) */,
      "sidebar-accent-foreground":
        "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,
    },

    dark: {
      background: "0.15 0.0093 230.11" /* oklch(0.15 0.0093 230.11) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.22 0.0093 230.11" /* oklch(0.22 0.0093 230.11) */,
      "card-foreground": "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      popover: "0.23 0.0093 230.11" /* oklch(0.23 0.0093 230.11) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.49 0.0663 195.320" /* oklch(0.49 0.0663 195.320) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.28 0.0093 230.11" /* oklch(0.28 0.0093 230.11) */,
      "muted-foreground": "0.58 0.0093 230.11" /* oklch(0.58 0.0093 230.11) */,
      accent: "0.29 0.0093 230.11" /* oklch(0.29 0.0093 230.11) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.66 0.1653 13.06" /* oklch(0.66 0.1653 13.06) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.27 0.0093 230.11" /* oklch(0.27 0.0093 230.11) */,
      input: "0.30 0.0093 230.11" /* oklch(0.30 0.0093 230.11) */,
      ring: "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,

      "chart-1": "0.49 0.0663 195.320" /* oklch(0.49 0.0663 195.320) */,
      "chart-2": "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,
      "chart-3": "0.73 0.0365 171.05" /* oklch(0.73 0.0365 171.05) */,
      "chart-4": "0.66 0.1653 13.06" /* oklch(0.66 0.1653 13.06) */,
      "chart-5": "0.55 0.1367 254.63" /* oklch(0.55 0.1367 254.63) */,

      "sidebar-background":
        "0.18 0.0093 230.11" /* oklch(0.18 0.0093 230.11) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.49 0.0663 195.320" /* oklch(0.49 0.0663 195.320) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0.0093 230.11" /* oklch(0.29 0.0093 230.11) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0093 230.11" /* oklch(0.26 0.0093 230.11) */,
      "sidebar-ring": "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,
    },
  },

  "palette-14": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.36 0.0089 303.99) #3D3B40
    oklch(0.55 0.2123 274.05) #525CEB
    oklch(0.85 0.0378 258.37) #BFCFE7
    oklch(0.96 0.0265 312.58) #F8EDFF
    oklch(0.66 0.2025 22.23) #ff585e
    oklch(0.66 0.0858 173.06) #6bbaa3

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7
    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)


    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      primary: "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0089 303.99" /* oklch(0.90 0.0089 303.99) */,
      "muted-foreground": "0.61 0.0089 303.99" /* oklch(0.61 0.0089 303.99) */,
      accent: "0.95 0.0265 312.58" /* oklch(0.95 0.0265 312.58) */,
      "accent-foreground": "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      destructive: "0.63 0.2125 22.23" /* oklch(0.63 0.2125 22.23) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0089 303.99" /* oklch(0.92 0.0089 303.99) */,
      input: "0.90 0.0089 303.99" /* oklch(0.90 0.0089 303.99) */,
      ring: "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,

      "chart-1": "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
      "chart-2": "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.19667 64.63" /* oklch(0.66 0.19667 64.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground":
        "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      "sidebar-primary": "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.0265 312.58" /* oklch(0.95 0.0265 312.58) */,
      "sidebar-accent-foreground":
        "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
    },
    dark: {
      background: "0.20 0 303.99" /* oklch(0.20 0 303.99) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.24 0 303.99" /* oklch(0.24 0 303.99) */,
      "card-foreground": "0.95 0 303.99" /* oklch(0.95 0 303.99) */,
      popover: "0.23 0 303.99" /* oklch(0.23 0 303.99) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0 303.99" /* oklch(0.36 0 303.99) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0 303.99" /* oklch(0.28 0 303.99) */,
      "muted-foreground": "0.64 0 303.99" /* oklch(0.64 0 303.99) */,
      accent: "0.29 0 303.99" /* oklch(0.29 0 303.99) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.68 0.2125 22.23" /* oklch(0.68 0.2125 22.23) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.27 0 303.99" /* oklch(0.27 0 303.99) */,
      input: "0.30 0 303.99" /* oklch(0.30 0 303.99) */,
      ring: "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,

      "chart-1": "0.56 0.1663 274" /* oklch(0.56 0.1663 274) */,
      "chart-2": "0.59 0.0089 303.99" /* oklch(0.59 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.11667 64.63" /* oklch(0.66 0.11667 64.63) */,

      "sidebar-background": "0.20 0 303.99" /* oklch(0.20 0 303.99) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0 303.99" /* oklch(0.29 0 303.99) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0 303.99" /* oklch(0.26 0 303.99) */,
      "sidebar-ring": "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
    },
  },

  "palette-15": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.36 0.0089 303.99) #3D3B40
    oklch(0.45 0.2434 272.66) #362FD9
    oklch(0.68 0.1113 194.84) #1AACAC
    oklch(0.62 0.095 209.77) #
    oklch(0.18 0.0357 230.05) #00141e
    oklch(0.95 0 0) #EEEEEE
    oklch(0.66 0.2025 22.23) #EEEEEE
    oklch(0.66 0.0858 173.06) #6bbaa3

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7
    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)


    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0 0" /* oklch(0.18 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      primary: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.93 0 0" /* oklch(0.93 0 0) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.90 0 0" /* oklch(0.90 0 0) */,
      "muted-foreground": "0.61 0 0" /* oklch(0.61 0 0) */,
      accent: "0.95 0 0" /* oklch(0.95 0 0) */,
      "accent-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      destructive: "0.63 0.2125 22.23" /* oklch(0.63 0.2125 22.23) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0 0" /* oklch(0.92 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,

      "chart-1": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "chart-2": "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.19667 64.63" /* oklch(0.66 0.19667 64.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      "sidebar-primary": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0 0" /* oklch(0.95 0 0) */,
      "sidebar-accent-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
    },
    dark: {
      background: "0.20 0 0" /* oklch(0.20 0 0) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.24 0 0" /* oklch(0.24 0 0) */,
      "card-foreground": "0.95 0 0" /* oklch(0.95 0 0) */,
      popover: "0.23 0 0" /* oklch(0.23 0 0) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0 0" /* oklch(0.36 0 0) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0 0" /* oklch(0.28 0 0) */,
      "muted-foreground": "0.64 0 0" /* oklch(0.64 0 0) */,
      accent: "0.29 0 0" /* oklch(0.29 0 0) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.68 0.2125 22.23" /* oklch(0.68 0.2125 22.23) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.28 0 0" /* oklch(0.28 0 0) */,
      input: "0.30 0 0" /* oklch(0.30 0 0) */,
      ring: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,

      "chart-1": "0.56 0.1663 274" /* oklch(0.56 0.1663 274) */,
      "chart-2": "0.59 0.0089 303.99" /* oklch(0.59 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.11667 64.63" /* oklch(0.66 0.11667 64.63) */,

      "sidebar-background": "0.20 0 0" /* oklch(0.20 0 0) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0 0" /* oklch(0.29 0 0) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.28 0 0" /* oklch(0.28 0 0) */,
      "sidebar-ring": "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
    },
  },

  "palette-16": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.36 0.0089 303.99) #3D3B40
    oklch(0.45 0.2434 272.66) #362FD9
    oklch(0.68 0.1113 194.84) #1AACAC
    oklch(0.62 0.095 209.77) #
    oklch(0.18 0.0357 230.05) #00141e
    oklch(0.95 0 0) #EEEEEE
    oklch(0.66 0.2025 22.23) #EEEEEE
    oklch(0.66 0.0858 173.06) #6bbaa3

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7
    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)

    oklch(0.87 0.0897 334.29) #F8BDEB
    oklch(0.7 0.195 269.15) #5272F2
    oklch(0.26 0.0632 250.35) #072541
    oklch(0.86 0.1739 167.27) #15F5BA
    #211951
    #836FFF
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.98 0.0385 95.84) #FFF8DB
    oklch(0.89 0.0799 338.44) #FFC7ED
    oklch(0.64 0.0767 272.84) #7D8ABC
    oklch(0.38 0.059 258.92) #304463
    oklch(0.52 0.0907 275.93) #5A639C
    oklch(0.59 0.0924 283.96) #7776B3
    oklch(0.66 0.0833 301.66) #9B86BD
    oklch(0.84 0.0757 321.17) #E2BBE9
    oklch(0.56 0.1946 359.54) #c62d70

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      primary: "0.56 0.1946 350.54" /* oklch(0.56 0.1946 350.54) */,
      "primary-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      // oklch(0.60 0.195 269.15)
      secondary: "0.93 0.0924 283.96" /* oklch(0.93 0.0924 283.96) */,
      "secondary-foreground": "0 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      muted: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      "muted-foreground": "0.61 0.0132 250.35" /* oklch(0.61 0.0132 250.35) */,
      accent: "0.96 0.0924 283.96" /* oklch(0.96 0.0924 283.96) */,
      "accent-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      destructive: "0.63 0.2125 22.23" /* oklch(0.60 0.2125 22.23) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      input: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      ring: "0.56 0.1946 350.54" /* oklch(0.56 0.1946 350.54) */,

      "chart-1": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "chart-2": "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.19667 64.63" /* oklch(0.66 0.19667 64.63) */,

      "sidebar-background":
        "0.98 0.0232 250.35" /* oklch(0.98 0.0232 250.35) */,
      "sidebar-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-primary": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0.0924 283.96" /* oklch(0.96 0.0924 283.96) */,
      "sidebar-accent-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-border": "0.92 0.0232 250.35" /* oklch(0.92 0.0232 250.35) */,
      "sidebar-ring": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
    },
    dark: {
      background: "0.20 0.0232 250.35" /* oklch(0.20 0.0232 250.35) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.24 0.0232 250.35" /* oklch(0.24 0.0232 250.35) */,
      "card-foreground": "0.95 0.0232 250.35" /* oklch(0.95 0.0232 250.35) */,
      popover: "0.23 0.0232 250.35" /* oklch(0.23 0.0232 250.35) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
      "primary-foreground": "0 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0232 250.35" /* oklch(0.36 0.0232 250.35) */,
      "secondary-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      muted: "0.28 0.0232 250.35" /* oklch(0.28 0.0232 250.35) */,
      "muted-foreground": "0.64 0.0232 250.35" /* oklch(0.64 0.0232 250.35) */,
      accent: "0.29 0.0232 250.35" /* oklch(0.29 0.0232 250.35) */,
      "accent-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      destructive: "0.68 0.2125 22.23" /* oklch(0.68 0.2125 22.23) */,
      "destructive-foreground": "0 0.0232 250.35" /* oklch(0 0.0232 250.35) */,
      border: "0.27 0.0232 250.35" /* oklch(0.27 0.0232 250.35) */,
      input: "0.30 0.0232 250.35" /* oklch(0.30 0.0232 250.35) */,
      ring: "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,

      "chart-1": "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
      "chart-2": "0.68 0.1624 283.96" /* oklch(0.68 0.1624 283.96) */,
      "chart-3": "0.66 0.1839 177.27" /* oklch(0.66 0.1839 177.27) */,
      "chart-4": "0.7 0.175 249.15" /* oklch(0.7 0.175 249.15) */,
      "chart-5": "0.69 0.11667 64.63" /* oklch(0.69 0.11667 64.63) */,

      "sidebar-background":
        "0.20 0.0232 250.35" /* oklch(0.20 0.0232 250.35) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
      "sidebar-primary-foreground":
        "0 0.0232 250.35" /* oklch(0 0.0232 250.35) */,
      "sidebar-accent": "0.29 0.0232 250.35" /* oklch(0.29 0.0232 250.35) */,
      "sidebar-accent-foreground":
        "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      "sidebar-border": "0.26 0.0232 250.35" /* oklch(0.26 0.0232 250.35) */,
      "sidebar-ring": "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
    },
  },
  "palette-17": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.24 0.0048 145.42) #1E201E
    oklch(0.36 0.0102 114.6) #3C3D37
    oklch(0.55 0.0283 137.86) #697565
    oklch(0.91 0.0291 77.54) #ECDFCC
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.34 0.0283 137.86) #313552

    oklch(0.68 0.0283 137.86) #2EB086
    oklch(0.92 0.0283 137.86) #EEE6CE
    oklch(0.74 0.0283 137.86) #a8b252
    oklch(0.71 0.0283 137.86) #f4784e

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      primary: "0.68 0.127 166.4" /* oklch(0.68 0.127 166.4) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.34 0.0512 277.28" /* oklch(0.34 0.0512 277.28) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      "muted-foreground": "0.61 0.0132 250.35" /* oklch(0.61 0.0132 250.35) */,
      accent: "0.94 0.0512 277.28" /* oklch(0.94 0.0512 277.28) */,
      "accent-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      destructive: "0.59 0.1758 8.72" /* oklch(0.59 0.1758 8.72) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      input: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      ring: "0.34 0.0512 277.28" /* oklch(0.34 0.0512 277.28) */,

      "chart-1": "0.65 0.097 166.4" /* oklch(0.65 0.097 166.4) */,
      "chart-2": "0.65 0.224 283.96" /* oklch(0.65 0.224 283.96) */,
      "chart-3": "0.78 0.2413 334.35" /* oklch(0.78 0.2413 334.35) */,
      "chart-4": "0.69 0.275 249.15" /* oklch(0.69 0.275 249.15) */,
      "chart-5": "0.73 0.2129 39.07" /* oklch(0.73 0.2129 39.07) */,

      "sidebar-background":
        "0.98 0.0232 250.35" /* oklch(0.98 0.0232 250.35) */,
      "sidebar-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-primary": "0.68 0.127 166.4" /* oklch(0.68 0.127 166.4) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.94 0.0512 277.28" /* oklch(0.94 0.0512 277.28) */,
      "sidebar-accent-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-border": "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      "sidebar-ring": "0.34 0.0512 277.28" /* oklch(0.34 0.0512 277.28) */,
    },
    dark: {
      background: "0.23 0.0252 277.28" /* oklch(0.23 0.0252 277.28) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.27 0.0252 277.28" /* oklch(0.27 0.0252 277.28) */,
      "card-foreground": "0.95 0.0232 250.35" /* oklch(0.95 0.0232 250.35) */,
      popover: "0.25 0.0252 277.28" /* oklch(0.25 0.0252 277.28) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
      "primary-foreground": "0 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0252 277.28" /* oklch(0.36 0.0252 277.28) */,
      "secondary-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      muted: "0.29 0.0252 277.28" /* oklch(0.29 0.0252 277.28) */,
      "muted-foreground": "0.67 0.0252 277.28" /* oklch(0.67 0.0252 277.28) */,
      accent: "0.30 0.0252 277.28" /* oklch(0.30 0.0252 277.28) */,
      "accent-foreground": "1 0.0252 277.28" /* oklch(1 0.0252 277.28) */,
      destructive: "0.58 0.1558 8.72" /* oklch(0.58 0.1558 8.72) */,
      "destructive-foreground": "0 0.0252 277.28" /* oklch(0 0.0252 277.28) */,
      border: "0.29 0.0252 277.28" /* oklch(0.29 0.0252 277.28) */,
      input: "0.32 0.0252 277.28" /* oklch(0.32 0.0252 277.28) */,
      ring: "0.68 0.127 166.4" /* oklch(0.68 0.127 166.4) */,

      "chart-1": "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
      "chart-2": "0.68 0.1624 283.96" /* oklch(0.68 0.1624 283.96) */,
      "chart-3": "0.74 0.1213 114.35" /* oklch(0.74 0.1213 114.35) */,
      "chart-4": "0.7 0.175 249.15" /* oklch(0.7 0.175 249.15) */,
      "chart-5": "0.71 0.1429 39.07" /* oklch(0.71 0.1429 39.07) */,

      "sidebar-background":
        "0.20 0.0232 250.35" /* oklch(0.20 0.0252 277.28) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
      "sidebar-primary-foreground":
        "0 0.0252 277.28" /* oklch(0 0.0252 277.28) */,
      "sidebar-accent": "0.29 0.0252 277.28" /* oklch(0.29 0.0252 277.28) */,
      "sidebar-accent-foreground":
        "1 0.0252 277.28" /* oklch(1 0.0252 277.28) */,
      "sidebar-border": "0.26 0.0252 277.28" /* oklch(0.26 0.0252 277.28) */,
      "sidebar-ring": "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
    },
  },

  "palette-18": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.24 0.0048 145.42) #1E201E
    oklch(0.36 0.0102 114.6) #3C3D37
    oklch(0.55 0.0283 137.86) #697565
    oklch(0.91 0.0291 77.54) #ECDFCC
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.34 0.0283 137.86) #313552

    oklch(0.68 0.0283 137.86) #2EB086
    oklch(0.92 0.0283 137.86) #EEE6CE
    oklch(0.74 0.0283 137.86) #a8b252
    oklch(0.71 0.0283 137.86) #f4784e

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      primary: "0.55 0.0283 137.86" /* oklch(0.55 0.0283 137.86) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.88 0.0283 137.86" /* oklch(0.88 0.0283 137.86) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0183 137.86" /* oklch(0.90 0.0183 137.86) */,
      "muted-foreground": "0.61 0.0183 137.86" /* oklch(0.61 0.0183 137.86) */,
      accent: "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "accent-foreground": "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      destructive: "0.59 0.1488 8.72" /* oklch(0.59 0.1488 8.72) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0113 137.86" /* oklch(0.92 0.0113 137.86) */,
      input: "0.90 0.0113 137.86" /* oklch(0.90 0.0113 137.86) */,
      ring: "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,

      "chart-1": "0.39 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
      "chart-2": "0.55 0.0283 137.86" /* oklch(0.63 0.0283 137.86) */,
      "chart-3": "0.64 0.0283 137.86" /* oklch(0.72 0.0283 137.86) */,
      "chart-4": "0.75 0.0283 137.86" /* oklch(0.83 0.0283 137.86) */,
      "chart-5": "0.85 0.0283 137.86" /* oklch(0.92 0.0283 137.86) */,

      "sidebar-background": "1 0.0102 114.6" /* oklch(1 0.0102 114.6) */,
      "sidebar-foreground": "0.22 0.0102 114.6" /* oklch(0.22 0.0102 114.6) */,
      "sidebar-primary": "0.55 0.0283 137.86" /* oklch(0.55 0.0283 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "sidebar-accent-foreground":
        "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      "sidebar-border": "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      "sidebar-ring": "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
    },
    dark: {
      background: "0.21 0.0018 145.42" /* oklch(0.21 0.0018 145.42) */,
      foreground: "0.95 0.0018 145.42" /* oklch(0.95 0.0018 145.42) */,
      card: "0.25 0.0048 145.42" /* oklch(0.25 0.0048 145.42) */,
      "card-foreground": "0.95 0.0018 145.42" /* oklch(0.95 0.0018 145.42) */,
      popover: "0.24 0.0048 145.42" /* oklch(0.24 0.0048 145.42) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0048 145.42" /* oklch(0.36 0.0048 145.42) */,
      "secondary-foreground": "1 0.0018 145.42" /* oklch(1 0.0018 145.42) */,
      muted: "0.29 0.0048 145.42" /* oklch(0.29 0.0048 145.42) */,
      "muted-foreground": "0.67 0.0048 145.42" /* oklch(0.67 0.0048 145.42) */,
      accent: "0.30 0.0048 145.42" /* oklch(0.30 0.0048 145.42) */,
      "accent-foreground": "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      destructive: "0.60 0.1518 8.72" /* oklch(0.60 0.1518 8.72) */,
      "destructive-foreground": "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      border: "0.30 0.0048 145.42" /* oklch(0.30 0.0048 145.42) */,
      input: "0.33 0.0048 145.42" /* oklch(0.33 0.0048 145.42) */,
      ring: "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,

      "chart-1": "0.42 0.0483 137.86" /* oklch(0.42 0.0483 137.86) */,
      "chart-2": "0.60 0.0483 137.86" /* oklch(0.60 0.0483 137.86) */,
      "chart-3": "0.69 0.0483 137.86" /* oklch(0.69 0.0483 137.86) */,
      "chart-4": "0.78 0.0483 137.86" /* oklch(0.78 0.0483 137.86) */,
      "chart-5": "0.86 0.0483 137.86" /* oklch(0.86 0.0483 137.86) */,

      "sidebar-background":
        "0.21 0.0232 250.35" /* oklch(0.21 0.0048 145.42) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.29 0.0048 145.42" /* oklch(0.29 0.0048 145.42) */,
      "sidebar-accent-foreground":
        "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      "sidebar-border": "0.26 0.0048 145.42" /* oklch(0.26 0.0048 145.42) */,
      "sidebar-ring": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
    },
  },

  "palette-19": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.25 0 0) #222222
    oklch(0.76 0.1473 168.68) #1DCD9F
    oklch(0.61 0.1179 168.59) #169976


    oklch(0.24 0.0048 145.42) #1E201E
    oklch(0.36 0.0102 114.6) #3C3D37
    oklch(0.55 0.0283 137.86) #697565
    oklch(0.91 0.0291 77.54) #ECDFCC
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.34 0.0283 137.86) #313552

    oklch(0.68 0.0283 137.86) #2EB086
    oklch(0.92 0.0283 137.86) #EEE6CE
    oklch(0.74 0.0283 137.86) #a8b252
    oklch(0.71 0.0283 137.86) #f4784e

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.20 0 0" /* oklch(0.20 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      primary: "0.61 0.1179 168.59" /* oklch(0.61 0.1179 168.59) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.88 0.0283 137.86" /* oklch(0.88 0.0283 137.86) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0183 137.86" /* oklch(0.90 0.0183 137.86) */,
      "muted-foreground": "0.61 0.0183 137.86" /* oklch(0.61 0.0183 137.86) */,
      accent: "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "accent-foreground": "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      destructive: "0.59 0.1488 8.72" /* oklch(0.59 0.1488 8.72) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0113 137.86" /* oklch(0.92 0.0113 137.86) */,
      input: "0.90 0.0113 137.86" /* oklch(0.90 0.0113 137.86) */,
      ring: "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,

      "chart-1": "0.39 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
      "chart-2": "0.55 0.0283 137.86" /* oklch(0.63 0.0283 137.86) */,
      "chart-3": "0.64 0.0283 137.86" /* oklch(0.72 0.0283 137.86) */,
      "chart-4": "0.75 0.0283 137.86" /* oklch(0.83 0.0283 137.86) */,
      "chart-5": "0.85 0.0283 137.86" /* oklch(0.92 0.0283 137.86) */,

      "sidebar-background": "1 0.0102 114.6" /* oklch(1 0.0102 114.6) */,
      "sidebar-foreground": "0.22 0.0102 114.6" /* oklch(0.22 0.0102 114.6) */,
      "sidebar-primary": "0.55 0.0283 137.86" /* oklch(0.55 0.0283 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "sidebar-accent-foreground":
        "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      "sidebar-border": "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      "sidebar-ring": "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
    },
    dark: {
      background: "0.16 0 0" /* oklch(0.16 0 0) */,
      foreground: "0.95 0 0" /* oklch(0.95 0 0) */,
      card: "0.21 0 0" /* oklch(0.21 0 0) */,
      "card-foreground": "0.95 0 0" /* oklch(0.95 0 0) */,
      popover: "0.22 0 0" /* oklch(0.22 0 0) */,
      "popover-foreground": "0.95 0 0" /* oklch(0.95 0 0) */,
      primary: "0.56 0.0999 168.59" /* oklch(0.56 0.0999 168.59) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0 0" /* oklch(0.36 0 0) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.29 0 0" /* oklch(0.29 0 0) */,
      "muted-foreground": "0.67 0 0" /* oklch(0.67 0 0) */,
      accent: "0.30 0 0" /* oklch(0.30 0 0) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.60 0.1518 8.72" /* oklch(0.60 0.1518 8.72) */,
      "destructive-foreground": "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      border: "0.30 0 0" /* oklch(0.30 0 0) */,
      input: "0.33 0 0" /* oklch(0.33 0 0) */,
      ring: "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,

      "chart-1": "0.42 0.0483 137.86" /* oklch(0.42 0.0483 137.86) */,
      "chart-2": "0.60 0.0483 137.86" /* oklch(0.60 0.0483 137.86) */,
      "chart-3": "0.69 0.0483 137.86" /* oklch(0.69 0.0483 137.86) */,
      "chart-4": "0.78 0.0483 137.86" /* oklch(0.78 0.0483 137.86) */,
      "chart-5": "0.86 0.0483 137.86" /* oklch(0.86 0.0483 137.86) */,

      "sidebar-background":
        "0.21 0.0232 250.35" /* oklch(0.21 0.0048 145.42) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.29 0.0048 145.42" /* oklch(0.29 0.0048 145.42) */,
      "sidebar-accent-foreground":
        "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      "sidebar-border": "0.26 0.0048 145.42" /* oklch(0.26 0.0048 145.42) */,
      "sidebar-ring": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
    },
  },

  // secondary #EDE8FF
};

export const themePalettesListEntries = Object.entries(themePalettes);

export const DEFAULT_THEME_PALETTE = "";
export const DEFAULT_RADIUS = "";

/* gray */
// --color-gray: 211.2 10% 49.2%; /* hsl(211.2, 10%, 49.2%) */
// --color-gray-50: 0 0% 98%; /* hsl(210 10.5% 98%) */
// --color-gray-100: 210 10.5% 94.5%; /* hsl(210 10.5% 94.5%) */
// --color-gray-200: 210 10.5% 92.5%; /* hsl(210 10.5% 92.5%) */
// --color-gray-300: 210 10.8% 85.5%; /* hsl(210 10.8% 85.5%) */
// --color-gray-400: 211.8 10.8% 69.2%; /* hsl(211.8, 10.8%, 69.2%) */
// --color-gray-500: 215.4 16.3% 46.9%; /* hsl(215.4 16.3% 46.9%) */
// --color-gray-600: 215 30% 21%; /* hsl(215 30% 21%) */
// --color-gray-650: 215 30% 18%; /* hsl(215 30% 18%) */
// --color-gray-700: 215 30% 15%; /* hsl(215 30% 15%) */
// --color-gray-750: 215 30% 12%; /* hsl(215 30% 12%) */
// --color-gray-800: 215 30% 9%; /* hsl(215 30% 9%) */
// --color-gray-850: 215 30% 6%; /* hsl(215 30% 6%) */
// --color-gray-900: 215 30% 3%; /* hsl(215 30% 3%) */
// --color-gray-950: 215 30% 0%; /* hsl(215 30% 0%) */

/* hsl(211.2 10% 100%) */

/* hsl(211.2, 10%, 49.2%) */
/* #717D8A */

/* #040a15 */
/* hsl(218.8, 68%, 4.9%) */

/* --color-gray-50-: f9fafb; */
/* --color-gray-100: #f3f4f6; */
/* --color-gray-200: #e5e7eb; */
/* --color-gray-300: #d1d5db; */
/* --color-gray-400: #9ca3af; */
/* --color-gray-500: #6b7280; */
/* --color-gray-600: #4b5563; */
/* --color-gray-700: #374151; */
/* --color-gray-800: #1f2937; */
/* --color-gray-900: #111827; */
/* --color-gray-950: #030712; */

/*
    --gray-1: #fcfcfc;
    --gray-2: #f9f9f9;
    --gray-3: #f0f0f0;
    --gray-4: #e8e8e8;
    --gray-5: #e0e0e0;
    --gray-6: #d9d9d9;
    --gray-7: #cecece;
    --gray-8: #bbb;
    --gray-9: #8d8d8d;
    --gray-10: #838383;
    --gray-11: #646464;
    --gray-12: #202020;
    --gray-a1: #00000003;
    --gray-a2: #00000006;
    --gray-a3: #0000000f;
    --gray-a4: #00000017;
    --gray-a5: #0000001f;
    --gray-a6: #00000026;
    --gray-a7: #00000031;
    --gray-a8: #00000044;
    --gray-a9: #00000072;
    --gray-a10: #0000007c;
    --gray-a11: #0000009b;
    --gray-a12: #000000df;
    --mauve-1: #fdfcfd;
    --mauve-2: #faf9fb;
    --mauve-3: #f2eff3;
    --mauve-4: #eae7ec;
    --mauve-5: #e3dfe6;
    --mauve-6: #dbd8e0;
    --mauve-7: #d0cdd7;
    --mauve-8: #bcbac7;
    --mauve-9: #8e8c99;
    --mauve-10: #84828e;
    --mauve-11: #65636d;
    --mauve-12: #211f26;
    --mauve-a1: #55005503;
    --mauve-a2: #2b005506;
    --mauve-a3: #30004010;
    --mauve-a4: #20003618;
    --mauve-a5: #20003820;
    --mauve-a6: #14003527;
    --mauve-a7: #10003332;
    --mauve-a8: #08003145;
    --mauve-a9: #05001d73;
    --mauve-a10: #0500197d;
    --mauve-a11: #0400119c;
    --mauve-a12: #020008e0;
    --slate-1: #fcfcfd;
    --slate-2: #f9f9fb;
    --slate-3: #f0f0f3;
    --slate-4: #e8e8ec;
    --slate-5: #e0e1e6;
    --slate-6: #d9d9e0;
    --slate-7: #cdced6;
    --slate-8: #b9bbc6;
    --slate-9: #8b8d98;
    --slate-10: #80838d;
    --slate-11: #60646c;
    --slate-12: #1c2024;
    --slate-a1: #00005503;
    --slate-a2: #00005506;
    --slate-a3: #0000330f;
    --slate-a4: #00002d17;
    --slate-a5: #0009321f;
    --slate-a6: #00002f26;
    --slate-a7: #00062e32;
    --slate-a8: #00083046;
    --slate-a9: #00051d74;
    --slate-a10: #00071b7f;
    --slate-a11: #0007149f;
    --slate-a12: #000509e3;
    --sage-1: #fbfdfc;
    --sage-2: #f7f9f8;
    --sage-3: #eef1f0;
    --sage-4: #e6e9e8;
    --sage-5: #dfe2e0;
    --sage-6: #d7dad9;
    --sage-7: #cbcfcd;
    --sage-8: #b8bcba;
    --sage-9: #868e8b;
    --sage-10: #7c8481;
    --sage-11: #5f6563;
    --sage-12: #1a211e;
    --sage-a1: #00804004;
    --sage-a2: #00402008;
    --sage-a3: #002d1e11;
    --sage-a4: #001f1519;
    --sage-a5: #00180820;
    --sage-a6: #00140d28;
    --sage-a7: #00140a34;
    --sage-a8: #000f0847;
    --sage-a9: #00110b79;
    --sage-a10: #00100a83;
    --sage-a11: #000a07a0;
    --sage-a12: #000805e5;
    --olive-1: #fcfdfc;
    --olive-2: #f8faf8;
    --olive-3: #eff1ef;
    --olive-4: #e7e9e7;
    --olive-5: #dfe2df;
    --olive-6: #d7dad7;
    --olive-7: #cccfcc;
    --olive-8: #b9bcb8;
    --olive-9: #898e87;
    --olive-10: #7f847d;
    --olive-11: #60655f;
    --olive-12: #1d211c;
    --olive-a1: #00550003;
    --olive-a2: #00490007;
    --olive-a3: #00200010;
    --olive-a4: #00160018;
    --olive-a5: #00180020;
    --olive-a6: #00140028;
    --olive-a7: #000f0033;
    --olive-a8: #040f0047;
    --olive-a9: #050f0078;
    --olive-a10: #040e0082;
    --olive-a11: #020a00a0;
    --olive-a12: #010600e3;
    --sand-1: #fdfdfc;
    --sand-2: #f9f9f8;
    --sand-3: #f1f0ef;
    --sand-4: #e9e8e6;
    --sand-5: #e2e1de;
    --sand-6: #dad9d6;
    --sand-7: #cfceca;
    --sand-8: #bcbbb5;
    --sand-9: #8d8d86;
    --sand-10: #82827c;
    --sand-11: #63635e;
    --sand-12: #21201c;
    --sand-a1: #55550003;
    --sand-a2: #25250007;
    --sand-a3: #20100010;
    --sand-a4: #1f150019;
    --sand-a5: #1f180021;
    --sand-a6: #19130029;
    --sand-a7: #19140035;
    --sand-a8: #1915014a;
    --sand-a9: #0f0f0079;
    --sand-a10: #0c0c0083;
    --sand-a11: #080800a1;
    --sand-a12: #060500e3;
    --amber-1: #fefdfb;
    --amber-2: #fefbe9;
    --amber-3: #fff7c2;
    --amber-4: #ffee9c;
    --amber-5: #fbe577;
    --amber-6: #f3d673;
    --amber-7: #e9c162;
    --amber-8: #e2a336;
    --amber-9: #ffc53d;
    --amber-10: #ffba18;
    --amber-11: #ab6400;
    --amber-12: #4f3422;
    --amber-a1: #c0800004;
    --amber-a2: #f4d10016;
    --amber-a3: #ffde003d;
    --amber-a4: #ffd40063;
    --amber-a5: #f8cf0088;
    --amber-a6: #eab5008c;
    --amber-a7: #dc9b009d;
    --amber-a8: #da8a00c9;
    --amber-a9: #ffb300c2;
    --amber-a10: #ffb300e7;
    --amber-a11: #ab6400;
    --amber-a12: #341500dd;
    --blue-1: #fbfdff;
    --blue-2: #f4faff;
    --blue-3: #e6f4fe;
    --blue-4: #d5efff;
    --blue-5: #c2e5ff;
    --blue-6: #acd8fc;
    --blue-7: #8ec8f6;
    --blue-8: #5eb1ef;
    --blue-9: #0090ff;
    --blue-10: #0588f0;
    --blue-11: #0d74ce;
    --blue-12: #113264;
    --blue-a1: #0080ff04;
    --blue-a2: #008cff0b;
    --blue-a3: #008ff519;
    --blue-a4: #009eff2a;
    --blue-a5: #0093ff3d;
    --blue-a6: #0088f653;
    --blue-a7: #0083eb71;
    --blue-a8: #0084e6a1;
    --blue-a9: #0090ff;
    --blue-a10: #0086f0fa;
    --blue-a11: #006dcbf2;
    --blue-a12: #002359ee;
    --bronze-1: #fdfcfc;
    --bronze-2: #fdf7f5;
    --bronze-3: #f6edea;
    --bronze-4: #efe4df;
    --bronze-5: #e7d9d3;
    --bronze-6: #dfcdc5;
    --bronze-7: #d3bcb3;
    --bronze-8: #c2a499;
    --bronze-9: #a18072;
    --bronze-10: #957468;
    --bronze-11: #7d5e54;
    --bronze-12: #43302b;
    --bronze-a1: #55000003;
    --bronze-a2: #cc33000a;
    --bronze-a3: #92250015;
    --bronze-a4: #80280020;
    --bronze-a5: #7423002c;
    --bronze-a6: #7324003a;
    --bronze-a7: #6c1f004c;
    --bronze-a8: #671c0066;
    --bronze-a9: #551a008d;
    --bronze-a10: #4c150097;
    --bronze-a11: #3d0f00ab;
    --bronze-a12: #1d0600d4;
    --brown-1: #fefdfc;
    --brown-2: #fcf9f6;
    --brown-3: #f6eee7;
    --brown-4: #f0e4d9;
    --brown-5: #ebdaca;
    --brown-6: #e4cdb7;
    --brown-7: #dcbc9f;
    --brown-8: #cea37e;
    --brown-9: #ad7f58;
    --brown-10: #a07553;
    --brown-11: #815e46;
    --brown-12: #3e332e;
    --brown-a1: #aa550003;
    --brown-a2: #aa550009;
    --brown-a3: #a04b0018;
    --brown-a4: #9b4a0026;
    --brown-a5: #9f4d0035;
    --brown-a6: #a04e0048;
    --brown-a7: #a34e0060;
    --brown-a8: #9f4a0081;
    --brown-a9: #823c00a7;
    --brown-a10: #723300ac;
    --brown-a11: #522100b9;
    --brown-a12: #140600d1;
    --crimson-1: #fffcfd;
    --crimson-2: #fef7f9;
    --crimson-3: #ffe9f0;
    --crimson-4: #fedce7;
    --crimson-5: #facedd;
    --crimson-6: #f3bed1;
    --crimson-7: #eaacc3;
    --crimson-8: #e093b2;
    --crimson-9: #e93d82;
    --crimson-10: #df3478;
    --crimson-11: #cb1d63;
    --crimson-12: #621639;
    --crimson-a1: #ff005503;
    --crimson-a2: #e0004008;
    --crimson-a3: #ff005216;
    --crimson-a4: #f8005123;
    --crimson-a5: #e5004f31;
    --crimson-a6: #d0004b41;
    --crimson-a7: #bf004753;
    --crimson-a8: #b6004a6c;
    --crimson-a9: #e2005bc2;
    --crimson-a10: #d70056cb;
    --crimson-a11: #c4004fe2;
    --crimson-a12: #530026e9;
    --cyan-1: #fafdfe;
    --cyan-2: #f2fafb;
    --cyan-3: #def7f9;
    --cyan-4: #caf1f6;
    --cyan-5: #b5e9f0;
    --cyan-6: #9ddde7;
    --cyan-7: #7dcedc;
    --cyan-8: #3db9cf;
    --cyan-9: #00a2c7;
    --cyan-10: #0797b9;
    --cyan-11: #107d98;
    --cyan-12: #0d3c48;
    --cyan-a1: #0099cc05;
    --cyan-a2: #009db10d;
    --cyan-a3: #00c2d121;
    --cyan-a4: #00bcd435;
    --cyan-a5: #01b4cc4a;
    --cyan-a6: #00a7c162;
    --cyan-a7: #009fbb82;
    --cyan-a8: #00a3c0c2;
    --cyan-a9: #00a2c7;
    --cyan-a10: #0094b7f8;
    --cyan-a11: #007491ef;
    --cyan-a12: #00323ef2;
    --gold-1: #fdfdfc;
    --gold-2: #faf9f2;
    --gold-3: #f2f0e7;
    --gold-4: #eae6db;
    --gold-5: #e1dccf;
    --gold-6: #d8d0bf;
    --gold-7: #cbc0aa;
    --gold-8: #b9a88d;
    --gold-9: #978365;
    --gold-10: #8c7a5e;
    --gold-11: #71624b;
    --gold-12: #3b352b;
    --gold-a1: #55550003;
    --gold-a2: #9d8a000d;
    --gold-a3: #75600018;
    --gold-a4: #6b4e0024;
    --gold-a5: #60460030;
    --gold-a6: #64440040;
    --gold-a7: #63420055;
    --gold-a8: #633d0072;
    --gold-a9: #5332009a;
    --gold-a10: #492d00a1;
    --gold-a11: #362100b4;
    --gold-a12: #130c00d4;
    --grass-1: #fbfefb;
    --grass-2: #f5fbf5;
    --grass-3: #e9f6e9;
    --grass-4: #daf1db;
    --grass-5: #c9e8ca;
    --grass-6: #b2ddb5;
    --grass-7: #94ce9a;
    --grass-8: #65ba74;
    --grass-9: #46a758;
    --grass-10: #3e9b4f;
    --grass-11: #2a7e3b;
    --grass-12: #203c25;
    --grass-a1: #00c00004;
    --grass-a2: #0099000a;
    --grass-a3: #00970016;
    --grass-a4: #009f0725;
    --grass-a5: #00930536;
    --grass-a6: #008f0a4d;
    --grass-a7: #018b0f6b;
    --grass-a8: #008d199a;
    --grass-a9: #008619b9;
    --grass-a10: #007b17c1;
    --grass-a11: #006514d5;
    --grass-a12: #002006df;
    --green-1: #fbfefc;
    --green-2: #f4fbf6;
    --green-3: #e6f6eb;
    --green-4: #d6f1df;
    --green-5: #c4e8d1;
    --green-6: #adddc0;
    --green-7: #8eceaa;
    --green-8: #5bb98b;
    --green-9: #30a46c;
    --green-10: #2b9a66;
    --green-11: #218358;
    --green-12: #193b2d;
    --green-a1: #00c04004;
    --green-a2: #00a32f0b;
    --green-a3: #00a43319;
    --green-a4: #00a83829;
    --green-a5: #019c393b;
    --green-a6: #00963c52;
    --green-a7: #00914071;
    --green-a8: #00924ba4;
    --green-a9: #008f4acf;
    --green-a10: #008647d4;
    --green-a11: #00713fde;
    --green-a12: #002616e6;
    --indigo-1: #fdfdfe;
    --indigo-2: #f7f9ff;
    --indigo-3: #edf2fe;
    --indigo-4: #e1e9ff;
    --indigo-5: #d2deff;
    --indigo-6: #c1d0ff;
    --indigo-7: #abbdf9;
    --indigo-8: #8da4ef;
    --indigo-9: #3e63dd;
    --indigo-10: #3358d4;
    --indigo-11: #3a5bc7;
    --indigo-12: #1f2d5c;
    --indigo-a1: #00008002;
    --indigo-a2: #0040ff08;
    --indigo-a3: #0047f112;
    --indigo-a4: #0044ff1e;
    --indigo-a5: #0044ff2d;
    --indigo-a6: #003eff3e;
    --indigo-a7: #0037ed54;
    --indigo-a8: #0034dc72;
    --indigo-a9: #0031d2c1;
    --indigo-a10: #002ec9cc;
    --indigo-a11: #002bb7c5;
    --indigo-a12: #001046e0;
    --iris-1: #fdfdff;
    --iris-2: #f8f8ff;
    --iris-3: #f0f1fe;
    --iris-4: #e6e7ff;
    --iris-5: #dadcff;
    --iris-6: #cbcdff;
    --iris-7: #b8baf8;
    --iris-8: #9b9ef0;
    --iris-9: #5b5bd6;
    --iris-10: #5151cd;
    --iris-11: #5753c6;
    --iris-12: #272962;
    --iris-a1: #0000ff02;
    --iris-a2: #0000ff07;
    --iris-a3: #0011ee0f;
    --iris-a4: #000bff19;
    --iris-a5: #000eff25;
    --iris-a6: #000aff34;
    --iris-a7: #0008e647;
    --iris-a8: #0008d964;
    --iris-a9: #0000c0a4;
    --iris-a10: #0000b6ae;
    --iris-a11: #0600abac;
    --iris-a12: #000246d8;
    --jade-1: #fbfefd;
    --jade-2: #f4fbf7;
    --jade-3: #e6f7ed;
    --jade-4: #d6f1e3;
    --jade-5: #c3e9d7;
    --jade-6: #acdec8;
    --jade-7: #8bceb6;
    --jade-8: #56ba9f;
    --jade-9: #29a383;
    --jade-10: #26997b;
    --jade-11: #208368;
    --jade-12: #1d3b31;
    --jade-a1: #00c08004;
    --jade-a2: #00a3460b;
    --jade-a3: #00ae4819;
    --jade-a4: #00a85129;
    --jade-a5: #00a2553c;
    --jade-a6: #009a5753;
    --jade-a7: #00945f74;
    --jade-a8: #00976ea9;
    --jade-a9: #00916bd6;
    --jade-a10: #008764d9;
    --jade-a11: #007152df;
    --jade-a12: #002217e2;
    --lime-1: #fcfdfa;
    --lime-2: #f8faf3;
    --lime-3: #eef6d6;
    --lime-4: #e2f0bd;
    --lime-5: #d3e7a6;
    --lime-6: #c2da91;
    --lime-7: #abc978;
    --lime-8: #8db654;
    --lime-9: #bdee63;
    --lime-10: #b0e64c;
    --lime-11: #5c7c2f;
    --lime-12: #37401c;
    --lime-a1: #66990005;
    --lime-a2: #6b95000c;
    --lime-a3: #96c80029;
    --lime-a4: #8fc60042;
    --lime-a5: #81bb0059;
    --lime-a6: #72aa006e;
    --lime-a7: #61990087;
    --lime-a8: #559200ab;
    --lime-a9: #93e4009c;
    --lime-a10: #8fdc00b3;
    --lime-a11: #375f00d0;
    --lime-a12: #1e2900e3;
    --mint-1: #f9fefd;
    --mint-2: #f2fbf9;
    --mint-3: #ddf9f2;
    --mint-4: #c8f4e9;
    --mint-5: #b3ecde;
    --mint-6: #9ce0d0;
    --mint-7: #7ecfbd;
    --mint-8: #4cbba5;
    --mint-9: #86ead4;
    --mint-10: #7de0cb;
    --mint-11: #027864;
    --mint-12: #16433c;
    --mint-a1: #00d5aa06;
    --mint-a2: #00b18a0d;
    --mint-a3: #00d29e22;
    --mint-a4: #00cc9937;
    --mint-a5: #00c0914c;
    --mint-a6: #00b08663;
    --mint-a7: #00a17d81;
    --mint-a8: #009e7fb3;
    --mint-a9: #00d3a579;
    --mint-a10: #00c39982;
    --mint-a11: #007763fd;
    --mint-a12: #00312ae9;
    --orange-1: #fefcfb;
    --orange-2: #fff7ed;
    --orange-3: #ffefd6;
    --orange-4: #ffdfb5;
    --orange-5: #ffd19a;
    --orange-6: #ffc182;
    --orange-7: #f5ae73;
    --orange-8: #ec9455;
    --orange-9: #f76b15;
    --orange-10: #ef5f00;
    --orange-11: #cc4e00;
    --orange-12: #582d1d;
    --orange-a1: #c0400004;
    --orange-a2: #ff8e0012;
    --orange-a3: #ff9c0029;
    --orange-a4: #ff91014a;
    --orange-a5: #ff8b0065;
    --orange-a6: #ff81007d;
    --orange-a7: #ed6c008c;
    --orange-a8: #e35f00aa;
    --orange-a9: #f65e00ea;
    --orange-a10: #ef5f00;
    --orange-a11: #cc4e00;
    --orange-a12: #431200e2;
    --pink-1: #fffcfe;
    --pink-2: #fef7fb;
    --pink-3: #fee9f5;
    --pink-4: #fbdcef;
    --pink-5: #f6cee7;
    --pink-6: #efbfdd;
    --pink-7: #e7acd0;
    --pink-8: #dd93c2;
    --pink-9: #d6409f;
    --pink-10: #cf3897;
    --pink-11: #c2298a;
    --pink-12: #651249;
    --pink-a1: #ff00aa03;
    --pink-a2: #e0008008;
    --pink-a3: #f4008c16;
    --pink-a4: #e2008b23;
    --pink-a5: #d1008331;
    --pink-a6: #c0007840;
    --pink-a7: #b6006f53;
    --pink-a8: #af006f6c;
    --pink-a9: #c8007fbf;
    --pink-a10: #c2007ac7;
    --pink-a11: #b60074d6;
    --pink-a12: #59003bed;
    --plum-1: #fefcff;
    --plum-2: #fdf7fd;
    --plum-3: #fbebfb;
    --plum-4: #f7def8;
    --plum-5: #f2d1f3;
    --plum-6: #e9c2ec;
    --plum-7: #deade3;
    --plum-8: #cf91d8;
    --plum-9: #ab4aba;
    --plum-10: #a144af;
    --plum-11: #953ea3;
    --plum-12: #53195d;
    --plum-a1: #aa00ff03;
    --plum-a2: #c000c008;
    --plum-a3: #cc00cc14;
    --plum-a4: #c200c921;
    --plum-a5: #b700bd2e;
    --plum-a6: #a400b03d;
    --plum-a7: #9900a852;
    --plum-a8: #9000a56e;
    --plum-a9: #89009eb5;
    --plum-a10: #7f0092bb;
    --plum-a11: #730086c1;
    --plum-a12: #40004be6;
    --purple-1: #fefcfe;
    --purple-2: #fbf7fe;
    --purple-3: #f7edfe;
    --purple-4: #f2e2fc;
    --purple-5: #ead5f9;
    --purple-6: #e0c4f4;
    --purple-7: #d1afec;
    --purple-8: #be93e4;
    --purple-9: #8e4ec6;
    --purple-10: #8347b9;
    --purple-11: #8145b5;
    --purple-12: #402060;
    --purple-a1: #aa00aa03;
    --purple-a2: #8000e008;
    --purple-a3: #8e00f112;
    --purple-a4: #8d00e51d;
    --purple-a5: #8000db2a;
    --purple-a6: #7a01d03b;
    --purple-a7: #6d00c350;
    --purple-a8: #6600c06c;
    --purple-a9: #5c00adb1;
    --purple-a10: #53009eb8;
    --purple-a11: #52009aba;
    --purple-a12: #250049df;
    --red-1: #fffcfc;
    --red-2: #fff7f7;
    --red-3: #feebec;
    --red-4: #ffdbdc;
    --red-5: #ffcdce;
    --red-6: #fdbdbe;
    --red-7: #f4a9aa;
    --red-8: #eb8e90;
    --red-9: #e5484d;
    --red-10: #dc3e42;
    --red-11: #ce2c31;
    --red-12: #641723;
    --red-a1: #ff000003;
    --red-a2: #ff000008;
    --red-a3: #f3000d14;
    --red-a4: #ff000824;
    --red-a5: #ff000632;
    --red-a6: #f8000442;
    --red-a7: #df000356;
    --red-a8: #d2000571;
    --red-a9: #db0007b7;
    --red-a10: #d10005c1;
    --red-a11: #c40006d3;
    --red-a12: #55000de8;
    --ruby-1: #fffcfd;
    --ruby-2: #fff7f8;
    --ruby-3: #feeaed;
    --ruby-4: #ffdce1;
    --ruby-5: #ffced6;
    --ruby-6: #f8bfc8;
    --ruby-7: #efacb8;
    --ruby-8: #e592a3;
    --ruby-9: #e54666;
    --ruby-10: #dc3b5d;
    --ruby-11: #ca244d;
    --ruby-12: #64172b;
    --ruby-a1: #ff005503;
    --ruby-a2: #ff002008;
    --ruby-a3: #f3002515;
    --ruby-a4: #ff002523;
    --ruby-a5: #ff002a31;
    --ruby-a6: #e4002440;
    --ruby-a7: #ce002553;
    --ruby-a8: #c300286d;
    --ruby-a9: #db002cb9;
    --ruby-a10: #d2002cc4;
    --ruby-a11: #c10030db;
    --ruby-a12: #550016e8;
    --sky-1: #f9feff;
    --sky-2: #f1fafd;
    --sky-3: #e1f6fd;
    --sky-4: #d1f0fa;
    --sky-5: #bee7f5;
    --sky-6: #a9daed;
    --sky-7: #8dcae3;
    --sky-8: #60b3d7;
    --sky-9: #7ce2fe;
    --sky-10: #74daf8;
    --sky-11: #00749e;
    --sky-12: #1d3e56;
    --sky-a1: #00d5ff06;
    --sky-a2: #00a4db0e;
    --sky-a3: #00b3ee1e;
    --sky-a4: #00ace42e;
    --sky-a5: #00a1d841;
    --sky-a6: #0092ca56;
    --sky-a7: #0089c172;
    --sky-a8: #0085bf9f;
    --sky-a9: #00c7fe83;
    --sky-a10: #00bcf38b;
    --sky-a11: #00749e;
    --sky-a12: #002540e2;
    --teal-1: #fafefd;
    --teal-2: #f3fbf9;
    --teal-3: #e0f8f3;
    --teal-4: #ccf3ea;
    --teal-5: #b8eae0;
    --teal-6: #a1ded2;
    --teal-7: #83cdc1;
    --teal-8: #53b9ab;
    --teal-9: #12a594;
    --teal-10: #0d9b8a;
    --teal-11: #008573;
    --teal-12: #0d3d38;
    --teal-a1: #00cc9905;
    --teal-a2: #00aa800c;
    --teal-a3: #00c69d1f;
    --teal-a4: #00c39633;
    --teal-a5: #00b49047;
    --teal-a6: #00a6855e;
    --teal-a7: #0099807c;
    --teal-a8: #009783ac;
    --teal-a9: #009e8ced;
    --teal-a10: #009684f2;
    --teal-a11: #008573;
    --teal-a12: #00332df2;
    --tomato-1: #fffcfc;
    --tomato-2: #fff8f7;
    --tomato-3: #feebe7;
    --tomato-4: #ffdcd3;
    --tomato-5: #ffcdc2;
    --tomato-6: #fdbdaf;
    --tomato-7: #f5a898;
    --tomato-8: #ec8e7b;
    --tomato-9: #e54d2e;
    --tomato-10: #dd4425;
    --tomato-11: #d13415;
    --tomato-12: #5c271f;
    --tomato-a1: #ff000003;
    --tomato-a2: #ff200008;
    --tomato-a3: #f52b0018;
    --tomato-a4: #ff35002c;
    --tomato-a5: #ff2e003d;
    --tomato-a6: #f92d0050;
    --tomato-a7: #e7280067;
    --tomato-a8: #db250084;
    --tomato-a9: #df2600d1;
    --tomato-a10: #d72400da;
    --tomato-a11: #cd2200ea;
    --tomato-a12: #460900e0;
    --violet-1: #fdfcfe;
    --violet-2: #faf8ff;
    --violet-3: #f4f0fe;
    --violet-4: #ebe4ff;
    --violet-5: #e1d9ff;
    --violet-6: #d4cafe;
    --violet-7: #c2b5f5;
    --violet-8: #aa99ec;
    --violet-9: #6e56cf;
    --violet-10: #654dc4;
    --violet-11: #6550b9;
    --violet-12: #2f265f;
    --violet-a1: #5500aa03;
    --violet-a2: #4900ff07;
    --violet-a3: #4400ee0f;
    --violet-a4: #4300ff1b;
    --violet-a5: #3600ff26;
    --violet-a6: #3100fb35;
    --violet-a7: #2d01dd4a;
    --violet-a8: #2b00d066;
    --violet-a9: #2400b7a9;
    --violet-a10: #2300abb2;
    --violet-a11: #1f0099af;
    --violet-a12: #0b0043d9;
    --yellow-1: #fdfdf9;
    --yellow-2: #fefce9;
    --yellow-3: #fffab8;
    --yellow-4: #fff394;
    --yellow-5: #ffe770;
    --yellow-6: #f3d768;
    --yellow-7: #e4c767;
    --yellow-8: #d5ae39;
    --yellow-9: #ffe629;
    --yellow-10: #ffdc00;
    --yellow-11: #9e6c00;
    --yellow-12: #473b1f;
    --yellow-a1: #aaaa0006;
    --yellow-a2: #f4dd0016;
    --yellow-a3: #ffee0047;
    --yellow-a4: #ffe3016b;
    --yellow-a5: #ffd5008f;
    --yellow-a6: #ebbc0097;
    --yellow-a7: #d2a10098;
    --yellow-a8: #c99700c6;
    --yellow-a9: #ffe100d6;
    --yellow-a10: #ffdc00;
    --yellow-a11: #9e6c00;
    --yellow-a12: #2e2000e0;
    --gray-surface: #fffc;


----dark----

    --gray-1: #111;
    --gray-2: #191919;
    --gray-3: #222;
    --gray-4: #2a2a2a;
    --gray-5: #313131;
    --gray-6: #3a3a3a;
    --gray-7: #484848;
    --gray-8: #606060;
    --gray-9: #6e6e6e;
    --gray-10: #7b7b7b;
    --gray-11: #b4b4b4;
    --gray-12: #eee;
    --gray-a1: #0000;
    --gray-a2: #ffffff09;
    --gray-a3: #ffffff12;
    --gray-a4: #ffffff1b;
    --gray-a5: #ffffff22;
    --gray-a6: #ffffff2c;
    --gray-a7: #ffffff3b;
    --gray-a8: #ffffff55;
    --gray-a9: #ffffff64;
    --gray-a10: #ffffff72;
    --gray-a11: #ffffffaf;
    --gray-a12: #ffffffed;
    --mauve-1: #121113;
    --mauve-2: #1a191b;
    --mauve-3: #232225;
    --mauve-4: #2b292d;
    --mauve-5: #323035;
    --mauve-6: #3c393f;
    --mauve-7: #49474e;
    --mauve-8: #625f69;
    --mauve-9: #6f6d78;
    --mauve-10: #7c7a85;
    --mauve-11: #b5b2bc;
    --mauve-12: #eeeef0;
    --mauve-a1: #0000;
    --mauve-a2: #f5f4f609;
    --mauve-a3: #ebeaf814;
    --mauve-a4: #eee5f81d;
    --mauve-a5: #efe6fe25;
    --mauve-a6: #f1e6fd30;
    --mauve-a7: #eee9ff40;
    --mauve-a8: #eee7ff5d;
    --mauve-a9: #eae6fd6e;
    --mauve-a10: #ece9fd7c;
    --mauve-a11: #f5f1ffb7;
    --mauve-a12: #fdfdffef;
    --slate-1: #111113;
    --slate-2: #18191b;
    --slate-3: #212225;
    --slate-4: #272a2d;
    --slate-5: #2e3135;
    --slate-6: #363a3f;
    --slate-7: #43484e;
    --slate-8: #5a6169;
    --slate-9: #696e77;
    --slate-10: #777b84;
    --slate-11: #b0b4ba;
    --slate-12: #edeef0;
    --slate-a1: #0000;
    --slate-a2: #d8f4f609;
    --slate-a3: #ddeaf814;
    --slate-a4: #d3edf81d;
    --slate-a5: #d9edfe25;
    --slate-a6: #d6ebfd30;
    --slate-a7: #d9edff40;
    --slate-a8: #d9edff5d;
    --slate-a9: #dfebfd6d;
    --slate-a10: #e5edfd7b;
    --slate-a11: #f1f7feb5;
    --slate-a12: #fcfdffef;
    --sage-1: #101211;
    --sage-2: #171918;
    --sage-3: #202221;
    --sage-4: #272a29;
    --sage-5: #2e3130;
    --sage-6: #373b39;
    --sage-7: #444947;
    --sage-8: #5b625f;
    --sage-9: #63706b;
    --sage-10: #717d79;
    --sage-11: #adb5b2;
    --sage-12: #eceeed;
    --sage-a1: #0000;
    --sage-a2: #f0f2f108;
    --sage-a3: #f3f5f412;
    --sage-a4: #f2fefd1a;
    --sage-a5: #f1fbfa22;
    --sage-a6: #edfbf42d;
    --sage-a7: #edfcf73c;
    --sage-a8: #ebfdf657;
    --sage-a9: #dffdf266;
    --sage-a10: #e5fdf674;
    --sage-a11: #f4fefbb0;
    --sage-a12: #fdfffeed;
    --olive-1: #111210;
    --olive-2: #181917;
    --olive-3: #212220;
    --olive-4: #282a27;
    --olive-5: #2f312e;
    --olive-6: #383a36;
    --olive-7: #454843;
    --olive-8: #5c625b;
    --olive-9: #687066;
    --olive-10: #767d74;
    --olive-11: #afb5ad;
    --olive-12: #eceeec;
    --olive-a1: #0000;
    --olive-a2: #f1f2f008;
    --olive-a3: #f4f5f312;
    --olive-a4: #f3fef21a;
    --olive-a5: #f2fbf122;
    --olive-a6: #f4faed2c;
    --olive-a7: #f2fced3b;
    --olive-a8: #edfdeb57;
    --olive-a9: #ebfde766;
    --olive-a10: #f0fdec74;
    --olive-a11: #f6fef4b0;
    --olive-a12: #fdfffded;
    --sand-1: #111110;
    --sand-2: #191918;
    --sand-3: #222221;
    --sand-4: #2a2a28;
    --sand-5: #31312e;
    --sand-6: #3b3a37;
    --sand-7: #494844;
    --sand-8: #62605b;
    --sand-9: #6f6d66;
    --sand-10: #7c7b74;
    --sand-11: #b5b3ad;
    --sand-12: #eeeeec;
    --sand-a1: #0000;
    --sand-a2: #f4f4f309;
    --sand-a3: #f6f6f513;
    --sand-a4: #fefef31b;
    --sand-a5: #fbfbeb23;
    --sand-a6: #fffaed2d;
    --sand-a7: #fffbed3c;
    --sand-a8: #fff9eb57;
    --sand-a9: #fffae965;
    --sand-a10: #fffdee73;
    --sand-a11: #fffcf4b0;
    --sand-a12: #fffffded;
    --amber-1: #16120c;
    --amber-2: #1d180f;
    --amber-3: #302008;
    --amber-4: #3f2700;
    --amber-5: #4d3000;
    --amber-6: #5c3d05;
    --amber-7: #714f19;
    --amber-8: #8f6424;
    --amber-9: #ffc53d;
    --amber-10: #ffd60a;
    --amber-11: #ffca16;
    --amber-12: #ffe7b3;
    --amber-a1: #e63c0006;
    --amber-a2: #fd9b000d;
    --amber-a3: #fa820022;
    --amber-a4: #fc820032;
    --amber-a5: #fd8b0041;
    --amber-a6: #fd9b0051;
    --amber-a7: #ffab2567;
    --amber-a8: #ffae3587;
    --amber-a9: #ffc53d;
    --amber-a10: #ffd60a;
    --amber-a11: #ffca16;
    --amber-a12: #ffe7b3;
    --blue-1: #0d1520;
    --blue-2: #111927;
    --blue-3: #0d2847;
    --blue-4: #003362;
    --blue-5: #004074;
    --blue-6: #104d87;
    --blue-7: #205d9e;
    --blue-8: #2870bd;
    --blue-9: #0090ff;
    --blue-10: #3b9eff;
    --blue-11: #70b8ff;
    --blue-12: #c2e6ff;
    --blue-a1: #004df211;
    --blue-a2: #1166fb18;
    --blue-a3: #0077ff3a;
    --blue-a4: #0075ff57;
    --blue-a5: #0081fd6b;
    --blue-a6: #0f89fd7f;
    --blue-a7: #2a91fe98;
    --blue-a8: #3094feb9;
    --blue-a9: #0090ff;
    --blue-a10: #3b9eff;
    --blue-a11: #70b8ff;
    --blue-a12: #c2e6ff;
    --bronze-1: #141110;
    --bronze-2: #1c1917;
    --bronze-3: #262220;
    --bronze-4: #302a27;
    --bronze-5: #3b3330;
    --bronze-6: #493e3a;
    --bronze-7: #5a4c47;
    --bronze-8: #6f5f58;
    --bronze-9: #a18072;
    --bronze-10: #ae8c7e;
    --bronze-11: #d4b3a5;
    --bronze-12: #ede0d9;
    --bronze-a1: #d1110004;
    --bronze-a2: #fbbc910c;
    --bronze-a3: #faceb817;
    --bronze-a4: #facdb622;
    --bronze-a5: #ffd2c12d;
    --bronze-a6: #ffd1c03c;
    --bronze-a7: #fdd0c04f;
    --bronze-a8: #ffd6c565;
    --bronze-a9: #fec7b09b;
    --bronze-a10: #fecab5a9;
    --bronze-a11: #ffd7c6d1;
    --bronze-a12: #fff1e9ec;
    --brown-1: #12110f;
    --brown-2: #1c1816;
    --brown-3: #28211d;
    --brown-4: #322922;
    --brown-5: #3e3128;
    --brown-6: #4d3c2f;
    --brown-7: #614a39;
    --brown-8: #7c5f46;
    --brown-9: #ad7f58;
    --brown-10: #b88c67;
    --brown-11: #dbb594;
    --brown-12: #f2e1ca;
    --brown-a1: #91110002;
    --brown-a2: #fba67c0c;
    --brown-a3: #fcb58c19;
    --brown-a4: #fbbb8a24;
    --brown-a5: #fcb88931;
    --brown-a6: #fdba8741;
    --brown-a7: #ffbb8856;
    --brown-a8: #ffbe8773;
    --brown-a9: #feb87da8;
    --brown-a10: #ffc18cb3;
    --brown-a11: #fed1aad9;
    --brown-a12: #feecd4f2;
    --crimson-1: #191114;
    --crimson-2: #201318;
    --crimson-3: #381525;
    --crimson-4: #4d122f;
    --crimson-5: #5c1839;
    --crimson-6: #6d2545;
    --crimson-7: #873356;
    --crimson-8: #b0436e;
    --crimson-9: #e93d82;
    --crimson-10: #ee518a;
    --crimson-11: #ff92ad;
    --crimson-12: #fdd3e8;
    --crimson-a1: #f4126709;
    --crimson-a2: #f22f7a11;
    --crimson-a3: #fe2a8b2a;
    --crimson-a4: #fd158741;
    --crimson-a5: #fd278f51;
    --crimson-a6: #fe459763;
    --crimson-a7: #fd559b7f;
    --crimson-a8: #fe5b9bab;
    --crimson-a9: #fe418de8;
    --crimson-a10: #ff5693ed;
    --crimson-a11: #ff92ad;
    --crimson-a12: #ffd5eafd;
    --cyan-1: #0b161a;
    --cyan-2: #101b20;
    --cyan-3: #082c36;
    --cyan-4: #003848;
    --cyan-5: #004558;
    --cyan-6: #045468;
    --cyan-7: #12677e;
    --cyan-8: #11809c;
    --cyan-9: #00a2c7;
    --cyan-10: #23afd0;
    --cyan-11: #4ccce6;
    --cyan-12: #b6ecf7;
    --cyan-a1: #0091f70a;
    --cyan-a2: #02a7f211;
    --cyan-a3: #00befd28;
    --cyan-a4: #00baff3b;
    --cyan-a5: #00befd4d;
    --cyan-a6: #00c7fd5e;
    --cyan-a7: #14cdff75;
    --cyan-a8: #11cfff95;
    --cyan-a9: #00cfffc3;
    --cyan-a10: #28d6ffcd;
    --cyan-a11: #52e1fee5;
    --cyan-a12: #bbf3fef7;
    --gold-1: #121211;
    --gold-2: #1b1a17;
    --gold-3: #24231f;
    --gold-4: #2d2b26;
    --gold-5: #38352e;
    --gold-6: #444039;
    --gold-7: #544f46;
    --gold-8: #696256;
    --gold-9: #978365;
    --gold-10: #a39073;
    --gold-11: #cbb99f;
    --gold-12: #e8e2d9;
    --gold-a1: #91911102;
    --gold-a2: #f9e29d0b;
    --gold-a3: #f8ecbb15;
    --gold-a4: #ffeec41e;
    --gold-a5: #feecc22a;
    --gold-a6: #feebcb37;
    --gold-a7: #ffedcd48;
    --gold-a8: #fdeaca5f;
    --gold-a9: #ffdba690;
    --gold-a10: #fedfb09d;
    --gold-a11: #fee7c6c8;
    --gold-a12: #fef7ede7;
    --grass-1: #0e1511;
    --grass-2: #141a15;
    --grass-3: #1b2a1e;
    --grass-4: #1d3a24;
    --grass-5: #25482d;
    --grass-6: #2d5736;
    --grass-7: #366740;
    --grass-8: #3e7949;
    --grass-9: #46a758;
    --grass-10: #53b365;
    --grass-11: #71d083;
    --grass-12: #c2f0c2;
    --grass-a1: #00de1205;
    --grass-a2: #5ef7780a;
    --grass-a3: #70fe8c1b;
    --grass-a4: #57ff802c;
    --grass-a5: #68ff8b3b;
    --grass-a6: #71ff8f4b;
    --grass-a7: #77fd925d;
    --grass-a8: #77fd9070;
    --grass-a9: #65ff82a1;
    --grass-a10: #72ff8dae;
    --grass-a11: #89ff9fcd;
    --grass-a12: #ceffceef;
    --green-1: #0e1512;
    --green-2: #121b17;
    --green-3: #132d21;
    --green-4: #113b29;
    --green-5: #174933;
    --green-6: #20573e;
    --green-7: #28684a;
    --green-8: #2f7c57;
    --green-9: #30a46c;
    --green-10: #33b074;
    --green-11: #3dd68c;
    --green-12: #b1f1cb;
    --green-a1: #00de4505;
    --green-a2: #29f99d0b;
    --green-a3: #22ff991e;
    --green-a4: #11ff992d;
    --green-a5: #2bffa23c;
    --green-a6: #44ffaa4b;
    --green-a7: #50fdac5e;
    --green-a8: #54ffad73;
    --green-a9: #44ffa49e;
    --green-a10: #43fea4ab;
    --green-a11: #46fea5d4;
    --green-a12: #bbffd7f0;
    --indigo-1: #11131f;
    --indigo-2: #141726;
    --indigo-3: #182449;
    --indigo-4: #1d2e62;
    --indigo-5: #253974;
    --indigo-6: #304384;
    --indigo-7: #3a4f97;
    --indigo-8: #435db1;
    --indigo-9: #3e63dd;
    --indigo-10: #5472e4;
    --indigo-11: #9eb1ff;
    --indigo-12: #d6e1ff;
    --indigo-a1: #1133ff0f;
    --indigo-a2: #3354fa17;
    --indigo-a3: #2f62ff3c;
    --indigo-a4: #3566ff57;
    --indigo-a5: #4171fd6b;
    --indigo-a6: #5178fd7c;
    --indigo-a7: #5a7fff90;
    --indigo-a8: #5b81feac;
    --indigo-a9: #4671ffdb;
    --indigo-a10: #5c7efee3;
    --indigo-a11: #9eb1ff;
    --indigo-a12: #d6e1ff;
    --iris-1: #13131e;
    --iris-2: #171625;
    --iris-3: #202248;
    --iris-4: #262a65;
    --iris-5: #303374;
    --iris-6: #3d3e82;
    --iris-7: #4a4a95;
    --iris-8: #5958b1;
    --iris-9: #5b5bd6;
    --iris-10: #6e6ade;
    --iris-11: #b1a9ff;
    --iris-12: #e0dffe;
    --iris-a1: #3636fe0e;
    --iris-a2: #564bf916;
    --iris-a3: #525bff3b;
    --iris-a4: #4d58ff5a;
    --iris-a5: #5b62fd6b;
    --iris-a6: #6d6ffd7a;
    --iris-a7: #7777fe8e;
    --iris-a8: #7b7afeac;
    --iris-a9: #6a6afed4;
    --iris-a10: #7d79ffdc;
    --iris-a11: #b1a9ff;
    --iris-a12: #e1e0ff;
    --jade-1: #0d1512;
    --jade-2: #121c18;
    --jade-3: #0f2e22;
    --jade-4: #0b3b2c;
    --jade-5: #114837;
    --jade-6: #1b5745;
    --jade-7: #246854;
    --jade-8: #2a7e68;
    --jade-9: #29a383;
    --jade-10: #27b08b;
    --jade-11: #1fd8a4;
    --jade-12: #adf0d4;
    --jade-a1: #00de4505;
    --jade-a2: #27fba60c;
    --jade-a3: #02f99920;
    --jade-a4: #00ffaa2d;
    --jade-a5: #11ffb63b;
    --jade-a6: #34ffc24b;
    --jade-a7: #45fdc75e;
    --jade-a8: #48ffcf75;
    --jade-a9: #38feca9d;
    --jade-a10: #31fec7ab;
    --jade-a11: #21fec0d6;
    --jade-a12: #b8ffe1ef;
    --lime-1: #11130c;
    --lime-2: #151a10;
    --lime-3: #1f2917;
    --lime-4: #29371d;
    --lime-5: #334423;
    --lime-6: #3d522a;
    --lime-7: #496231;
    --lime-8: #577538;
    --lime-9: #bdee63;
    --lime-10: #d4ff70;
    --lime-11: #bde56c;
    --lime-12: #e3f7ba;
    --lime-a1: #11bb0003;
    --lime-a2: #78f7000a;
    --lime-a3: #9bfd4c1a;
    --lime-a4: #a7fe5c29;
    --lime-a5: #affe6537;
    --lime-a6: #b2fe6d46;
    --lime-a7: #b6ff6f57;
    --lime-a8: #b6fd6d6c;
    --lime-a9: #caff69ed;
    --lime-a10: #d4ff70;
    --lime-a11: #d1fe77e4;
    --lime-a12: #e9febff7;
    --mint-1: #0e1515;
    --mint-2: #0f1b1b;
    --mint-3: #092c2b;
    --mint-4: #003a38;
    --mint-5: #004744;
    --mint-6: #105650;
    --mint-7: #1e685f;
    --mint-8: #277f70;
    --mint-9: #86ead4;
    --mint-10: #a8f5e5;
    --mint-11: #58d5ba;
    --mint-12: #c4f5e1;
    --mint-a1: #00dede05;
    --mint-a2: #00f9f90b;
    --mint-a3: #00fff61d;
    --mint-a4: #00fff42c;
    --mint-a5: #00fff23a;
    --mint-a6: #0effeb4a;
    --mint-a7: #34fde55e;
    --mint-a8: #41ffdf76;
    --mint-a9: #92ffe7e9;
    --mint-a10: #aefeedf5;
    --mint-a11: #67ffded2;
    --mint-a12: #cbfee9f5;
    --orange-1: #17120e;
    --orange-2: #1e160f;
    --orange-3: #331e0b;
    --orange-4: #462100;
    --orange-5: #562800;
    --orange-6: #66350c;
    --orange-7: #7e451d;
    --orange-8: #a35829;
    --orange-9: #f76b15;
    --orange-10: #ff801f;
    --orange-11: #ffa057;
    --orange-12: #ffe0c2;
    --orange-a1: #ec360007;
    --orange-a2: #fe6d000e;
    --orange-a3: #fb6a0025;
    --orange-a4: #ff590039;
    --orange-a5: #ff61004a;
    --orange-a6: #fd75045c;
    --orange-a7: #ff832c75;
    --orange-a8: #fe84389d;
    --orange-a9: #fe6d15f7;
    --orange-a10: #ff801f;
    --orange-a11: #ffa057;
    --orange-a12: #ffe0c2;
    --pink-1: #191117;
    --pink-2: #21121d;
    --pink-3: #37172f;
    --pink-4: #4b143d;
    --pink-5: #591c47;
    --pink-6: #692955;
    --pink-7: #833869;
    --pink-8: #a84885;
    --pink-9: #d6409f;
    --pink-10: #de51a8;
    --pink-11: #ff8dcc;
    --pink-12: #fdd1ea;
    --pink-a1: #f412bc09;
    --pink-a2: #f420bb12;
    --pink-a3: #fe37cc29;
    --pink-a4: #fc1ec43f;
    --pink-a5: #fd35c24e;
    --pink-a6: #fd51c75f;
    --pink-a7: #fd62c87b;
    --pink-a8: #ff68c8a2;
    --pink-a9: #fe49bcd4;
    --pink-a10: #ff5cc0dc;
    --pink-a11: #ff8dcc;
    --pink-a12: #ffd3ecfd;
    --plum-1: #181118;
    --plum-2: #201320;
    --plum-3: #351a35;
    --plum-4: #451d47;
    --plum-5: #512454;
    --plum-6: #5e3061;
    --plum-7: #734079;
    --plum-8: #92549c;
    --plum-9: #ab4aba;
    --plum-10: #b658c4;
    --plum-11: #e796f3;
    --plum-12: #f4d4f4;
    --plum-a1: #f112f108;
    --plum-a2: #f22ff211;
    --plum-a3: #fd4cfd27;
    --plum-a4: #f646ff3a;
    --plum-a5: #f455ff48;
    --plum-a6: #f66dff56;
    --plum-a7: #f07cfd70;
    --plum-a8: #ee84ff95;
    --plum-a9: #e961feb6;
    --plum-a10: #ed70ffc0;
    --plum-a11: #f19cfef3;
    --plum-a12: #feddfef4;
    --purple-1: #18111b;
    --purple-2: #1e1523;
    --purple-3: #301c3b;
    --purple-4: #3d224e;
    --purple-5: #48295c;
    --purple-6: #54346b;
    --purple-7: #664282;
    --purple-8: #8457aa;
    --purple-9: #8e4ec6;
    --purple-10: #9a5cd0;
    --purple-11: #d19dff;
    --purple-12: #ecd9fa;
    --purple-a1: #b412f90b;
    --purple-a2: #b744f714;
    --purple-a3: #c150ff2d;
    --purple-a4: #bb53fd42;
    --purple-a5: #be5cfd51;
    --purple-a6: #c16dfd61;
    --purple-a7: #c378fd7a;
    --purple-a8: #c47effa4;
    --purple-a9: #b661ffc2;
    --purple-a10: #bc6fffcd;
    --purple-a11: #d19dff;
    --purple-a12: #f1ddfffa;
    --red-1: #191111;
    --red-2: #201314;
    --red-3: #3b1219;
    --red-4: #500f1c;
    --red-5: #611623;
    --red-6: #72232d;
    --red-7: #8c333a;
    --red-8: #b54548;
    --red-9: #e5484d;
    --red-10: #ec5d5e;
    --red-11: #ff9592;
    --red-12: #ffd1d9;
    --red-a1: #f4121209;
    --red-a2: #f22f3e11;
    --red-a3: #ff173f2d;
    --red-a4: #fe0a3b44;
    --red-a5: #ff204756;
    --red-a6: #ff3e5668;
    --red-a7: #ff536184;
    --red-a8: #ff5d61b0;
    --red-a9: #fe4e54e4;
    --red-a10: #ff6465eb;
    --red-a11: #ff9592;
    --red-a12: #ffd1d9;
    --ruby-1: #191113;
    --ruby-2: #1e1517;
    --ruby-3: #3a141e;
    --ruby-4: #4e1325;
    --ruby-5: #5e1a2e;
    --ruby-6: #6f2539;
    --ruby-7: #883447;
    --ruby-8: #b3445a;
    --ruby-9: #e54666;
    --ruby-10: #ec5a72;
    --ruby-11: #ff949d;
    --ruby-12: #fed2e1;
    --ruby-a1: #f4124a09;
    --ruby-a2: #fe5a7f0e;
    --ruby-a3: #ff235d2c;
    --ruby-a4: #fd195e42;
    --ruby-a5: #fe2d6b53;
    --ruby-a6: #ff447665;
    --ruby-a7: #ff577d80;
    --ruby-a8: #ff5c7cae;
    --ruby-a9: #fe4c70e4;
    --ruby-a10: #ff617beb;
    --ruby-a11: #ff949d;
    --ruby-a12: #ffd3e2;
    --sky-1: #0d141f;
    --sky-2: #111a27;
    --sky-3: #112840;
    --sky-4: #113555;
    --sky-5: #154467;
    --sky-6: #1b537b;
    --sky-7: #1f6692;
    --sky-8: #197cae;
    --sky-9: #7ce2fe;
    --sky-10: #a8eeff;
    --sky-11: #75c7f0;
    --sky-12: #c2f3ff;
    --sky-a1: #0044ff0f;
    --sky-a2: #1171fb18;
    --sky-a3: #1184fc33;
    --sky-a4: #128fff49;
    --sky-a5: #1c9dfd5d;
    --sky-a6: #28a5ff72;
    --sky-a7: #2badfe8b;
    --sky-a8: #1db2fea9;
    --sky-a9: #7ce3ff;
    --sky-a10: #a8eeff;
    --sky-a11: #7cd3ffef;
    --sky-a12: #c2f3ff;
    --teal-1: #0d1514;
    --teal-2: #111c1b;
    --teal-3: #0d2d2a;
    --teal-4: #023b37;
    --teal-5: #084843;
    --teal-6: #145750;
    --teal-7: #1c6961;
    --teal-8: #207e73;
    --teal-9: #12a594;
    --teal-10: #0eb39e;
    --teal-11: #0bd8b6;
    --teal-12: #adf0dd;
    --teal-a1: #00deab05;
    --teal-a2: #12fbe60c;
    --teal-a3: #00ffe61e;
    --teal-a4: #00ffe92d;
    --teal-a5: #00ffea3b;
    --teal-a6: #1cffe84b;
    --teal-a7: #2efde85f;
    --teal-a8: #32ffe775;
    --teal-a9: #13ffe49f;
    --teal-a10: #0dffe0ae;
    --teal-a11: #0afed5d6;
    --teal-a12: #b8ffebef;
    --tomato-1: #181111;
    --tomato-2: #1f1513;
    --tomato-3: #391714;
    --tomato-4: #4e1511;
    --tomato-5: #5e1c16;
    --tomato-6: #6e2920;
    --tomato-7: #853a2d;
    --tomato-8: #ac4d39;
    --tomato-9: #e54d2e;
    --tomato-10: #ec6142;
    --tomato-11: #ff977d;
    --tomato-12: #fbd3cb;
    --tomato-a1: #f1121208;
    --tomato-a2: #ff55330f;
    --tomato-a3: #ff35232b;
    --tomato-a4: #fd201142;
    --tomato-a5: #fe332153;
    --tomato-a6: #ff4f3864;
    --tomato-a7: #fd644a7d;
    --tomato-a8: #fe6d4ea7;
    --tomato-a9: #fe5431e4;
    --tomato-a10: #ff6847eb;
    --tomato-a11: #ff977d;
    --tomato-a12: #ffd6cefb;
    --violet-1: #14121f;
    --violet-2: #1b1525;
    --violet-3: #291f43;
    --violet-4: #33255b;
    --violet-5: #3c2e69;
    --violet-6: #473876;
    --violet-7: #56468b;
    --violet-8: #6958ad;
    --violet-9: #6e56cf;
    --violet-10: #7d66d9;
    --violet-11: #baa7ff;
    --violet-12: #e2ddfe;
    --violet-a1: #4422ff0f;
    --violet-a2: #853ff916;
    --violet-a3: #8354fe36;
    --violet-a4: #7d51fd50;
    --violet-a5: #845ffd5f;
    --violet-a6: #8f6cfd6d;
    --violet-a7: #9879ff83;
    --violet-a8: #977dfea8;
    --violet-a9: #8668ffcc;
    --violet-a10: #9176fed7;
    --violet-a11: #baa7ff;
    --violet-a12: #e3deff;
    --yellow-1: #14120b;
    --yellow-2: #1b180f;
    --yellow-3: #2d2305;
    --yellow-4: #362b00;
    --yellow-5: #433500;
    --yellow-6: #524202;
    --yellow-7: #665417;
    --yellow-8: #836a21;
    --yellow-9: #ffe629;
    --yellow-10: #ffff57;
    --yellow-11: #f5e147;
    --yellow-12: #f6eeb4;
    --yellow-a1: #d1510004;
    --yellow-a2: #f9b4000b;
    --yellow-a3: #ffaa001e;
    --yellow-a4: #fdb70028;
    --yellow-a5: #febb0036;
    --yellow-a6: #fec40046;
    --yellow-a7: #fdcb225c;
    --yellow-a8: #fdca327b;
    --yellow-a9: #ffe629;
    --yellow-a10: #ffff57;
    --yellow-a11: #fee949f5;
    --yellow-a12: #fef6baf6;
    --gray-surface: #21212180;

*/
