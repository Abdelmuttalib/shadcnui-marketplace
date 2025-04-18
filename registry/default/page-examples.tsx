import { AuthenticationPage } from "@/registry/default/example/authentication/page";
import { CardsPage } from "@/registry/default/example/cards/page";
import { DashboardPage } from "@/registry/default/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/default/example/forms/page";
import { MailPage } from "@/registry/default/example/mail/page";
import { MusicPage } from "@/registry/default/example/music/page";
import { PlaygroundPage } from "@/registry/default/example/playground/page";
import { TaskPage } from "@/registry/default/example/tasks/page";

export const DefaultPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function DefaultMailPage() {
  return <MailPage />;
}

export function DefaultCardsPage() {
  return <CardsPage />;
}

export function DefaultAuthenticationPage() {
  return <AuthenticationPage />;
}

export function DefaultSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function DefaultDashboardPage() {
  return <DashboardPage />;
}

export function DefaultMusicPage() {
  return <MusicPage />;
}

export function DefaultPlaygroundPage() {
  return <PlaygroundPage />;
}

export function DefaultTaskPage() {
  return <TaskPage />;
}
