export default function Loading() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="bg-background/70 sticky top-0 z-10 flex items-center gap-2 border-b px-3 py-2 backdrop-blur">
        <div className="bg-muted hidden size-9 shrink-0 animate-pulse rounded-md md:block" />
        <div className="bg-muted h-4 w-32 animate-pulse rounded" />
        <div className="bg-muted h-5 w-16 shrink-0 animate-pulse rounded-full" />
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center">
            <div className="bg-muted size-9 animate-pulse rounded-md" />
            <div className="bg-muted size-9 animate-pulse rounded-md" />
            <div className="bg-muted size-9 animate-pulse rounded-md" />
          </div>
          <div className="flex items-center gap-0.5">
            <div className="bg-muted size-9 animate-pulse rounded-md" />
            <div className="bg-muted size-9 animate-pulse rounded-md" />
            <div className="bg-muted size-9 animate-pulse rounded-md" />
            <div className="bg-muted size-9 animate-pulse rounded-md" />
            <div className="bg-muted size-9 animate-pulse rounded-md" />
          </div>
        </div>
      </header>
      <div className="bg-muted/40 dark:bg-background relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden" />
    </div>
  );
}
