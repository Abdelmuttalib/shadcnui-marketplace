"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Label } from "@/registry/bases/base/styles/default-v4/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/registry/bases/base/styles/default-v4/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
          />
          <IconPlaceholder
            lucide="SearchIcon"
            tabler="IconSearch"
            hugeicons="SearchIcon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
            className="size-4 pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none opacity-50"
          />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
