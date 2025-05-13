"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PageContainer } from "@/components/common/page-container";
import { siteConfig } from "@/config";
import { cn } from "@/utils/cn";

function GradientBackground() {
  return (
    <>
      {/* <div
        className="fixed inset-x-0 -top-40 -z-40 transform-gpu overflow-hidden opacity-20 blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#2449ec] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}

      <div
        className="fixed inset-x-0 top-[calc(30%)] -z-40 transform-gpu overflow-hidden opacity-20  blur-3xl sm:top-[calc(30%)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-[#2449ec] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </>
  );
}

function getDocsComponentPath(component: string) {
  return `${siteConfig.paths.docs}${siteConfig.paths.components}/${component}`;
}

const docsComponentsPaths = Object.entries(siteConfig.paths.components)
  .map(([key, value]) =>
    key === "index"
      ? null
      : {
          title: key.replace("-", " "),
          href: value,
        }
  )
  .filter(Boolean);

const docsLayoutLinks = [
  {
    section: "Getting Started",
    links: [
      {
        title: "Introduction",
        href: "/docs#introduction",
      },
      {
        title: "Installation",
        href: "/docs#installation",
      },
      {
        title: "Components",
        href: "/docs#components",
      },
      {
        title: "Guides",
        href: "/docs#guides",
      },
      {
        title: "CSS",
        href: "/docs#css",
      },
    ],
  },
  {
    section: "Components",
    links: docsComponentsPaths,
  },
];

function DocsLayoutSidebarLink({
  href,
  title,
  active,
}: {
  href: string;
  title: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      // href={href}
      className={cn(
        "text-foreground-subtle hover:bg-base-25 hover:border-primary-300 block rounded rounded-l-none border-l-2 px-4 py-2.5 text-sm capitalize hover:text-foreground dark:hover:bg-card",
        {
          "text-foreground-light bg-base-25 border-primary font-medium dark:bg-card":
            active,
        }
      )}
      // className="text-sm rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {title}
    </Link>
  );
}

const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/components", title: "Components" },
  { href: "/docs", title: "Docs" },
  // { href: "/blog", title: "Blog" },
  // { href: "/about", title: "About" },
];

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
      <div className="flex-1 pb-72 pt-12">
        <PageContainer className="relative flex h-full flex-1 gap-x-8">
          <DocsLayoutSidebar className="fixed pb-72" />
          <DocsLayoutMain className="mx-auto ml-56 mr-10 max-w-2xl">
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
        {docsLayoutLinks.map((link, i) => (
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
                  <li key={link.href}>
                    <DocsLayoutSidebarLink
                      {...link}
                      active={pathname === `/docs${link.href}`}
                      // active={router.asPath === `/docs${link.href}`}
                    />
                  </li>
                ) : null
              )}
            </ul>
          </>
        ))}
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
