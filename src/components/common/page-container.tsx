import { cn } from "@/lib/utils";

// div props
type PageContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "xl";
};

export function PageContainer({
  size = "default",
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-2xl": size === "xl",
        },
        className
      )}
    >
      {/* <div className="absolute inset-0 h-full w-full bg-background/50"></div> */}
      {children}
    </div>
  );
}
