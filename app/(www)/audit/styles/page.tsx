import Link from "next/link";
import { ArrowRight, Palette } from "lucide-react";

import { getAuditStyles } from "@/lib/audit-docs";

export const metadata = {
  title: "Style Comparisons | Audit Explorer",
  description: "Browse component comparisons across design styles.",
};

export default async function AuditStylesPage() {
  const styles = await getAuditStyles();

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="border-border mb-10 border-b pb-8">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Palette className="size-4" />
          Audit Explorer
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Style comparisons
        </h1>

        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-6">
          Explore how each design style compares with the default
          implementation. Select a style to browse all its component comparisons
          on one page.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {styles.map((style) => (
          <Link
            key={style.slug}
            href={`/audit/styles/${style.slug}`}
            className="group border-border bg-card hover:border-primary/40 rounded-xl border p-5 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                <Palette className="text-muted-foreground size-5" />
              </div>

              <ArrowRight className="text-muted-foreground size-4 transition-transform group-hover:translate-x-1" />
            </div>

            <h2 className="mt-5 font-semibold tracking-tight">
              {style.title} vs Default
            </h2>

            <p className="text-muted-foreground mt-2 text-sm">
              {style.count} component comparisons
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
