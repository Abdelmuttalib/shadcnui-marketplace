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
      {/* <div className="absolute -left-10 h-full w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block md:w-8 lg:w-12" /> */}
      {children}
      {/* <div className="absolute -right-10 hidden h-full w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block md:w-8 lg:w-12" /> */}
    </div>
  );
}
