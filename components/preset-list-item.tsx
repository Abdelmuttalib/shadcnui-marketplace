"use client";

import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link, { useLinkStatus } from "next/link";
import { memo, useCallback, useMemo, useState } from "react";

import type { StyleWithColors } from "@/lib/services/presets";
import { cn } from "@/lib/utils";

type Props = {
  style: StyleWithColors;
  isActive: boolean;
  queryString: string;
};

const fontLabelCache = new Map<string, string>();
function formatFontLabel(slug: string): string {
  const cached = fontLabelCache.get(slug);
  if (cached) return cached;
  const label = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  fontLabelCache.set(slug, label);
  return label;
}

function ItemPendingOverlay() {
  const { pending } = useLinkStatus();
  return (
    <span
      aria-hidden
      data-pending={pending || undefined}
      className="bg-accent/0 data-[pending]:bg-accent/50 pointer-events-none absolute inset-0 rounded-lg transition-colors duration-150"
    />
  );
}

function PresetListItemImpl({ style, isActive, queryString }: Props) {
  const href = `/customize/${style.name}${queryString}`;
  const previewHref = `https://ui.shadcn.com/preview/radix/preview-02?preset=${encodeURIComponent(style.name)}`;
  const displayName = style.title ?? style.name.slice(0, 10);
  const colors = style.colors;
  const fonts = style.fonts;

  const dots = useMemo(
    () =>
      colors
        ? [
            colors.primary,
            colors.secondary,
            colors.chart1,
            colors.card,
            colors.accent,
            // colors.destructive,
          ]
        : [],
    [colors]
  );

  const fontCaption = useMemo(() => {
    if (!fonts) return null;
    return fonts.heading === fonts.sans
      ? formatFontLabel(fonts.heading)
      : `${formatFontLabel(fonts.heading)} · ${formatFontLabel(fonts.sans)}`;
  }, [fonts]);

  const [intent, setIntent] = useState(false);
  const onIntent = useCallback(() => setIntent(true), []);

  const s = `bg-${style.cssPrefix}-primary/20`;
  return (
    <Link
      href={href}
      prefetch={intent ? null : false}
      onMouseEnter={onIntent}
      onFocus={onIntent}
      onTouchStart={onIntent}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "hover:bg-accent/40 relative flex items-start gap-3 border px-2.5 py-3.5 transition-colors",
        isActive ? "border-border bg-card" + s : "border-border/40 bg-card/30",
        `font-${fonts?.sans}`
      )}
    >
      {intent ? <link rel="prefetch" as="document" href={previewHref} /> : null}
      <ItemPendingOverlay />
      {/* <div className="flex shrink-0 -space-x-1">
        {dots.length === 0 ? (
          <div className="border-border/60 bg-muted size-4 rounded-full border" />
        ) : (
          dots.map((color, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length swatch list
              key={i}
              className="border-border/60 ring-background size-4 rounded-full border ring-1"
              style={{ backgroundColor: color }}
            />
          ))
        )}
      </div> */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="truncate text-sm leading-5 font-medium lg:text-base">
          {displayName}
        </div>
        {fontCaption ? (
          <div className="text-muted-foreground lg:text-text-sm truncate text-[11px] leading-4">
            {fontCaption}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-end gap-1">
        {/* <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1 text-xs tabular-nums">
          <HugeiconsIcon
            icon={FavouriteIcon}
            size={12}
            color="currentColor"
            strokeWidth={1.5}
          />
          {likes}
          3
        </span> */}
        <div className="flex shrink-0 -space-x-1">
          {dots.length === 0 ? (
            <div className="border-border/60 bg-muted size-4 rounded-full border" />
          ) : (
            dots.map((color, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length swatch list
                key={i}
                className="border-border/60 ring-background size-4 ring-1 xl:w-5"
                style={{ backgroundColor: color }}
              />
            ))
          )}
        </div>
      </div>
    </Link>
  );
}

export const PresetListItem = memo(PresetListItemImpl);
