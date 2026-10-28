import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-snow-ring focus-visible:ring-[3px] focus-visible:ring-snow-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-snow-destructive aria-invalid:ring-snow-destructive/20 dark:aria-invalid:ring-snow-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-snow-primary text-snow-primary-foreground [a]:hover:bg-snow-primary/80",
        secondary:
          "bg-snow-secondary text-snow-secondary-foreground [a]:hover:bg-snow-secondary/80",
        destructive:
          "bg-snow-destructive/10 text-snow-destructive focus-visible:ring-snow-destructive/20 dark:bg-snow-destructive/20 dark:focus-visible:ring-snow-destructive/40 [a]:hover:bg-snow-destructive/20",
        outline:
          "border-snow-border text-snow-foreground [a]:hover:bg-snow-muted [a]:hover:text-snow-muted-foreground",
        ghost:
          "hover:bg-snow-muted hover:text-snow-muted-foreground dark:hover:bg-snow-muted/50",
        link: "text-snow-primary underline-offset-4 hover:underline",
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
