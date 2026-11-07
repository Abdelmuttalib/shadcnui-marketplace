import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-snow-md border border-snow-input bg-snow-background px-3.5 py-3 text-base ring-offset-snow-background placeholder:text-snow-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ring  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
