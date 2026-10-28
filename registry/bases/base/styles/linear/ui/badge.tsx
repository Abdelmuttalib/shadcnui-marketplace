import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-linear-border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-linear-ring has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-linear-destructive [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-linear-primary/20 border-linear-primary/10 text-linear-primary [a]:hover:bg-linear-primary/30",
        secondary:
          "bg-linear-secondary/70 border-linear-secondary text-linear-foreground/80 [a]:hover:bg-linear-secondary/80",
        destructive:
          "bg-linear-destructive/15 text-linear-destructive border-linear-destructive/10 [a]:hover:bg-linear-destructive/20",
        outline:
          "border-linear-border text-linear-foreground [a]:hover:bg-linear-muted [a]:hover:text-linear-muted-foreground",
        ghost:
          "hover:bg-linear-muted hover:text-linear-muted-foreground dark:hover:bg-linear-muted/50",
        link: "text-linear-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
