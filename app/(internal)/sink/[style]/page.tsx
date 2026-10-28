import { notFound } from "next/navigation";

import { isSinkStyle, sinkPageRegistry } from "../lib/style-registry";
import { ScrollRestoration } from "@/components/scroll-restoration";

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

  return (
    <>
      <ScrollRestoration />

      <SinkPage />
    </>
  );
}
