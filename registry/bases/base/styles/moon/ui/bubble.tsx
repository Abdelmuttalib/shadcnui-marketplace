import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex min-w-0 flex-col gap-2", className)}
      {...props}
    />
  );
}

const bubbleVariants = cva(
  "group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "*:data-[slot=bubble-content]:bg-moon-primary *:data-[slot=bubble-content]:text-moon-primary-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-primary/80",
        secondary:
          "*:data-[slot=bubble-content]:bg-moon-secondary *:data-[slot=bubble-content]:text-moon-secondary-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--moon-secondary),var(--moon-foreground)_5%)]",
        muted:
          "*:data-[slot=bubble-content]:bg-moon-muted [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--moon-muted),var(--moon-foreground)_5%)]",
        tinted:
          "*:data-[slot=bubble-content]:bg-[oklch(from_var(--moon-primary)_0.93_calc(c*0.4)_h)] *:data-[slot=bubble-content]:text-moon-foreground dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--moon-primary)_0.3_calc(c*0.4)_h)] [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--moon-primary)_0.88_calc(c*0.5)_h)] dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--moon-primary)_0.35_calc(c*0.5)_h)]",
        outline:
          "*:data-[slot=bubble-content]:border-moon-border *:data-[slot=bubble-content]:bg-moon-background [&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-muted [&>[data-slot=bubble-content]:is(button,a):hover]:text-moon-foreground dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-input/30",
        ghost:
          "border-none *:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-muted [&>[data-slot=bubble-content]:is(button,a):hover]:text-moon-foreground dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-muted/50",
        destructive:
          "*:data-[slot=bubble-content]:bg-moon-destructive/10 *:data-[slot=bubble-content]:text-moon-destructive dark:*:data-[slot=bubble-content]:bg-moon-destructive/20 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-destructive/20 dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-moon-destructive/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end";
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  );
}

function BubbleContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "w-fit max-w-full min-w-0 overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm leading-relaxed wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-moon-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-moon-ring/50",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "bubble-content",
    },
  });
}

const bubbleReactionsVariants = cva(
  "absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1 rounded-full bg-moon-muted px-1.5 py-0.5 text-sm ring-3 ring-moon-card has-[button]:p-0",
  {
    variants: {
      side: {
        top: "top-0 -translate-y-3/4",
        bottom: "bottom-0 translate-y-3/4",
      },
      align: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
);

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end";
  side?: "top" | "bottom";
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  );
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions };
