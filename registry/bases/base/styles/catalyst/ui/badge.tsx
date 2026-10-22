import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-catalyst-ring focus-visible:ring-[3px] focus-visible:ring-catalyst-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-catalyst-destructive aria-invalid:ring-catalyst-destructive/20 dark:aria-invalid:ring-catalyst-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-catalyst-primary text-catalyst-primary-foreground [a]:hover:bg-catalyst-primary/80",
        secondary:
          "bg-catalyst-secondary text-catalyst-secondary-foreground [a]:hover:bg-catalyst-secondary/80",
        destructive:
          "bg-catalyst-destructive/10 text-catalyst-destructive focus-visible:ring-catalyst-destructive/20 dark:bg-catalyst-destructive/20 dark:focus-visible:ring-catalyst-destructive/40 [a]:hover:bg-catalyst-destructive/20",
        outline:
          "border-catalyst-border text-catalyst-foreground [a]:hover:bg-catalyst-muted [a]:hover:text-catalyst-muted-foreground",
        ghost:
          "hover:bg-catalyst-muted hover:text-catalyst-muted-foreground dark:hover:bg-catalyst-muted/50",
        link: "text-catalyst-primary underline-offset-4 hover:underline",
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
