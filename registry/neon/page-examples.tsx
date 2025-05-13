import { AuthenticationPage } from "@/registry/neon/example/authentication/page";
import { BoardPage } from "@/registry/neon/example/board/page";
import { CardsPage } from "@/registry/neon/example/cards/page";
import { DashboardPage } from "@/registry/neon/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/neon/example/forms/page";
import { MailPage } from "@/registry/neon/example/mail/page";
import { MusicPage } from "@/registry/neon/example/music/page";
import { PlaygroundPage } from "@/registry/neon/example/playground/page";
import { TaskPage } from "@/registry/neon/example/tasks/page";

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
