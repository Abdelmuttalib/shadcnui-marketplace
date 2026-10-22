import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-wedges-ring focus-visible:ring-[3px] focus-visible:ring-wedges-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-wedges-destructive aria-invalid:ring-wedges-destructive/20 dark:aria-invalid:ring-wedges-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-wedges-primary text-wedges-primary-foreground [a]:hover:bg-wedges-primary/80",
        secondary:
          "bg-wedges-secondary text-wedges-secondary-foreground [a]:hover:bg-wedges-secondary/80",
        destructive:
          "bg-wedges-destructive/10 text-wedges-destructive focus-visible:ring-wedges-destructive/20 dark:bg-wedges-destructive/20 dark:focus-visible:ring-wedges-destructive/40 [a]:hover:bg-wedges-destructive/20",
        outline:
          "border-wedges-border text-wedges-foreground [a]:hover:bg-wedges-muted [a]:hover:text-wedges-muted-foreground",
        ghost:
          "hover:bg-wedges-muted hover:text-wedges-muted-foreground dark:hover:bg-wedges-muted/50",
        link: "text-wedges-primary underline-offset-4 hover:underline",
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
