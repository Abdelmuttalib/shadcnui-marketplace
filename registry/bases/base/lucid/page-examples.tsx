import { AuthenticationPage } from "@/registry/bases/base/lucid/example/authentication/page";
import { CardsPage } from "@/registry/bases/base/lucid/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/lucid/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/lucid/example/forms/page";
import { MailPage } from "@/registry/bases/base/lucid/example/mail/page";
import { MusicPage } from "@/registry/bases/base/lucid/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/lucid/example/playground/page";
import { TaskPage } from "@/registry/bases/base/lucid/example/tasks/page";

export const LucidPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function LucidMailPage() {
  return <MailPage />;
}

export function LucidCardsPage() {
  return <CardsPage />;
}

export function LucidAuthenticationPage() {
  return <AuthenticationPage />;
}

export function LucidSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function LucidDashboardPage() {
  return <DashboardPage />;
}

export function LucidMusicPage() {
  return <MusicPage />;
}

export function LucidPlaygroundPage() {
  return <PlaygroundPage />;
}

export function LucidTaskPage() {
  return <TaskPage />;
}
