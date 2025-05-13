"use client";

import Link from "next/link";

import { STYLES } from "@/hooks/use-style-store";

export function StylesColorsNav() {
  return (
    <div className="sticky top-20 z-30 flex h-fit w-full flex-col gap-2 md:col-span-2">
      {STYLES.map((style) => (
        <div key={style} className="w-full">
          <Link
            href={`#${style}-colors`}
            className="w-full rounded-md border bg-accent p-1 px-2 text-sm"
          >
            <span className="capitalize">{style}</span> colors
          </Link>
        </div>
      ))}
    </div>
  );
}
