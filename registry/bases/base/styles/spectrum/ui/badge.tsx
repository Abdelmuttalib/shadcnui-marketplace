import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-spectrum-ring focus-visible:ring-[3px] focus-visible:ring-spectrum-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-spectrum-destructive aria-invalid:ring-spectrum-destructive/20 dark:aria-invalid:ring-spectrum-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-spectrum-primary text-spectrum-primary-foreground [a]:hover:bg-spectrum-primary/80",
        secondary:
          "bg-spectrum-secondary text-spectrum-secondary-foreground [a]:hover:bg-spectrum-secondary/80",
        destructive:
          "bg-spectrum-destructive/10 text-spectrum-destructive focus-visible:ring-spectrum-destructive/20 dark:bg-spectrum-destructive/20 dark:focus-visible:ring-spectrum-destructive/40 [a]:hover:bg-spectrum-destructive/20",
        outline:
          "border-spectrum-border text-spectrum-foreground [a]:hover:bg-spectrum-muted [a]:hover:text-spectrum-muted-foreground",
        ghost:
          "hover:bg-spectrum-muted hover:text-spectrum-muted-foreground dark:hover:bg-spectrum-muted/50",
        link: "text-spectrum-primary underline-offset-4 hover:underline",
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
