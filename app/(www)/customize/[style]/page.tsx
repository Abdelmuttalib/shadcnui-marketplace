import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StyleTopBar } from "@/components/style-top-bar";
import { getStyleByName, listStyles } from "@/lib/services/presets";

type PageParams = { style: string };
type SearchParams = Record<string, string | string[] | undefined>;

async function getAdjacentLikedForCurrentUser(
  code: string
): Promise<{ prev: string | null; next: string | null }> {
  return { prev: null, next: null };
}

export async function generateStaticParams() {
  try {
    const { items } = await listStyles();
    return items.map((s) => ({ style: s.name }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { style: styleName } = await params;
  const style = await getStyleByName(styleName);
  if (!style) return { title: "Style not found" };
  const title = `${style.title ?? style.name} — shadcn.style`;
  const description =
    style.description ?? `Style ${style.name} — a ${"custom"} shadcn style.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description, card: "summary_large_image" },
  };
}

export default async function StylePreviewPage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<SearchParams>;
}) {
  const { style: styleName } = await params;
  const sp = await searchParams;
  // const sourceRaw = typeof sp.source === "string" ? sp.source : undefined;
  // const sortRaw = typeof sp.sort === "string" ? sp.sort : undefined;
  // const sort = sortRaw && isPresetSort(sortRaw) ? sortRaw : undefined;
  // const source = sourceRaw && isPresetSource(sourceRaw) ? sourceRaw : undefined;

  // const adjacentPromise =
  //   sourceRaw === "likes"
  //     ? getAdjacentLikedForCurrentUser(code)
  //     : getAdjacentCodes(code, { source, sort });

  const [style] = [getStyleByName(styleName)];

  console.log("SSS", style);

  if (!style) notFound();

  return (
    <StyleTopBar
      style={style}
      prev={null}
      next={null}
      // preset={preset} prev={adjacent.prev} next={adjacent.next}
    />
  );
}
