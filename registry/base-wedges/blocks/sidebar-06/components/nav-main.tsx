"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/styles/wedges/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/bases/base/styles/wedges/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <DropdownMenu key={item.title}>
            <SidebarMenuItem>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton className="aria-expanded:bg-wedges-muted" />
                }
              >
                {item.title}{" "}
                <IconPlaceholder
                  lucide="MoreHorizontalIcon"
                  tabler="IconDots"
                  hugeicons="MoreHorizontalCircle01Icon"
                  phosphor="DotsThreeOutlineIcon"
                  remixicon="RiMoreLine"
                  className="ml-auto"
                />
              </DropdownMenuTrigger>
              {item.items?.length ? (
                <DropdownMenuContent
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                  className="rounded-wedges-lg min-w-56"
                >
                  {item.items.map((item) => (
                    <DropdownMenuItem
                      key={item.title}
                      render={<a href={item.url} />}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              ) : null}
            </SidebarMenuItem>
          </DropdownMenu>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
