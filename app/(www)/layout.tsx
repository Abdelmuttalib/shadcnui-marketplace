import type { Metadata } from "next";

import { DevTools } from "@/components/dev-tools";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { fontVariables } from "@/lib/fonts";

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
      "shadcn ui marketplace, A marketplace for shadcn ui components styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, and styles. Going beyond default and new york shadcn ui styles.",
    images: [
      {
        url: "https://shadcn-ui-marketplace.com/images/og-image-2.png",
        width: 1919,
        height: 963,
        alt: "shadcn ui marketplace, shadcn ui styles",
      },
    ],
  },
  description:
    "shadcn ui marketplace, A marketplace for shadcn-ui components styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, and styles. Going beyond default and new york shadcn ui styles.",
  metadataBase: new URL("https://shadcn-ui-marketplace.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div
        className={`relative flex min-h-screen flex-col font-sans antialiased ${fontVariables}`}
      >
        <DevTools />
        <Navbar />
        <main className="relative grid h-full flex-1 gap-72 pb-24 md:pb-40">
          {/* <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-accent/40"></div> */}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
