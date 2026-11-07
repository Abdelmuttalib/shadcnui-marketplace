import { cn } from "@/lib/utils";

// div props
type PageContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function PreviewContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
