import type { Metadata } from "next";

import { DevTools } from "@/components/dev-tools";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { fontVariables } from "@/lib/fonts";
import { StaggeredNavFiles } from "@/components/landing/staggered-nav-files";

export const metadata: Metadata = {
  title: {
    default: "shadcn ui marketplace",
    template: "%s | shadcn ui marketplace",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadcn-ui-marketplace.com",
    title: "shadcn ui marketplace",
    description:
      "shadcn ui marketplace, A marketplace for shadcn ui components styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, and styles. .",
    images: [
      {
        url: "https://shadcn-ui-marketplace.com/images/og.png",
        width: 1919,
        height: 963,
        alt: "shadcn ui marketplace, shadcn ui styles",
      },
    ],
  },
  description:
    "shadcn ui marketplace, A marketplace for shadcn-ui components styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, and styles. .",
  metadataBase: new URL("https://shadcn-ui-marketplace.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`relative flex flex-col font-sans antialiased ${fontVariables}`}
    >
      <main className="relative">
        <StaggeredNavFiles />
        {children}
        <DevTools />
      </main>
    </div>
  );
}
