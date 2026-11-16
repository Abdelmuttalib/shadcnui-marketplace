"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  setMobileNavigationView,
  useMobileNavigationView,
} from "@/lib/mobile-navigation";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import LogoContextMenu from "./logo-context-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site-config";

interface NavFileItem {
  name: string;
  href: string;
  path?: string;
  external?: boolean;
}

const navFiles: NavFileItem[] = [
  { name: "readme", href: "/" },
  { name: "styles", href: "/styles" },
];

interface MobileMenuSection {
  name: string;
  href?: string;
  children?: NavFileItem[];
}

const mobileMenuSections: MobileMenuSection[] = [
  { name: "blocks", href: "/blocks" },
];

const glassIsland = cn(
  "relative isolate",
  "border border-white/20",
  "bg-white/[0.12] backdrop-blur-xl",
  "shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)]",
  "dark:border-white/[0.12]",
  "dark:bg-white/[0.045]",
  "dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.2)]",
  "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px",
  "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent"
);

const glassButton = cn(
  "group relative flex h-11 items-center justify-center",
  "rounded-none border border-transparent",
  "px-3.5 text-[13px] font-medium capitalize",
  "text-foreground/80",
  "transition-all duration-200",
  "hover:border-primary/30 hover:bg-white/[0.18] hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/20",
  "dark:hover:border-primary/25 dark:hover:bg-white/[0.08]"
);

