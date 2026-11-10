import { notFound } from "next/navigation";

import {
  ExampleRenderer,
  type ExampleName,
  type ExampleStyle,
} from "@/registry/bases/base/shared/example-renderer";

const STYLES = [
  "default",
  "carbon",
  "neon",
  "linear",
  "catalyst",
  "material",
  "spectrum",
  "wedges",
  "moon",
  "lucid",
  "snow",
  "libelle",
] as const;

const EXAMPLES = [
  "authentication",
  "cards",
  "dashboard",
  "forms",
  "mail",
  "music",
  "playground",
  "tasks",
] as const;

interface PageProps {
  params: Promise<{
    style: string;
    name: string;
  }>;

  searchParams: Promise<{
    palette?: string;
  }>;
}

export default async function ExamplePage({ params, searchParams }: PageProps) {
  const [{ style, name }, { palette }] = await Promise.all([
    params,
    searchParams,
  ]);

  if (
    !STYLES.includes(style as (typeof STYLES)[number]) ||
    !EXAMPLES.includes(name as (typeof EXAMPLES)[number])
  ) {
    notFound();
  }

  return (
    <ExampleRenderer
      style={style as ExampleStyle}
      name={name as ExampleName}
      palette={palette}
    />
  );
}
