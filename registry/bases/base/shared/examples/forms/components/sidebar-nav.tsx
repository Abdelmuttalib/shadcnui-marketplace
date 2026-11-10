"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {} from "@/registry/bases/base/moon/ui/button";
import { useDesignSystem } from "../../../components/design-system-provider";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  const { buttonVariants } = useDesignSystem();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-y-1 lg:space-x-0",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            // @ts-expect-error: dynamic module export
            buttonVariants({ variant: "ghost" }),
            "justify-start border-t-2 border-transparent lg:border-t-0 lg:border-l-2",
            pathname === item.href
              ? "border-ring bg-muted/50 hover:bg-muted"
              : "hover:bg-accent"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