export function StaggeredNavFiles() {
  const pathname = usePathname() || "/";
  const mobileNavigationView = useMobileNavigationView();

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const isDocs = pathname.startsWith("/docs");

  const isActive = (href: string) => pathname === href;

  const isActivePrefix = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setMobileNavigationView("closed");
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow =
      mobileNavigationView === "closed" ? "" : "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileNavigationView("closed");
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileNavigationView]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");

    const handler = () => {
      if (mql.matches) {
        setMobileNavigationView("closed");
      }
    };

    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <>
      {/* Desktop floating islands */}
      <div className="pointer-events-none fixed top-2 right-0 left-0 z-[99] hidden items-center justify-between px-4 lg:flex">
        {/* Left logo island */}
        <motion.div
          initial={{ opacity: 0, x: -16, y: -6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            glassIsland,
            "pointer-events-auto flex h-11 items-center"
          )}
        >
          <Link
            href="/"
            className="flex h-full items-center gap-2.5 px-3.5 transition-opacity hover:opacity-75"
          >
            <LogoContextMenu
              logo={<Icons.shadcnMarketplaceWordmark className="h-auto w-7" />}
            />

            <span className="text-foreground/85 text-[13px] font-medium tracking-tight whitespace-nowrap">
              shadcn marketplace
            </span>
          </Link>
        </motion.div>

        {/* Right navigation islands */}
        <motion.div
          initial={{ opacity: 0, x: 16, y: -6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.05,
            ease: "easeOut",
          }}
          className="pointer-events-auto flex items-center gap-2"
        >
          {/* Navigation links island */}
          <nav
            aria-label="Main navigation"
            className={cn(glassIsland, "flex h-11 items-center")}
          >
            {/* README and STYLES */}
            {navFiles.map((item, index) => {
              const active =
                isActive(item.path || item.href) ||
                (item.href === "/docs" && isDocs);

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.1 + index * 0.04,
                  }}
                  className="h-full"
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className={cn(
                      glassButton,
                      "h-full px-4",
                      active
                        ? "border-brand/20 bg-brand/[0.08] text-foreground dark:border-brand/25"
                        : ""
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Blocks */}
            <Link
              href="/blocks"
              className={cn(
                glassButton,
                "h-full px-4",
                isActivePrefix("/blocks")
                  ? "border-primary/20 bg-primary/[0.08] text-foreground dark:border-primary/25"
                  : ""
              )}
            >
              blocks
            </Link>

            {/* Divider */}

            {/* Theme toggle */}
            <button
              type="button"
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cn(
                "flex h-11 w-11 items-center justify-center",
                "text-foreground/70 transition-all duration-200",
                "hover:text-foreground hover:bg-white/[0.18]",
                "dark:hover:bg-white/[0.08]"
              )}
            >
              <HugeiconsIcon
                icon={isDark ? Sun03Icon : Moon02Icon}
                size={18}
                strokeWidth={1.7}
              />
            </button>

            {/* GitHub */}
            <a
              href={siteConfig.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={cn(
                "flex h-11 w-11 items-center justify-center",
                "text-foreground/70 transition-all duration-200",
                "hover:text-foreground hover:bg-white/[0.18]",
                "dark:hover:bg-white/[0.08]"
              )}
            >
              <Icons.gitHub className="size-4" />
            </a>
          </nav>

          {/* Customize island */}
          <Link
            href="/customize"
            className={cn(
              glassIsland,
              "group flex h-11 items-center gap-2 px-4",
              "text-foreground/90 text-[12px] font-medium",
              "transition-all duration-200",
              "hover:border-primary/30 hover:bg-white/[0.18]",
              "dark:hover:bg-white/[0.08]"
            )}
          >
            <span className="font-mono tracking-wider uppercase">
              Customize UI
            </span>

            <svg
              className="size-3 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 9L9 1M9 1H3M9 1V7"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Mobile header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28 }}
        className="bg-background/75 border-foreground/10 fixed top-0 right-0 left-0 z-[99] flex h-(--landing-topbar-height) items-center justify-between border-b backdrop-blur-xl lg:hidden"
      >
        <Link href="/" className="flex h-full items-center gap-1 px-4">
          <Icons.shadcnMarketplaceWordmark className="h-auto w-7" />
        </Link>

        <div className="flex items-center gap-1 pr-2">
          {isDocs && (
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new KeyboardEvent("keydown", {
                    key: "k",
                    metaKey: true,
                    bubbles: true,
                  })
                );
              }}
              aria-label="Search documentation"
              className="text-foreground/55 hover:text-foreground flex size-8 items-center justify-center transition-colors"
            >
              <Search className="size-4" />
            </button>
          )}

          <div className="flex size-8 items-center justify-center">
            <ThemeToggle />
          </div>

          <button
            type="button"
            data-mobile-navigation-trigger=""
            aria-label={
              mobileNavigationView === "closed" ? "Open menu" : "Close menu"
            }
            onClick={() => {
              setMobileNavigationView(
                mobileNavigationView === "closed"
                  ? isDocs
                    ? "docs"
                    : "site"
                  : "closed"
              );
            }}
            className="text-foreground/75 hover:text-foreground flex size-8 items-center justify-center transition-colors"
          >
            {mobileNavigationView !== "closed" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileNavigationView === "site" && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="bg-background/95 pointer-events-auto fixed inset-0 z-[98] w-full backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col pt-(--landing-topbar-height)">
              <div className="min-h-0 flex-1 overflow-y-auto">
                {isDocs && (
                  <button
                    type="button"
                    onClick={() => setMobileNavigationView("docs")}
                    className="text-foreground/60 border-foreground/10 hover:text-foreground flex w-full items-center gap-2 border-b px-5 py-3 transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
                      />
                    </svg>

                    <span className="font-mono text-[10px] tracking-wider uppercase">
                      Docs
                    </span>
                  </button>
                )}

                {navFiles.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileNavigationView("closed")}
                    className={cn(
                      "border-foreground/[0.08] flex items-center gap-2.5 border-b px-5 py-4",
                      "font-mono text-sm tracking-wider uppercase transition-colors",
                      isActive(item.path || item.href) ||
                        (item.href === "/docs" && isDocs)
                        ? "bg-foreground/[0.04] text-foreground"
                        : "text-foreground/65 hover:bg-foreground/[0.03]"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <Accordion
                  defaultValue={mobileMenuSections
                    .filter((section) =>
                      section.children?.some((item) =>
                        isActivePrefix(item.path || item.href)
                      )
                    )
                    .map((section) => section.name)}
                  className="w-full"
                >
                  {mobileMenuSections.map((section) => (
                    <AccordionItem
                      key={section.name}
                      value={section.name}
                      className="border-foreground/[0.08]"
                    >
                      {section.children ? (
                        <>
                          <AccordionTrigger className="text-foreground/70 hover:text-foreground px-5 py-4 font-mono text-sm tracking-wider uppercase hover:no-underline">
                            {section.name}
                          </AccordionTrigger>

                          <AccordionContent className="pb-0">
                            {section.children.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noreferrer" : undefined}
                                onClick={() =>
                                  setMobileNavigationView("closed")
                                }
                                className={cn(
                                  "flex items-center gap-2.5 py-3 pr-5 pl-9",
                                  "font-mono text-sm tracking-wider uppercase transition-colors",
                                  isActivePrefix(item.path || item.href)
                                    ? "bg-foreground/[0.04] text-foreground"
                                    : "text-foreground/55 hover:bg-foreground/[0.03] hover:text-foreground"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </AccordionContent>
                        </>
                      ) : (
                        <Link
                          href={section.href!}
                          onClick={() => setMobileNavigationView("closed")}
                          className={cn(
                            "flex items-center gap-2.5 px-5 py-4",
                            "font-mono text-sm tracking-wider uppercase transition-colors",
                            isActive(section.href!)
                              ? "bg-foreground/[0.04] text-foreground"
                              : "text-foreground/65 hover:text-foreground"
                          )}
                        >
                          {section.name}
                        </Link>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Mobile CTA */}
              <div className="border-foreground/10 bg-background/80 shrink-0 border-t px-5 py-4">
                <Link
                  href="/customize"
                  onClick={() => setMobileNavigationView("closed")}
                  className="bg-foreground text-background flex w-full items-center justify-center gap-2 py-3.5 font-mono text-xs tracking-wider uppercase transition-opacity hover:opacity-85"
                >
                  Customize Your UI
                  <svg
                    className="size-3 opacity-50"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
