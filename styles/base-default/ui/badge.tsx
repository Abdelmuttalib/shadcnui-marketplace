import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-dft-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-dft-ring focus-visible:ring-[3px] focus-visible:border-dft-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-dft-destructive aria-invalid:border-dft-destructive/20 dark:aria-invalid:border-dft-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-dft-primary text-dft-primary-foreground [a]:hover:bg-dft-primary/80",
        secondary:
          "bg-dft-secondary text-dft-secondary-foreground [a]:hover:bg-dft-secondary/80",
        destructive:
          "bg-dft-destructive/10 bg-dft-destructive focus-visible:bg-dft-destructive/20 dark:bg-dft-destructive/20 dark:focus-visible:bg-dft-destructive/40 [a]:hover:bg-dft-destructive/20",
        outline:
          "border-dft-border border-dft-foreground [a]:hover:border-dft-muted [a]:hover:border-dft-muted-foreground",
        ghost:
          "hover:bg-dft-muted hover:bg-dft-muted-foreground dark:hover:bg-dft-muted/50",
        link: "text-dft-primary underline-offset-4 hover:underline",
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
