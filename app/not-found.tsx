import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { Badge } from "@/components/ui/badge";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { siteConfig } from "@/config/site-config";

export default function NotFoundPage() {
  return (
    <>
      <section className="flex flex-col py-36">
        <PageContainer>
          <div className="flex max-w-lg flex-col gap-6">
            <div>
              <RichBadge variant={"red"}>
                <Typography
                  as="span"
                  variant="sm/medium"
                  className="font-mono text-primary"
                >
                  404 error
                </Typography>
              </RichBadge>
            </div>
            <Typography
              as="p"
              variant="4xl/semibold"
              className="tracking-tight text-foreground"
            >
              Page not found
            </Typography>
            <Typography
              as="p"
              variant="lg/normal"
              className="text-muted-foreground"
            >
              {/* error message for user, not 404 page */}
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </Typography>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.suggestedNotFoundLinks.map((link) => (
              <div
                key={link.label}
                className="group relative flex flex-col gap-2 rounded-lg border bg-card p-3.5 py-2 hover:border-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-foreground">
                      {link.label}
                    </h3>

                    <ArrowRightIcon className="size-4 -rotate-45 text-muted-foreground/60 group-hover:text-primary" />
                  </div>
                </div>

                <Link
                  href={link.href}
                  className="absolute inset-0  inline-flex items-center gap-x-2 text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  <span className="sr-only">{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
