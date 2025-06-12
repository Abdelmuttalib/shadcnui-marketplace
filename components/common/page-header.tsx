import { Typography, TypographyProps } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { PageBreadcrumb } from "./page-breadcrumb";

export function PageTitle({ className, ...props }: TypographyProps) {
  return (
    <Typography
      as="h1"
      variant="5xl/semibold"
      className={cn(
        "bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-[490] tracking-tighter text-transparent dark:to-foreground/50",
        className
      )}
      {...props}
    />
  );
}

export function PageSubTitle({ className, ...props }: TypographyProps) {
  return (
    <Typography
      as="p"
      variant="lg/normal"
      className={cn("max-w-4xl text-muted-foreground", className)}
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
      {/* <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div> */}
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
          <PageSubTitle className="max-w-2xl text-muted-foreground">
            {description}
          </PageSubTitle>
        </div>
      )}

      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
