import { AuthenticationPage } from "@/registry/spectrum/example/authentication/page";
import { CardsPage } from "@/registry/spectrum/example/cards/page";
import { DashboardPage } from "@/registry/spectrum/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/spectrum/example/forms/page";
import { MailPage } from "@/registry/spectrum/example/mail/page";
import { MusicPage } from "@/registry/spectrum/example/music/page";
import { PlaygroundPage } from "@/registry/spectrum/example/playground/page";
import { TaskPage } from "@/registry/spectrum/example/tasks/page";

export const SpectrumPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function SpectrumMailPage() {
  return <MailPage />;
}

export function SpectrumCardsPage() {
  return <CardsPage />;
}

export function SpectrumAuthenticationPage() {
  return <AuthenticationPage />;
}

export function SpectrumSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function SpectrumDashboardPage() {
  return <DashboardPage />;
}

export function SpectrumMusicPage() {
  return <MusicPage />;
}

export function SpectrumPlaygroundPage() {
  return <PlaygroundPage />;
}

export function SpectrumTaskPage() {
  return <TaskPage />;
}
