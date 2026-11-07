"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
// import { usePrewarmPresets } from "@/hooks/use-prewarm-presets";
import { currentPresetAtom } from "@/lib/atoms/current-preset";
import { StyleName } from "@/registry/styles";

type Props = {
  styleName: StyleName;
  presetId: string;
  prev: string | null;
  next: string | null;
};

export function PresetContextSync({ styleName, presetId, prev, next }: Props) {
  const setCurrent = useSetAtom(currentPresetAtom);

  useEffect(() => {
    setCurrent({ styleName, presetId, prev: null, next: null });
  }, [styleName, presetId, prev, next, setCurrent]);

  // usePrewarmPresets([prev, next]);

  return null;
}
