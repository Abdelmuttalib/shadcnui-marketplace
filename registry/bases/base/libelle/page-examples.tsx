import { AuthenticationPage } from "@/registry/bases/base/libelle/example/authentication/page";
import { BoardPage } from "@/registry/bases/base/libelle/example/board/page";
import { CardsPage } from "@/registry/bases/base/libelle/example/cards/page";
import { DashboardPage } from "@/registry/bases/base/libelle/example/dashboard/page";
import { SettingsProfilePage } from "@/registry/bases/base/libelle/example/forms/page";
import { MailPage } from "@/registry/bases/base/libelle/example/mail/page";
import { MusicPage } from "@/registry/bases/base/libelle/example/music/page";
import { PlaygroundPage } from "@/registry/bases/base/libelle/example/playground/page";
import { TaskPage } from "@/registry/bases/base/libelle/example/tasks/page";

export const LibellePageExamples = [
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

export function LibelleBoardPage() {
  return <BoardPage />;
}

export function LibelleMailPage() {
  return <MailPage />;
}

export function LibelleCardsPage() {
  return <CardsPage />;
}

export function LibelleAuthenticationPage() {
  return <AuthenticationPage />;
}

export function LibelleSettingsProfilePage() {
  return <SettingsProfilePage />;
}

export function LibelleDashboardPage() {
  return <DashboardPage />;
}

export function LibelleMusicPage() {
  return <MusicPage />;
}

export function LibellePlaygroundPage() {
  return <PlaygroundPage />;
}

export function LibelleTaskPage() {
  return <TaskPage />;
}
