"use client";

import { STYLES } from "@/registry/styles";
import Link from "next/link";

export function StylesColorsNav() {
  return (
    <div className="flex h-fit w-full flex-wrap gap-2">
      {STYLES.map((style) => (
        <Link
          href={`#${style.name}-colors`}
          className="bg-accent/50 border p-1 px-2 text-sm backdrop-blur-2xl"
        >
          <span className="capitalize">{style.name}</span> colors
        </Link>
      ))}
    </div>
  );
}
