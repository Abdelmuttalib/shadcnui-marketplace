import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  FileSearch,
  Layers3,
  Palette,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    title: "WORKSPACE",
    links: [
      {
        label: "Overview",
        href: "/audit",
        icon: Activity,
        description: "Audit dashboard",
      },
    ],
  },
  {
    title: "COMPONENTS",
    links: [
      {
        label: "Component inventory",
        href: "/audit/COMPONENT_INVENTORY",
        icon: Boxes,
        description: "All audited components",
      },
      {
        label: "Comparison index",
        href: "/audit/COMPONENT_COMPARISON_INDEX",
        icon: Layers3,
        description: "Compare styles against default",
      },
    ],
  },

  {
    title: "STYLES",
    links: [
      {
        label: "All styles",
        href: "/audit/styles",
        icon: Palette,
      },
      {
        label: "Carbon",
        href: "/audit/styles/carbon",
        icon: Palette,
      },
      {
        label: "Catalyst",
        href: "/audit/styles/catalyst",
        icon: Palette,
      },
      {
        label: "Libelle",
        href: "/audit/styles/libelle",
        icon: Palette,
      },
      {
        label: "Linear",
        href: "/audit/styles/linear",
        icon: Palette,
      },
      {
        label: "Lucid",
        href: "/audit/styles/lucid",
        icon: Palette,
      },
      {
        label: "Material",
        href: "/audit/styles/material",
        icon: Palette,
      },
      {
        label: "Moon",
        href: "/audit/styles/moon",
        icon: Palette,
      },
      {
        label: "Neon",
        href: "/audit/styles/neon",
        icon: Palette,
      },
      {
        label: "Snow",
        href: "/audit/styles/snow",
        icon: Palette,
      },
      {
        label: "Spectrum",
        href: "/audit/styles/spectrum",
        icon: Palette,
      },
      {
        label: "Wedges",
        href: "/audit/styles/wedges",
        icon: Palette,
      },
    ],
  },

  {
    title: "PROJECT",
    links: [
      {
        label: "Project overview",
        href: "/audit/PROJECT_OVERVIEW",
        icon: BookOpen,
        description: "Project documentation",
      },
      {
        label: "Audit progress",
        href: "/audit/project-audit/AUDIT_PROGRESS",
        icon: CheckCircle2,
        description: "Progress and completion",
      },
    ],
  },
  {
    title: "REFERENCE",
    links: [
      {
        label: "Methodology",
        href: "/audit/METHODOLOGY",
        icon: FileSearch,
        description: "How audits are performed",
      },
      {
        label: "Design exceptions",
        href: "/audit/DESIGN_EXCEPTIONS",
        icon: ShieldCheck,
        description: "Exceptions and decisions",
      },
    ],
  },
];

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Top navigation */}
      <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/audit" className="flex min-w-0 items-center gap-3">
            <div className="bg-primary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
              <Layers3 className="size-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight">
                Audit Explorer
              </p>
              <p className="text-muted-foreground text-xs">
                Project documentation
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="border-border text-muted-foreground hidden items-center gap-2 rounded-md border px-3 py-1.5 text-xs sm:flex">
              <Palette className="size-3.5" />
              <span>Design system audits</span>
            </div>

            <Link
              href="/"
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors"
            >
              <span className="hidden sm:inline">Back to website</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-[1800px] md:grid md:grid-cols-[250px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="border-border bg-muted/20 hidden border-r md:block">
          <nav className="sticky top-16 flex max-h-[calc(100vh-4rem)] flex-col gap-8 overflow-y-auto px-4 py-7">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-muted-foreground mb-3 px-3 text-[11px] font-semibold tracking-wider">
                  {section.title}
                </h2>

                <div className="space-y-1">
                  {section.links.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        title={item.description}
                        className="group text-muted-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
                      >
                        <Icon className="size-4 shrink-0" />

                        <span className="min-w-0 flex-1">{item.label}</span>

                        <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* Source information */}
            <div className="border-border bg-card mt-auto rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <FileSearch className="text-muted-foreground size-4" />
                <p className="text-sm font-medium">Documentation source</p>
              </div>

              <p className="text-muted-foreground mt-3 font-mono text-xs leading-5 break-all">
                docs/project-audit/
              </p>

              <p className="text-muted-foreground mt-3 text-xs leading-5">
                Markdown reports are rendered directly from your repository.
              </p>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
