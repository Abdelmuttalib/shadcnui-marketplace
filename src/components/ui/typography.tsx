import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";

type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "display-xs"
  | "display-sm"
  | "display-md"
  | "display-lg"
  | "display-xl"
  | "display-2xl";

type FontWeight = "regular" | "medium" | "semibold" | "bold";

// extend type of props to include html attributes for the element
interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  variant?: `${FontSize}/${FontWeight}`;
}

const typographyVariants = cva("font-normal leading-normal text-foreground", {
  variants: {
    variant: {
      // // xs
      // "xs/regular": "text-xs leading-xs",
      // "xs/medium": "text-xs font-medium leading-xs",
      // "xs/semibold": "text-xs font-semibold leading-xs",
      // "xs/bold": "text-xs font-bold leading-xs",

      // // sm
      // "sm/regular": "text-sm leading-sm",
      // "sm/medium": "text-sm font-medium leading-sm",
      // "sm/semibold": "text-sm font-semibold leading-sm",
      // "sm/bold": "text-sm font-bold leading-sm",

      // // base
      // "base/regular": "text-md leading-base",
      // "base/medium": "text-md font-medium leading-base",
      // "base/semibold": "text-md font-semibold leading-base",
      // "base/bold": "text-md font-bold leading-base",

      // // md
      // "md/regular": "text-md leading-md",
      // "md/medium": "text-md font-medium leading-md",
      // "md/semibold": "text-md font-semibold leading-md",
      // "md/bold": "text-md font-bold leading-md",

      // // lg
      // "lg/regular": "text-lg leading-lg",
      // "lg/medium": "text-lg font-medium leading-lg",
      // "lg/semibold": "text-lg font-semibold leading-lg",
      // "lg/bold": "text-lg font-bold leading-lg",

      // // xl
      // "xl/regular": "text-xl leading-xl",
      // "xl/medium": "text-xl font-medium leading-xl",
      // "xl/semibold": "text-xl font-semibold leading-xl",
      // "xl/bold": "text-xl font-bold leading-xl",

      // // display-xs
      // "display-xs/regular": "text-2xl leading-2xl",
      // "display-xs/medium": "text-2xl font-medium leading-2xl",
      // "display-xs/semibold": "text-2xl font-semibold leading-2xl",
      // "display-xs/bold": "text-2xl font-bold leading-2xl",

      // // display-sm
      // "display-sm/regular": "text-3xl leading-3xl",
      // "display-sm/medium": "text-3xl font-medium leading-3xl",
      // "display-sm/semibold": "text-3xl font-semibold leading-3xl",
      // "display-sm/bold": "text-3xl font-bold leading-3xl",

      // // display-md
      // "display-md/regular": "text-4xl leading-4xl",
      // "display-md/medium": "text-4xl font-medium leading-4xl",
      // "display-md/semibold": "text-4xl font-semibold leading-4xl",
      // "display-md/bold": "text-4xl font-bold leading-4xl",

      // // display-lg
      // "display-lg/regular": "text-5xl leading-5xl",
      // "display-lg/medium": "text-5xl font-medium leading-5xl",
      // "display-lg/semibold": "text-5xl font-semibold leading-5xl",
      // "display-lg/bold": "text-5xl font-bold leading-5xl",

      // // display-xl
      // "display-xl/regular": "text-6xl leading-6xl",
      // "display-xl/medium": "text-6xl font-medium leading-6xl",
      // "display-xl/semibold": "text-6xl font-semibold leading-6xl",
      // "display-xl/bold": "text-6xl font-bold leading-6xl",

      // // display-2xl
      // "display-2xl/regular": "text-7xl leading-7xl",
      // "display-2xl/medium": "text-7xl font-medium leading-7xl",
      // "display-2xl/semibold": "text-7xl font-semibold leading-7xl",
      // "display-2xl/bold": "text-7xl font-bold leading-7xl",

      // xs
      "xs/regular": "text-xs leading-xs font-regular",
      "xs/medium": "text-xs leading-xs font-medium",
      "xs/semibold": "text-xs leading-xs font-semibold",
      "xs/bold": "text-xs leading-xs font-bold",

      // sm
      "sm/regular": "text-xs font-regular leading-xs sm:text-sm sm:leading-sm",
      "sm/medium": "text-xs font-medium leading-xs sm:text-sm sm:leading-sm",
      "sm/semibold":
        "text-xs font-semibold leading-xs sm:text-sm sm:leading-sm",
      "sm/bold": "text-xs font-bold leading-xs sm:text-sm sm:leading-sm",

      // base
      "base/regular":
        "text-sm leading-sm font-regular sm:text-md sm:leading-base",
      "base/medium":
        "text-sm leading-sm font-medium sm:text-md sm:leading-base",
      "base/semibold":
        "text-sm leading-sm font-semibold sm:text-md sm:leading-base",
      "base/bold": "text-sm leading-sm font-bold sm:text-md sm:leading-base",

      // md
      "md/regular": "text-sm leading-sm font-regular md:text-md md:leading-md",
      "md/medium": "text-sm leading-sm font-medium md:text-md md:leading-md",
      "md/semibold":
        "text-sm leading-sm font-semibold md:text-md md:leading-md",
      "md/bold": "text-sm leading-sm font-bold md:text-md md:leading-md",

      // lg
      "lg/regular":
        "text-md leading-base font-regular md:text-lg md:leading-lg",
      "lg/medium": "text-md leading-base font-medium md:text-lg md:leading-lg",
      "lg/semibold":
        "text-md leading-base font-semibold md:text-lg md:leading-lg",
      "lg/bold": "text-md leading-base font-bold md:text-lg md:leading-lg",

      // xl
      "xl/regular": "text-lg leading-lg font-regular md:text-xl md:leading-xl",
      "xl/medium": "text-lg leading-lg font-medium md:text-xl md:leading-xl",
      "xl/semibold":
        "text-lg leading-lg font-semibold md:text-xl md:leading-xl",
      "xl/bold": "text-lg leading-lg font-bold md:text-xl md:leading-xl",

      // display-xs
      "display-xs/regular":
        "text-lg leading-lg font-regular sm:text-xl sm:leading-xl md:text-2xl md:leading-2xl",
      "display-xs/medium":
        "text-lg leading-lg font-medium sm:text-xl sm:leading-xl md:text-2xl md:leading-2xl",
      "display-xs/semibold":
        "text-lg leading-lg font-semibold sm:text-xl sm:leading-xl md:text-2xl md:leading-2xl",
      "display-xs/bold":
        "text-lg leading-lg font-bold sm:text-xl sm:leading-xl md:text-2xl md:leading-2xl",

      // display-sm
      "display-sm/regular":
        "text-xl leading-xl font-regular sm:text-2xl sm:leading-2xl md:text-3xl md:leading-3xl",
      "display-sm/medium":
        "text-xl leading-xl font-medium sm:text-2xl sm:leading-2xl md:text-3xl md:leading-3xl",
      "display-sm/semibold":
        "text-xl leading-xl font-semibold sm:text-2xl sm:leading-2xl md:text-3xl md:leading-3xl",
      "display-sm/bold":
        "text-xl leading-xl font-bold sm:text-2xl sm:leading-2xl md:text-3xl md:leading-3xl",

      // display-md
      "display-md/regular":
        "text-2xl leading-2xl font-regular sm:text-3xl sm:leading-3xl md:text-4xl md:leading-4xl",
      "display-md/medium":
        "text-2xl leading-2xl font-medium sm:text-3xl sm:leading-3xl md:text-4xl md:leading-4xl",
      "display-md/semibold":
        "text-2xl leading-2xl font-semibold sm:text-3xl sm:leading-3xl md:text-4xl md:leading-4xl",
      "display-md/bold":
        "text-2xl leading-2xl font-bold sm:text-3xl sm:leading-3xl md:text-4xl md:leading-4xl",

      // display-lg
      "display-lg/regular":
        "text-3xl leading-3xl font-regular sm:text-4xl sm:leading-4xl md:text-5xl md:leading-5xl",
      "display-lg/medium":
        "text-3xl leading-3xl font-medium sm:text-4xl sm:leading-4xl md:text-5xl md:leading-5xl",
      "display-lg/semibold":
        "text-3xl leading-3xl font-semibold sm:text-4xl sm:leading-4xl md:text-5xl md:leading-5xl",
      "display-lg/bold":
        "text-3xl leading-3xl font-bold sm:text-4xl sm:leading-4xl md:text-5xl md:leading-5xl",

      // display-xl
      "display-xl/regular":
        "text-4xl leading-4xl font-regular sm:text-5xl sm:leading-5xl md:text-6xl md:leading-6xl",
      "display-xl/medium":
        "text-4xl leading-4xl font-medium sm:text-5xl sm:leading-5xl md:text-6xl md:leading-6xl",
      "display-xl/semibold":
        "text-4xl leading-4xl font-semibold sm:text-5xl sm:leading-5xl md:text-6xl md:leading-6xl",
      "display-xl/bold":
        "text-4xl leading-4xl font-bold sm:text-5xl sm:leading-5xl md:text-6xl md:leading-6xl",

      // display-2xl
      "display-2xl/regular":
        "text-5xl leading-5xl font-regular sm:text-6xl sm:leading-6xl md:text-7xl md:leading-7xl",
      "display-2xl/medium":
        "text-5xl leading-5xl font-medium sm:text-6xl sm:leading-6xl md:text-7xl md:leading-7xl",
      "display-2xl/semibold":
        "text-5xl leading-5xl font-semibold sm:text-6xl sm:leading-6xl md:text-7xl md:leading-7xl",
      "display-2xl/bold":
        "text-5xl leading-5xl font-bold sm:text-6xl sm:leading-6xl md:text-7xl md:leading-7xl",
    },
  },
  defaultVariants: {
    variant: "md/regular",
  },
});

function Typography({
  as = "p",
  variant = "base/regular",
  className,
  ...props
}: TypographyProps) {
  const Comp = as;

  return (
    <Comp
      className={cn("text-balance", typographyVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Typography, type TypographyProps, typographyVariants };

// type LineHeight =
//   | 'xs'
//   | 'sm'
//   | 'base'
//   | 'md'
//   | 'lg'
//   | 'xl'
//   | 'display-xs'
//   | 'display-sm'
//   | 'display-md'
//   | 'display-lg'
//   | 'display-xl'
//   | 'display-2xl';
