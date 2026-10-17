import { AuthenticationPage } from "@/registry/bases/base/wedges/example/authentication/page";
import { CardsPage } from "@/registry/bases/base/wedges/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/wedges/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/wedges/example/forms/page";
import { MailPage } from "@/registry/bases/base/wedges/example/mail/page";
import { MusicPage } from "@/registry/bases/base/wedges/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/wedges/example/playground/page";
import { TaskPage } from "@/registry/bases/base/wedges/example/tasks/page";

export const WedgesPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function WedgesMailPage() {
  return <MailPage />;
}

export function WedgesCardsPage() {
  return <CardsPage />;
}

export function WedgesAuthenticationPage() {
  return <AuthenticationPage />;
}

export function WedgesSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function WedgesDashboardPage() {
  return <DashboardPage />;
}

export function WedgesMusicPage() {
  return <MusicPage />;
}

export function WedgesPlaygroundPage() {
  return <PlaygroundPage />;
}

export function WedgesTaskPage() {
  return <TaskPage />;
}
