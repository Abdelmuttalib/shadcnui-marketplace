import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-cb-ring  has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-cb-destructive [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-cb-primary/10 text-cb-primary [a]:hover:bg-cb-primary/80 dark:bg-cb-primary/10 border-cb-primary/10",
        secondary:
          "bg-cb-secondary/50 text-cb-foreground/80 border-cb-secondary [a]:hover:bg-cb-secondary/80 dark:text-cb-foreground/80",
        destructive:
          "bg-cb-destructive/10 text-cb-destructive border-cb-destructive/10 dark:bg-cb-destructive/20 [a]:hover:bg-cb-destructive/20",
        outline:
          "text-cb-foreground [a]:hover:bg-cb-muted [a]:hover:text-cb-muted-foreground",
        ghost:
          "hover:bg-cb-muted hover:text-cb-muted-foreground dark:hover:bg-cb-muted/50",
        link: "text-cb-primary underline-offset-4 hover:underline",
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
