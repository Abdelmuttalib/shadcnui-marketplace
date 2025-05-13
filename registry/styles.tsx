import { Style } from "@/hooks/use-style-store";
import { CarbonCardShowcase } from "@/registry/carbon/carbon-card-showcase";
import { CarbonUI } from "@/registry/carbon/carbon-hero";
import { CarbonShowcaseComponents } from "@/registry/carbon/carbon-showcase-components";
import {
  CarbonAuthenticationPage,
  CarbonCardsPage,
  CarbonDashboardPage,
  CarbonMailPage,
  CarbonMusicPage,
  CarbonPlaygroundPage,
  CarbonSettingsProfilePage,
  CarbonTaskPage,
} from "@/registry/carbon/page-examples";
import { CatalystCardShowcase } from "@/registry/catalyst/catalyst-card-showcase";
import { CatalystUI } from "@/registry/catalyst/catalyst-hero";
import { CatalystShowcaseComponents } from "@/registry/catalyst/catalyst-showcase-components";
import {
  CatalystAuthenticationPage,
  CatalystCardsPage,
  CatalystDashboardPage,
  CatalystMailPage,
  CatalystMusicPage,
  CatalystPlaygroundPage,
  CatalystSettingsProfilePage,
  CatalystTaskPage,
} from "@/registry/catalyst/page-examples";
import { DefaultCardShowcase } from "@/registry/default/default-card-showcase";
import { DefaultUI } from "@/registry/default/default-hero";
import { DefaultShowcaseComponents } from "@/registry/default/default-showcase-components";
import {
  DefaultAuthenticationPage,
  DefaultCardsPage,
  DefaultDashboardPage,
  DefaultMailPage,
  DefaultMusicPage,
  DefaultPlaygroundPage,
  DefaultSettingsProfilePage,
  DefaultTaskPage,
} from "@/registry/default/page-examples";
import { LibelleCardShowcase } from "@/registry/libelle/libelle-card-showcase";
import { LibelleUI } from "@/registry/libelle/libelle-hero";
import { LibelleShowcaseComponents } from "@/registry/libelle/libelle-showcase-components";
import {
  LibelleAuthenticationPage,
  LibelleBoardPage,
  LibelleCardsPage,
  LibelleDashboardPage,
  LibelleMailPage,
  LibelleMusicPage,
  LibellePlaygroundPage,
  LibelleSettingsProfilePage,
  LibelleTaskPage,
} from "@/registry/libelle/page-examples";
import { LinearCardShowcase } from "@/registry/linear/linear-card-showcase";
import { LinearUI } from "@/registry/linear/linear-hero";
import { LinearShowcaseComponents } from "@/registry/linear/linear-showcase-components";
import {
  LinearAuthenticationPage,
  LinearCardsPage,
  LinearDashboardPage,
  LinearMailPage,
  LinearMusicPage,
  LinearPlaygroundPage,
  LinearSettingsProfilePage,
  LinearTaskPage,
} from "@/registry/linear/page-examples";
import { LucidCardShowcase } from "@/registry/lucid/lucid-card-showcase";
import { LucidUI } from "@/registry/lucid/lucid-hero";
import { LucidShowcaseComponents } from "@/registry/lucid/lucid-showcase-components";
import {
  LucidAuthenticationPage,
  LucidCardsPage,
  LucidDashboardPage,
  LucidMailPage,
  LucidMusicPage,
  LucidPlaygroundPage,
  LucidSettingsProfilePage,
  LucidTaskPage,
} from "@/registry/lucid/page-examples";
import { MaterialCardShowcase } from "@/registry/material/material-card-showcase";
import { MaterialUI } from "@/registry/material/material-hero";
import { MaterialShowcaseComponents } from "@/registry/material/material-showcase-components";
import {
  MaterialAuthenticationPage,
  MaterialBoardPage,
  MaterialCardsPage,
  MaterialDashboardPage,
  MaterialMailPage,
  MaterialMusicPage,
  MaterialPlaygroundPage,
  MaterialSettingsProfilePage,
  MaterialTaskPage,
} from "@/registry/material/page-examples";
import { MoonCardShowcase } from "@/registry/moon/moon-card-showcase";
import { MoonUI } from "@/registry/moon/moon-hero";
import { MoonShowcaseComponents } from "@/registry/moon/moon-showcase-components";
import {
  MoonAuthenticationPage,
  MoonCardsPage,
  MoonChartsPage,
  MoonDashboardPage,
  MoonMailPage,
  MoonMusicPage,
  MoonPlaygroundPage,
  MoonSettingsProfilePage,
  MoonTaskPage,
} from "@/registry/moon/page-examples";
import { NeonCardShowcase } from "@/registry/neon/neon-card-showcase";
import { NeonUI } from "@/registry/neon/neon-hero";
import { NeonShowcaseComponents } from "@/registry/neon/neon-showcase-components";
import {
  NeonAuthenticationPage,
  NeonBoardPage,
  NeonCardsPage,
  NeonDashboardPage,
  NeonMailPage,
  NeonMusicPage,
  NeonPlaygroundPage,
  NeonSettingsProfilePage,
  NeonTaskPage,
} from "@/registry/neon/page-examples";
import {
  SnowAuthenticationPage,
  SnowCardsPage,
  SnowDashboardPage,
  SnowMailPage,
  SnowMusicPage,
  SnowPlaygroundPage,
  SnowSettingsProfilePage,
  SnowTaskPage,
} from "@/registry/snow/page-examples";
import { SnowCardShowcase } from "@/registry/snow/snow-card-showcase";
import { SnowUI } from "@/registry/snow/snow-hero";
import { SnowShowcaseComponents } from "@/registry/snow/snow-showcase-components";
import {
  SpectrumAuthenticationPage,
  SpectrumCardsPage,
  SpectrumDashboardPage,
  SpectrumMailPage,
  SpectrumMusicPage,
  SpectrumPlaygroundPage,
  SpectrumSettingsProfilePage,
  SpectrumTaskPage,
} from "@/registry/spectrum/page-examples";
import { SpectrumCardShowcase } from "@/registry/spectrum/spectrum-card-showcase";
import { SpectrumUI } from "@/registry/spectrum/spectrum-hero";
import { SpectrumShowcaseComponents } from "@/registry/spectrum/spectrum-showcase-components";
import {
  WedgesAuthenticationPage,
  WedgesCardsPage,
  WedgesDashboardPage,
  WedgesMailPage,
  WedgesMusicPage,
  WedgesPlaygroundPage,
  WedgesSettingsProfilePage,
  WedgesTaskPage,
} from "@/registry/wedges/page-examples";
import { WedgesCardShowcase } from "@/registry/wedges/wedges-card-showcase";
import { WedgesUI } from "@/registry/wedges/wedges-hero";
import { WedgesShowcaseComponents } from "@/registry/wedges/wedges-showcase-components";

