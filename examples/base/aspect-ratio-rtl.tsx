"use client";

import Image from "next/image";
import * as React from "react";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { AspectRatio } from "@/styles/base-default/ui/aspect-ratio";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      caption: "Beautiful landscape",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      caption: "منظر طبيعي جميل",
    },
  },
  he: {
    dir: "rtl",
    values: {
      caption: "נוף יפה",
    },
  },
};

export function AspectRatioRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <figure className="w-full max-w-sm" dir={dir}>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <Image
          src="https://avatar.vercel.sh/shadcn1"
          alt="Photo"
          fill
          className="dark:brightness-20 rounded-lg object-cover grayscale"
        />
      </AspectRatio>
      <figcaption className="text-muted-foreground mt-2 text-center text-sm">
        {t.caption}
      </figcaption>
    </figure>
  );
}
