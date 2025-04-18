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
        className="hover:text-snow-primary text-sm font-medium transition-colors"
      >
        Overview
      </Link>
      <Link
        href="#"
        className="text-snow-muted-foreground hover:text-snow-primary text-sm font-medium transition-colors"
      >
        Customers
      </Link>
      <Link
        href="#"
        className="text-snow-muted-foreground hover:text-snow-primary text-sm font-medium transition-colors"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-snow-muted-foreground hover:text-snow-primary text-sm font-medium transition-colors"
      >
        Settings
      </Link>
    </nav>
  );
}
