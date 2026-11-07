import { AuthenticationPage } from "@/registry/bases/base/neon/example/authentication/page";
import { BoardPage } from "@/registry/bases/base/neon/example/board/page";
import { CardsPage } from "@/registry/bases/base/neon/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/neon/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/neon/example/forms/page";
import { MailPage } from "@/registry/bases/base/neon/example/mail/page";
import { MusicPage } from "@/registry/bases/base/neon/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/neon/example/playground/page";
import { TaskPage } from "@/registry/bases/base/neon/example/tasks/page";

export const NeonPageExamples = [
  <BoardPage key="board" />,
  <MailPage key="mail" />,
  <CardsPage key="cards" />,
  <AuthenticationPage key="authentication" />,
  <SettingsProfilePage key="settings-profile" />,
  <DashboardPage key="dashboard" />,
  <MusicPage key="music" />,
  <PlaygroundPage key="playground" />,
  <TaskPage key="task" />,
];

export function NeonBoardPage() {
  return <BoardPage />;
}

export function NeonMailPage() {
  return <MailPage />;
}

export function NeonCardsPage() {
  return <CardsPage />;
}

export function NeonAuthenticationPage() {
  return <AuthenticationPage />;
}

export function NeonSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function NeonDashboardPage() {
  return <DashboardPage />;
}

export function NeonMusicPage() {
  return <MusicPage />;
}

export function NeonPlaygroundPage() {
  return <PlaygroundPage />;
}

export function NeonTaskPage() {
  return <TaskPage />;
}
