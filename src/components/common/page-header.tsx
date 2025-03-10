import { Typography, TypographyProps } from "@/components/ui/typography";

export function PageTitle({ ...props }: TypographyProps) {
  return (
    <Typography
      as="h1"
      variant="5xl/semibold"
      className="capitalize tracking-tighter"
      {...props}
    />
  );
}

export function PageSubTitle({ ...props }: TypographyProps) {
  return (
    <Typography
      as="p"
      variant="lg/normal"
      className="max-w-4xl text-muted-foreground"
      {...props}
    />
  );
}

// export function PageHeader({ children, ...props }: TypographyProps) {
//   return (
//     <div className="flex flex-col gap-2">
//       <PageTitle {...props}>{children}</PageTitle>
//       <PageSubTitle {...props}>{children}</PageSubTitle>
//     </div>
//   );
// }
