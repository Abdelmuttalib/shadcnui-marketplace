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
              "text-muted-foreground hover:text-foreground rounded-md px-2 py-1 text-sm",
              {
                "text-foreground border font-medium": pathname === link.href,
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