export function getStyleBackgroundClassname(style: Style) {
  switch (style) {
    case "default":
      return "bg-dft-background";
    case "carbon":
      return "bg-cb-background";
    case "linear":
      return "bg-linear-background";
    case "material":
      return "bg-material-background";
    case "catalyst":
      return "bg-catalyst-background";
    case "spectrum":
      return "bg-spctm-background";
    case "wedges":
      return "bg-wedges-background";
    case "moon":
      return "bg-moon-background";
    case "lucid":
      return "bg-lucid-background";
    case "snow":
      return "bg-snow-background";
    case "neon":
      return "bg-neon-background";
    case "libelle":
      return "bg-libelle-background";
    default:
      return "bg-linear-background";
  }
}

export function getStyleForegroundClassname(style: Style) {
  switch (style) {
    case "default":
      return "text-dft-foreground";
    case "carbon":
      return "text-cb-foreground";
    case "linear":
      return "text-linear-foreground";
    case "material":
      return "text-material-foreground";
    case "catalyst":
      return "text-catalyst-foreground";
    case "spectrum":
      return "text-spctm-foreground";
    case "wedges":
      return "text-wedges-foreground";
    case "moon":
      return "text-moon-foreground";
    case "lucid":
      return "text-lucid-foreground";
    case "snow":
      return "text-snow-foreground";
    case "neon":
      return "text-neon-foreground";
    case "libelle":
      return "text-libelle-foreground";
    default:
      return "text-linear-foreground";
  }
}

