"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/snow/ui/button";

import { SettingsTab } from "../page";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: SettingsTab;
  }[];
  currentTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
}

export function SidebarNav({
  className,
  items,
  currentTab,
  onTabChange,
  ...props
}: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          key={item.href}
          variant={"ghost"}
          onClick={() =>
            onTabChange(item.title.toLocaleLowerCase() as SettingsTab)
          }
          className={cn(
            // buttonVariants({ variant: "ghost" }),
            "justify-start capitalize",
            currentTab === item.title.toLocaleLowerCase()
              ? "border-snow-ring bg-snow-muted/50 hover:bg-snow-muted"
              : "hover:bg-snow-accent"
          )}
        >
          {item.title}
        </Button>
      ))}
      {/* {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start border-t-2 border-transparent lg:border-l-2 lg:border-t-0",
            pathname === item.href
              ? "border-ring bg-snow-muted/50 hover:bg-snow-muted"
              : "hover:bg-snow-accent"
          )}
        >
          {item.title}
        </Link>
      ))} */}
    </nav>
  );
}
