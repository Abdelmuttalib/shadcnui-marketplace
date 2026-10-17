import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-cb-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-cb-ring focus-visible:ring-[3px] focus-visible:border-cb-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-cb-destructive aria-invalid:border-cb-destructive/20 dark:aria-invalid:border-cb-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-cb-primary bg-cb-primary-foreground [a]:hover:bg-cb-primary/80",
        secondary:
          "bg-cb-secondary bg-cb-secondary-foreground [a]:hover:bg-cb-secondary/80",
        destructive:
          "bg-cb-destructive/10 bg-cb-destructive focus-visible:bg-cb-destructive/20 dark:bg-cb-destructive/20 dark:focus-visible:bg-cb-destructive/40 [a]:hover:bg-cb-destructive/20",
        outline:
          "border-cb-border border-cb-foreground [a]:hover:border-cb-muted [a]:hover:border-cb-muted-foreground",
        ghost:
          "hover:bg-cb-muted hover:bg-cb-muted-foreground dark:hover:bg-cb-muted/50",
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
