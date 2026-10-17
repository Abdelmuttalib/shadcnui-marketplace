import * as React from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
// import { Toaster as BaseToaster } from "@/registry/bases/base/ui/toast";
import { BASES, type Base } from "@/registry/config";
import { getBaseComponent, getBaseItem } from "@/app/(www)/(create)/lib/api";
import { Style, styles, STYLES } from "@/registry/styles";

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

export async function generateStaticParams() {
  return BASES.flatMap((base) =>
    STATIC_PREVIEW_ITEMS.map((name) => ({
      base: base.name,
      name,
    }))
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

  return (
    <div className="bg-background relative">
      <PreventScrollOnFocusScript />
      <Component />
      {/* <DesignSystemProvider>
        <Component />
      </DesignSystemProvider> */}
      {/* {base.name === "base" && <BaseToaster />} */}
      <TailwindIndicator forceMount />
    </div>
  );
}
