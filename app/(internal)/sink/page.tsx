import Link from "next/link";

import { styles } from "./lib/styles";

export default function SinkIndexPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-6 md:p-10">
      <header className="space-y-3">
        <p className="text-muted-foreground text-sm font-medium">
          Internal Tools / Registry
        </p>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Sink Style Explorer
        </h1>

        <p className="text-muted-foreground max-w-2xl">
          Browse the available design systems and compare their new
          implementations with their legacy counterparts.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-md border px-3 py-1.5 text-sm">
            {styles.length} styles
          </span>

          <span className="rounded-md border px-3 py-1.5 text-sm">
            New + Legacy
          </span>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Available styles</h2>

          <span className="text-muted-foreground text-sm">
            {styles.length} implementations families
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style) => (
            <article
              key={style.name}
              className="group bg-card text-card-foreground hover:border-primary/50 flex flex-col rounded-xl border p-5 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-muted/50 flex size-12 shrink-0 items-center justify-center rounded-lg border p-2">
                  {style.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{style.title}</h3>

                  <p className="text-muted-foreground mt-1 text-xs">
                    {style.name}
                  </p>
                </div>

                <span className="text-muted-foreground rounded-md border px-2 py-1 text-xs">
                  {style.defaultRadius}
                </span>
              </div>

              <p className="text-muted-foreground mt-4 flex-1 text-sm leading-relaxed">
                {style.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <Link
                  href={`/sink/${style.name}`}
                  className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-opacity hover:opacity-90"
                >
                  View new
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href={`/sink/${style.name}/legacy`}
                  className="hover:bg-accent inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-colors"
                >
                  View legacy
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
