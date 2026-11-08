"use client";

import Link from "next/link";

import { STYLES } from "@/hooks/use-style-store";

export function StylesColorsNav() {
  return (
    <div className="flex h-fit w-full flex-wrap gap-2">
      {STYLES.map((style) => (
        <Link
          href={`#${style}-colors`}
          className="bg-accent/50 border p-1 px-2 text-sm backdrop-blur-2xl"
        >
          <span className="capitalize">{style}</span> colors
        </Link>
      ))}
    </div>
  );
}
