// app/(view)/preview/[base]/[style]/[name]/page.tsx
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import * as React from "react";

import { getBaseComponent, getBaseItem } from "@/app/(www)/(create)/lib/api";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
// import { Toaster as BaseToaster } from "@/registry/bases/base/ui/toast";
import { type Base, BASES } from "@/registry/config";
import { Style, STYLES, styles } from "@/registry/styles";
import { getStyleVariablesPrefix } from "@/registry/styles-components";

// import "@/app/style-registry.css";
// import "streamdown/styles.css";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = true;

const STATIC_PREVIEW_ITEMS = ["preview", "preview-02"] as const;

function PreventScrollOnFocusScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var f=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(o){f.call(this,Object.assign({},o,{preventScroll:true}))};})();`,
      }}
    />
  );
}

const getCacheRegistryItem = React.cache(
  async (name: string, base: Base["name"], style: Style["name"]) => {
    return await getBaseItem(name, base, style);
  }
);

const getCachedRegistryComponent = React.cache(
  async (name: string, base: Base["name"], style: Style["name"]) => {
    return await getBaseComponent(name, base, style);
  }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    base: string;
    style: string;
    name: string;
  }>;
}): Promise<Metadata> {
  const paramBag = await params;
  const base = BASES.find((l) => l.name === paramBag.base);
  const style = STYLES.find((s) => s.name === paramBag.style);

  if (!base || !style) {
    return {};
  }
  const item = await getBaseItem(paramBag.name, base.name, style.name);

  if (!item) {
    return {};
  }

  const title = item.name;
  const description = item.description;

  return {
    title: item.name,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/preview/${base.name}/${style.name}/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  };
}

// export async function generateStaticParams() {
//   return BASES.flatMap((base) =>
//     STATIC_PREVIEW_ITEMS.map((name) => ({
//       base: base.name,
//       name,
//     }))
//   );
// }

export async function generateStaticParams() {
  return BASES.flatMap((base) =>
    STYLES.flatMap((style) =>
      STATIC_PREVIEW_ITEMS.map((name) => ({
        base: base.name,
        style: style.name,
        name,
      }))
    )
  );
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    base: string;
    style: string;
    name: string;
  }>;
}) {
  const paramBag = await params;
  const base = BASES.find((l) => l.name === paramBag.base);
  const style = STYLES.find((s) => s.name === paramBag.style);

  if (!base || !style) {
    return notFound();
  }

  const [item, Component] = await Promise.all([
    getCacheRegistryItem(paramBag.name, base.name, style.name),
    getCachedRegistryComponent(paramBag.name, base.name, style.name),
  ]);

  if (!item || !Component) {
    return notFound();
  }

  const prefix = getStyleVariablesPrefix(style.name);

  return (
    <div
      className="bg-background relative"

      // style={{
      //   ["--background"]: `var(--${prefix}-background)`,
      //   ["--foreground"]: `var(--${prefix}-foreground)`,
      //   ["--primary"]: `var(--${prefix}-primary)`,
      //   ["--primary-foreground"]: `var(--${prefix}-primary-foreground)`,
      //   ["--secondary"]: `var(--${prefix}-secondary)`,
      //   ["--secondary-foreground"]: `var(--${prefix}-secondary-foreground)`,
      //   ["--muted"]: `var(--${prefix}-muted)`,
      //   ["--muted-foreground"]: `var(--${prefix}-muted-foreground)`,
      //   ["--accent"]: `var(--${prefix}-accent)`,
      //   ["--accent-foreground"]: `var(--${prefix}-accent-foreground)`,
      //   ["--destructive"]: `var(--${prefix}-destructive)`,
      //   ["--destructive-foreground"]: `var(--${prefix}-destructive-foreground)`,
      //   ["--border"]: `var(--${prefix}-border)`,
      //   ["--input"]: `var(--${prefix}-input)`,
      //   ["--ring"]: `var(--${prefix}-ring)`,
      //   ["--card"]: `var(--${prefix}-card)`,
      //   ["--card-foreground"]: `var(--${prefix}-card-foreground)`,
      //   ["--popover"]: `var(--${prefix}-popover)`,
      //   ["--popover-foreground"]: `var(--${prefix}-popover-foreground)`,

      //   ["--chart-1"]: `var(--${prefix}-chart-1)`,
      //   ["--chart-2"]: `var(--${prefix}-chart-2)`,
      //   ["--chart-3"]: `var(--${prefix}-chart-3)`,
      //   ["--chart-4"]: `var(--${prefix}-chart-4)`,
      //   ["--chart-5"]: `var(--${prefix}-chart-5)`,

      //   ["--radius"]: style.defaultRadius,

      //   ["--sidebar-background"]: `var(--${prefix}-sidebar-background)`,
      //   ["--sidebar-foreground"]: `var(--${prefix}-sidebar-foreground)`,
      //   ["--sidebar-primary"]: `var(--${prefix}-sidebar-primary)`,
      //   ["--sidebar-primary-foreground"]: `var(--${prefix}-sidebar-primary-foreground)`,
      //   ["--sidebar-accent"]: `var(--${prefix}-sidebar-accent)`,
      //   ["--sidebar-accent-foreground"]: `var(--${prefix}-sidebar-accent-foreground)`,
      //   ["--sidebar-border"]: `var(--${prefix}-sidebar-border)`,
      //   ["--sidebar-ring"]: `var(--${prefix}-sidebar-ring)`,
      // }}
    >
      <Component />
      {/* <DesignSystemProvider>
        <Component />
      </DesignSystemProvider> */}
      {/* {base.name === "base" && <BaseToaster />} */}
      <TailwindIndicator forceMount />
    </div>
  );
}
