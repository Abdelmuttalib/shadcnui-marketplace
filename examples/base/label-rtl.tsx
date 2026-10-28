"use client";

import * as React from "react";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Checkbox } from "@/styles/base-default/ui/checkbox";
import { Label } from "@/styles/base-default/ui/label";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      label: "Accept terms and conditions",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      label: "قبول الشروط والأحكام",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "קבל תנאים והגבלות",
    },
  },
};

export function LabelRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="flex gap-2" dir={dir}>
      <Checkbox id="terms-rtl" dir={dir} />
      <Label htmlFor="terms-rtl" dir={dir}>
        {t.label}
      </Label>
    </div>
  );
}
