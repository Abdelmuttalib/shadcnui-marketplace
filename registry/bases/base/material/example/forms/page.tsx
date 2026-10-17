"use client";

import React from "react";

import { Separator } from "@/registry/material/ui/separator";

import { AccountForm } from "./account/account-form";
import { AppearanceForm } from "./appearance/appearance-form";
import { SidebarNav } from "./components/sidebar-nav";
import { DisplayForm } from "./display/display-form";
import { SettingsLayout, sidebarNavItems } from "./layout";
import { NotificationsForm } from "./notifications/notifications-form";
import { ProfileForm } from "./profile-form";

export type SettingsTab =
  | "profile"
  | "notifications"
  | "display"
  | "appearance"
  | "account";

export function SettingsProfilePage() {
  const [currentTab, setCurrentTab] = React.useState<SettingsTab>("profile");

  function onTabChange(tab: SettingsTab) {
    setCurrentTab(tab);
  }

  function renderTab(tab: SettingsTab) {
    switch (tab) {
      case "profile":
        return <Profile />;
      case "notifications":
        return <Notifications />;
      case "display":
        return <Display />;
      case "appearance":
        return <Appearance />;
      case "account":
        return <Account />;
      default:
        return <Profile />;
    }
  }

  return (
    <SettingsLayout>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav
            items={sidebarNavItems}
            currentTab={currentTab}
            onTabChange={onTabChange}
          />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{renderTab(currentTab)}</div>
      </div>

      {/* <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-material-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div> */}
    </SettingsLayout>
  );
}

function SettingsInternalLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-material-muted-foreground">{description}</p>
      </div>
      <Separator />
      {children}
    </div>
  );
}

function Profile() {
  return (
    <SettingsInternalLayout
      title="Profile"
      description="This is how others will see you on the site."
    >
      <ProfileForm />
    </SettingsInternalLayout>
  );
}

function Notifications() {
  return (
    <SettingsInternalLayout
      title="Notifications"
      description="Configure how you receive notifications."
    >
      <NotificationsForm />
    </SettingsInternalLayout>
  );
}

function Display() {
  return (
    <SettingsInternalLayout
      title="Display"
      description="Turn items on or off to control what's displayed in the app."
    >
      <DisplayForm />
    </SettingsInternalLayout>
  );
}

function Appearance() {
  return (
    <SettingsInternalLayout
      title="Appearance"
      description="Customize the appearance of the app. Automatically switch between day and night themes."
    >
      <AppearanceForm />
    </SettingsInternalLayout>
  );
}

function Account() {
  return (
    <SettingsInternalLayout
      title="Account"
      description=" Update your account settings. Set your preferred language and timezone."
    >
      <AccountForm />
    </SettingsInternalLayout>
  );
}
