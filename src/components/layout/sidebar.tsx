import {
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  HomeIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { FigmaIcon, Framer } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

// import LanguageSwitcher from "@/components/language-switcher";
// import ThemeSwitcher from "@/components/theme-switcher";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";

type DashboardLinkT = {
  text: string;
  icon: React.ReactNode;
  href: string;
};

export const dashboardLinks: DashboardLinkT[] = [
  {
    text: "home",
    icon: <HomeIcon className="w-[18px] text-current" />,
    href: "/dashboard",
  },
  {
    text: "Board",
    icon: <Squares2X2Icon className="w-[18px] text-current" />,
    href: "/dashboard/board",
  },
  {
    text: "chat",
    icon: <ChatBubbleOvalLeftIcon className="w-[18px] text-current" />,
    href: "/dashboard/chat",
  },
  {
    text: "settings",
    icon: <Cog6ToothIcon className="w-[18px] text-current" />,
    href: "/dashboard/settings",
  },
  {
    text: "Design System",
    icon: <FigmaIcon className="w-[18px] text-current" />,
    href: "/dashboard/design-system",
  },
];

// [#0A0F13]
export function SideBar({
  mode = "normal",
  setShowSidebarMenu,
}: {
  mode: "mobile" | "normal";
  setShowSidebarMenu?: (show: boolean) => void;
}) {
  const { pathname } = useRouter();
  return (
    <div
      className={cn("bg-background", {
        "hidden h-full min-h-screen w-full flex-col lg:flex lg:w-64":
          mode === "normal",
        "fixed inset-0 z-50 flex h-[100svh] w-full flex-col  backdrop-blur-md backdrop-filter transition-colors duration-300 lg:hidden":
          mode === "mobile",
      })}
    >
      <div className="relative mx-4 flex-1 overflow-y-auto py-4 lg:pl-0">
        {setShowSidebarMenu && (
          <IconButton
            className="absolute top-4 left-0 focus:border-2 focus:border-gray-800"
            variant="outline"
            size="sm"
            onClick={() => setShowSidebarMenu(false)}
          >
            <XMarkIcon className="w-6" aria-hidden="true" />
          </IconButton>
        )}
        <div className="mt-1">
          <Framer className="w-9 h-9 bg-primary-200/70 dark:bg-gray-hover rounded p-1.5" />
        </div>
        {/* <Typography as='h5' variant='lg/regular'>
            Dashboard
            <span className='ml-0.5 text-3xl text-primary'>.</span>
          </Typography> */}
        <ul className="mt-10 flex flex-col md:mb-44">
          {dashboardLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className={cn(
                  "bg-background text-sm text-foreground-lighter hover:bg-layer-2 dark:hover:bg-layer-3 dark:hover:text-foreground-muted rounded py-2.5 px-4 inline-flex items-center gap-x-3 w-full font-medium",
                  {
                    "text-foreground hover:text-foreground dark:hover:text-foreground bg-layer-3":
                      pathname === link.href,
                    "": pathname !== link.href,
                  }
                )}
              >
                {link.icon}
                <span className="first-letter:uppercase">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex w-full justify-center gap-3 px-5 sm:hidden">
          {/* <LanguageSwitcher />
          <ThemeSwitcher /> */}
        </div>
      </div>
    </div>
  );
}
