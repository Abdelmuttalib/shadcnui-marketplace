import { notFound } from "next/navigation";

import { isSinkStyle, sinkPageRegistry } from "../lib/style-registry";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { getStyleFontClassname } from "@/registry/styles-components";

type SinkStylePageProps = {
  params: Promise<{
    style: string;
  }>;
};

export default async function SinkStylePage({ params }: SinkStylePageProps) {
  const { style } = await params;

  if (!isSinkStyle(style)) {
    notFound();
  }

  const SinkPage = sinkPageRegistry[style].current;

  const styleFont = getStyleFontClassname(style);

  return (
    <div className={styleFont}>
      <ScrollRestoration />

      <SinkPage />
    </div>
  );
}
