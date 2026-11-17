import React from "react";

interface GrainOverlayProps {
  opacity?: number;
  id?: string;
}

export function GrainOverlay({
  opacity = 0.045,
  id = "grain",
}: GrainOverlayProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}
