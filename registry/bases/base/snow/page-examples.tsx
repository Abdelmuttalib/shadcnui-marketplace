import { AuthenticationPage } from "@/registry/snow/example/authentication/page";
import { CardsPage } from "@/registry/snow/example/cards/page";
import { DashboardPage } from "@/registry/snow/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/snow/example/forms/page";
import { MailPage } from "@/registry/snow/example/mail/page";
import { MusicPage } from "@/registry/snow/example/music/page";
import { PlaygroundPage } from "@/registry/snow/example/playground/page";
import { TaskPage } from "@/registry/snow/example/tasks/page";

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
