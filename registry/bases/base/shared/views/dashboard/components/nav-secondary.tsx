"use client";

import * as React from "react";
import { type Icon } from "@tabler/icons-react";

import { SidebarGroup } from "@/registry/bases/base/styles/moon/ui/sidebar";
import { useDesignSystem } from "../../../components/design-system-provider";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: Icon;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } = useDesignSystem();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                render={
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                }
              ></SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
