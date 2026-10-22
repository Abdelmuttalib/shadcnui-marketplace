"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { SearchForm } from "@/registry/bases/base/styles/lucid/blocks/sidebar-16/components/search-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/styles/lucid/ui/breadcrumb";
import { Button } from "@/registry/bases/base/styles/lucid/ui/button";
import { Separator } from "@/registry/bases/base/styles/lucid/ui/separator";
import { useSidebar } from "@/registry/bases/base/styles/lucid/ui/sidebar";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-lucid-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <IconPlaceholder
            lucide="PanelLeftIcon"
            tabler="IconLayoutSidebar"
            hugeicons="SidebarLeftIcon"
            phosphor="SidebarIcon"
            remixicon="RiLayoutLeftLine"
          />
        </Button>
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  );
}
