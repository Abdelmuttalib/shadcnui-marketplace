"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { styles } from "../lib/styles";

export function SinkStyleNav() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const currentStyle = segments[1] ?? "";
  const isLegacy = segments[2] === "legacy";

  return (
    <nav className="bg-background border-b">
      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
        <Link
          href="/sink"
          className={[
            "rounded-md border px-3 py-2 text-sm transition-colors",
            segments.length === 1
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border hover:bg-accent",
          ].join(" ")}
        >
          All styles
        </Link>

        <div className="mx-1 hidden h-6 border-l sm:block" />

        {styles.map((style) => {
          const href = `/sink/${style.name}`;
          const isActive = currentStyle === style.name;

          return (
            <Link
              key={style.name}
              href={href}
              aria-current={isActive && !isLegacy ? "page" : undefined}
              className={[
                "rounded-md border px-3 py-2 text-sm transition-colors",
                isActive && !isLegacy
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-accent",
              ].join(" ")}
            >
              {style.label}
            </Link>
          );
        })}
      </div>

      {currentStyle && (
        <div className="flex items-center gap-2 px-4 pb-3">
          <span className="text-muted-foreground mr-2 text-xs">
            Implementation
          </span>

          <Link
            href={`/sink/${currentStyle}`}
            aria-current={!isLegacy ? "page" : undefined}
            className={[
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              !isLegacy
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:bg-accent",
            ].join(" ")}
          >
            New
          </Link>

          <Link
            href={`/sink/${currentStyle}/legacy`}
            aria-current={isLegacy ? "page" : undefined}
            className={[
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              isLegacy
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:bg-accent",
            ].join(" ")}
          >
            Legacy
          </Link>
        </div>
      )}
    </nav>
  );
}
