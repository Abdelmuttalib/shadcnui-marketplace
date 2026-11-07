import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-t-[4px] border-b border-b-libelle-primary bg-libelle-input/50 px-3 py-2 text-base ring-offset-libelle-background placeholder:text-libelle-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-libelle-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
