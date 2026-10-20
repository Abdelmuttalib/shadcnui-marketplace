import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-linear-ring focus-visible:ring-[3px] focus-visible:ring-linear-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-linear-destructive aria-invalid:ring-linear-destructive/20 dark:aria-invalid:ring-linear-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-linear-primary text-linear-primary-foreground [a]:hover:bg-linear-primary/80",
        secondary:
          "bg-linear-secondary text-linear-secondary-foreground [a]:hover:bg-linear-secondary/80",
        destructive:
          "bg-linear-destructive/10 text-linear-destructive focus-visible:ring-linear-destructive/20 dark:bg-linear-destructive/20 dark:focus-visible:ring-linear-destructive/40 [a]:hover:bg-linear-destructive/20",
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
