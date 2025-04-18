import { AuthenticationPage } from "@/registry/wedges/example/authentication/page";
import { CardsPage } from "@/registry/wedges/example/cards/page";
import { DashboardPage } from "@/registry/wedges/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/wedges/example/forms/page";
import { MailPage } from "@/registry/wedges/example/mail/page";
import { MusicPage } from "@/registry/wedges/example/music/page";
import { PlaygroundPage } from "@/registry/wedges/example/playground/page";
import { TaskPage } from "@/registry/wedges/example/tasks/page";

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
