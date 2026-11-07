export default function Loading() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="sticky top-0 z-10 flex items-center gap-2 border-b bg-background/70 px-3 py-2 backdrop-blur">
        <div className="hidden size-9 shrink-0 animate-pulse rounded-md bg-muted md:block" />
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="h-5 w-16 shrink-0 animate-pulse rounded-full bg-muted" />
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center">
            <div className="size-9 animate-pulse rounded-md bg-muted" />
            <div className="size-9 animate-pulse rounded-md bg-muted" />
            <div className="size-9 animate-pulse rounded-md bg-muted" />
          </div>
          <div className="flex items-center gap-0.5">
            <div className="size-9 animate-pulse rounded-md bg-muted" />
            <div className="size-9 animate-pulse rounded-md bg-muted" />
            <div className="size-9 animate-pulse rounded-md bg-muted" />
            <div className="size-9 animate-pulse rounded-md bg-muted" />
            <div className="size-9 animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </header>
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-muted/40 dark:bg-background" />
    </div>
  );
}
