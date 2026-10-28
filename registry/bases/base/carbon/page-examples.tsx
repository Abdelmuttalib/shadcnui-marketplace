import { AuthenticationPage } from "@/registry/bases/base/carbon/example/authentication/page";
import { CardsPage } from "@/registry/bases/base/carbon/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/carbon/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/carbon/example/forms/page";
import { MailPage } from "@/registry/bases/base/carbon/example/mail/page";
import { MusicPage } from "@/registry/bases/base/carbon/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/carbon/example/playground/page";
import { TaskPage } from "@/registry/bases/base/carbon/example/tasks/page";

export const CarbonPageExamples = [
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function CarbonMailPage() {
  return <MailPage />;
}

export function CarbonCardsPage() {
  return <CardsPage />;
}

export function CarbonAuthenticationPage() {
  return <AuthenticationPage />;
}

export function CarbonSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function CarbonDashboardPage() {
  return <DashboardPage />;
}

export function CarbonMusicPage() {
  return <MusicPage />;
}

export function CarbonPlaygroundPage() {
  return <PlaygroundPage />;
}

export function CarbonTaskPage() {
  return <TaskPage />;
}
