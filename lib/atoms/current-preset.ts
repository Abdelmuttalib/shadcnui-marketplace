import { StyleName } from "@/registry/styles";
import { atom } from "jotai";

export type CurrentPreset = {
  styleName: StyleName;
  presetId: string;
  prev: string | null;
  next: string | null;
};

export const currentPresetAtom = atom<CurrentPreset | null>(null);
