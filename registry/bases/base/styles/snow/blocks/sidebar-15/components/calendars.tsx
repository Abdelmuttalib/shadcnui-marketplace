"use client";

import * as React from "react";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/styles/snow/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/registry/bases/base/styles/snow/ui/sidebar";

export function Calendars({
  calendars,
}: {
  calendars: {
    name: string;
    items: string[];
  }[];
}) {
  return (
    <>
      {calendars.map((calendar, index) => (
        <React.Fragment key={calendar.name}>
          <SidebarGroup key={calendar.name}>
            <Collapsible
              defaultOpen={index === 0}
              className="group/collapsible"
            >
              <SidebarGroupLabel
                className="group/label text-snow-sidebar-foreground hover:bg-snow-sidebar-accent hover:text-snow-sidebar-accent-foreground w-full text-sm"
                render={<CollapsibleTrigger />}
              >
                {calendar.name}{" "}
                <IconPlaceholder
                  lucide="ChevronRightIcon"
                  tabler="IconChevronRight"
                  hugeicons="ArrowRight01Icon"
                  phosphor="CaretRightIcon"
                  remixicon="RiArrowRightSLine"
                  className="ml-auto transition-transform group-data-open/collapsible:rotate-90"
                />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {calendar.items.map((item, index) => (
                      <SidebarMenuItem key={item}>
                        <SidebarMenuButton>
                          <div
                            data-active={index < 2}
                            className="group/calendar-item border-snow-sidebar-border text-snow-sidebar-primary-foreground data-[active=true]:border-snow-sidebar-primary data-[active=true]:bg-snow-sidebar-primary flex aspect-square size-4 shrink-0 items-center justify-center rounded-xs border"
                          >
                            <IconPlaceholder
                              lucide="CheckIcon"
                              tabler="IconCheck"
                              hugeicons="Tick02Icon"
                              phosphor="CheckIcon"
                              remixicon="RiCheckLine"
                              className="hidden size-3 group-data-[active=true]/calendar-item:block"
                            />
                          </div>
                          {item}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarSeparator className="mx-0" />
        </React.Fragment>
      ))}
    </>
  );
}
