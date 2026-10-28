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
        className="text-sm font-medium transition-colors hover:text-cb-primary"
      >
        Overview
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-cb-muted-foreground transition-colors hover:text-cb-primary"
      >
        Customers
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-cb-muted-foreground transition-colors hover:text-cb-primary"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-cb-muted-foreground transition-colors hover:text-cb-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
