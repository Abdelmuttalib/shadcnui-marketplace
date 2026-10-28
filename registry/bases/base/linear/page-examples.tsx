import { AuthenticationPage } from "@/registry/bases/base/linear/example/authentication/page";
import { CardsPage } from "@/registry/bases/base/linear/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/linear/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/linear/example/forms/page";
import { MailPage } from "@/registry/bases/base/linear/example/mail/page";
import { MusicPage } from "@/registry/bases/base/linear/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/linear/example/playground/page";
import { TaskPage } from "@/registry/bases/base/linear/example/tasks/page";

export const LinearPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function LinearMailPage() {
  return <MailPage />;
}

export function LinearCardsPage() {
  return <CardsPage />;
}

export function LinearAuthenticationPage() {
  return <AuthenticationPage />;
}

export function LinearSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function LinearDashboardPage() {
  return <DashboardPage />;
}

export function LinearMusicPage() {
  return <MusicPage />;
}

export function LinearPlaygroundPage() {
  return <PlaygroundPage />;
}

export function LinearTaskPage() {
  return <TaskPage />;
}
