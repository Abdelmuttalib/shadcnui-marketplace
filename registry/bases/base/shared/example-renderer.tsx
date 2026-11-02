"use client";

import { DesignSystemTheme } from "@/components/common/design-system-theme";
import { getStyleFontClassname } from "@/registry/styles-components";
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
}

export function ExampleRenderer({ style, name }: ExampleRendererProps) {
  const Adapter = adapters[style];
  const Example = examples[name];

  const styleFontClass = getStyleFontClassname(style);

  return (
    <React.Suspense fallback={null}>
      <DesignSystemTheme style={style}>
        <div
          className={styleFontClass}
          style={{
            "--background": "var(--libelle-background)",
            "--foreground": "var(--libelle-foreground)",
            "--primary": "var(--libelle-primary)",
            "--secondary": "var(--libelle-secondary)",
            "--muted": "var(--libelle-muted)",
            "--accent": "var(--libelle-accent)",
            "--destructive": "var(--libelle-destructive)",
            "--border": "var(--libelle-border)",

            "--neon-background": "var(--libelle-background)",
            "--neon-foreground": "var(--libelle-foreground)",
            "--neon-primary": "var(--libelle-primary)",
            "--neon-secondary": "var(--libelle-secondary)",
            "--neon-muted": "var(--libelle-muted)",
            "--neon-accent": "var(--libelle-accent)",
            "--neon-destructive": "var(--libelle-destructive)",
            "--neon-border": "var(--libelle-border)",
          }}
        >
          <Adapter>
            <Example />
          </Adapter>
        </div>
      </DesignSystemTheme>
    </React.Suspense>
  );
}
