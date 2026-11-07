import type { Metadata } from "next";
import { Activity, FileSearch, Layers3 } from "lucide-react";

import { AuditBrowser } from "@/components/audit/audit-browser";
import { getAuditDocuments } from "@/lib/audit-docs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Audit Explorer",
  description:
    "Browse component audits, compare design systems, and review implementation findings.",
};

export default async function AuditPage() {
  const documents = await getAuditDocuments();

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      {/* Page heading */}
      <header className="mb-9">
        <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
          <Activity className="size-4" />
          <span>Workspace</span>
          <span>/</span>
          <span className="text-foreground">Overview</span>
        </div>

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Audit Explorer
            </h1>

            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-6 sm:text-base">
              Explore component comparisons, inspect design differences, and
              navigate your project audit documentation from one place.
            </p>
          </div>

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <FileSearch className="size-4" />
            <span>
              {documents.length}{" "}
              {documents.length === 1 ? "document" : "documents"}
            </span>
          </div>
        </div>
      </header>

      {/* Quick navigation */}
      <section className="mb-10 grid gap-3 sm:grid-cols-2">
        <a
          href="/audit/COMPONENT_INVENTORY"
          className="group border-border bg-card hover:bg-accent/50 flex items-start gap-4 rounded-xl border p-5 transition-colors"
        >
          <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
            <Layers3 className="text-foreground size-5" />
          </div>

          <div className="min-w-0">
            <h2 className="group-hover:text-primary font-medium tracking-tight">
              Component inventory
            </h2>

            <p className="text-muted-foreground mt-1 text-sm leading-5">
              Browse the complete component catalog and locate individual
              audits.
            </p>
          </div>
        </a>

        <a
          href="/audit/COMPONENT_COMPARISON_INDEX"
          className="group border-border bg-card hover:bg-accent/50 flex items-start gap-4 rounded-xl border p-5 transition-colors"
        >
          <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
            <FileSearch className="text-foreground size-5" />
          </div>

          <div className="min-w-0">
            <h2 className="group-hover:text-primary font-medium tracking-tight">
              Component comparisons
            </h2>

            <p className="text-muted-foreground mt-1 text-sm leading-5">
              Find reports such as button-vs-default across Neon, Linear,
              Carbon, and other styles.
            </p>
          </div>
        </a>
      </section>

      {/* Existing document browser */}
      <section>
        <div className="mb-5">
          <h2 className="text-lg font-semibold tracking-tight">
            All documentation
          </h2>

          <p className="text-muted-foreground mt-1 text-sm">
            Browse and search your available audit documents.
          </p>
        </div>

        <AuditBrowser documents={documents} />
      </section>
    </main>
  );
}
