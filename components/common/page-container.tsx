import { cn } from "@/lib/utils";

// div props
type PageContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "xl" | "full" | "sm" | "xs";
};

export function PageContainer({
  size = "default",
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-2xl": size === "xl",
          "max-w-full": size === "full",
          "max-w-4xl": size === "sm",
          "max-w-2xl": size === "xs",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
