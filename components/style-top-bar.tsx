import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Suspense } from "react";
import { StyleActions } from "@/components/preset-actions";
import { PresetContextSync } from "@/components/preset-context-sync";
import { PresetLikeSlot } from "@/components/preset-like-slot";
import { PresetNav } from "@/components/preset-nav";
import { PresetSidebarToggle } from "@/components/preset-sidebar-toggle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Style } from "@/registry/styles";

type Props = {
  style: Style;
  prev: string | null;
  next: string | null;
};

const SHADCN_PREVIEW_BASE = "https://ui.shadcn.com/preview/radix/preview-02";
const previewHref = (code: string) =>
  `${SHADCN_PREVIEW_BASE}?preset=${encodeURIComponent(code)}`;

export function StyleTopBar({ style, prev, next }: Props) {
  const displayName = style.title;
  const shortCode = style.name;

  return (
    <header className="bg-background/70 sticky top-0 z-10 flex items-center gap-2 border-b px-3 py-2 backdrop-blur">
      {prev ? (
        <link rel="prefetch" as="document" href={previewHref(prev)} />
      ) : null}
      {next ? (
        <link rel="prefetch" as="document" href={previewHref(next)} />
      ) : null}
      <PresetContextSync
        styleName={style.name}
        presetId={style.name}
        prev={prev}
        next={next}
      />
      <Link
        href="/customize"
        aria-label="Back to presets"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon-sm" }),
          "md:hidden"
        )}
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={16} strokeWidth={1.5} />
      </Link>
      <PresetSidebarToggle />
      <h1 className="truncate text-sm font-medium tracking-tight">
        {displayName}
      </h1>
      <Badge variant="secondary" className="shrink-0 rounded-full text-[10px]">
        {shortCode}
      </Badge>
      {/* {preset.brandSlug ? (
        <Badge
          variant="outline"
          className="hidden shrink-0 rounded-full text-[10px] sm:inline-flex"
        >
          {preset.brandSlug}
        </Badge>
      ) : null} */}
      <div className="ml-auto flex items-center gap-2">
        <Suspense fallback={null}>
          <PresetNav currentStyleName={style.name} prev={prev} next={next} />
        </Suspense>
        <StyleActions
          code={style.name}
          likeSlot={<PresetLikeSlot presetId={style.name} initialLikes={4} />}
        />
      </div>
    </header>
  );
}
