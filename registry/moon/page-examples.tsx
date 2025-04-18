import { ChartsPage } from "@/registry/moon/charts-demo";
import { AuthenticationPage } from "@/registry/moon/example/authentication/page";
import { CardsPage } from "@/registry/moon/example/cards/page";
import { DashboardPage } from "@/registry/moon/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/moon/example/forms/page";
import { MailPage } from "@/registry/moon/example/mail/page";
import { MusicPage } from "@/registry/moon/example/music/page";
import { PlaygroundPage } from "@/registry/moon/example/playground/page";
import { TaskPage } from "@/registry/moon/example/tasks/page";

export const MoonPageExamples = [
  <ChartsPage key="charts" />,
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function MoonChartsPage() {
  return <ChartsPage />;
}

export function MoonMailPage() {
  return <MailPage />;
}

export function MoonCardsPage() {
  return <CardsPage />;
}

export function MoonAuthenticationPage() {
  return <AuthenticationPage />;
}

export function MoonSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function MoonDashboardPage() {
  return <DashboardPage />;
}

export function MoonMusicPage() {
  return <MusicPage />;
}

export function MoonPlaygroundPage() {
  return <PlaygroundPage />;
}

export function MoonTaskPage() {
  return <TaskPage />;
}
