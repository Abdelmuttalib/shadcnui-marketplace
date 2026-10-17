import { AuthenticationPage } from "@/registry/material/example/authentication/page";
import { BoardPage } from "@/registry/material/example/board/page";
import { CardsPage } from "@/registry/material/example/cards/page";
import { DashboardPage } from "@/registry/material/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/material/example/forms/page";
import { MailPage } from "@/registry/material/example/mail/page";
import { MusicPage } from "@/registry/material/example/music/page";
import { PlaygroundPage } from "@/registry/material/example/playground/page";
import { TaskPage } from "@/registry/material/example/tasks/page";

export const MaterialPageExamples = [
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

export function MaterialBoardPage() {
  return <BoardPage />;
}

export function MaterialMailPage() {
  return <MailPage />;
}

export function MaterialCardsPage() {
  return <CardsPage />;
}

export function MaterialAuthenticationPage() {
  return <AuthenticationPage />;
}

export function MaterialSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function MaterialDashboardPage() {
  return <DashboardPage />;
}

export function MaterialMusicPage() {
  return <MusicPage />;
}

export function MaterialPlaygroundPage() {
  return <PlaygroundPage />;
}

export function MaterialTaskPage() {
  return <TaskPage />;
}
