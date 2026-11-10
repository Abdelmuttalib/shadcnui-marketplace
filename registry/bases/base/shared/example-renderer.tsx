"use client";

import { DesignSystemTheme } from "@/components/common/design-system-theme";
import dynamic from "next/dynamic";
import * as React from "react";

const adapters = {
  carbon: dynamic(() =>
    import("./adapters/carbon").then((mod) => mod.CarbonAdapter)
  ),
  neon: dynamic(() => import("./adapters/neon").then((mod) => mod.NeonAdapter)),
  linear: dynamic(() =>
    import("./adapters/linear").then((mod) => mod.LinearAdapter)
  ),
  catalyst: dynamic(() =>
    import("./adapters/catalyst").then((mod) => mod.CatalystAdapter)
  ),
  material: dynamic(() =>
    import("./adapters/material").then((mod) => mod.MaterialAdapter)
  ),
  spectrum: dynamic(() =>
    import("./adapters/spectrum").then((mod) => mod.SpectrumAdapter)
  ),
  wedges: dynamic(() =>
    import("./adapters/wedges").then((mod) => mod.WedgesAdapter)
  ),
  moon: dynamic(() => import("./adapters/moon").then((mod) => mod.MoonAdapter)),
  lucid: dynamic(() =>
    import("./adapters/lucid").then((mod) => mod.LucidAdapter)
  ),
  snow: dynamic(() => import("./adapters/snow").then((mod) => mod.SnowAdapter)),
  libelle: dynamic(() =>
    import("./adapters/libelle").then((mod) => mod.LibelleAdapter)
  ),
  default: dynamic(() =>
    import("./adapters/default").then((mod) => mod.DefaultAdapter)
  ),
};

const examples = {
  authentication: dynamic(() => import("./examples/authentication/page")),
  cards: dynamic(() => import("./examples/cards/page")),
  dashboard: dynamic(() => import("./examples/dashboard/page")),
  forms: dynamic(() => import("./examples/forms/page")),
  mail: dynamic(() => import("./examples/mail/page")),
  music: dynamic(() => import("./examples/music/page")),
  playground: dynamic(() => import("./examples/playground/page")),
  tasks: dynamic(() => import("./examples/tasks/page")),
};

export type ExampleStyle = keyof typeof adapters;

export type ExampleName = keyof typeof examples;

interface ExampleRendererProps {
  style: ExampleStyle;
  name: ExampleName;
  palette?: string;
}

export function ExampleRenderer({
  style,
  name,
  palette,
}: ExampleRendererProps) {
  const Adapter = adapters[style];
  const Example = examples[name];

  return (
    <React.Suspense fallback={null}>
      <DesignSystemTheme style={style}>
        <Adapter palette={palette}>
          <Example />
        </Adapter>
      </DesignSystemTheme>
    </React.Suspense>
  );
}
