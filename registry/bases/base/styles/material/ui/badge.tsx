import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-material-md px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-all focus-visible:ring-1 focus-visible:ring-material-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:ring-material-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-material-primary/15 text-material-primary [a]:hover:bg-material-primary/80 [a]:hover:text-material-primary-foreground hover:bg-material-primary/25 hover:text-material-primary",
        secondary:
          "bg-material-secondary/15 text-material-secondary-foreground [a]:hover:bg-material-secondary/80 hover:bg-material-secondary/25 hover:text-material-secondary-foreground",
        destructive:
          "bg-material-destructive/10 text-material-destructive focus-visible:ring-material-destructive/20 [a]:hover:bg-material-destructive/20 hover:bg-material-destructive/20 hover:text-material-destructive",
        outline:
          "text-material-foreground [a]:hover:bg-material-muted [a]:hover:text-material-muted-foreground",
        ghost:
          "hover:bg-material-muted hover:text-material-muted-foreground dark:hover:bg-material-muted/50",
        link: "text-material-primary underline-offset-4 hover:underline",
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
