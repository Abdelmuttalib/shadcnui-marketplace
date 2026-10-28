import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, FileText, Home } from "lucide-react";

import { AuditDocument } from "@/components/audit/audit-document";
import { getAuditDocument } from "@/lib/audit-docs";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getAuditDocument(slug);

  if (!result) {
    return {
      title: "Document not found | Audit Explorer",
    };
  }

  return {
    title: `${result.document.title} | Audit Explorer`,
    description: `Review ${result.document.title} in the project audit documentation.`,
  };
}

export default async function AuditDocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getAuditDocument(slug);

  if (!result) {
    notFound();
  }

  const { document, content } = result;

  const pathSegments = document.relativePath
    .replace(/\.md$/i, "")
    .split("/")
    .filter(Boolean);

  const breadcrumbSegments = pathSegments.slice(0, -1);

  const isComparison = /-vs-default\.md$/i.test(document.relativePath);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="text-muted-foreground mb-8 flex flex-wrap items-center gap-2 text-sm"
      >
        <Link
          href="/audit"
          className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
        >
          <Home className="size-3.5" />
          <span>Audit</span>
        </Link>

        {breadcrumbSegments.map((segment, index) => (
          <span key={`${segment}-${index}`} className="contents">
            <span aria-hidden="true">/</span>
            <span className="capitalize">{segment.replace(/[-_]/g, " ")}</span>
          </span>
        ))}

        <span aria-hidden="true">/</span>

        <span className="text-foreground max-w-56 truncate font-medium">
          {document.title}
        </span>
      </nav>

      {/* Document header */}
      <header className="border-border border-b pb-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="border-border bg-muted text-muted-foreground inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs font-medium">
            <FileText className="size-3.5" />
            {document.category}
          </span>

          {isComparison && (
            <span className="border-border text-foreground inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium">
              Component comparison
            </span>
          )}
        </div>

        <h1 className="text-foreground mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {document.title}
        </h1>

        <p className="text-muted-foreground mt-4 max-w-3xl text-sm leading-6">
          {isComparison
            ? "Review implementation differences, component behavior, design tokens, and unresolved findings."
            : "Project audit documentation and implementation findings."}
        </p>

        <div className="border-border bg-muted/30 mt-6 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-muted-foreground text-xs font-medium">
              SOURCE FILE
            </p>

            <p className="text-foreground mt-1 font-mono text-xs leading-5 break-all">
              docs/project-audit/{document.relativePath}
            </p>
          </div>

          <Link
            href="/audit/COMPONENT_COMPARISON_INDEX"
            className="text-muted-foreground hover:text-foreground inline-flex shrink-0 items-center gap-1.5 text-sm transition-colors"
          >
            Comparison index
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </header>

      {/* Markdown content */}
      <article className="min-w-0 py-8 sm:py-10">
        <AuditDocument content={content} />
      </article>

      {/* Footer navigation */}
      <footer className="border-border flex flex-col gap-4 border-t py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/audit"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          All audit documents
        </Link>

        <Link
          href="/audit/COMPONENT_COMPARISON_INDEX"
          className="text-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          Browse component comparisons
          <ArrowUpRight className="size-4" />
        </Link>
      </footer>
    </main>
  );
}
