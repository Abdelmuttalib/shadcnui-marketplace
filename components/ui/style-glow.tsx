import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

interface GlowProps
  extends React.ComponentProps<"div">, VariantProps<typeof glowVariants> {
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

function Glow({ className, variant, colors, ...props }: GlowProps) {
  const isCustom = Boolean(colors);

  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-40 sm:h-[512px] dark:opacity-100",
          !isCustom && "from-brand-foreground/50 to-brand-foreground/0",
          variant === "center" && "-translate-y-1/2"
        )}
        style={
          colors
            ? {
                background: `radial-gradient(ellipse, ${colors.primary ?? "transparent"} 0%, transparent 60%)`,
              }
            : undefined
        }
      />

      <div
        className={cn(
          "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-40 sm:h-[256px] dark:opacity-100",
          !isCustom && "from-brand/30 to-brand-foreground/0",
          variant === "center" && "-translate-y-1/2"
        )}
        style={
          colors
            ? {
                background: `radial-gradient(ellipse, ${colors.secondary ?? colors.primary ?? "transparent"} 0%, transparent 60%)`,
              }
            : undefined
        }
      />
    </div>
  );
}

export default Glow;
