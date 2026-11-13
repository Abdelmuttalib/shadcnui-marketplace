import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { siteConfig } from "@/config/site-config";

export default function ErrorPage() {
  return (
    <section className="flex flex-col py-36">
      <PageContainer>
        <div className="flex max-w-lg flex-col gap-4">
          <div>
            <RichBadge variant={"red"}>
              <Typography
                as="span"
                variant="sm/medium"
                className="text-primary font-mono"
              >
                400 error
              </Typography>
            </RichBadge>
          </div>
          {/* <PageTitle>Something went wrong</PageTitle> */}
          <Typography
            as="p"
            variant="4xl/semibold"
            className="text-foreground tracking-tight"
          >
            Something went wrong
          </Typography>
          <Typography
            as="p"
            variant="lg/normal"
            className="text-muted-foreground"
          >
            {/* error message for user, not 404 page */}
            looks like something went wrong. Please try again later.
          </Typography>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.suggestedNotFoundLinks.map((link) => (
            <div
              key={link.label}
              className="group bg-card hover:border-primary relative flex flex-col gap-2 border p-3.5 py-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-foreground font-medium">{link.label}</h3>

                  <ArrowRightIcon className="text-muted-foreground/60 group-hover:text-primary size-4 -rotate-45" />
                </div>
              </div>

              <Link
                href={link.href}
                className="absolute inset-0 inline-flex items-center gap-x-2 text-sm"
              >
                <span className="sr-only">{link.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
