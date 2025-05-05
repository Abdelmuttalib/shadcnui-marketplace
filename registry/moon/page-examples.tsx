import { lazy, Suspense } from "react";

// import { ChartsPage } from "@/registry/moon/charts-demo";
// import { AuthenticationPage } from "@/registry/moon/example/authentication/page";
// import { CardsPage } from "@/registry/moon/example/cards/page";
// import { DashboardPage } from "@/registry/moon/example/dashboard/page";
// import { SettingsProfilePage } from "@/registry/moon/example/forms/page";
// import { MailPage } from "@/registry/moon/example/mail/page";
// import { MusicPage } from "@/registry/moon/example/music/page";
// import { PlaygroundPage } from "@/registry/moon/example/playground/page";
// import { TaskPage } from "@/registry/moon/example/tasks/page";

const ChartsPage = lazy(() => import("@/registry/moon/charts-demo"));
const AuthenticationPage = lazy(
  () => import("@/registry/moon/example/authentication/page")
);
const CardsPage = lazy(() => import("@/registry/moon/example/cards/page"));
const DashboardPage = lazy(
  () => import("@/registry/moon/example/dashboard/page")
);
const SettingsProfilePage = lazy(
  () => import("@/registry/moon/example/forms/page")
);
const MailPage = lazy(() => import("@/registry/moon/example/mail/page"));
const MusicPage = lazy(() => import("@/registry/moon/example/music/page"));
const PlaygroundPage = lazy(
  () => import("@/registry/moon/example/playground/page")
);
const TaskPage = lazy(() => import("@/registry/moon/example/tasks/page"));

export const MoonPageExamples = [
  <Suspense fallback={<div>Loading...</div>} key="charts">
    <ChartsPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="mail">
    <MailPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="cards">
    <CardsPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="authentication">
    <AuthenticationPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="settings-profile">
    <SettingsProfilePage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="dashboard">
    <DashboardPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="music">
    <MusicPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="playground">
    <PlaygroundPage />
  </Suspense>,
  <Suspense fallback={<div>Loading...</div>} key="task">
    <TaskPage />
  </Suspense>,
];

// export const MoonPageExamples = [
//   <ChartsPage key="charts" />,
//   <MailPage key="mail" />,
//   <CardsPage key="cards" />,
//   <AuthenticationPage key="authentication" />,
//   <SettingsProfilePage key="settings-profile" />,
//   <DashboardPage key="dashboard" />,
//   <MusicPage key="music" />,
//   <PlaygroundPage key="playground" />,
//   <TaskPage key="task" />,
// ];

export function MoonChartsPage() {
  return (
    <Suspense fallback={<div>Loading Charts...</div>}>
      <ChartsPage />
    </Suspense>
  );
}

export function MoonMailPage() {
  return (
    <Suspense fallback={<div>Loading Mail...</div>}>
      <MailPage />
    </Suspense>
  );
}

export function MoonCardsPage() {
  return (
    <Suspense fallback={<div>Loading Cards...</div>}>
      <CardsPage />
    </Suspense>
  );
}

export function MoonAuthenticationPage() {
  return (
    <Suspense fallback={<div>Loading Authentication...</div>}>
      <AuthenticationPage />
    </Suspense>
  );
}

export function MoonSettingsProfilePage() {
  return (
    <Suspense fallback={<div>Loading Settings Profile...</div>}>
      <SettingsProfilePage />
    </Suspense>
  );
}

export function MoonDashboardPage() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <DashboardPage />
    </Suspense>
  );
}

export function MoonMusicPage() {
  return (
    <Suspense fallback={<div>Loading Music...</div>}>
      <MusicPage />
    </Suspense>
  );
}

export function MoonPlaygroundPage() {
  return (
    <Suspense fallback={<div>Loading Playground...</div>}>
      <PlaygroundPage />
    </Suspense>
  );
}

export function MoonTaskPage() {
  return (
    <Suspense fallback={<div>Loading Task...</div>}>
      <TaskPage />
    </Suspense>
  );
}

// ... and so on for each page

// export function MoonMailPage() {
//   return <MailPage />;
// }

// export function MoonCardsPage() {
//   return <CardsPage />;
// }

// export function MoonAuthenticationPage() {
//   return <AuthenticationPage />;
// }

// export function MoonSettingsProfilePage() {
//   return <SettingsProfilePage />;
// }

// export function MoonDashboardPage() {
//   return <DashboardPage />;
// }

// export function MoonMusicPage() {
//   return <MusicPage />;
// }

// export function MoonPlaygroundPage() {
//   return <PlaygroundPage />;
// }

// export function MoonTaskPage() {
//   return <TaskPage />;
// }
