import type { Metadata } from "next";

import { ScreenContainer } from "@/components/container";
import BlocksBreadcrumb from "./components/blocks-breadcrumb";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "shadcn ui styles blocks",
  description:
    "shadcn ui styles, A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {/* <header className="relative">
        <ScreenContainer>
          <nav className="sticky top-0">shadcn ui</nav>
        </ScreenContainer>
      </header> */}
      <div className="bg-accent/50 py-20">
        <ScreenContainer>
          <div className="space-y-2">
            <div className="-mx-2">
              <BlocksBreadcrumb />
            </div>
            <Typography
              as={"h2"}
              variant="2xl/semibold"
              className="tracking-tight"
            >
              Hero Sections
            </Typography>

            <Typography
              as={"p"}
              variant="md/normal"
              className="text-muted-foreground"
            >
              Use these Tailwind CSS hero section examples to add important
              messaging, product photos, and call-to-actions to the top of your
              website. These hero examples are designed and built by the
              Tailwind CSS team, and include a variety of different styles and
              layouts.
            </Typography>
          </div>
        </ScreenContainer>
      </div>
      <div>{children}</div>
    </div>
  );
}
