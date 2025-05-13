"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/catalyst/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start border-t-2 border-transparent lg:border-l-2 lg:border-t-0",
            pathname === item.href
              ? "border-ring bg-catalyst-muted/50 hover:bg-catalyst-muted"
              : "hover:bg-catalyst-accent"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
