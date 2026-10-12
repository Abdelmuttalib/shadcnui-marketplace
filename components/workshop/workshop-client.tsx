"use client";

import React, { Suspense } from "react";

import { ThemeToggle } from "@/components/common/theme";
import { cn } from "@/lib/utils";
import type {
  WorkshopCatalog,
  WorkshopComponent,
} from "@/lib/workshop-catalog";

import { getFixture, hasFixture } from "./fixture-loader";
import type { FixtureSide as FixtureSideType } from "./fixtures/types";
import { FIXTURE_STYLES } from "./fixtures/types";
import { PreviewColumn } from "./inspector";

type Mode = "single" | "compare";

function isRenderable(style: string, component: WorkshopComponent) {
  return (
    (FIXTURE_STYLES as readonly string[]).includes(style) &&
    hasFixture(component.name) &&
    component.styles.includes(style)
  );
}

function AvailabilityDot({ component }: { component: WorkshopComponent }) {
  const inDefault = component.styles.includes("default");
  const inV4 = component.styles.includes("default-v4");
  const label = inDefault && inV4 ? "both" : inDefault ? "default" : inV4 ? "v4" : "none";
  return (
    <span
      title={label === "both" ? "In default and default-v4" : `Only in ${label}`}
      className={cn(
        "size-1.5 shrink-0 rounded-full",
        label === "both" && "bg-green-500",
        label !== "both" && label !== "none" && "bg-amber-500",
        label === "none" && "bg-gray-400"
      )}
    />
  );
}

export function WorkshopClient({ catalog }: { catalog: WorkshopCatalog }) {
  const [query, setQuery] = React.useState("");
  const [componentName, setComponentName] = React.useState("button");
  const [leftStyle, setLeftStyle] = React.useState<string>("default");
  const [rightStyle, setRightStyle] = React.useState<string>("default-v4");
  const [mode, setMode] = React.useState<Mode>("compare");

  const component =
    catalog.components.find((c) => c.name === componentName) ??
    catalog.components[0];

  const groups = React.useMemo(() => {
    const map = new Map<string, WorkshopComponent[]>();
    for (const c of catalog.components) {
      if (
        query &&
        !c.title.toLowerCase().includes(query.toLowerCase()) &&
        !c.name.includes(query.toLowerCase())
      ) {
        continue;
      }
      const list = map.get(c.group) ?? [];
      list.push(c);
      map.set(c.group, list);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [catalog.components, query]);

  const Fixture = component ? getFixture(component.name) : null;

  function reset() {
    setQuery("");
    setComponentName("button");
    setLeftStyle("default");
    setRightStyle("default-v4");
    setMode("compare");
  }

  function renderSide(side: FixtureSideType, key: string) {
    if (!component || !Fixture) {
      return (
        <p className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
          No preview fixture for this component yet.
        </p>
      );
    }
    return (
      <Suspense
        fallback={
          <p className="p-6 text-center text-sm text-muted-foreground">
            Loading fixture…
          </p>
        }
      >
        <Fixture key={key} side={side} />
      </Suspense>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-4 p-4 md:p-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Style Workshop
          </h1>
          <p className="text-sm text-muted-foreground">
            Internal tool · {catalog.components.length} components ·{" "}
            {catalog.styles.length} styles
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex overflow-hidden rounded-md border text-sm"
            role="group"
            aria-label="Comparison mode"
          >
            <button
              type="button"
              onClick={() => setMode("single")}
              aria-pressed={mode === "single"}
              className={cn(
                "px-3 py-1.5",
                mode === "single" ? "bg-accent font-medium" : "hover:bg-accent/50"
              )}
            >
              Single
            </button>
            <button
              type="button"
              onClick={() => setMode("compare")}
              aria-pressed={mode === "compare"}
              className={cn(
                "border-l px-3 py-1.5",
                mode === "compare" ? "bg-accent font-medium" : "hover:bg-accent/50"
              )}
            >
              Compare
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setLeftStyle("default");
              setMode("compare");
            }}
            className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent/50"
            title="Left side default, right side selectable"
          >
            vs Default
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent/50"
          >
            Reset
          </button>
          <ThemeToggle />
        </div>
      </header>

      <div className="grid flex-1 gap-4 lg:grid-cols-[260px_1fr]">
        <aside className="flex flex-col gap-3 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components…"
            aria-label="Search components"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {groups.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No components match “{query}”.
            </p>
          )}
          {groups.map(([group, items]) => (
            <div key={group}>
              <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {group}
              </h2>
              <ul className="grid gap-0.5">
                {items.map((c) => (
                  <li key={c.name}>
                    <button
                      type="button"
                      onClick={() => setComponentName(c.name)}
                      aria-current={c.name === component?.name}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent",
                        c.name === component?.name && "bg-accent font-medium"
                      )}
                    >
                      <AvailabilityDot component={c} />
                      <span className="truncate">{c.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-wrap items-end gap-3">
            <label className="grid gap-1 text-sm">
              <span className="text-xs font-medium text-muted-foreground">
                {mode === "single" ? "Style" : "Left style"}
              </span>
              <select
                value={leftStyle}
                onChange={(e) => setLeftStyle(e.target.value)}
                className="rounded-md border bg-background px-2 py-1.5"
              >
                {catalog.styles.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
            {mode === "compare" && (
              <label className="grid gap-1 text-sm">
                <span className="text-xs font-medium text-muted-foreground">
                  Right style
                </span>
                <select
                  value={rightStyle}
                  onChange={(e) => setRightStyle(e.target.value)}
                  className="rounded-md border bg-background px-2 py-1.5"
                >
                  {catalog.styles.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <p className="pb-2 text-xs text-muted-foreground">
              Fixtures render for default / default-v4; other styles show
              source info only.
            </p>
          </div>

          {component && (
            <div className="flex flex-col gap-4 xl:flex-row">
              <PreviewColumn
                title={component.title}
                styleLabel={
                  catalog.styles.find((s) => s.name === leftStyle)?.label ??
                  leftStyle
                }
                sourcePath={`registry/${leftStyle}/${component.filePath}`}
                available={isRenderable(leftStyle, component)}
              >
                {isRenderable(leftStyle, component) &&
                  renderSide(leftStyle as FixtureSideType, `${component.name}-${leftStyle}`)}
              </PreviewColumn>
              {mode === "compare" && (
                <PreviewColumn
                  title={component.title}
                  styleLabel={
                    catalog.styles.find((s) => s.name === rightStyle)?.label ??
                    rightStyle
                  }
                  sourcePath={`registry/${rightStyle}/${component.filePath}`}
                  available={isRenderable(rightStyle, component)}
                >
                  {isRenderable(rightStyle, component) &&
                    renderSide(rightStyle as FixtureSideType, `${component.name}-${rightStyle}`)}
                </PreviewColumn>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
