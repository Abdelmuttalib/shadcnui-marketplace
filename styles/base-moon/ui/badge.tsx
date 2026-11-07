import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-moon-ring focus-visible:ring-[3px] focus-visible:ring-moon-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-moon-destructive aria-invalid:ring-moon-destructive/20 dark:aria-invalid:ring-moon-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-moon-primary text-moon-primary-foreground [a]:hover:bg-moon-primary/80",
        secondary:
          "bg-moon-secondary text-moon-secondary-foreground [a]:hover:bg-moon-secondary/80",
        destructive:
          "bg-moon-destructive/10 text-moon-destructive focus-visible:ring-moon-destructive/20 dark:bg-moon-destructive/20 dark:focus-visible:ring-moon-destructive/40 [a]:hover:bg-moon-destructive/20",
        outline:
          "border-moon-border text-moon-foreground [a]:hover:bg-moon-muted [a]:hover:text-moon-muted-foreground",
        ghost:
          "hover:bg-moon-muted hover:text-moon-muted-foreground dark:hover:bg-moon-muted/50",
        link: "text-moon-primary underline-offset-4 hover:underline",
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
