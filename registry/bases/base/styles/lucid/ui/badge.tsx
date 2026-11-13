import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all  focus-visible:ring-[3px] focus-visible:outline-lucid-ring has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-lucid-destructive aria-invalid:ring-lucid-destructive/20  [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-lucid-primary text-lucid-primary-foreground [a]:hover:bg-lucid-primary/80",
        secondary:
          "bg-lucid-secondary text-lucid-secondary-foreground [a]:hover:bg-lucid-secondary/80",
        destructive:
          "bg-lucid-destructive/10 text-lucid-destructive focus-visible:outline-lucid-destructive/20 dark:bg-lucid-destructive/20 dark:focus-visible:ring-lucid-destructive/40 [a]:hover:bg-lucid-destructive/20",
        outline:
          "border-lucid-border text-lucid-foreground [a]:hover:bg-lucid-muted [a]:hover:text-lucid-muted-foreground",
        ghost:
          "hover:bg-lucid-muted hover:text-lucid-muted-foreground dark:hover:bg-lucid-muted/50",
        link: "text-lucid-primary underline-offset-4 hover:underline",
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
