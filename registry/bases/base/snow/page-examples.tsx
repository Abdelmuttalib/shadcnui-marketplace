import { AuthenticationPage } from "@/registry/bases/base/snow/example/authentication/page";
import { CardsPage } from "@/registry/bases/base/snow/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/snow/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/snow/example/forms/page";
import { MailPage } from "@/registry/bases/base/snow/example/mail/page";
import { MusicPage } from "@/registry/bases/base/snow/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/snow/example/playground/page";
import { TaskPage } from "@/registry/bases/base/snow/example/tasks/page";

export const SnowPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function SnowMailPage() {
  return <MailPage />;
}

export function SnowCardsPage() {
  return <CardsPage />;
}

export function SnowAuthenticationPage() {
  return <AuthenticationPage />;
}

export function SnowSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function SnowDashboardPage() {
  return <DashboardPage />;
}

export function SnowMusicPage() {
  return <MusicPage />;
}

export function SnowPlaygroundPage() {
  return <PlaygroundPage />;
}

export function SnowTaskPage() {
  return <TaskPage />;
}
