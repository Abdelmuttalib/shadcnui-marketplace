import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-spctm-ring focus-visible:ring-[3px] focus-visible:ring-spctm-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-spctm-destructive aria-invalid:ring-spctm-destructive/20 dark:aria-invalid:ring-spctm-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-spctm-primary text-spctm-primary-foreground [a]:hover:bg-spctm-primary/80",
        secondary:
          "bg-spctm-secondary text-spctm-secondary-foreground [a]:hover:bg-spctm-secondary/80",
        destructive:
          "bg-spctm-destructive/10 text-spctm-destructive focus-visible:ring-spctm-destructive/20 dark:bg-spctm-destructive/20 dark:focus-visible:ring-spctm-destructive/40 [a]:hover:bg-spctm-destructive/20",
        outline:
          "border-spctm-border text-spctm-foreground [a]:hover:bg-spctm-muted [a]:hover:text-spctm-muted-foreground",
        ghost:
          "hover:bg-spctm-muted hover:text-spctm-muted-foreground dark:hover:bg-spctm-muted/50",
        link: "text-spctm-primary underline-offset-4 hover:underline",
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
