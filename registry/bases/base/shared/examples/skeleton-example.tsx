import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";

import { useDesignSystem } from "../components/design-system-provider";

export default function SkeletonExample() {
  return (
    <ExampleWrapper>
      <SkeletonAvatar />
      <SkeletonCard />
      <SkeletonText />
      <SkeletonForm />
      <SkeletonTable />
    </ExampleWrapper>
  );
}

function SkeletonAvatar() {
  const { Skeleton } = useDesignSystem();

  return (
    <Example title="Avatar">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </Example>
  );
}

function SkeletonCard() {
  const { Card, CardContent, CardHeader, Skeleton } = useDesignSystem();

  return (
    <Example title="Card">
      <Card className="w-full">
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-square w-full" />
        </CardContent>
      </Card>
    </Example>
  );
}

function SkeletonText() {
  const { Skeleton } = useDesignSystem();

  return (
    <Example title="Text">
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </Example>
  );
}

function SkeletonForm() {
  const { Skeleton } = useDesignSystem();

  return (
    <Example title="Form">
      <div className="flex w-full flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
    </Example>
  );
}

function SkeletonTable() {
  const { Skeleton } = useDesignSystem();

  return (
    <Example title="Table">
      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </Example>
  );
}
