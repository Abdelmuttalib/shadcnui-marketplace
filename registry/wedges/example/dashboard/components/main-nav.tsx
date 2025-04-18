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
        href="/example/dashboard"
        className="text-sm font-medium transition-colors hover:text-wedges-primary"
      >
        Overview
      </Link>
      <Link
        href="/example/dashboard"
        className="text-sm font-medium text-wedges-muted-foreground transition-colors hover:text-wedges-primary"
      >
        Customers
      </Link>
      <Link
        href="/example/dashboard"
        className="text-sm font-medium text-wedges-muted-foreground transition-colors hover:text-wedges-primary"
      >
        Products
      </Link>
      <Link
        href="/example/dashboard"
        className="text-sm font-medium text-wedges-muted-foreground transition-colors hover:text-wedges-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
