"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export interface ExamplePreviewFrameHandle {
  refresh: () => void;
  postMessage: (message: unknown) => void;
}

interface ExamplePreviewFrameProps {
  src: string;
  palette?: unknown;
  radius?: string;
  theme?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
}

export const ExamplePreviewFrame = forwardRef<
  ExamplePreviewFrameHandle,
  ExamplePreviewFrameProps
>(function ExamplePreviewFrame(
  { src, palette, radius, theme, className, style, onLoad },
  forwardedRef
) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendTheme = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: "THEME_UPDATE",
        palette,
        radius,
        theme,
      },
      window.location.origin
    );
  }, [palette, radius, theme]);

  useImperativeHandle(
    forwardedRef,
    () => ({
      refresh() {
        if (iframeRef.current) {
          iframeRef.current.src = src;
        }
      },

      postMessage(message) {
        iframeRef.current?.contentWindow?.postMessage(
          message,
          window.location.origin
        );
      },
    }),
    [src]
  );

  // Synchronize theme and palette without reloading.
  useEffect(() => {
    sendTheme();
  }, [sendTheme]);

  const handleLoad = () => {
    sendTheme();
    onLoad?.();
  };

  return (
    <iframe
      ref={iframeRef}
      src={src}
      onLoad={handleLoad}
      className={className}
      style={style}
    />
  );
});

ExamplePreviewFrame.displayName = "ExamplePreviewFrame";
