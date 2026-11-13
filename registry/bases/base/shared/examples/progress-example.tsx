"use client";

import * as React from "react";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";

import { useDesignSystem } from "../components/design-system-provider";

export default function ProgressExample() {
  return (
    <ExampleWrapper>
      <ProgressValues />
      <ProgressWithLabel />
      <ProgressControlled />
      <FileUploadList />
    </ExampleWrapper>
  );
}

function ProgressValues() {
  const { Progress } = useDesignSystem();

  return (
    <Example title="Progress Bar">
      <div className="flex w-full flex-col gap-4">
        <Progress value={0} />
        <Progress value={25} className="w-full" />
        <Progress value={50} />
        <Progress value={75} />
        <Progress value={100} />
      </div>
    </Example>
  );
}

function ProgressWithLabel() {
  const { Progress, ProgressLabel, ProgressValue } = useDesignSystem();

  return (
    <Example title="With Label">
      <Progress value={56}>
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </Example>
  );
}

function ProgressControlled() {
  const [value, setValue] = React.useState(50);

  const { Progress, Slider } = useDesignSystem();

  return (
    <Example title="Controlled">
      <div className="flex w-full flex-col gap-4">
        <Progress value={value} className="w-full" />
        <Slider
          value={value}
          onValueChange={(value: any) => setValue(value as number)}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </Example>
  );
}

function FileUploadList() {
  const files = React.useMemo(
    () => [
      {
        id: "1",
        name: "document.pdf",
        progress: 45,
        timeRemaining: "2m 30s",
      },
      {
        id: "2",
        name: "presentation.pptx",
        progress: 78,
        timeRemaining: "45s",
      },
      {
        id: "3",
        name: "spreadsheet.xlsx",
        progress: 12,
        timeRemaining: "5m 12s",
      },
      {
        id: "4",
        name: "image.jpg",
        progress: 100,
        timeRemaining: "Complete",
      },
    ],
    []
  );

  const {
    Item,
    ItemActions,
    ItemContent,
    ItemGroup,
    ItemMedia,
    ItemTitle,
    Progress,
  } = useDesignSystem();

  return (
    <Example title="File Upload List">
      <ItemGroup>
        {files.map((file) => (
          <Item key={file.id} size="xs" className="px-0">
            <ItemMedia variant="icon">
              <IconPlaceholder
                lucide="FileIcon"
                tabler="IconFile"
                hugeicons="FileIcon"
                phosphor="FileIcon"
                remixicon="RiFileLine"
                className="size-5"
              />
            </ItemMedia>
            <ItemContent className="inline-block truncate">
              <ItemTitle className="inline">{file.name}</ItemTitle>
            </ItemContent>
            <ItemContent>
              <Progress value={file.progress} className="w-32" />
            </ItemContent>
            <ItemActions className="w-16 justify-end">
              <span className="text-muted-foreground text-sm">
                {file.timeRemaining}
              </span>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </Example>
  );
}