export function getStyleFontClassname(style: Style) {
  switch (style) {
    case "default":
      return "font-sans";
    case "carbon":
      return "font-carbon";
    case "linear":
      return "font-sans";
    case "material":
      return "font-material";
    case "catalyst":
      return "font-sans";
    case "spectrum":
      return "font-spectrum";
    case "wedges":
      return "font-sans";
    case "snow":
      return "font-sans";
    case "moon":
      return "font-sans";
    case "lucid":
      return "font-sans";
    case "neon":
      return "font-poppins";
    case "libelle":
      return "font-outfit";
    default:
      return "font-sans";
  }
}

export function renderStyleCardShowcase(style: Style) {
  switch (style) {
    case "carbon":
      return <CarbonCardShowcase />;
    case "catalyst":
      return <CatalystCardShowcase />;
    case "default":
      return <DefaultCardShowcase />;
    case "linear":
      return <LinearCardShowcase />;
    case "lucid":
      return <LucidCardShowcase />;
    case "material":
      return <MaterialCardShowcase />;
    case "moon":
      return <MoonCardShowcase />;
    case "snow":
      return <SnowCardShowcase />;
    case "spectrum":
      return <SpectrumCardShowcase />;
    case "wedges":
      return <WedgesCardShowcase />;
    case "neon":
      return <NeonCardShowcase />;
    case "libelle":
      return <LibelleCardShowcase />;
    default:
      return <DefaultCardShowcase />;
  }
}

export function getStyleVariablesPrefix(style: Style) {
  switch (style) {
    case "default":
      return "dft";
    case "carbon":
      return "cb";
    case "linear":
      return "linear";
    case "material":
      return "material";
    case "catalyst":
      return "catalyst";
    case "spectrum":
      return "spctm";
    case "wedges":
      return "wedges";
    case "moon":
      return "moon";
    case "lucid":
      return "lucid";
    case "snow":
      return "snow";
    case "neon":
      return "neon";
    case "libelle":
      return "libelle";
    default:
      return "dft";
  }
}

