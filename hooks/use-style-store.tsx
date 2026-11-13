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

export type ExampleName =
  | "authentication"
  | "cards"
  | "dashboard"
  | "forms"
  | "mail"
  | "music"
  | "playground"
  | "tasks"
  | "dashboard-01"
  | "hero"
  | "card-showcase"
  | "login-01"
  | "login-02"
  | "login-03"
  | "login-04"
  | "login-05"
  | "preview"
  | "preview-02"
  | "preview-03"
  | "sidebar-01"
  | "sidebar-02"
  | "sidebar-03"
  | "sidebar-04"
  | "sidebar-05"
  | "sidebar-06"
  | "sidebar-07"
  | "sidebar-08"
  | "sidebar-09"
  | "sidebar-10"
  | "sidebar-11"
  | "sidebar-12"
  | "sidebar-13"
  | "sidebar-14"
  | "sidebar-15"
  | "sidebar-16"
  | "signup-01"
  | "signup-02"
  | "signup-03"
  | "signup-04"
  | "signup-05";

const DEFAULT_PAGE_EXAMPLE_TYPE: PageExampleType = "cards";
export const pageExampleTypes = PAGE_EXAMPLE_TYPES;

export const DEFAULT_ACTIVE_EXAMPLE = "preview";

type StyleState = {
  style: StyleName;
  setStyle: (style: StyleName) => void;

  pageExampleType: PageExampleType;
  setPageExampleType: (type: PageExampleType) => void;

  activeExample: ExampleName;
  setActiveExample: (name: ExampleName) => void;
};

export const useStyleStore = create<StyleState>((set) => ({
  // Default to STYLES[7] as you had it
  style: DEFAULT_STYLE.name,
  setStyle: (style) => set({ style }),

  pageExampleType: DEFAULT_PAGE_EXAMPLE_TYPE,
  setPageExampleType: (type) => set({ pageExampleType: type }),

  activeExample: DEFAULT_ACTIVE_EXAMPLE,
  setActiveExample: (name) => set({ activeExample: name }),
}));
