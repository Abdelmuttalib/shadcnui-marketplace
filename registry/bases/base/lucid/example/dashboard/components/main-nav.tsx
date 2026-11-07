import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="#"
        className="text-sm font-medium transition-colors hover:text-lucid-primary"
      >
        Overview
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-lucid-muted-foreground transition-colors hover:text-lucid-primary"
      >
        Customers
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-lucid-muted-foreground transition-colors hover:text-lucid-primary"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-lucid-muted-foreground transition-colors hover:text-lucid-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