export function renderStylePageExample(style: Style, page: string) {
  if (page === "charts") {
    if (style === "moon") {
      return <MoonChartsPage />;
    }
    return <MoonChartsPage />;
  }
  if (page === "board") {
    if (style === "material") {
      return <MaterialBoardPage />;
    }
    if (style === "libelle") {
      return <LibelleBoardPage />;
    }
    return <NeonBoardPage />;
  }
  if (page === "mail") {
    if (style === "carbon") {
      return <CarbonMailPage />;
    } else if (style === "catalyst") {
      return <CatalystMailPage />;
    } else if (style === "default") {
      return <DefaultMailPage />;
    } else if (style === "linear") {
      return <LinearMailPage />;
    } else if (style === "lucid") {
      return <LucidMailPage />;
    } else if (style === "material") {
      return <MaterialMailPage />;
    } else if (style === "moon") {
      return <MoonMailPage />;
    } else if (style === "snow") {
      return <SnowMailPage />;
    } else if (style === "spectrum") {
      return <SpectrumMailPage />;
    } else if (style === "wedges") {
      return <WedgesMailPage />;
    } else if (style === "neon") {
      return <NeonMailPage />;
    } else if (style === "libelle") {
      return <LibelleMailPage />;
    } else {
      return <DefaultMailPage />;
    }
  } else if (page === "cards") {
    if (style === "carbon") {
      return <CarbonCardsPage />;
    } else if (style === "catalyst") {
      return <CatalystCardsPage />;
    } else if (style === "default") {
      return <DefaultCardsPage />;
    } else if (style === "linear") {
      return <LinearCardsPage />;
    } else if (style === "lucid") {
      return <LucidCardsPage />;
    } else if (style === "material") {
      return <MaterialCardsPage />;
    } else if (style === "moon") {
      return <MoonCardsPage />;
    } else if (style === "snow") {
      return <SnowCardsPage />;
    } else if (style === "spectrum") {
      return <SpectrumCardsPage />;
    } else if (style === "wedges") {
      return <WedgesCardsPage />;
    } else if (style === "neon") {
      return <NeonCardsPage />;
    } else if (style === "libelle") {
      return <LibelleCardsPage />;
    } else {
      return <DefaultCardsPage />;
    }
  } else if (page === "authentication") {
    if (style === "carbon") {
      return <CarbonAuthenticationPage />;
    } else if (style === "catalyst") {
      return <CatalystAuthenticationPage />;
    } else if (style === "default") {
      return <DefaultAuthenticationPage />;
    } else if (style === "linear") {
      return <LinearAuthenticationPage />;
    } else if (style === "lucid") {
      return <LucidAuthenticationPage />;
    } else if (style === "material") {
      return <MaterialAuthenticationPage />;
    } else if (style === "moon") {
      return <MoonAuthenticationPage />;
    } else if (style === "snow") {
      return <SnowAuthenticationPage />;
    } else if (style === "spectrum") {
      return <SpectrumAuthenticationPage />;
    } else if (style === "wedges") {
      return <WedgesAuthenticationPage />;
    } else if (style === "neon") {
      return <NeonAuthenticationPage />;
    } else if (style === "libelle") {
      return <LibelleAuthenticationPage />;
    } else {
      return <DefaultAuthenticationPage />;
    }
  } else if (page === "forms") {
    if (style === "carbon") {
      return <CarbonSettingsProfilePage />;
    } else if (style === "catalyst") {
      return <CatalystSettingsProfilePage />;
    } else if (style === "default") {
      return <DefaultSettingsProfilePage />;
    } else if (style === "linear") {
      return <LinearSettingsProfilePage />;
    } else if (style === "lucid") {
      return <LucidSettingsProfilePage />;
    } else if (style === "material") {
      return <MaterialSettingsProfilePage />;
    } else if (style === "moon") {
      return <MoonSettingsProfilePage />;
    } else if (style === "snow") {
      return <SnowSettingsProfilePage />;
    } else if (style === "spectrum") {
      return <SpectrumSettingsProfilePage />;
    } else if (style === "wedges") {
      return <WedgesSettingsProfilePage />;
    } else if (style === "neon") {
      return <NeonSettingsProfilePage />;
    } else if (style === "libelle") {
      return <LibelleSettingsProfilePage />;
    } else {
      return <DefaultSettingsProfilePage />;
    }
  } else if (page === "dashboard") {
    if (style === "carbon") {
      return <CarbonDashboardPage />;
    } else if (style === "catalyst") {
      return <CatalystDashboardPage />;
    } else if (style === "default") {
      return <DefaultDashboardPage />;
    } else if (style === "linear") {
      return <LinearDashboardPage />;
    } else if (style === "lucid") {
      return <LucidDashboardPage />;
    } else if (style === "material") {
      return <MaterialDashboardPage />;
    } else if (style === "moon") {
      return <MoonDashboardPage />;
    } else if (style === "snow") {
      return <SnowDashboardPage />;
    } else if (style === "spectrum") {
      return <SpectrumDashboardPage />;
    } else if (style === "wedges") {
      return <WedgesDashboardPage />;
    } else if (style === "neon") {
      return <NeonDashboardPage />;
    } else if (style === "libelle") {
      return <LibelleDashboardPage />;
    } else {
      return <DefaultDashboardPage />;
    }
  } else if (page === "music") {
    if (style === "carbon") {
      return <CarbonMusicPage />;
    } else if (style === "catalyst") {
      return <CatalystMusicPage />;
    } else if (style === "default") {
      return <DefaultMusicPage />;
    } else if (style === "linear") {
      return <LinearMusicPage />;
    } else if (style === "lucid") {
      return <LucidMusicPage />;
    } else if (style === "material") {
      return <MaterialMusicPage />;
    } else if (style === "moon") {
      return <MoonMusicPage />;
    } else if (style === "snow") {
      return <SnowMusicPage />;
    } else if (style === "spectrum") {
      return <SpectrumMusicPage />;
    } else if (style === "wedges") {
      return <WedgesMusicPage />;
    } else if (style === "neon") {
      return <NeonMusicPage />;
    } else if (style === "libelle") {
      return <LibelleMusicPage />;
    } else {
      return <DefaultMusicPage />;
    }
  } else if (page === "playground") {
    if (style === "carbon") {
      return <CarbonPlaygroundPage />;
    } else if (style === "catalyst") {
      return <CatalystPlaygroundPage />;
    } else if (style === "default") {
      return <DefaultPlaygroundPage />;
    } else if (style === "linear") {
      return <LinearPlaygroundPage />;
    } else if (style === "lucid") {
      return <LucidPlaygroundPage />;
    } else if (style === "material") {
      return <MaterialPlaygroundPage />;
    } else if (style === "moon") {
      return <MoonPlaygroundPage />;
    } else if (style === "snow") {
      return <SnowPlaygroundPage />;
    } else if (style === "spectrum") {
      return <SpectrumPlaygroundPage />;
    } else if (style === "wedges") {
      return <WedgesPlaygroundPage />;
    } else if (style === "neon") {
      return <NeonPlaygroundPage />;
    } else if (style === "libelle") {
      return <LibellePlaygroundPage />;
    } else {
      return <DefaultPlaygroundPage />;
    }
  } else if (page === "tasks") {
    if (style === "carbon") {
      return <CarbonTaskPage />;
    } else if (style === "catalyst") {
      return <CatalystTaskPage />;
    } else if (style === "default") {
      return <DefaultTaskPage />;
    } else if (style === "linear") {
      return <LinearTaskPage />;
    } else if (style === "lucid") {
      return <LucidTaskPage />;
    } else if (style === "material") {
      return <MaterialTaskPage />;
    } else if (style === "moon") {
      return <MoonTaskPage />;
    } else if (style === "snow") {
      return <SnowTaskPage />;
    } else if (style === "spectrum") {
      return <SpectrumTaskPage />;
    } else if (style === "wedges") {
      return <WedgesTaskPage />;
    } else if (style === "neon") {
      return <NeonTaskPage />;
    } else if (style === "libelle") {
      return <LibelleTaskPage />;
    } else {
      return <DefaultTaskPage />;
    }
  } else {
    return <DefaultMailPage />;
  }
}

