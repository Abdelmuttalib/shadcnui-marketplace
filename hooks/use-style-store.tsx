"use client";

import { create } from "zustand";

import { DEFAULT_STYLE, StyleName, STYLES } from "@/registry/styles";

export const stylesDataList = STYLES;

export const PAGE_EXAMPLE_TYPES: PageExampleType[] = [
  // "charts",
  // "board",
  "mail",
  "dashboard",
  "cards",
  // "tasks",
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

type StyleState = {
  style: StyleName;
  setStyle: (style: StyleName) => void;

  pageExampleType: PageExampleType;
  setPageExampleType: (type: PageExampleType) => void;
};

export const useStyleStore = create<StyleState>((set) => ({
  // Default to STYLES[7] as you had it
  style: DEFAULT_STYLE.name,
  setStyle: (style) => set({ style }),

  pageExampleType: DEFAULT_PAGE_EXAMPLE_TYPE,
  setPageExampleType: (type) => set({ pageExampleType: type }),
}));
