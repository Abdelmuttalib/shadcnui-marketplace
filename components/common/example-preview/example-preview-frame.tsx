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
  const isLoadedRef = useRef(false);

  // Keep track of whether the iframe document has loaded.
  // const isLoadedRef = useRef(false);

  // Always keep the latest configuration available.
  const configRef = useRef({ palette, radius, theme });
  configRef.current = { palette, radius, theme };

  const onLoadRef = useRef(onLoad);
  onLoadRef.current = onLoad;

  // Include the current configuration in the initial navigation.
  const buildSrc = useCallback((url: string) => {
    const result = new URL(url, window.location.origin);

    const { palette, radius, theme } = configRef.current;

    if (typeof palette === "string") {
      result.searchParams.set("palette", palette);
    }

    if (radius) {
      result.searchParams.set("radius", radius);
    }

    if (theme) {
      result.searchParams.set("theme", theme);
    }

    return result.toString();
  }, []);

  const sendTheme = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe?.contentWindow || !isLoadedRef.current) return;

    iframe?.contentWindow?.postMessage(
      {
        type: "THEME_UPDATE",
        palette,
        radius,
        theme,
      },
      window.location.origin
    );
  }, [palette, radius, theme]);

  // useImperativeHandle(
  //   forwardedRef,
  //   () => ({
  //     refresh() {
  //       isLoadedRef.current = false;

  //       if (iframeRef.current) {
  //         iframeRef.current.src = src;
  //       }
  //     },

  //     postMessage(message) {
  //       iframeRef.current?.contentWindow?.postMessage(
  //         message,
  //         window.location.origin
  //       );
  //     },
  //   }),
  //   [src]
  // );

  useImperativeHandle(
    forwardedRef,
    () => ({
      refresh() {
        isLoadedRef.current = false;

        if (iframeRef.current) {
          iframeRef.current.src = buildSrc(src);
        }
      },

      postMessage(message) {
        iframeRef.current?.contentWindow?.postMessage(
          message,
          window.location.origin
        );
      },
    }),
    [src, buildSrc]
  );

  // Navigate whenever the example or style changes.
  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    isLoadedRef.current = false;
    iframe.src = buildSrc(src);
  }, [src, buildSrc]);

  // Synchronize theme and palette without reloading.
  useEffect(() => {
    sendTheme();
  }, [sendTheme]);

  const handleLoad = () => {
    isLoadedRef.current = true;

    sendTheme();
    onLoad?.();
  };

  return (
    <iframe
      ref={iframeRef}
      // src={src}
      onLoad={handleLoad}
      className={className}
      style={style}
    />
  );
});

ExamplePreviewFrame.displayName = "ExamplePreviewFrame";
