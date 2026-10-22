"use client";

import * as React from "react";
import { create } from "zustand";

import { CarbonUI } from "@/registry/bases/base/carbon/carbon-hero";
import { CarbonShowcaseComponents } from "@/registry/bases/base/carbon/carbon-showcase-components";
import { CatalystUI } from "@/registry/bases/base/catalyst/catalyst-hero";
import { CatalystShowcaseComponents } from "@/registry/bases/base/catalyst/catalyst-showcase-components";
import { DefaultUI } from "@/registry/bases/base/default/default-hero";
import { DefaultShowcaseComponents } from "@/registry/bases/base/default/default-showcase-components";
import { HeroUI as DefaultV4UI } from "@/registry/bases/base/styles/default-v4/hero";
import { ShowcaseComponents as DefaultV4ShowcaseComponents } from "@/registry/bases/base/styles/default-v4/showcase-components";
import { LibelleUI } from "@/registry/bases/base/libelle/libelle-hero";
import { LibelleShowcaseComponents } from "@/registry/bases/base/libelle/libelle-showcase-components";
import { LinearUI } from "@/registry/bases/base/linear/linear-hero";
import { LinearShowcaseComponents } from "@/registry/bases/base/linear/linear-showcase-components";
import { LucidUI } from "@/registry/bases/base/lucid/lucid-hero";
import { LucidShowcaseComponents } from "@/registry/bases/base/lucid/lucid-showcase-components";
import { MaterialUI } from "@/registry/bases/base/material/material-hero";
import { MaterialShowcaseComponents } from "@/registry/bases/base/material/material-showcase-components";
import { MoonUI } from "@/registry/bases/base/moon/moon-hero";
import { MoonShowcaseComponents } from "@/registry/bases/base/moon/moon-showcase-components";
import { NeonUI } from "@/registry/bases/base/neon/neon-hero";
import { NeonShowcaseComponents } from "@/registry/bases/base/neon/neon-showcase-components";
import { SnowUI } from "@/registry/bases/base/snow/snow-hero";
import { SnowShowcaseComponents } from "@/registry/bases/base/snow/snow-showcase-components";
import { SpectrumUI } from "@/registry/bases/base/spectrum/spectrum-hero";
import { SpectrumShowcaseComponents } from "@/registry/bases/base/spectrum/spectrum-showcase-components";
import { WedgesUI } from "@/registry/bases/base/wedges/wedges-hero";
import { WedgesShowcaseComponents } from "@/registry/bases/base/wedges/wedges-showcase-components";

const DEV_STYLES_PATH: Record<StyleType, string> = {
  default: "http://localhost:3000",
  carbon: "http://localhost:3000",
  linear: "http://localhost:3001",
  catalyst: "http://localhost:3001",
  material: "http://localhost:3000",
  spectrum: "http://localhost:3000",
  wedges: "http://localhost:3000",
  moon: "http://localhost:3000",
  lucid: "http://localhost:3000",
  snow: "http://localhost:3000",
  neon: "http://localhost:3000",
  libelle: "http://localhost:3000",
  "default-v4": "http://localhost:3000",
  "carbon-v4": "http://localhost:3000",
};
const PROD_STYLES_PATH: Record<StyleType, string> = {
  default: "https://shadcn-default.vercel.app",
  carbon: "https://shadcn-carbon.vercel.app",
  linear: "https://shadcn-linear.vercel.app",
  catalyst: "https://shadcn-catalyst.vercel.app",
  material: "https://shadcn-material.vercel.app",
  spectrum: "https://shadcn-spectrum.vercel.app",
  wedges: "https://shadcn-wedges.vercel.app",
  moon: "https://shadcn-moon.vercel.app",
  lucid: "https://shadcn-lucid.vercel.app",
  snow: "https://shadcn-snow.vercel.app",
  neon: "https://shadcn-neon.vercel.app",
  libelle: "https://shadcn-libelle.vercel.app",
  "default-v4": "https://shadcn-default-v4.vercel.app",
  "carbon-v4": "https://shadcn-carbon-v4.vercel.app",
};

// NEXT_PUBLIC_NODE_ENV
const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export function getStylesPath2(style: StyleType) {
  if (NODE_ENV === "development") {
    return PROD_STYLES_PATH[style];
  }
  return PROD_STYLES_PATH[style];
}

