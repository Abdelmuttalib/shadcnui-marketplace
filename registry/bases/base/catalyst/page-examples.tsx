import { AuthenticationPage } from "@/registry/bases/base/catalyst/example/authentication/page";
import { CardsPage } from "@/registry/bases/base/catalyst/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/catalyst/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/catalyst/example/forms/page";
import { MailPage } from "@/registry/bases/base/catalyst/example/mail/page";
import { MusicPage } from "@/registry/bases/base/catalyst/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/catalyst/example/playground/page";
import { TaskPage } from "@/registry/bases/base/catalyst/example/tasks/page";

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
