"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Label } from "@/registry/bases/base/styles/carbon-v4/ui/label";
import { SidebarInput } from "@/registry/bases/base/styles/carbon-v4/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Type to search..."
          className="h-8 pl-7"
        />
        <IconPlaceholder
          lucide="SearchIcon"
          tabler="IconSearch"
          hugeicons="SearchIcon"
          phosphor="MagnifyingGlassIcon"
          remixicon="RiSearchLine"
          className="size-4 pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none opacity-50"
        />
      </div>
    </form>
  );
}