export function getStylesPath(env: string) {
  if (env === "development") {
    return PROD_STYLES_PATH;
  }
  return PROD_STYLES_PATH;
}

// "default" | "default-v4" | "carbon" | "catalyst" | "material" | "linear" | "spectrum" | "wedges" | "moon" | "lucid" | "snow" | "neon" | "libelle"

type StyleType =
  | "default"
  | "default-v4"
  | "carbon"
  | "carbon-v4"
  | "catalyst"
  | "material"
  | "linear"
  | "spectrum"
  | "wedges"
  | "moon"
  | "lucid"
  | "snow"
  | "neon"
  | "libelle";

const STYLES_PATH: Record<StyleType, string> = getStylesPath(NODE_ENV!);

export const STYLES = Object.keys(STYLES_PATH) as StyleType[];

type StyleData = {
  name: Style;
  title: string;
  description: string;
  styleVariablePrefix: string;
  styleSitePath: string;
  directoryName: string;
  defaultPalette?: string;
  defaultRadius: string;
  showcaseComponents: React.ReactNode;
  hero: React.ReactNode;
};

function getStyleSitePath(style: Style) {
  const DEFAULT_STYLES_PATH = "/styles";
  const styleSitePath = `${DEFAULT_STYLES_PATH}/${style}`;
  return styleSitePath;
}

// carbon: "0rem",
// catalyst: "0.6rem",
// wedges: "0.5rem",
// snow: "0.4rem",
// neon: "0rem",
// material: "0.4rem",
// spectrum: "0.4rem",
// lucid: "0.5rem",
// moon: "0.6rem",
// default: "0.5rem",
// linear: "0.5rem",
// libelle: "0rem",