export function renderStyleHero(style: Style) {
  switch (style) {
    case "carbon":
      return <CarbonUI />;
    case "catalyst":
      return <CatalystUI />;
    case "default":
      return <DefaultUI />;
    case "linear":
      return <LinearUI />;
    case "material":
      return <MaterialUI />;
    case "spectrum":
      return <SpectrumUI />;
    case "wedges":
      return <WedgesUI />;
    case "moon":
      return <MoonUI />;
    case "lucid":
      return <LucidUI />;
    case "snow":
      return <SnowUI />;
    case "neon":
      return <NeonUI />;
    case "libelle":
      return <LibelleUI />;
    default:
      return <DefaultUI />;
  }
}

export function renderStyleShowcaseComponents(style: Style) {
  switch (style) {
    case "carbon":
      return <CarbonShowcaseComponents />;
    case "linear":
      return <LinearShowcaseComponents />;
    case "material":
      return <MaterialShowcaseComponents />;
    case "catalyst":
      return <CatalystShowcaseComponents />;
    case "default":
      return <DefaultShowcaseComponents />;
    case "spectrum":
      return <SpectrumShowcaseComponents />;
    case "wedges":
      return <WedgesShowcaseComponents />;
    case "moon":
      return <MoonShowcaseComponents />;
    case "lucid":
      return <LucidShowcaseComponents />;
    case "snow":
      return <SnowShowcaseComponents />;
    case "neon":
      return <NeonShowcaseComponents />;
    case "libelle":
      return <LibelleShowcaseComponents />;
    default:
      return <DefaultShowcaseComponents />;
  }
}
