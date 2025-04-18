import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

// import { useTranslation } from "react-i18next";
// import NotificationsDialog from "@/components/notifications/NotificationsDialog";
// import ThemeSwitcher, { ThemeSelect } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";

import { SideBar } from "./sidebar";

// Header
const Header = ({ pageTitle }: { pageTitle: string }) => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <>
      {showSidebarMenu && (
        <SideBar mode="mobile" setShowSidebarMenu={setShowSidebarMenu} />
      )}
      <header className="sticky top-0 z-40 flex-none bg-background/[0.5] py-4 backdrop-blur-md backdrop-filter dark:border-gray-800  dark:text-gray-200 lg:pl-0">
        <div className="flex h-10 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <Button
              className="bg-white focus:border-2 focus:border-gray-800 lg:hidden"
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebarMenu(true)}
            >
              <Bars3Icon className="w-5" />
            </Button>
            <Typography as="h1" variant="2xl/medium">
              {pageTitle}
            </Typography>
          </div>

          <div className="flex gap-1">
            {/* <LanguageSwitcher /> */}

            {/* <ThemeSelect />
            <ThemeSwitcher /> */}
            {/* <NotificationsDialog /> */}
          </div>
        </div>
      </header>
    </>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t px-4 py-4 text-gray-700 dark:border-gray-800 dark:text-gray-300 lg:px-8">
      <div className="w-full text-center md:text-left">
        <h5 className="label-sm mb-1">
          Dashboard
          {/* {t('app.name')} */}
        </h5>
        <p className="text-xs text-gray-600">
          Copyright © {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export function Layout({
  pageTitle,
  children,
  className,
}: {
  pageTitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-[100svh] w-screen">
      <aside>
        <SideBar mode="normal" />
      </aside>
      <div className="flex w-full flex-col overflow-auto">
        <Header pageTitle={pageTitle} />
        <main className={cn("w-full px-4 pb-10 pt-6 lg:px-6", className)}>
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
