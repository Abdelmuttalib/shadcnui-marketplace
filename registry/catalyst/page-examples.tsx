import { AuthenticationPage } from "@/registry/catalyst/example/authentication/page";
import { CardsPage } from "@/registry/catalyst/example/cards/page";
import { DashboardPage } from "@/registry/catalyst/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/catalyst/example/forms/page";
import { MailPage } from "@/registry/catalyst/example/mail/page";
import { MusicPage } from "@/registry/catalyst/example/music/page";
import { PlaygroundPage } from "@/registry/catalyst/example/playground/page";
import { TaskPage } from "@/registry/catalyst/example/tasks/page";

export const CatalystPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function CatalystMailPage() {
  return <MailPage />;
}

export function CatalystCardsPage() {
  return <CardsPage />;
}

export function CatalystAuthenticationPage() {
  return <AuthenticationPage />;
}

export function CatalystSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function CatalystDashboardPage() {
  return <DashboardPage />;
}

export function CatalystMusicPage() {
  return <MusicPage />;
}

export function CatalystPlaygroundPage() {
  return <PlaygroundPage />;
}

export function CatalystTaskPage() {
  return <TaskPage />;
}
