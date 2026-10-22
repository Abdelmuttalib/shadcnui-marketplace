"use client";

import * as React from "react";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/bases/base/styles/libelle/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/bases/base/styles/libelle/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ReactNode;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton className="aria-expanded:bg-libelle-muted aria-expanded:text-libelle-foreground w-fit px-1.5" />
            }
          >
            <div className="bg-libelle-sidebar-primary text-libelle-sidebar-primary-foreground rounded-libelle-md flex aspect-square size-5 items-center justify-center">
              {activeTeam.logo}
            </div>
            <span className="truncate font-medium">{activeTeam.name}</span>
            <IconPlaceholder
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
              hugeicons="ArrowDown01Icon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              className="opacity-50"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="rounded-libelle-lg w-64"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-libelle-muted-foreground text-xs">
                Teams
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-xs border">
                    {team.logo}
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 p-2">
                <div className="bg-libelle-background rounded-libelle-md flex size-6 items-center justify-center border">
                  <IconPlaceholder
                    lucide="PlusIcon"
                    tabler="IconPlus"
                    hugeicons="PlusSignIcon"
                    phosphor="PlusIcon"
                    remixicon="RiAddLine"
                    className="size-4"
                  />
                </div>
                <div className="text-libelle-muted-foreground font-medium">
                  Add team
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
