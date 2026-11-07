import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all  focus-visible:ring-[3px] focus-visible:ring-neon-ring has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-neon-destructive aria-invalid:ring-neon-destructive  [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-neon-primary text-neon-primary-foreground [a]:hover:bg-neon-primary/80",
        secondary:
          "bg-neon-secondary text-neon-secondary-foreground [a]:hover:bg-neon-secondary/80",
        destructive:
          "bg-neon-destructive/10 text-neon-destructive focus-visible:ring-neon-destructive/20 dark:bg-neon-destructive/20 dark:focus-visible:ring-neon-destructive/40 [a]:hover:bg-neon-destructive/20",
        outline:
          "border-neon-border text-neon-foreground [a]:hover:bg-neon-muted [a]:hover:text-neon-muted-foreground",
        ghost:
          "hover:bg-neon-muted hover:text-neon-muted-foreground dark:hover:bg-neon-muted/50",
        link: "text-neon-primary underline-offset-4 hover:underline",
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
