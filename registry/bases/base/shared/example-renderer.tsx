"use client";

import { DesignSystemTheme } from "@/components/common/design-system-theme";
import { Skeleton } from "@/components/ui/skeleton";
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
  authentication: dynamic(() => import("./views/authentication/page")),
  cards: dynamic(() => import("./views/cards/page")),
  dashboard: dynamic(() => import("./views/dashboard/page")),
  forms: dynamic(() => import("./views/forms/page")),
  mail: dynamic(() => import("./views/mail/page")),
  music: dynamic(() => import("./views/music/page")),
  playground: dynamic(() => import("./views/playground/page")),
  tasks: dynamic(() => import("./views/tasks/page")),
  hero: dynamic(() => import("./hero")),
  "card-showcase": dynamic(() => import("./card-showcase")),

  "dashboard-01": dynamic(() => import("./blocks/dashboard-01/page")),

  "login-01": dynamic(() => import("./blocks/login-01/page")),
  "login-02": dynamic(() => import("./blocks/login-02/page")),
  "login-03": dynamic(() => import("./blocks/login-03/page")),
  "login-04": dynamic(() => import("./blocks/login-04/page")),
  "login-05": dynamic(() => import("./blocks/login-05/page")),

  preview: dynamic(() => import("./blocks/preview")),
  "preview-02": dynamic(() => import("./blocks/preview-02")),
  "preview-03": dynamic(() => import("./blocks/preview-03")),

  "sidebar-01": dynamic(() => import("./blocks/sidebar-01/page")),
  "sidebar-02": dynamic(() => import("./blocks/sidebar-02/page")),
  "sidebar-03": dynamic(() => import("./blocks/sidebar-03/page")),
  "sidebar-04": dynamic(() => import("./blocks/sidebar-04/page")),
  "sidebar-05": dynamic(() => import("./blocks/sidebar-05/page")),
  "sidebar-06": dynamic(() => import("./blocks/sidebar-06/page")),
  "sidebar-07": dynamic(() => import("./blocks/sidebar-07/page")),
  "sidebar-08": dynamic(() => import("./blocks/sidebar-08/page")),
  "sidebar-09": dynamic(() => import("./blocks/sidebar-09/page")),
  "sidebar-10": dynamic(() => import("./blocks/sidebar-10/page")),
  "sidebar-11": dynamic(() => import("./blocks/sidebar-11/page")),
  "sidebar-12": dynamic(() => import("./blocks/sidebar-12/page")),
  "sidebar-13": dynamic(() => import("./blocks/sidebar-13/page")),
  "sidebar-14": dynamic(() => import("./blocks/sidebar-14/page")),
  "sidebar-15": dynamic(() => import("./blocks/sidebar-15/page")),
  "sidebar-16": dynamic(() => import("./blocks/sidebar-16/page")),

  "signup-01": dynamic(() => import("./blocks/signup-01/page")),
  "signup-02": dynamic(() => import("./blocks/signup-02/page")),
  "signup-03": dynamic(() => import("./blocks/signup-03/page")),
  "signup-04": dynamic(() => import("./blocks/signup-04/page")),
  "signup-05": dynamic(() => import("./blocks/signup-05/page")),
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
    <React.Suspense
      fallback={
        <Skeleton className="isolate min-h-[151px] w-full self-start rounded-2xl md:h-full md:max-h-full md:min-h-0 md:w-(--customizer-width)" />
      }
    >
      {/* <DesignSystemTheme style={style}> */}
      <Adapter palette={palette}>
        <Example />
      </Adapter>
      {/* </DesignSystemTheme> */}
    </React.Suspense>
  );
}

export function ItemRenderer({
  style,
  name,
  palette,
  children,
}: {
  style: ExampleStyle;
  name?: ExampleName;
  palette?: string;
  children: React.ReactNode;
}) {
  const Adapter = adapters[style];

  return (
    <React.Suspense fallback={null}>
      <DesignSystemTheme style={style}>
        <Adapter palette={palette}>{children}</Adapter>
      </DesignSystemTheme>
    </React.Suspense>
  );
}
