import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, Palette } from "lucide-react";

import { AuditDocument } from "@/components/audit/audit-document";
import { getAuditStyleComparisons, getAuditStyles } from "@/lib/audit-docs";

type PageProps = {
  params: Promise<{
    style: string;
  }>;
};

export default async function AuditStylePage({ params }: PageProps) {
  const { style } = await params;

  const styles = await getAuditStyles();

  if (!styles.some((item) => item.slug === style)) {
    notFound();
  }

  const comparisons = await getAuditStyleComparisons(style);

  const title = style.charAt(0).toUpperCase() + style.slice(1);

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <Link
        href="/audit/styles"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        All styles
      </Link>

      <header className="border-border mt-8 border-b pb-8">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Palette className="size-4" />
          Style comparison
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title} vs Default
        </h1>

        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-6">
          Browse every component comparison for the {title} design style. All
          comparisons are rendered directly from your Markdown files.
        </p>

        <div className="text-muted-foreground mt-5 flex items-center gap-2 text-sm">
          <FileText className="size-4" />
          {comparisons.length} component comparisons
        </div>
      </header>

      {comparisons.length === 0 ? (
        <div className="border-border mt-8 rounded-xl border border-dashed p-10 text-center">
          <p className="font-medium">No comparisons found</p>
          <p className="text-muted-foreground mt-2 text-sm">
            No vs-default Markdown files were found for this style.
          </p>
        </div>
      ) : (
        <div className="divide-border divide-y">
          {comparisons.map((comparison, index) => (
            <article
              key={comparison.relativePath}
              id={comparison.slug}
              className="scroll-mt-24 py-10 first:pt-8"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                    Component {index + 1} of {comparisons.length}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {comparison.title}
                  </h2>
                </div>

                <Link
                  href={`/audit/components/${comparison.slug}`}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Open document
                </Link>
              </div>

              <div className="border-border bg-card rounded-xl border p-5 sm:p-8">
                <AuditDocument content={comparison.content} />
              </div>
            </article>
          ))}
        </div>
      )}

      <footer className="border-border mt-10 border-t py-8">
        <Link
          href="/audit/styles"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Browse other styles
        </Link>
      </footer>
    </main>
  );
}
