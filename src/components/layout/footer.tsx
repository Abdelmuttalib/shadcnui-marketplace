import { TwitterIcon } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border pb-4 pt-6">
      <PageContainer className="relative">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="relative">
            <h3 className="text-sm">
              <span className="pr-2 text-lg font-medium tracking-tight">
                shadcn{" "}
                <span className="bg-gradient-to-r from-foreground/90 to-primary bg-clip-text font-normal italic text-transparent dark:to-foreground/30">
                  styles
                </span>
              </span>
            </h3>
          </div>
          <div>
            {/* <p className="text-muted-foreground">
              shadcn ui is a marketplace for custom shadcn styles. Browse and
              use the styles you like, or create your own.
            </p> */}
            <Button asChild variant={"ghost"} size={"icon-sm"}>
              <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter link</span>
                <TwitterIcon className="text-muted-foreground" />
              </a>
            </Button>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
