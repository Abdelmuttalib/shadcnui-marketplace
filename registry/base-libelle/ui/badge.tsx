import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-libelle-ring focus-visible:ring-[3px] focus-visible:ring-libelle-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-libelle-destructive aria-invalid:ring-libelle-destructive/20 dark:aria-invalid:ring-libelle-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-libelle-primary text-libelle-primary-foreground [a]:hover:bg-libelle-primary/80",
        secondary:
          "bg-libelle-secondary text-libelle-secondary-foreground [a]:hover:bg-libelle-secondary/80",
        destructive:
          "bg-libelle-destructive/10 text-libelle-destructive focus-visible:ring-libelle-destructive/20 dark:bg-libelle-destructive/20 dark:focus-visible:ring-libelle-destructive/40 [a]:hover:bg-libelle-destructive/20",
        outline:
          "border-libelle-border text-libelle-foreground [a]:hover:bg-libelle-muted [a]:hover:text-libelle-muted-foreground",
        ghost:
          "hover:bg-libelle-muted hover:text-libelle-muted-foreground dark:hover:bg-libelle-muted/50",
        link: "text-libelle-primary underline-offset-4 hover:underline",
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
