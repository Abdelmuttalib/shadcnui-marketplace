import { ImageResponse } from "next/og";

import { getStyleByName } from "@/lib/services/presets";

import { getStylePalette } from "./_og-colors";
import { getStyleFontFamilies, loadStyleFonts } from "./_og-fonts";
import { OgGlow, OgGrain } from "./_og-components";

export const runtime = "nodejs";

export const alt = "Design system style preview";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function brandedFallback() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090b",
        color: "#fafafa",
        fontSize: 64,
        fontWeight: 700,
      }}
    >
      YourBrand
    </div>,
    size
  );
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
  try {
    const { style: styleName } = await params;

    // 1. Retrieve the style.
    const style = getStyleByName(styleName);

    if (!style) {
      return brandedFallback();
    }

    // 2. Retrieve the style's palette.
    const palette = getStylePalette(style.name);

    const colors = palette.light;

    // 3. Retrieve the style's fonts.
    const { sans, heading } = getStyleFontFamilies(style);

    const fonts = await loadStyleFonts(style);

    // 4. Resolve colors with sensible fallbacks.
    const background = colors.background ?? "#ffffff";
    const foreground = colors.foreground ?? "#18181b";
    const card = colors.card ?? background;
    const primary = colors.primary ?? "#6366f1";
    const primaryForeground = colors["primary-foreground"] ?? "#ffffff";
    const secondary = colors.secondary ?? "#f4f4f5";
    const muted = colors.muted ?? "#f4f4f5";
    const mutedForeground = colors["muted-foreground"] ?? "#71717a";
    const border = colors.border ?? "#e4e4e7";

    const radius = style.defaultRadius;

    // 5. Generate the OG image.
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 56,
          gap: 48,
          background,
          color: foreground,
          fontFamily: sans,
        }}
      >
        {/* Background effects */}
        <OgGlow
          color={primary}
          secondaryColor={colors.accent ?? primary}
          variant="top"
        />

        {/* Left: Style information */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 18,
                fontWeight: 600,
                color: mutedForeground,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: primary,
                }}
              />
              DESIGN SYSTEM
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  fontSize: 72,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-3px",
                  fontFamily: heading,
                }}
              >
                {style.title}
              </div>

              <div
                style={{
                  fontSize: 22,
                  lineHeight: 1.5,
                  color: mutedForeground,
                  maxWidth: 450,
                }}
              >
                {style.description}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontSize: 16,
                color: mutedForeground,
              }}
            >
              <span>Typography</span>
              <span>·</span>
              <span>{sans}</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontSize: 16,
                color: mutedForeground,
              }}
            >
              <span>Radius</span>
              <span>·</span>
              <span>{radius}</span>
            </div>

            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginTop: 12,
              }}
            >
              YourBrand
            </div>
          </div>
        </div>

        {/* Right: Actual style preview */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: 28,
              gap: 24,
              background: card,
              border: `1px solid ${border}`,
              borderRadius: 20,
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            }}
          >
            {/* Preview heading */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    fontFamily: heading,
                  }}
                >
                  Welcome back!
                </span>
              </div>

              <div
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: radius,
                  background: secondary,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                ✦
              </div>
            </div>

            {/* Preview content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: 18,
                background: muted,
                borderRadius: radius,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: mutedForeground,
                }}
              >
                Your workspace
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    fontFamily: heading,
                  }}
                >
                  24,580
                </span>

                <span
                  style={{
                    fontSize: 14,
                    color: primary,
                    fontWeight: 600,
                  }}
                >
                  +12.5%
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  height: 10,
                  borderRadius: radius,
                  overflow: "hidden",
                  background: border,
                }}
              >
                <div
                  style={{
                    width: "72%",
                    height: "100%",
                    background: primary,
                  }}
                />
              </div>
            </div>

            {/* Preview buttons */}
            <div
              style={{
                display: "flex",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 12px",
                  borderRadius: radius,
                  background: primary,
                  color: primaryForeground,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Get started
              </div>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 12px",
                  borderRadius: radius,
                  border: `1px solid ${border}`,
                  color: foreground,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Learn more
              </div>
            </div>

            {/* Color palette */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: mutedForeground,
                }}
              >
                COLOR PALETTE
              </span>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                }}
              >
                {[primary, secondary, muted, border, foreground].map(
                  (color, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flex: 1,
                        height: 38,
                        borderRadius: radius,
                        background: color,
                        border: `1px solid ${border}`,
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>,
      {
        ...size,
        fonts: fonts.length > 0 ? fonts : undefined,
      }
    );
  } catch (err) {
    console.error("[opengraph-image] render failed", err);

    return brandedFallback();
  }
}

// import { ImageResponse } from "next/og";
// import { DesignSystemProviderOG } from "@/components/design-system-provider-og";
// import { EmptyDistributeTrack } from "@/components/preview/cards/og/empty-distribute-track";
// import { ContributionHistory } from "@/components/preview/cards/og/contribution-history";
// import { getBuiltTheme, getDecodedPreset } from "@/lib/domain/preset-css";
// import { getPresetByCode, getStyleByName } from "@/lib/services/presets";
// import { buildHexTheme } from "./_og-colors";
// import { getPresetFontFamilies, loadPresetFonts } from "./_og-fonts";

// export const runtime = "nodejs";
// export const alt = "dialectcn preset preview";
// export const size = { width: 1200, height: 630 };
// export const contentType = "image/png";

// function brandedFallback() {
//   return new ImageResponse(
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#09090b",
//         color: "#fafafa",
//         fontSize: 64,
//       }}
//     >
//       dialectcn
//     </div>,
//     size
//   );
// }

// export default async function OgImage({
//   params,
// }: {
//   params: Promise<{ code: string }>;
// }) {
//   try {
//     const { code } = await params;
//     const savedPreset = await getPresetByCode(code);
//     if (!savedPreset) return brandedFallback();

//     const preset = getDecodedPreset(savedPreset.code);
//     const theme = getBuiltTheme(savedPreset.code);
//     if (!preset || !theme) return brandedFallback();

//     const hexTheme = buildHexTheme(theme);
//     const { sans, heading } = getPresetFontFamilies(preset);
//     const fonts = await loadPresetFonts(preset);

//     return new ImageResponse(
//       <DesignSystemProviderOG
//         preset={preset}
//         theme={hexTheme}
//         fontSans={sans}
//         fontHeading={heading}
//       >
//         <div
//           style={{
//             display: "flex",
//             gap: 40,
//             padding: 56,
//             width: "100%",
//             height: "100%",
//             alignItems: "stretch",
//           }}
//         >
//           <div style={{ display: "flex", flex: 1 }}>
//             <EmptyDistributeTrack />
//           </div>
//           <div style={{ display: "flex", flex: 1 }}>
//             <ContributionHistory />
//           </div>
//         </div>
//       </DesignSystemProviderOG>,
//       { ...size, fonts: fonts.length > 0 ? fonts : undefined }
//     );
//   } catch (err) {
//     console.error("[opengraph-image] render failed", err);
//     return brandedFallback();
//   }
// }
