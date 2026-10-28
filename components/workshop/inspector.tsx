"use client";

import React from "react";

import type { FixtureSide } from "./fixtures/types";

const PROPS = [
  "font-family",
  "font-size",
  "font-weight",
  "background-color",
  "color",
  "border-color",
  "border-radius",
  "padding",
  "height",
  "box-shadow",
] as const;

export function TokenReadout({ targetRef }: { targetRef: React.RefObject<HTMLElement | null> }) {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const el = targetRef.current;
    if (!el) {
      setValues({});
      return;
    }
    const computed = window.getComputedStyle(el);
    const next: Record<string, string> = {};
    for (const prop of PROPS) {
      next[prop] = computed.getPropertyValue(prop).trim();
    }
    setValues(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, tick]);

  return (
    <div className="rounded-md border bg-muted/40 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Computed tokens (preview root)
        </span>
        <button
          type="button"
          onClick={() => setTick((t) => t + 1)}
          className="rounded border bg-background px-2 py-0.5 text-xs hover:bg-accent"
        >
          Refresh
        </button>
      </div>
      <dl className="grid gap-1 font-mono text-xs">
        {Object.entries(values).map(([prop, value]) => (
          <div key={prop} className="flex gap-2">
            <dt className="shrink-0 text-muted-foreground">{prop}</dt>
            <dd className="truncate">{value || "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function PreviewColumn({
  title,
  styleLabel,
  sourcePath,
  available,
  children,
}: {
  title: string;
  styleLabel: string;
  sourcePath: string;
  available: boolean;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <section className="flex min-w-0 flex-1 flex-col gap-3 rounded-lg border bg-card p-4">
      <header className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="rounded-full border bg-accent px-2 py-0.5 text-xs font-medium capitalize">
          {styleLabel}
        </span>
      </header>
      {!available ? (
        <p className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
          No implementation in this collection. Nothing was substituted.
        </p>
      ) : (
        <>
          <div ref={ref} className="min-h-24">
            {children}
          </div>
          <details className="text-sm">
            <summary className="cursor-pointer text-muted-foreground">
              Inspector
            </summary>
            <div className="mt-2 grid gap-2">
              <p className="font-mono text-xs">
                <span className="text-muted-foreground">source: </span>
                {sourcePath}
              </p>
              <TokenReadout targetRef={ref} />
            </div>
          </details>
        </>
      )}
    </section>
  );
}
