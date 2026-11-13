"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, FileText, ArrowUpRight } from "lucide-react";
import type { AuditDocument } from "@/lib/audit-docs";

type AuditBrowserProps = {
  documents: AuditDocument[];
};

export function AuditBrowser({ documents }: AuditBrowserProps) {
  const [query, setQuery] = useState("");

  const filteredDocuments = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return documents;
    }

    return documents.filter((document) =>
      [document.title, document.slug, document.relativePath, document.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [documents, query]);

  const categories = useMemo(
    () => new Set(documents.map((doc) => doc.category)),
    [documents]
  );

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          PROJECT AUDIT
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          Audit Explorer
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          Explore component comparisons, design systems, implementation
          differences, and project findings. All documents are read directly
          from your repository.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          {
            label: "Markdown documents",
            value: documents.length,
          },
          {
            label: "Document categories",
            value: categories.size,
          },
          {
            label: "Comparison reports",
            value: documents.filter((doc) => doc.slug.includes("vs-default"))
              .length,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </p>

            <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Browse documents
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Search across filenames, titles, and paths.
            </p>
          </div>

          <span className="text-sm text-zinc-500">
            {filteredDocuments.length} documents
          </span>
        </div>

        <div className="relative mt-5">
          <Search
            aria-hidden="true"
            className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search buttons, neon, matrices..."
            aria-label="Search audit documents"
            className="h-12 w-full rounded-xl border border-zinc-200 bg-white pr-4 pl-11 text-sm transition outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
          />
        </div>

        <div className="mt-5 divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {filteredDocuments.map((document) => (
            <Link
              key={document.slug}
              href={`/audit/${document.slug
                .split("/")
                .map(encodeURIComponent)
                .join("/")}`}
              className="group flex items-center gap-4 px-4 py-4 transition hover:bg-zinc-50 sm:px-5 dark:hover:bg-zinc-900/60"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                <FileText className="size-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {document.title}
                </p>

                <p className="mt-1 truncate font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {document.relativePath}
                </p>
              </div>

              <span className="hidden rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 sm:inline-flex dark:bg-zinc-900 dark:text-zinc-400">
                {document.category}
              </span>

              <ArrowUpRight className="size-4 shrink-0 text-zinc-400 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
            </Link>
          ))}

          {filteredDocuments.length === 0 && (
            <div className="px-6 py-16 text-center">
              <Search className="mx-auto size-8 text-zinc-400" />

              <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
                No documents found
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Try another search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
