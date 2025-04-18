"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

export function MainNavLinks() {
  const links = siteConfig.mainNavLinks;

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={cn(
              "rounded-md px-2 py-1 text-sm text-muted-foreground hover:text-foreground",
              {
                "border bg-accent text-foreground": pathname === link.href,
              }
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
