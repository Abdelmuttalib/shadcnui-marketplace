"use client";

import * as React from "react";
import { useDesignSystemSearchParams } from "../lib/search-params";

// import { CMD_K_FORWARD_TYPE } from "@/app/(www)/(create)/components/action-menu";
// import { CreateDevtools } from "@/app/(www)/(create)/components/create-devtools";
// import { DARK_MODE_FORWARD_TYPE } from "@/app/(www)/(create)/components/mode-switcher";
// import { usePreviewOverrideValue } from "@/app/(www)/(create)/components/preview-override";
// import { PreviewSwitcher } from "@/app/(www)/(create)/components/preview-switcher";
// import { RANDOMIZE_FORWARD_TYPE } from "@/app/(www)/(create)/components/random-button";
// import { sendToIframe } from "@/app/(www)/(create)/hooks/use-iframe-sync";
// import { OPEN_PRESET_FORWARD_TYPE } from "@/app/(www)/(create)/hooks/use-open-preset";
// import { RESET_FORWARD_TYPE } from "@/app/(www)/(create)/hooks/use-reset";
// import {
//   serializeDesignSystemSearchParams,
//   useDesignSystemSearchParams,
// } from "@/app/(www)/(create)/lib/search-params";

// Hoisted — avoids recreating on every message event. (js-hoist-regexp)
const MAC_REGEX = /Mac|iPhone|iPad|iPod/;

function isSameParams(
  a: ReturnType<typeof useDesignSystemSearchParams>[0] | null,
  b: ReturnType<typeof useDesignSystemSearchParams>[0]
) {
  if (!a) {
    return false;
  }

  return Object.keys(b).every(
    (key) => a[key as keyof typeof b] === b[key as keyof typeof b]
  );
}

export function Preview() {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const iframeWindow = iframeRef.current?.contentWindow;
      if (
        !iframeWindow ||
        event.origin !== window.location.origin ||
        event.source !== iframeWindow ||
        !event.data ||
        typeof event.data !== "object"
      ) {
        return;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const iframeSrc = React.useMemo(() => {
    // The iframe src needs to include the serialized design system params
    // for the initial load, but not be reactive to them as it would cause
    // full-iframe reloads on every param change (flashes & loss of state).
    // Further updates of the search params will be sent to the iframe
    // via a postMessage channel, for it to sync its own history onto the host's.
    return `/preview/base/deafult-v4`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ring-foreground/10 md:ring-muted dark:ring-foreground/10 relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl ring">
      <div className="relative z-0 mx-auto flex w-full flex-1 flex-col overflow-hidden">
        <div className="bg-muted dark:bg-muted/30 absolute inset-0" />
        <iframe
          // key={params.base + params.item}
          ref={iframeRef}
          src={iframeSrc}
          className="z-10 size-full flex-1"
          title="Preview"
        />
      </div>
      {/* <CreateDevtools />
      <PreviewSwitcher /> */}
    </div>
  );
}
