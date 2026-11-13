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
  "hero",
  "card-showcase",

  "dashboard-01",
  "login-01",
  "login-02",
  "login-03",
  "login-04",
  "login-05",
  "preview",
  "preview-02",
  "preview-03",
  "sidebar-01",
  "sidebar-02",
  "sidebar-03",
  "sidebar-04",
  "sidebar-05",
  "sidebar-06",
  "sidebar-07",
  "sidebar-08",
  "sidebar-09",
  "sidebar-10",
  "sidebar-11",
  "sidebar-12",
  "sidebar-13",
  "sidebar-14",
  "sidebar-15",
  "sidebar-16",
  "signup-01",
  "signup-02",
  "signup-03",
  "signup-04",
  "signup-05",
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