export const STYLES_DATA: Record<Style, StyleData> = {
  default: {
    name: "default",
    title: "Default",
    description: "Default shadcn ui style",
    styleVariablePrefix: "dft",
    styleSitePath: getStyleSitePath("default"),
    directoryName: "default",
    defaultPalette: "pallete-1",
    defaultRadius: "0.5rem",
    showcaseComponents: <DefaultShowcaseComponents />,
    hero: <DefaultUI />,
  },
  "default-v4": {
    name: "default-v4",
    title: "Default v4",
    description: "Isolated upstream shadcn ui collection in the dft namespace",
    styleVariablePrefix: "dft",
    styleSitePath: getStyleSitePath("default-v4"),
    directoryName: "default-v4",
    defaultPalette: "",
    defaultRadius: "0.5rem",
    showcaseComponents: <DefaultV4ShowcaseComponents />,
    hero: <DefaultV4UI />,
  },
  "carbon-v4": {
    name: "carbon-v4",
    title: "Carbon v4",
    description: "Isolated upstream shadcn ui collection in the cb namespace",
    styleVariablePrefix: "cb",
    styleSitePath: getStyleSitePath("carbon-v4"),
    directoryName: "carbon-v4",
    defaultPalette: "",
    defaultRadius: "0rem",
    showcaseComponents: <CarbonShowcaseComponents />,
    hero: <CarbonUI />,
  },
  carbon: {
    name: "carbon",
    title: "Carbon",
    description: "Carbon IBM inspired design system style",
    styleVariablePrefix: "cb",
    styleSitePath: getStyleSitePath("carbon"),
    directoryName: "carbon",
    defaultPalette: "",
    defaultRadius: "0rem",
    showcaseComponents: <CarbonShowcaseComponents />,
    hero: <CarbonUI />,
  },
  linear: {
    name: "linear",
    title: "Linear",
    description: "Linear Design System style",
    styleVariablePrefix: "linear",
    styleSitePath: getStyleSitePath("linear"),
    directoryName: "linear",
    defaultPalette: "",
    defaultRadius: "0.5rem",
    showcaseComponents: <LinearShowcaseComponents />,
    hero: <LinearUI />,
  },
  material: {
    name: "material",
    title: "Material",
    description: "Material Design style",
    styleVariablePrefix: "material",
    styleSitePath: getStyleSitePath("material"),
    directoryName: "material",
    defaultPalette: "",
    defaultRadius: "0.75rem",
    showcaseComponents: <MaterialShowcaseComponents />,
    hero: <MaterialUI />,
  },
  spectrum: {
    name: "spectrum",
    title: "Spectrum",
    description: "Spectrum Design System style",
    styleVariablePrefix: "spctm",
    styleSitePath: getStyleSitePath("spectrum"),
    directoryName: "spectrum",
    defaultPalette: "",
    defaultRadius: "0.4rem",
    showcaseComponents: <SpectrumShowcaseComponents />,
    hero: <SpectrumUI />,
  },
  catalyst: {
    name: "catalyst",
    title: "Catalyst",
    description: "Catalyst Design System style",
    styleVariablePrefix: "catalyst",
    styleSitePath: getStyleSitePath("catalyst"),
    directoryName: "catalyst",
    defaultPalette: "",
    defaultRadius: "0.6rem",
    showcaseComponents: <CatalystShowcaseComponents />,
    hero: <CatalystUI />,
  },
  wedges: {
    name: "wedges",
    title: "Wedges",
    description: "Wedges Design System style",
    styleVariablePrefix: "wedges",
    styleSitePath: getStyleSitePath("wedges"),
    directoryName: "wedges",
    defaultPalette: "",
    defaultRadius: "0.5rem",
    showcaseComponents: <WedgesShowcaseComponents />,
    hero: <WedgesUI />,
  },
  moon: {
    name: "moon",
    title: "Moon",
    description: "Moon Design System style",
    styleVariablePrefix: "moon",
    styleSitePath: getStyleSitePath("moon"),
    directoryName: "moon",
    defaultPalette: "",
    defaultRadius: "0.6rem",
    showcaseComponents: <MoonShowcaseComponents />,
    hero: <MoonUI />,
  },
  lucid: {
    name: "lucid",
    title: "Lucid",
    description: "Lucid Design System style",
    styleVariablePrefix: "lucid",
    styleSitePath: getStyleSitePath("lucid"),
    directoryName: "lucid",
    defaultPalette: "",
    defaultRadius: "0.5rem",
    showcaseComponents: <LucidShowcaseComponents />,
    hero: <LucidUI />,
  },
  snow: {
    name: "snow",
    title: "Snow",
    description: "Snow Design System style",
    styleVariablePrefix: "snow",
    styleSitePath: getStyleSitePath("snow"),
    directoryName: "snow",
    defaultPalette: "",
    defaultRadius: "0.4rem",
    showcaseComponents: <SnowShowcaseComponents />,
    hero: <SnowUI />,
  },
  neon: {
    name: "neon",
    title: "Neon",
    description: "Neon Design System style",
    styleVariablePrefix: "neon",
    styleSitePath: getStyleSitePath("neon"),
    directoryName: "neon",
    defaultPalette: "",
    defaultRadius: "0rem",
    showcaseComponents: <NeonShowcaseComponents />,
    hero: <NeonUI />,
  },
  libelle: {
    name: "libelle",
    title: "Libellé",
    description: "Libellé Design System style",
    styleVariablePrefix: "libelle",
    styleSitePath: getStyleSitePath("libelle"),
    directoryName: "libelle",
    defaultPalette: "",
    defaultRadius: "0rem",
    showcaseComponents: <LibelleShowcaseComponents />,
    hero: <LibelleUI />,
  },
};

export const stylesDataList = Object.values(STYLES_DATA);

export const STYLES_LENGTH = STYLES.length;

export const PAGE_EXAMPLE_TYPES: PageExampleType[] = [
  // "charts",
  // "board",
  "mail",
  "dashboard",
  "cards",
  "tasks",
  "playground",
  "forms",
  "music",
  "authentication",
];

export type PageExampleType =
  | "charts"
  | "board"
  | "mail"
  | "dashboard"
  | "cards"
  | "tasks"
  | "playground"
  | "forms"
  | "music"
  | "authentication";

const DEFAULT_PAGE_EXAMPLE_TYPE: PageExampleType = "cards";
export const pageExampleTypes = PAGE_EXAMPLE_TYPES;

export type Style = (typeof STYLES)[number];

type StyleState = {
  style: Style;
  setStyle: (style: Style) => void;

  pageExampleType: PageExampleType;
  setPageExampleType: (type: PageExampleType) => void;
};

export const useStyleStore = create<StyleState>((set) => ({
  // Default to STYLES[7] as you had it
  style: STYLES[7],
  setStyle: (style) => set({ style }),

  pageExampleType: DEFAULT_PAGE_EXAMPLE_TYPE,
  setPageExampleType: (type) => set({ pageExampleType: type }),
}));
