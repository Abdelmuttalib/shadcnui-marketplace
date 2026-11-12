"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";

import { useDesignSystem } from "../../../components/design-system-provider";

export function NotFound() {
  const {
    Button,
    Card,
    CardContent,

    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    Kbd,
    EmptyTitle,

    InputGroup,
    InputGroupAddon,
    InputGroupInput,
  } = useDesignSystem();

  return (
    <Card>
      <CardContent>
        <Empty className="h-72">
          <EmptyHeader>
            <EmptyTitle>404 - Not Found</EmptyTitle>
            <EmptyDescription>
              The page you&apos;re looking for doesn&apos;t exist. Try searching
              for what you need below.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <InputGroup className="w-3/4">
              <InputGroupInput placeholder="Try searching for pages..." />
              <InputGroupAddon>
                <IconPlaceholder
                  lucide="SearchIcon"
                  tabler="IconSearch"
                  hugeicons="Search01Icon"
                  phosphor="MagnifyingGlassIcon"
                  remixicon="RiSearchLine"
                />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <Button variant="link">Go to homepage</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  );
}
