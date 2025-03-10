import type { Metadata } from "next";

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
    <>
      {/* <header className="relative">
        <ScreenContainer>
          <nav className="sticky top-0">shadcn ui</nav>
        </ScreenContainer>
      </header> */}
      {/* <div> */}
      {children}
      {/* </div> */}
    </>
  );
}
