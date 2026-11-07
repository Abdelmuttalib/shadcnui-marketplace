import { notFound } from "next/navigation";

import { isSinkStyle, sinkPageRegistry } from "../../lib/style-registry";

type LegacySinkPageProps = {
  params: Promise<{
    style: string;
  }>;
};

export default async function LegacySinkPage({ params }: LegacySinkPageProps) {
  const { style } = await params;

  if (!isSinkStyle(style)) {
    notFound();
  }

  const SinkPage = sinkPageRegistry[style].legacy;

  return <SinkPage />;
}
