import type { Metadata } from "next";

import Link from "next/link";
import ThemeSwitcher from "@/components/theme-select";

export const metadata: Metadata = {
  title: "shadcn ui styles blocks",
  description:
    "shadcn ui styles, A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  const { slug } = params;

  return (
    <PageLayout>
      {/* <header className="relative">
        <ScreenContainer>
          <nav className="sticky top-0">shadcn ui</nav>
        </ScreenContainer>
      </header> */}
      {/* <div> */}
      {children}
      {/* </div> */}
    </PageLayout>
  );
}

function PageLayout({ children }: { children?: React.ReactNode }) {
  // const { style, setStyle, stylePath, setStylePath } = useStyle();

  return (
    <div className="relative">
      <div className="relative flex flex-col bg-background z-20">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="sm:container sm:mx-auto flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="hidden sm:block">
                <ThemeSwitcher />
              </div>
              {/* <WaitlistDialog /> */}
            </div>
          </nav>
        </header>
        <div className="mx-auto flex max-w-screen-2xl w-full sm:px-4">
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
          <div className="grid h-full flex-1 gap-72 pb-24 md:pb-40">
            {children}
          </div>
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
        </div>
      </div>
    </div>
  );
}
