import { Typography, TypographyProps } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { PageBreadcrumb } from "./page-breadcrumb";

export function PageTitle({ className, ...props }: TypographyProps) {
  return (
    <Typography
      as="h1"
      variant="5xl/medium"
      className={cn("text-foreground font-[490] tracking-tighter", className)}
      {...props}
    />
  );
}

export function PageSubTitle({ className, ...props }: TypographyProps) {
  return (
    <Typography
      as="p"
      variant="lg/normal"
      className={cn("text-muted-foreground max-w-4xl", className)}
      {...props}
    />
  );
}

type PageHeaderProps = TypographyProps & {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
};

export function PageHeader({
  title,
  description,
  badge,
  actions,
  ...props
}: PageHeaderProps) {
  return (
    <div className="relative flex flex-col gap-4 py-16 pt-0">
      {/* <div className="absolute inset-0 h-32 w-full bg-linear-to-b from-accent/40 to-background"></div> */}
      <div>
        <PageBreadcrumb />
      </div>

      <div className="flex items-center gap-2">
        <PageTitle as={"h1"} className="capitalize">
          {title}
        </PageTitle>
        {badge ? badge : null}
      </div>

      {description && (
        <div>
          <PageSubTitle className="text-muted-foreground max-w-2xl">
            {description}
          </PageSubTitle>
        </div>
      )}

      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
