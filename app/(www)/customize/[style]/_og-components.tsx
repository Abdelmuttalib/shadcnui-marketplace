import React from "react";

interface OgGlowProps {
  color?: string;
  secondaryColor?: string;
  variant?: "top" | "above" | "center" | "bottom" | "below";
}

export function OgGlow({
  color = "#6366f1",
  secondaryColor = "#818cf8",
  variant = "top",
}: OgGlowProps) {
  const positions = {
    top: { top: -100 },
    above: { top: -220 },
    center: { top: 150 },
    bottom: { bottom: -100 },
    below: { bottom: -220 },
  };

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: 350,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...positions[variant],
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 750,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${color}55 0%, ${color}20 35%, transparent 70%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${secondaryColor}55 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

interface OgGrainProps {
  opacity?: number;
}

export function OgGrain({ opacity = 0.045 }: OgGrainProps) {
  return (
    <img
      src="data:image/png;base64,YOUR_NOISE_TEXTURE_BASE64"
      width={1200}
      height={630}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity,
      }}
    />
  );
}
