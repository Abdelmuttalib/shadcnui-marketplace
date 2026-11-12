"use client";

import { usePathname } from "next/navigation";

import { PageContainer } from "@/components/common/page-container";
import { cn } from "@/utils/cn";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col overflow-y-auto pb-10">
      {/* <div className="relative">
        <GradientBackground />
      </div> */}
      {/* <header className="border-b sticky top-0 z-40 block bg-background/[0.3] backdrop-blur-md">
        <div className="w-full h-14">
          <DocsLayoutContainer className="h-full flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="font-medium tracking-tight text-lg rounded-[2px] bg-background text-white">
                shadcn.style
              </h1>
            </div>
            <div className="flex items-center text-sm gap-x-4">
              {headerNavLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </DocsLayoutContainer>
        </div>
      </header> */}
      <div className="flex-1 pt-12 pb-72">
        <PageContainer className="relative flex h-full flex-1 gap-x-8">
          <DocsLayoutSidebar className="fixed pb-72" />
          <DocsLayoutMain className="mx-auto mr-10 ml-56 max-w-2xl">
            {children}
          </DocsLayoutMain>
          {/* <DocsLayoutSidebarReferrer className="fixed bg-red-300">
            <p>
              <a href="#ff" className="text-primary underline">
                Edit this page on GitHub
              </a>
            </p>
          </DocsLayoutSidebarReferrer> */}
        </PageContainer>
      </div>
    </div>
  );
}

function DocsLayoutSidebar({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "scrollbar-hide mr-10 h-full max-h-[45rem] w-44 overflow-auto",
        "hide-scrollbar",
        className
      )}
    >
      <nav className="pb-40">
        {/* {docsLayoutLinks.map((link, i) => (
          <>
            <h5
              key={link.section}
              className={`text-sm font-semibold ${i !== 0 ? "mt-5" : ""}`}
            >
              {link.section}
            </h5>
            <ul key={link.section + i} className="mt-3">
              {link.links.map((link) =>
                link ? (
                  <li key={link.href as any}>
                    <Link href={link.href as any} />
                  </li>
                ) : null
              )}
            </ul>
          </>
        ))} */}
      </nav>
    </aside>
  );
}

function DocsLayoutMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("h-full min-h-screen flex-1", className)}>
      {children}
    </main>
  );
}

function DocsLayoutSidebarReferrer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-44 text-sm text-gray-500", className)}>
      {children}
    </div>
  );
}

function DocsLayoutContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", className)}>{children}</div>
  );
}
