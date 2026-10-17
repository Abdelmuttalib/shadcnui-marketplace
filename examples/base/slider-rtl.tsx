"use client";

import * as React from "react";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Slider } from "@/styles/base-default/ui/slider";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {},
  },
  ar: {
    dir: "rtl",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
};

export function SliderRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
      dir={dir}
    />
  );
}
