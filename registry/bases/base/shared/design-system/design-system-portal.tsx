"use client";

import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";

import { useDesignSystemPortalContainer } from "./design-system-context";

interface PortalProps {
  container?: HTMLElement | null;
}

interface DesignSystemPortalProps {
  children: ReactElement<PortalProps>;
}

export function DesignSystemPortal({ children }: DesignSystemPortalProps) {
  const container = useDesignSystemPortalContainer();

  if (!isValidElement(children)) {
    return null;
  }

  // Outside a design-system environment:
  // preserve the original portal behavior.
  if (container === undefined) {
    return children;
  }

  // Wait until the environment's portal root exists.
  if (container === null) {
    return null;
  }

  // Inject the environment's portal container.
  return cloneElement(children, {
    container,
  });
}
