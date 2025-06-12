import { Registry } from "shadcn/registry";

export const themePalettes = {
  "palette-1": {
    light: {
      primary: "0.56 0.007 250" /* oklch(0.56 0.007 250) */,
      "primary-foreground": "1 0 250" /* oklch(1 0 250) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,

      "chart-1": "0.55 0.22 260" /* oklch(0.55 0.22 260) */,
      "chart-2": "0.63 0.1 190" /* oklch(0.63 0.1 190) */,
      "chart-3": "0.67 0.18 360" /* oklch(0.67 0.18 360) */,
      "chart-4": "0.64 0.15 245" /* oklch(0.64 0.15 245) */,
      "chart-5": "0.66 0.2 25" /* oklch(0.66 0.2 25) */,

      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      secondary: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      "secondary-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      muted: "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "muted-foreground": "0.44 0.02 250" /* oklch(0.44 0.020 250) */,
      accent: "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      border: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      input: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      ring: "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "sidebar-primary": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "sidebar-primary-foreground": "1 0 250" /* oklch(1 0 250) */,
      "sidebar-accent": "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "sidebar-accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-border": "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,
    },

    dark: {
      background: "0.19 0.007 250" /* oklch(0.19 0.007 250) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "muted-foreground": "0.7 0.018 250" /* oklch(0.70 0.018 250) */,
      accent: "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.5692 0.21 25.92" /* oklch(0.5692 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      input: "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      ring: "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,

      "chart-1": "0.6265 0.24 261.95" /* oklch(0.6265 0.24 261.95) */,
      "chart-2": "0.6891 0.1 192.36" /* oklch(0.6891 0.1 192.36) */,
      "chart-3": "0.6989 0.19 357.26" /* oklch(0.6989 0.19 357.26) */,
      "chart-4": "0.6906 0.16 246.5" /* oklch(0.6906 0.16 246.5) */,
      "chart-5": "0.62 0.2 22.13" /* oklch(0.62 0.2 22.13) */,

      "sidebar-background": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-foreground": "0.96 0.002 250" /* oklch(0.96 0.002 250) */,
      "sidebar-primary": "0.36 0.015 250" /* oklch(0.36 0.015 250) */,
      "sidebar-primary-foreground": "1 0 0",
      "sidebar-accent": "0.19 0.007 250" /* oklch(0.19 0.007 250) */,
      "sidebar-accent-foreground": "1 0 0",
      "sidebar-border": "0.26 0.007 250" /* oklch(0.26 0.007 250) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(.623 .214 259.815) */,
    },
  },
  "palette-2": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

      primary: "0.4493 0.0493 217.02" /* oklch(0.4493 0.0493 217.02) */,
      "primary-foreground": "1 0 285" /* oklch(1 0 285) */,
      destructive: "0.50 0.18 25" /* oklch(0.50 0.18 25) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,

      secondary: "0.91 0.005 250" /* oklch(0.91 0.005 250) */,
      "secondary-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,

      muted: "0.97 0 285" /* oklch(0.85 0 285) */,
      "muted-foreground": "0.48 0.020 285" /* oklch(0.36 0.020 285) */,
      accent: "0.97 0 285" /* oklch(0.97 0 285) */,
      "accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      border: "0.90 0.005 285" /* oklch(0.90 0.005 285) */,
      input: "0.90 0.005 285" /* oklch(0.90 0.005 285) */,
      ring: "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,

      "chart-1": "0.50 0.2 260" /* oklch(0.50 0.2 260) */,
      "chart-2": "0.55 0.08 190" /* oklch(0.55 0.08 190) */,
      "chart-3": "0.60 0.16 360" /* oklch(0.60 0.16 360) */,
      "chart-4": "0.58 0.14 245" /* oklch(0.58 0.14 245) */,
      "chart-5": "0.62 0.18 22" /* oklch(0.62 0.18 22) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "sidebar-primary":
        "0.4493 0.0493 217.02" /* oklch(0.4493 0.0493 217.02) */,
      "sidebar-primary-foreground": "1 0 285" /* oklch(1 0 285) */,
      "sidebar-accent": "0.97 0 285" /* oklch(0.85 0 285) */,
      "sidebar-accent-foreground": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-border": "0.90 0.005 285" /* oklch(0.90 0.005 285) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },
    dark: {
      background: "0.17 0.007 285" /* oklch(0.17 0.007 285) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,

      primary: "0.4493 0.0493 217.02" /* oklch(0.4493 0.0493 217.02) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.6292 0.21 25.92" /* oklch(0.6292 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,

      card: "0.23 0.007 285" /* oklch(0.23 0.007 285) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.32 0.007 285" /* oklch(0.32 0.007 285) */,
      "muted-foreground": "0.58 0.018 285" /* oklch(0.58 0.018 285) */,
      accent: "0.32 0.03 217.02" /* oklch(0.32 0.03 217.02) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.22 0.007 285" /* oklch(0.22 0.007 285) */,
      input: "0.28 0.015 285" /* oklch(0.28 0.015 285) */,
      ring: "0.4493 0.0493 217.02" /* oklch(0.4493 0.0493 217.02) */,

      "chart-1": "0.50 0.2 260" /* oklch(0.50 0.2 260) */,
      "chart-2": "0.55 0.08 190" /* oklch(0.55 0.08 190) */,
      "chart-3": "0.60 0.16 360" /* oklch(0.60 0.16 360) */,
      "chart-4": "0.58 0.14 245" /* oklch(0.58 0.14 245) */,
      "chart-5": "0.62 0.18 22" /* oklch(0.62 0.18 22) */,

      "sidebar-background": "0.12 0.005 250" /* oklch(0.12 0.005 250) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary":
        "0.4493 0.0493 217.02" /* oklch(0.4493 0.0493 217.02) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.19 0.007 285" /* oklch(0.13 0.007 285) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.22 0.007 285" /* oklch(0.19 0.007 285) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },
  },

  "palette-3": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      primary: "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.9067 0.01 250" /* oklch(0.9067 0.01 250) */,
      "secondary-foreground": "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      muted: "0.9067 0.01 250" /* oklch(0.9067 0.01 250) */,
      "muted-foreground": "0.5417 0.01 250" /* oklch(0.5417 0.01 250) */,
      accent: "0.9672 0.01 250" /* oklch(0.9672 0.01 250) */,
      "accent-foreground": "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      destructive: "0.5692 0.21 25.92" /* oklch(0.5692 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.9067 0.01 250" /* oklch(0.9067 0.01 250) */,
      input: "0.8666 0.01 250" /* oklch(0.8666 0.01 250) */,
      ring: "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,

      "chart-1": "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
      "chart-2": "0.6291 0.1 192.36" /* oklch(0.6291 0.1 192.36) */,
      "chart-3": "0.6689 0.19 357.26" /* oklch(0.6689 0.19 357.26) */,
      "chart-4": "0.6406 0.16 246.5" /* oklch(0.6406 0.16 246.5) */,
      "chart-5": "0.62 0.2 22.13" /* oklch(0.62 0.2 22.13) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.2846 0.01 250" /* oklch(0.2846 0.01 250) */,
      "sidebar-primary": "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.9672 0.01 250" /* oklch(0.9672 0.01 250) */,
      "sidebar-accent-foreground":
        "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      "sidebar-border": "0.9067 0.01 250" /* oklch(0.9067 0.01 250) */,
      "sidebar-ring": "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
    },
    dark: {
      background: "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.22 0.01 250" /* oklch(0.22 0.01 250) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.2386 0.01 250" /* oklch(0.2386 0.01 250) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.2846 0.01 250" /* oklch(0.2846 0.01 250) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.2846 0.01 250" /* oklch(0.2846 0.01 250) */,
      "muted-foreground": "0.7316 0.01 250" /* oklch(0.7316 0.01 250) */,
      accent: "0.2846 0.01 250" /* oklch(0.2846 0.01 250) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.5692 0.21 25.92" /* oklch(0.5692 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.2846 0.01 250" /* oklch(0.2846 0.01 250) */,
      input: "0.4086 0.01 250" /* oklch(0.4086 0.01 250) */,
      ring: "0.9672 0.01 250" /* oklch(0.9672 0.01 250) */,

      "chart-1": "0.6265 0.24 261.95" /* oklch(0.6265 0.24 261.95) */,
      "chart-2": "0.6891 0.1 192.36" /* oklch(0.6891 0.1 192.36) */,
      "chart-3": "0.6989 0.19 357.26" /* oklch(0.6989 0.19 357.26) */,
      "chart-4": "0.6906 0.16 246.5" /* oklch(0.6906 0.16 246.5) */,
      "chart-5": "0.62 0.2 22.13" /* oklch(0.62 0.2 22.13) */,

      "sidebar-background": "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      "sidebar-foreground": "0.9067 0.01 250" /* oklch(0.9067 0.01 250) */,
      "sidebar-primary": "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.9672 0.01 250" /* oklch(0.9672 0.01 250) */,
      "sidebar-accent-foreground":
        "0.2002 0.01 250" /* oklch(0.2002 0.01 250) */,
      "sidebar-border": "0.2846 0.01 250" /* oklch(0.2846 0.01 250) */,
      "sidebar-ring": "0.5565 0.24 261.95" /* oklch(0.5565 0.24 261.95) */,
    },
  },

  "palette-4": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "0.97 0.0013 286.38" /* oklch(0.97 0.0013 286.38) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0 0 0" /* oklch(0 0 0) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.93 0.0602 258.65" /* oklch(0.93 0.0602 258.65) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.93 0 0" /* oklch(0.93 0 0) */,
      "muted-foreground": "0.60 0 0" /* oklch(0.60 0 0) */,
      accent: "0.96 0 0" /* oklch(0.96 0 0) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.66 0.2204 25.5" /* oklch(0.66 0.2204 25.5) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.90 0 0" /* oklch(0.90 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.89 0.0602 258.65" /* oklch(0.89 0.0602 258.65) */,

      "chart-1": "0.7381 0.1275 282.83" /* oklch(0.7381 0.1275 282.83) */,
      "chart-2": "0.8598 0.0772 183.48" /* oklch(0.8598 0.0772 183.48) */,
      "chart-3": "0 0 0" /* oklch(0 0 0) */,
      "chart-4":
        "0.7968 0.103455 257.2023" /* oklch(0.7968 0.103455 257.2023) */,
      "chart-5": "0.8238 0.0602 13.35" /* oklch(0.8238 0.0602 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0 0" /* oklch(0.96 0 0) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.90 0 0" /* oklch(0.90 0 0) */,
      "sidebar-ring": "0.89 0.0602 258.65" /* oklch(0.89 0.0602 258.65) */,
    },

    dark: {
      background: "0.21 0.006 285.885" /* oklch(0.21 0.006 285.885) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.24 0.006 286.033" /* oklch(0.24 0.006 286.033) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "muted-foreground":
        "0.705 0.015 286.067" /* oklch(0.705 0.015 286.067) */,
      accent: "0.34 0.013 285.805" /* oklch(0.34 0.013 285.805) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "68.92% 0.21 25.92" /* oklch(68.92% 0.21 25.92) */,
      "destructive-foreground": "0 0.0099 269.97" /* oklch(1 0 0) */,
      border: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      input: "0.37 0.013 285.805" /* oklch(0.37 0.013 285.805) */,
      ring: "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,

      "chart-1": "0.6265 0.24 261.95" /* oklch(0.6265 0.24 261.95) */,
      "chart-2": "0.6891 0.1 192.36" /* oklch(0.6891 0.1 192.36) */,
      "chart-3": "0.6989 0.19 357.26" /* oklch(0.6989 0.19 357.26) */,
      "chart-4": "0.6906 0.16 246.5" /* oklch(0.6906 0.16 246.5) */,
      "chart-5": "0.62 0.2 22.13" /* oklch(0.62 0.2 22.13) */,

      "sidebar-background":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      "sidebar-foreground":
        "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "sidebar-primary": "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.34 0.013 285.805" /* oklch(0.34 0.013 285.805) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },
  },
  "palette-5": {
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      primary: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "secondary-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      muted: "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "muted-foreground":
        "0.542 0.017 285.786" /* oklch(0.542 0.017 285.786) */,
      accent: "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "accent-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      destructive: "0.5692 0.21 25.92" /* oklch(0.5692 0.21 25.92) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      input: "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      ring: "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,

      "chart-1": "0.7381 0.1275 282.83" /* oklch(0.7381 0.1275 282.83) */,
      "chart-2": "0.8598 0.0772 183.48" /* oklch(0.8598 0.0772 183.48) */,
      "chart-3": "0 0 0" /* oklch(0 0 0) */,
      "chart-4":
        "0.7968 0.103455 257.2023" /* oklch(0.7968 0.103455 257.2023) */,
      "chart-5": "0.8238 0.0602 13.35" /* oklch(0.8238 0.0602 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground":
        "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "sidebar-primary": "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "sidebar-accent-foreground":
        "0.141 0.005 285.823" /* oklch(0.141 0.005 285.823) */,
      "sidebar-border": "0.92 0.004 286.32" /* oklch(0.92 0.004 286.32) */,
      "sidebar-ring": "0.623 0.214 259.815" /* oklch(0.623 0.214 259.815) */,
    },

    dark: {
      background: "21.5% 0.0099 269.97" /* oklch(21.5% 0 0) */,
      foreground: "1 0.0099 269.97" /* oklch(1 0 0) */,
      card: "0.24 0.0099 269.97" /* oklch(0.24 0 0) */,
      "card-foreground": "1 0.0099 269.97" /* oklch(1 0 0) */,
      popover: "0.24 0.0099 269.97" /* oklch(0.24 0 0) */,
      "popover-foreground": "1 0.0099 269.97" /* oklch(1 0 0) */,
      primary: "0.7381 0.0602 258.65" /* oklch(0.7381 0.0602 258.65) */,
      "primary-foreground": "0 0.0099 269.97" /* oklch(0 0 0) */,
      secondary: "0.284 0.0099 269.97" /* oklch(0.284 0 0) */,
      "secondary-foreground": "1 0.0099 269.97" /* oklch(1 0 0) */,
      muted: "0.274 0.006 286.033" /* oklch(0.274 0.006 286.033) */,
      "muted-foreground":
        "0.705 0.0099 269.97" /* oklch(0.705 0.0099 269.97) */,
      accent: "0.31 0.0099 269.97" /* oklch(0.31 0 0) */,
      "accent-foreground": "1 0.0099 269.97" /* oklch(1 0 0) */,
      destructive: "0.83 0.2804 25.5" /* oklch(0.83 0.2804 25.5) */,
      "destructive-foreground": "0 0.0099 269.97" /* oklch(1 0 0) */,
      border: "0.304 0.0099 269.97" /* oklch(0.304 0 0) */,
      input: "0.37 0.0099 269.97" /* oklch(0.37 0 0) */,
      ring: "0.89 0.0602 258.65" /* oklch(0.89 0.0602 258.65) */,

      "chart-1": "0.6265 0.24 261.95" /* oklch(0.6265 0.24 261.95) */,
      "chart-2": "0.6891 0.1 192.36" /* oklch(0.6891 0.1 192.36) */,
      "chart-3": "0.6989 0.19 357.26" /* oklch(0.6989 0.19 357.26) */,
      "chart-4": "0.6906 0.16 246.5" /* oklch(0.6906 0.16 246.5) */,
      "chart-5": "0.62 0.2 22.13" /* oklch(0.62 0.2 22.13) */,

      "sidebar-background": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-foreground":
        "0.967 0.001 286.375" /* oklch(0.967 0.001 286.375) */,
      "sidebar-primary":
        "0.7381 0.0602 258.65" /* oklch(0.7381 0.0602 258.65) */,
      "sidebar-primary-foreground": "0 0.0099 269.97" /* oklch(0 0 0) */,
      "sidebar-accent": "0.21 0.006 285.885" /* oklch(0.21 0.006 285.885) */,
      "sidebar-accent-foreground": "1 0.0099 269.97" /* oklch(1 0 0) */,
      "sidebar-border": "0.304 0.0099 269.97" /* oklch(0.304 0 0) */,
      "sidebar-ring": "0.89 0.0602 258.65" /* oklch(0.89 0.0602 258.65) */,
    },
  },

  "palette-6": {
    // #442121 #713637, #bc7576 #d3a3a4 #504237, #9D8F81, #A2988A, #DAD2C8, #26201C
    /*
    oklch(0.3 0.0538 20.82)
    oklch(0.41 0.0835 20.35)
    oklch(0.64 0.0897 18.95)
    oklch(0.76 0.057 17.1)
    oklch(0.39 0.0264 60.06)
    oklch(0.66 0.0263 67.34)
    oklch(0.68 0.0233 76.45)
    oklch(0.87 0.0162 73.66)
    oklch(0.25 0.0119 55.78)
    */
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      primary: "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.63 0.0264 60.06" /* oklch(0.63 0.0264 60.06) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.92 0.0233 76.45" /* oklch(0.92 0.0233 76.45) */,
      "muted-foreground": "0.62 0.0119 55.78" /* oklch(0.62 0.0119 55.78) */,
      accent: "0.95 0.0233 76.45" /* oklch(0.95 0.0233 76.45) */,
      "accent-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.93 0.0162 73.66" /* oklch(0.93 0.0162 73.66) */,
      input: "0.89 0.0162 73.66" /* oklch(0.89 0.0162 73.66) */,

      ring: "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,

      "chart-1": "0.76 0.057 17.1" /* oklch(0.76 0.057 17.1) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      "sidebar-primary": "0.3 0.0538 20.82" /* oklch(0.3 0.0538 20.82) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.68 0.0233 76.45" /* oklch(0.68 0.0233 76.45) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.93 0.0162 73.66" /* oklch(0.93 0.0162 73.66) */,
      "sidebar-ring": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
    },
    dark: {
      background: "0.20 0.0119 55.78" /* oklch(0.20 0.0119 55.78) */,
      foreground: "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,

      card: "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      "card-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      popover: "0.22 0.0119 55.78" /* oklch(0.22 0.0119 55.78) */,
      "popover-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      primary: "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "primary-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,

      secondary: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "secondary-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,

      muted: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "muted-foreground": "0.67 0.0162 73.66" /* oklch(0.67 0.0162 73.66) */,
      accent: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "accent-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      border: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      input: "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      ring: "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,

      "chart-1": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "0.20 0.0119 55.78" /* oklch(0.20 0.0119 55.78) */,
      "sidebar-foreground": "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      "sidebar-primary": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "sidebar-primary-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      "sidebar-accent": "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "sidebar-accent-foreground":
        "0.92 0.0162 73.66" /* oklch(0.92 0.0162 73.66) */,
      "sidebar-border": "0.30 0.0119 55.78" /* oklch(0.30 0.0119 55.78) */,
      "sidebar-ring": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
    },
  },

  "palette-7": {
    // #C33149 #A8C256 #C1CA74 #DAD193 #F3D9B1 #A22522 #2f4858
    /*
    oklch(0.55 0.1814 16.77)
    oklch(0.77 0.1378 121.01)
    oklch(0.81 0.1104 131.76)
    oklch(0.85 0.081 100.9)
    oklch(0.9 0.0598 78.49)
    oklch(0.47 0.1619 27.1)
    oklch(0.39 0.041 237.32)
    oklch(0.18 0.041 237.32)



    */
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      primary: "0.55 0.1814 19.77" /* oklch(0.55 0.1814 19.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.39 0.041 237.32" /* oklch(0.39 0.041 237.32) */,
      "secondary-foreground": "1 0 0" /* oklch(0 0 0) */,
      muted: "0.92 0.019 237.32" /* oklch(0.92 0.019 237.32) */,
      "muted-foreground": "0.62 0.041 237.32" /* oklch(0.62 0.041 237.32) */,
      accent: "0.95 0.019 237.32" /* oklch(0.95 0.019 237.32) */,
      "accent-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.93 0.021 237.32" /* oklch(0.93 0.021 237.32) */,
      input: "0.90 0.021 237.32" /* oklch(0.90 0.021 237.32) */,

      ring: "0.55 0.1814 19.77" /* oklch(0.55 0.1814 19.77) */,

      "chart-1": "0.76 0.057 17.1" /* oklch(0.76 0.057 17.1) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      "sidebar-primary": "0.55 0.1814 16.77" /* oklch(0.55 0.1814 16.77) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.041 237.32" /* oklch(0.95 0.021 237.32) */,
      "sidebar-accent-foreground":
        "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      "sidebar-border": "0.93 0.041 237.32" /* oklch(0.93 0.021 237.32) */,
      "sidebar-ring": "0.55 0.1814 16.77" /* oklch(0.55 0.1814 16.77) */,
    },
    dark: {
      background: "0.18 0.041 237.32" /* oklch(0.18 0.041 237.32) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,

      card: "0.22 0.041 237.32" /* oklch(0.22 0.041 237.32) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.20 0.041 237.32" /* oklch(0.20 0.041 237.32) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.59 0.1814 16.77" /* oklch(0.59 0.1814 16.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,

      secondary: "0.60 0.041 237.32" /* oklch(0.60 0.041 237.32) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,

      muted: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "muted-foreground": "0.67 0.041 237.32" /* oklch(0.67 0.041 237.32) */,
      accent: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      input: "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      ring: "0.59 0.1814 16.77" /* oklch(0.59 0.1814 16.77) */,

      "chart-1": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-2": "0.64 0.0897 18.95" /* oklch(0.64 0.0897 18.95) */,
      "chart-3": "0.39 0.0264 60.06" /* oklch(0.39 0.0264 60.06) */,
      "chart-4": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "chart-5": "0.44 0.0220 13.35" /* oklch(0.44 0.0220 13.35) */,

      "sidebar-background": "0.20 0.041 237.32" /* oklch(0.20 0.041 237.32) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary": "0.41 0.0835 20.35" /* oklch(0.41 0.0835 20.35) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.30 0.041 237.32" /* oklch(0.30 0.041 237.32) */,
      "sidebar-ring": "0.59 0.1814 16.77" /* oklch(0.59 0.1814 16.77) */,
    },
  },

  "palette-8": {
    /*
    #D88C9A
    #F2D0A9
    #F1E3D3
    #99C1B9
    #8E7DBE
    */
    /*

    #1B3022
    #395756
    #4F5D75


    #090809
    #F44E3F
    #F4796B
    #F4897C
    #F49185
    #F4998D


    #E6E49F
    #25291C
    #989C94
    #BDC2BF
    #E3E7D3


    #353D2F
    #515B3A
    #6BA368
    #9CFC97
    #E6FAFC


    #3F6C51
    #F39A9D
    #FFEAEC
    #6DB1BF
    #301A4B

    #1E2019
    #587B7F
    #E2C044
    #D3D0CB
    #393E41

    #f8f5f3
    #f8ca47
    #272824
    #fffefe

    chart
    #d54988
    #29ab93
    #94a1c7
    #f3c849
    #2c2d2b
    #fbf1ef
    #c4c1c0

    oklch(0.66 0.1613 269.03) #6b8bf5
    oklch(0.66 0.1809 265.3) #5b8aff
    oklch(0.18 0.0581 267.75) #070F2B
    oklch(0.26 0.1037 277.24) #1B1A55
    oklch(0.49 0.0856 275.46) #535C91
    oklch(0.67 0.0749 286) #9290C3
    oklch(0.74 0.0534 280.17) #a5a9ce
    oklch(0.39 0.156787 9.9243) #840032
    oklch(0.74 0.1337 279.34) #9ba2ff
    oklch(0.51 0.0377 241.68) #546A7B
    oklch(0.67 0.0772 208.77) #58A4B0
    oklch(0.81 0.0928 58.44) #EDB183

    */
    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      primary: "0.30 0.1037 277.24" /* oklch(0.30 0.1037 277.24) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.90 0.0534 280.17" /* oklch(0.90 0.0534 280.17) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.92 0.0534 280.17" /* oklch(0.92 0.0534 280.17) */,
      "muted-foreground": "0.62 0.0534 280.17" /* oklch(0.62 0.0534 280.17) */,
      accent: "0.95 0.0749 286" /* oklch(0.95 0.0749 286) */,
      "accent-foreground": "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      destructive: "0.53 0.2 8.9243" /* oklch(0.53 0.2 8.9243) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.93 0.0749 286" /* oklch(0.93 0.0749 286) */,
      input: "0.90 0.0749 286" /* oklch(0.90 0.0749 286) */,

      ring: "0.38 0.1037 277.24" /* oklch(0.38 0.1037 277.24) */,

      "chart-1": "0.30 0.1037 277.24" /* oklch(0.30 0.1037 277.24) */,
      "chart-2": "0.67 0.0772 208.77" /* oklch(0.67 0.0772 208.77) */,
      "chart-3": "0.53 0.2 8.9243" /* oklch(0.53 0.2 8.9243) */,
      "chart-4": "0.66 0.1809 265.3" /* oklch(0.66 0.1809 265.3) */,
      "chart-5": "0.81 0.0928 58.44" /* oklch(0.81 0.0928 58.44) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground":
        "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      "sidebar-primary": "0.30 0.1037 277.24" /* oklch(0.30 0.1037 277.24) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.0749 286" /* oklch(0.95 0.0749 286) */,
      "sidebar-accent-foreground":
        "0.18 0.0581 267.75" /* oklch(0.18 0.0581 267.75) */,
      "sidebar-border": "0.93 0.0749 286" /* oklch(0.93 0.0749 286) */,
      "sidebar-ring": "0.38 0.1037 277.24" /* oklch(0.38 0.1037 277.24) */,
    },
    dark: {
      background: "0.18 0.0258 267.75" /* oklch(0.18 0.0258 267.75) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,

      card: "0.22 0.0258 267.75" /* oklch(0.22 0.0258 267.75) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.22 0.0258 267.75" /* oklch(0.22 0.0258 267.75) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,

      secondary: "0.34 0.0258 267.75" /* oklch(0.34 0.0258 267.75) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,

      muted: "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "muted-foreground": "0.67 0.0258 267.75" /* oklch(0.67 0.0258 267.75) */,
      accent: "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.60 0.2 8.9243" /* oklch(0.60 0.2 8.9243) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.28 0.0258 267.75" /* oklch(0.28 0.0258 267.75) */,
      input: "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      ring: "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,

      "chart-1": "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
      "chart-2": "0.67 0.0772 208.77" /* oklch(0.55 0.0772 208.77) */,
      "chart-3": "0.59 0.1301 8.9243" /* oklch(0.59 0.1301 8.9243) */,
      "chart-4": "0.66 0.1809 265.3" /* oklch(0.66 0.1809 265.3) */,
      "chart-5": "0.66 0.0928 58.44" /* oklch(0.66 0.0928 58.44) */,

      "sidebar-background":
        "0.18 0.0258 267.75" /* oklch(0.18 0.0258 267.75) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary": "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.30 0.0258 267.75" /* oklch(0.30 0.0258 267.75) */,
      "sidebar-ring": "0.55 0.1337 279.34" /* oklch(0.55 0.1337 279.34) */,
    },
  },
  "palette-9": {
    // oklch(1 0 0) #FFFFFF
    // oklch(0 0 0) #000000
    // oklch(0.93 0.1703 128.84) #C6FF7D
    // oklch(0.85 0 0) #CDCDCD

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.89 0.1703 128.84" /* oklch(0.89 0.1703 128.84) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.30 0.0095 253" /* oklch(0.30 0.0095 253) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0095 253" /* oklch(0.90 0.0095 253) */,
      "muted-foreground": "0.61 0.0095 253" /* oklch(0.61 0.0095 253) */,
      accent: "0.95 0.0095 253" /* oklch(0.95 0.0095 253) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0095 253" /* oklch(0.92 0.0095 253) */,
      input: "0.90 0.0095 253" /* oklch(0.90 0.0095 253) */,
      ring: "0.30 0.0095 253" /* oklch(0.30 0.0095 253) */,

      "chart-1": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-2": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-3": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-4": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-5": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.89 0.1703 128.84" /* oklch(0.89 0.1703 128.84) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.95 0.0095 253" /* oklch(0.95 0.0095 253) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0.0095 253" /* oklch(0.92 0.0095 253) */,
      "sidebar-ring": "0.30 0.0095 253" /* oklch(0.30 0.0095 253) */,
    },

    dark: {
      background: "0 0 0" /* oklch(0 0 0) */,
      foreground: "1 0 0" /* oklch(1 0 0) */,
      card: "0.14 0.0095 253" /* oklch(0.14 0.0095 253) */,
      "card-foreground": "1 0 0" /* oklch(1 0 0) */,
      popover: "0.15 0.0095 253" /* oklch(0.15 0.0095 253) */,
      "popover-foreground": "1 0 0" /* oklch(1 0 0) */,
      primary: "0.93 0.1703 128.84" /* oklch(0.93 0.1703 128.84) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.40 0.0095 253" /* oklch(0.40 0.0095 253) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0.0095 253" /* oklch(0.28 0.0095 253) */,
      "muted-foreground": "0.58 0.0095 253" /* oklch(0.58 0.0095 253) */,
      accent: "0.28 0.0095 253" /* oklch(0.28 0.0095 253) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.71 0.22 20" /* oklch(0.71 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.26 0.0095 253" /* oklch(0.26 0.0095 253) */,
      input: "0.29 0.0095 253" /* oklch(0.29 0.0095 253) */,
      ring: "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "chart-1": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-2": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-3": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-4": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-5": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "sidebar-background": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-primary": "0.93 0.1703 128.84" /* oklch(0.93 0.1703 128.84) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.28 0.0095 253" /* oklch(0.28 0.0095 253) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0095 253" /* oklch(0.26 0.0095 253) */,
      "sidebar-ring": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
    },
  },

  "palette-10": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.96 0.025 106.86) #F3F3E0
    oklch(0.20 0.025 106.86) #F3F3E0
    oklch(0.38 0.1312 260.45) #133E87
    oklch(0.63 0.0948 254.63) #608BC1
    oklch(0.89 0.0276 244.71) #CBDCEB

    */

    light: {
      background: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.38 0.1312 260.45" /* oklch(0.38 0.1312 260.45) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.025 106.86" /* oklch(0.90 0.025 106.86) */,
      "muted-foreground": "0.61 0.025 106.86" /* oklch(0.61 0.025 106.86) */,
      accent: "0.89 0.0276 244.71" /* oklch(0.89 0.0276 244.71) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.025 106.86" /* oklch(0.92 0.025 106.86) */,
      input: "0.90 0.025 106.86" /* oklch(0.90 0.025 106.86) */,
      ring: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,

      "chart-1": "0.38 0.1312 260.45" /* oklch(0.38 0.1312 260.45) */,
      "chart-2": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "chart-3": "0.63 0.15948 154.63" /* oklch(0.63 0.15948 154.63) */,
      "chart-4": "0.63 0.20 20" /* oklch(0.63 0.20 20) */,
      "chart-5": "0 0 0" /* oklch(0 0 0) */,

      "sidebar-background": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.89 0.1703 128.84" /* oklch(0.89 0.1703 128.84) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.99 0.1203 128.84" /* oklch(0.99 0.1203 128.84) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0.0095 253" /* oklch(0.92 0.0095 253) */,
      "sidebar-ring": "0.93 0.1703 128.84" /* oklch(0.93 0.1703 128.84) */,
    },

    dark: {
      background: "0.18 0.025 106.86" /* oklch(0.18 0.025 106.86) */,
      foreground: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      card: "0.22 0.025 106.86" /* oklch(0.22 0.025 106.86) */,
      "card-foreground": "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      popover: "0.22 0.025 106.86" /* oklch(0.22 0.025 106.86) */,
      "popover-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      primary: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      secondary: "0.40 0.025 106.86" /* oklch(0.40 0.025 106.86) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0.0138 106.86" /* oklch(0.28 0.0138 106.86) */,
      "muted-foreground": "0.58 0.0138 106.86" /* oklch(0.58 0.0138 106.86) */,
      accent: "0.29 0.0138 106.86" /* oklch(0.28 0.0138 106.86) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.71 0.22 20" /* oklch(0.71 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.26 0.0138 106.86" /* oklch(0.26 0.0138 106.86) */,
      input: "0.29 0.0138 106.86" /* oklch(0.29 0.0138 106.86) */,
      ring: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,

      "chart-1": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-2": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-3": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-4": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,
      "chart-5": "0.85 0.0095 253" /* oklch(0.85 0.0095 253) */,

      "sidebar-background": "0.16 0.025 106.86" /* oklch(0.16 0.025 106.86) */,
      "sidebar-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      "sidebar-primary": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0.0138 106.86" /* oklch(0.28 0.0138 106.86) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0138 106.86" /* oklch(0.26 0.0138 106.86) */,
      "sidebar-ring": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
    },
  },

  "palette-11": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.61 0.053 271.98) #7882A4
    oklch(0.73 0.0581 66.7) #C0A080
    oklch(0.86 0 0) #D1D1D1
    oklch(0.95 0 0) #EFEFEF
    oklch(0.74 0.0264 273.38) #a6abbd
    oklch(0.60 0.0594 11.88) #a6777c
    oklch(0.62 0.0947 37.47) #b7715c

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.60 0.0581 66.7" /* oklch(0.60 0.0581 66.7) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0 0" /* oklch(0.90 0 0) */,
      "muted-foreground": "0.61 0 0" /* oklch(0.61 0 0) */,
      accent: "0.95 0.053 271.98" /* oklch(0.95 0.053 271.98) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.60 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0 0" /* oklch(0.92 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,

      "chart-1": "0.65 0.0581 66.7" /* oklch(0.65 0.0581 66.7) */,
      "chart-2": "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,
      "chart-3": "0.60 0.0594 11.88" /* oklch(0.60 0.0594 11.88) */,
      "chart-4": "0.74 0.0264 273.38" /* oklch(0.74 0.0264 273.38) */,
      "chart-5": "0.62 0.0947 37.47" /* oklch(0.62 0.0947 37.47) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.60 0.0581 66.7" /* oklch(0.60 0.0581 66.7) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.053 271.98" /* oklch(0.95 0.053 271.98) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.51 0.053 271.98" /* oklch(0.51 0.053 271.98) */,
    },

    dark: {
      background: "0.20 0.0275 274.07" /* oklch(0.20 0.0275 274.07) */,
      foreground: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      card: "0.23 0.0275 274.07" /* oklch(0.23 0.0275 274.07) */,
      "card-foreground": "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      popover: "0.23 0.0275 274.07" /* oklch(0.23 0.0275 274.07) */,
      "popover-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      primary: "0.48 0.0381 66.7" /* oklch(0.48 0.0381 66.7) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.28 0.0275 274.07" /* oklch(0.28 0.0275 274.07) */,
      "muted-foreground": "0.58 0.0275 274.07" /* oklch(0.58 0.0275 274.07) */,
      accent: "0.29 0.0275 274.07" /* oklch(0.28 0.0275 274.07) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.71 0.22 20" /* oklch(0.73 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.26 0.0275 274.07" /* oklch(0.26 0.0275 274.07) */,
      input: "0.29 0.0275 274.07" /* oklch(0.29 0.0275 274.07) */,
      ring: "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,

      "chart-1": "0.54 0.0381 66.7" /* oklch(0.54 0.0381 66.7) */,
      "chart-2": "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "chart-3": "0.60 0.0594 11.88" /* oklch(0.60 0.0594 11.88) */,
      "chart-4": "0.74 0.0264 273.38" /* oklch(0.74 0.0264 273.38) */,
      "chart-5": "0.52 0.0947 37.47" /* oklch(0.52 0.0947 37.47) */,

      "sidebar-background":
        "0.19 0.0275 274.07" /* oklch(0.19 0.0275 274.07) */,
      "sidebar-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      "sidebar-primary": "0.48 0.0381 66.7" /* oklch(0.48 0.0381 66.7) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.29 0.0275 274.07" /* oklch(0.28 0.0275 274.07) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0275 274.07" /* oklch(0.26 0.0275 274.07) */,
      "sidebar-ring": "0.63 0.0948 254.63" /* oklch(0.63 0.0948 254.63) */,
    },
  },

  "palette-12": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    #7900FF
    #548CFF
    #93FFD8
    #CFFFDC

    _______________

    oklch(0.3 0.1562 276.6) #22177A
    oklch(0.51 0.1045 283.45) #605EA1
    oklch(0.7 0.024 207.06) #8EA3A6
    oklch(0.92 0.0752 110.26) #E6E9AF

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0 0 0" /* oklch(0 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0 0 0" /* oklch(0 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0 0 0" /* oklch(0 0 0) */,
      primary: "0.36 0.1562 276.6" /* oklch(0.36 0.1562 276.6) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.87 0.024 207.06" /* oklch(0.87 0.024 207.06) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0 0" /* oklch(0.90 0 0) */,
      "muted-foreground": "0.61 0 0" /* oklch(0.61 0 0) */,
      accent: "0.96 0.1045 283.45" /* oklch(0.96 0.1045 283.45) */,
      "accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      destructive: "0.56 0.22 20" /* oklch(0.56 0.22 20) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0 0" /* oklch(0.92 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.46 0.1562 276.6" /* oklch(0.46 0.1562 276.6) */,

      "chart-1": "0.44 0.1562 276.6" /* oklch(0.44 0.1562 276.6) */,
      "chart-2": "0.66 0.024 207.06" /* oklch(0.66 0.024 207.06) */,
      "chart-3": "0.66 0.18 20" /* oklch(0.66 0.18 20) */,
      "chart-4": "0.51 0.1045 283.45" /* oklch(0.51 0.1045 283.45) */,
      "chart-5": "0.67 0.0948 254.63" /* oklch(0.67 0.0948 254.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-primary": "0.36 0.1562 276.6" /* oklch(0.36 0.1562 276.6) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0.1045 283.45" /* oklch(0.96 0.1045 283.45) */,
      "sidebar-accent-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.46 0.1562 276.6" /* oklch(0.46 0.1562 276.6) */,
    },

    dark: {
      background: "0.20 0.022 274.07" /* oklch(0.20 0.022 274.07) */,
      foreground: "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      card: "0.22 0.022 274.07" /* oklch(0.22 0.022 274.07) */,
      "card-foreground": "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      popover: "0.23 0.022 274.07" /* oklch(0.23 0.022 274.07) */,
      "popover-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      primary: "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.28 0.022 274.07" /* oklch(0.28 0.022 274.07) */,
      "muted-foreground": "0.58 0.022 274.07" /* oklch(0.58 0.022 274.07) */,
      accent: "0.29 0.022 274.07" /* oklch(0.29 0.022 274.07) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.75 0.22 20" /* oklch(0.75 0.22 20) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.27 0.022 274.07" /* oklch(0.27 0.022 274.07) */,
      input: "0.30 0.022 274.07" /* oklch(0.30 0.022 274.07) */,
      ring: "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,

      "chart-1": "0.52 0.1562 276.6" /* oklch(0.52 0.1562 276.6) */,
      "chart-2": "0.61 0.053 271.98" /* oklch(0.61 0.053 271.98) */,
      "chart-3": "0.75 0.22 20" /* oklch(0.75 0.22 20) */,
      "chart-4": "0.67 0.081 210.63" /* oklch(0.67 0.081 210.63) */,
      "chart-5": "0.67 0.0948 254.63" /* oklch(0.67 0.0948 254.63) */,

      "sidebar-background": "0.18 0.022 274.07" /* oklch(0.18 0.022 274.07) */,
      "sidebar-foreground":
        "0.97 0.0038 106.86" /* oklch(0.97 0.0038 106.86) */,
      "sidebar-primary": "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0.022 274.07" /* oklch(0.29 0.022 274.07) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.022 274.07" /* oklch(0.26 0.022 274.07) */,
      "sidebar-ring": "0.55 0.1562 276.6" /* oklch(0.55 0.1562 276.6) */,
    },
  },

  "palette-13": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    #7900FF
    #548CFF
    #93FFD8
    #CFFFDC

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7


    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)

    _______________

    oklch(0.3 0.1562 276.6) #22177A
    oklch(0.51 0.1045 283.45) #605EA1
    oklch(0.7 0.024 207.06) #8EA3A6
    oklch(0.92 0.0752 110.26) #E6E9AF

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      primary: "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.87 0.024 207.06" /* oklch(0.87 0.024 207.06) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.012 207.06" /* oklch(0.90 0.012 207.06) */,
      "muted-foreground": "0.61 0.012 207.06" /* oklch(0.61 0.012 207.06) */,
      accent: "0.96 0.012 207.06" /* oklch(0.96 0.012 207.06) */,
      "accent-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      destructive: "0.59 0.1653 13.06" /* oklch(0.59 0.1653 13.06) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.019 230.11" /* oklch(0.92 0.019 230.11) */,
      input: "0.90 0.019 230.11" /* oklch(0.90 0.019 230.11) */,
      ring: "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,

      "chart-1": "0.43 0.0663 195.320" /* oklch(0.22 0.0663 195.320) */,
      "chart-2": "0.75 0.0495 168.74" /* oklch(0.66 0.0495 168.74) */,
      "chart-3": "0.59 0.1653 13.06" /* oklch(0.59 0.1653 13.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.64 0.1367 254.63" /* oklch(0.64 0.1367 254.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      "sidebar-primary": "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0.012 207.06" /* oklch(0.96 0.012 207.06) */,
      "sidebar-accent-foreground":
        "0.18 0.019 230.11" /* oklch(0.18 0.019 230.11) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.43 0.0663 195.320" /* oklch(0.43 0.0663 195.320) */,
    },

    dark: {
      background: "0.15 0.0093 230.11" /* oklch(0.15 0.0093 230.11) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.22 0.0093 230.11" /* oklch(0.22 0.0093 230.11) */,
      "card-foreground": "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      popover: "0.23 0.0093 230.11" /* oklch(0.23 0.0093 230.11) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.49 0.0663 195.320" /* oklch(0.49 0.0663 195.320) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.28 0.0093 230.11" /* oklch(0.28 0.0093 230.11) */,
      "muted-foreground": "0.58 0.0093 230.11" /* oklch(0.58 0.0093 230.11) */,
      accent: "0.29 0.0093 230.11" /* oklch(0.29 0.0093 230.11) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.66 0.1653 13.06" /* oklch(0.66 0.1653 13.06) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.27 0.0093 230.11" /* oklch(0.27 0.0093 230.11) */,
      input: "0.30 0.0093 230.11" /* oklch(0.30 0.0093 230.11) */,
      ring: "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,

      "chart-1": "0.49 0.0663 195.320" /* oklch(0.49 0.0663 195.320) */,
      "chart-2": "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,
      "chart-3": "0.73 0.0365 171.05" /* oklch(0.73 0.0365 171.05) */,
      "chart-4": "0.66 0.1653 13.06" /* oklch(0.66 0.1653 13.06) */,
      "chart-5": "0.55 0.1367 254.63" /* oklch(0.55 0.1367 254.63) */,

      "sidebar-background":
        "0.18 0.0093 230.11" /* oklch(0.18 0.0093 230.11) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.49 0.0663 195.320" /* oklch(0.49 0.0663 195.320) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0.0093 230.11" /* oklch(0.29 0.0093 230.11) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0.0093 230.11" /* oklch(0.26 0.0093 230.11) */,
      "sidebar-ring": "0.60 0.0495 168.74" /* oklch(0.60 0.0495 168.74) */,
    },
  },

  "palette-14": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.36 0.0089 303.99) #3D3B40
    oklch(0.55 0.2123 274.05) #525CEB
    oklch(0.85 0.0378 258.37) #BFCFE7
    oklch(0.96 0.0265 312.58) #F8EDFF
    oklch(0.66 0.2025 22.23) #ff585e
    oklch(0.66 0.0858 173.06) #6bbaa3

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7
    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)


    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      primary: "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0089 303.99" /* oklch(0.90 0.0089 303.99) */,
      "muted-foreground": "0.61 0.0089 303.99" /* oklch(0.61 0.0089 303.99) */,
      accent: "0.95 0.0265 312.58" /* oklch(0.95 0.0265 312.58) */,
      "accent-foreground": "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      destructive: "0.63 0.2125 22.23" /* oklch(0.63 0.2125 22.23) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0089 303.99" /* oklch(0.92 0.0089 303.99) */,
      input: "0.90 0.0089 303.99" /* oklch(0.90 0.0089 303.99) */,
      ring: "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,

      "chart-1": "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
      "chart-2": "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.19667 64.63" /* oklch(0.66 0.19667 64.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground":
        "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      "sidebar-primary": "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0.0265 312.58" /* oklch(0.95 0.0265 312.58) */,
      "sidebar-accent-foreground":
        "0.18 0.0089 303.99" /* oklch(0.18 0.0089 303.99) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.55 0.2123 274.05" /* oklch(0.55 0.2123 274.05) */,
    },
    dark: {
      background: "0.20 0 303.99" /* oklch(0.20 0 303.99) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.24 0 303.99" /* oklch(0.24 0 303.99) */,
      "card-foreground": "0.95 0 303.99" /* oklch(0.95 0 303.99) */,
      popover: "0.23 0 303.99" /* oklch(0.23 0 303.99) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0 303.99" /* oklch(0.36 0 303.99) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0 303.99" /* oklch(0.28 0 303.99) */,
      "muted-foreground": "0.64 0 303.99" /* oklch(0.64 0 303.99) */,
      accent: "0.29 0 303.99" /* oklch(0.29 0 303.99) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.68 0.2125 22.23" /* oklch(0.68 0.2125 22.23) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.27 0 303.99" /* oklch(0.27 0 303.99) */,
      input: "0.30 0 303.99" /* oklch(0.30 0 303.99) */,
      ring: "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,

      "chart-1": "0.56 0.1663 274" /* oklch(0.56 0.1663 274) */,
      "chart-2": "0.59 0.0089 303.99" /* oklch(0.59 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.11667 64.63" /* oklch(0.66 0.11667 64.63) */,

      "sidebar-background": "0.20 0 303.99" /* oklch(0.20 0 303.99) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0 303.99" /* oklch(0.29 0 303.99) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.26 0 303.99" /* oklch(0.26 0 303.99) */,
      "sidebar-ring": "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
    },
  },

  "palette-15": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.36 0.0089 303.99) #3D3B40
    oklch(0.45 0.2434 272.66) #362FD9
    oklch(0.68 0.1113 194.84) #1AACAC
    oklch(0.62 0.095 209.77) #
    oklch(0.18 0.0357 230.05) #00141e
    oklch(0.95 0 0) #EEEEEE
    oklch(0.66 0.2025 22.23) #EEEEEE
    oklch(0.66 0.0858 173.06) #6bbaa3

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7
    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)


    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0 0" /* oklch(0.18 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      primary: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.93 0 0" /* oklch(0.93 0 0) */,
      "secondary-foreground": "0 0 0" /* oklch(0 0 0) */,
      muted: "0.90 0 0" /* oklch(0.90 0 0) */,
      "muted-foreground": "0.61 0 0" /* oklch(0.61 0 0) */,
      accent: "0.95 0 0" /* oklch(0.95 0 0) */,
      "accent-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      destructive: "0.63 0.2125 22.23" /* oklch(0.63 0.2125 22.23) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0 0" /* oklch(0.92 0 0) */,
      input: "0.90 0 0" /* oklch(0.90 0 0) */,
      ring: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,

      "chart-1": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "chart-2": "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.19667 64.63" /* oklch(0.66 0.19667 64.63) */,

      "sidebar-background": "0.98 0 0" /* oklch(0.98 0 0) */,
      "sidebar-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      "sidebar-primary": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.95 0 0" /* oklch(0.95 0 0) */,
      "sidebar-accent-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      "sidebar-border": "0.92 0 0" /* oklch(0.92 0 0) */,
      "sidebar-ring": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
    },
    dark: {
      background: "0.20 0 0" /* oklch(0.20 0 0) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.24 0 0" /* oklch(0.24 0 0) */,
      "card-foreground": "0.95 0 0" /* oklch(0.95 0 0) */,
      popover: "0.23 0 0" /* oklch(0.23 0 0) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0 0" /* oklch(0.36 0 0) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.28 0 0" /* oklch(0.28 0 0) */,
      "muted-foreground": "0.64 0 0" /* oklch(0.64 0 0) */,
      accent: "0.29 0 0" /* oklch(0.29 0 0) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.68 0.2125 22.23" /* oklch(0.68 0.2125 22.23) */,
      "destructive-foreground": "0 0 0" /* oklch(0 0 0) */,
      border: "0.28 0 0" /* oklch(0.28 0 0) */,
      input: "0.30 0 0" /* oklch(0.30 0 0) */,
      ring: "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,

      "chart-1": "0.56 0.1663 274" /* oklch(0.56 0.1663 274) */,
      "chart-2": "0.59 0.0089 303.99" /* oklch(0.59 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.11667 64.63" /* oklch(0.66 0.11667 64.63) */,

      "sidebar-background": "0.20 0 0" /* oklch(0.20 0 0) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "sidebar-primary-foreground": "0 0 0" /* oklch(0 0 0) */,
      "sidebar-accent": "0.29 0 0" /* oklch(0.29 0 0) */,
      "sidebar-accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-border": "0.28 0 0" /* oklch(0.28 0 0) */,
      "sidebar-ring": "0.54 0.1663 274" /* oklch(0.54 0.1663 274) */,
    },
  },

  "palette-16": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.36 0.0089 303.99) #3D3B40
    oklch(0.45 0.2434 272.66) #362FD9
    oklch(0.68 0.1113 194.84) #1AACAC
    oklch(0.62 0.095 209.77) #
    oklch(0.18 0.0357 230.05) #00141e
    oklch(0.95 0 0) #EEEEEE
    oklch(0.66 0.2025 22.23) #EEEEEE
    oklch(0.66 0.0858 173.06) #6bbaa3

    oklch(0.15 0.019 230.11) #040D12
    oklch(0.33 0.0421 195.32) #183D3D
    oklch(0.58 0.0495 168.74) #5C8374
    oklch(0.73 0.0365 171.05) #93B1A6
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.81 0.0459 159.39) #A9CBB7
    oklch(0.43 0.0421 195.32)
    oklch(0.49 0.0663 195.320)
    oklch(0.58 0.0495 168.74)

    oklch(0.87 0.0897 334.29) #F8BDEB
    oklch(0.7 0.195 269.15) #5272F2
    oklch(0.26 0.0632 250.35) #072541
    oklch(0.86 0.1739 167.27) #15F5BA
    #211951
    #836FFF
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.98 0.0385 95.84) #FFF8DB
    oklch(0.89 0.0799 338.44) #FFC7ED
    oklch(0.64 0.0767 272.84) #7D8ABC
    oklch(0.38 0.059 258.92) #304463
    oklch(0.52 0.0907 275.93) #5A639C
    oklch(0.59 0.0924 283.96) #7776B3
    oklch(0.66 0.0833 301.66) #9B86BD
    oklch(0.84 0.0757 321.17) #E2BBE9
    oklch(0.56 0.1946 359.54) #c62d70

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      primary: "0.56 0.1946 350.54" /* oklch(0.56 0.1946 350.54) */,
      "primary-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      // oklch(0.60 0.195 269.15)
      secondary: "0.93 0.0924 283.96" /* oklch(0.93 0.0924 283.96) */,
      "secondary-foreground": "0 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      muted: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      "muted-foreground": "0.61 0.0132 250.35" /* oklch(0.61 0.0132 250.35) */,
      accent: "0.96 0.0924 283.96" /* oklch(0.96 0.0924 283.96) */,
      "accent-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      destructive: "0.63 0.2125 22.23" /* oklch(0.60 0.2125 22.23) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      input: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      ring: "0.56 0.1946 350.54" /* oklch(0.56 0.1946 350.54) */,

      "chart-1": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "chart-2": "0.36 0.0089 303.99" /* oklch(0.36 0.0089 303.99) */,
      "chart-3": "0.66 0.0858 173.06" /* oklch(0.66 0.0858 173.06) */,
      "chart-4": "0.60 0.1545 283.45" /* oklch(0.60 0.1545 283.45) */,
      "chart-5": "0.66 0.19667 64.63" /* oklch(0.66 0.19667 64.63) */,

      "sidebar-background":
        "0.98 0.0232 250.35" /* oklch(0.98 0.0232 250.35) */,
      "sidebar-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-primary": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.96 0.0924 283.96" /* oklch(0.96 0.0924 283.96) */,
      "sidebar-accent-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-border": "0.92 0.0232 250.35" /* oklch(0.92 0.0232 250.35) */,
      "sidebar-ring": "0.59 0.095 209.77" /* oklch(0.59 0.095 209.77) */,
    },
    dark: {
      background: "0.20 0.0232 250.35" /* oklch(0.20 0.0232 250.35) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.24 0.0232 250.35" /* oklch(0.24 0.0232 250.35) */,
      "card-foreground": "0.95 0.0232 250.35" /* oklch(0.95 0.0232 250.35) */,
      popover: "0.23 0.0232 250.35" /* oklch(0.23 0.0232 250.35) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
      "primary-foreground": "0 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0232 250.35" /* oklch(0.36 0.0232 250.35) */,
      "secondary-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      muted: "0.28 0.0232 250.35" /* oklch(0.28 0.0232 250.35) */,
      "muted-foreground": "0.64 0.0232 250.35" /* oklch(0.64 0.0232 250.35) */,
      accent: "0.29 0.0232 250.35" /* oklch(0.29 0.0232 250.35) */,
      "accent-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      destructive: "0.68 0.2125 22.23" /* oklch(0.68 0.2125 22.23) */,
      "destructive-foreground": "0 0.0232 250.35" /* oklch(0 0.0232 250.35) */,
      border: "0.27 0.0232 250.35" /* oklch(0.27 0.0232 250.35) */,
      input: "0.30 0.0232 250.35" /* oklch(0.30 0.0232 250.35) */,
      ring: "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,

      "chart-1": "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
      "chart-2": "0.68 0.1624 283.96" /* oklch(0.68 0.1624 283.96) */,
      "chart-3": "0.66 0.1839 177.27" /* oklch(0.66 0.1839 177.27) */,
      "chart-4": "0.7 0.175 249.15" /* oklch(0.7 0.175 249.15) */,
      "chart-5": "0.69 0.11667 64.63" /* oklch(0.69 0.11667 64.63) */,

      "sidebar-background":
        "0.20 0.0232 250.35" /* oklch(0.20 0.0232 250.35) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
      "sidebar-primary-foreground":
        "0 0.0232 250.35" /* oklch(0 0.0232 250.35) */,
      "sidebar-accent": "0.29 0.0232 250.35" /* oklch(0.29 0.0232 250.35) */,
      "sidebar-accent-foreground":
        "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      "sidebar-border": "0.26 0.0232 250.35" /* oklch(0.26 0.0232 250.35) */,
      "sidebar-ring": "0.69 0.1146 350.54" /* oklch(0.69 0.1146 350.54) */,
    },
  },
  "palette-17": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.24 0.0048 145.42) #1E201E
    oklch(0.36 0.0102 114.6) #3C3D37
    oklch(0.55 0.0283 137.86) #697565
    oklch(0.91 0.0291 77.54) #ECDFCC
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.34 0.0283 137.86) #313552

    oklch(0.68 0.0283 137.86) #2EB086
    oklch(0.92 0.0283 137.86) #EEE6CE
    oklch(0.74 0.0283 137.86) #a8b252
    oklch(0.71 0.0283 137.86) #f4784e

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      primary: "0.68 0.127 166.4" /* oklch(0.68 0.127 166.4) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.34 0.0512 277.28" /* oklch(0.34 0.0512 277.28) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      "muted-foreground": "0.61 0.0132 250.35" /* oklch(0.61 0.0132 250.35) */,
      accent: "0.94 0.0512 277.28" /* oklch(0.94 0.0512 277.28) */,
      "accent-foreground": "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      destructive: "0.59 0.1758 8.72" /* oklch(0.59 0.1758 8.72) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      input: "0.90 0.0132 250.35" /* oklch(0.90 0.0132 250.35) */,
      ring: "0.34 0.0512 277.28" /* oklch(0.34 0.0512 277.28) */,

      "chart-1": "0.65 0.097 166.4" /* oklch(0.65 0.097 166.4) */,
      "chart-2": "0.65 0.224 283.96" /* oklch(0.65 0.224 283.96) */,
      "chart-3": "0.78 0.2413 334.35" /* oklch(0.78 0.2413 334.35) */,
      "chart-4": "0.69 0.275 249.15" /* oklch(0.69 0.275 249.15) */,
      "chart-5": "0.73 0.2129 39.07" /* oklch(0.73 0.2129 39.07) */,

      "sidebar-background":
        "0.98 0.0232 250.35" /* oklch(0.98 0.0232 250.35) */,
      "sidebar-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-primary": "0.68 0.127 166.4" /* oklch(0.68 0.127 166.4) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.94 0.0512 277.28" /* oklch(0.94 0.0512 277.28) */,
      "sidebar-accent-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      "sidebar-border": "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      "sidebar-ring": "0.34 0.0512 277.28" /* oklch(0.34 0.0512 277.28) */,
    },
    dark: {
      background: "0.23 0.0252 277.28" /* oklch(0.23 0.0252 277.28) */,
      foreground: "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      card: "0.27 0.0252 277.28" /* oklch(0.27 0.0252 277.28) */,
      "card-foreground": "0.95 0.0232 250.35" /* oklch(0.95 0.0232 250.35) */,
      popover: "0.25 0.0252 277.28" /* oklch(0.25 0.0252 277.28) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
      "primary-foreground": "0 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0252 277.28" /* oklch(0.36 0.0252 277.28) */,
      "secondary-foreground": "1 0.0232 250.35" /* oklch(1 0.0232 250.35) */,
      muted: "0.29 0.0252 277.28" /* oklch(0.29 0.0252 277.28) */,
      "muted-foreground": "0.67 0.0252 277.28" /* oklch(0.67 0.0252 277.28) */,
      accent: "0.30 0.0252 277.28" /* oklch(0.30 0.0252 277.28) */,
      "accent-foreground": "1 0.0252 277.28" /* oklch(1 0.0252 277.28) */,
      destructive: "0.58 0.1558 8.72" /* oklch(0.58 0.1558 8.72) */,
      "destructive-foreground": "0 0.0252 277.28" /* oklch(0 0.0252 277.28) */,
      border: "0.29 0.0252 277.28" /* oklch(0.29 0.0252 277.28) */,
      input: "0.32 0.0252 277.28" /* oklch(0.32 0.0252 277.28) */,
      ring: "0.68 0.127 166.4" /* oklch(0.68 0.127 166.4) */,

      "chart-1": "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
      "chart-2": "0.68 0.1624 283.96" /* oklch(0.68 0.1624 283.96) */,
      "chart-3": "0.74 0.1213 114.35" /* oklch(0.74 0.1213 114.35) */,
      "chart-4": "0.7 0.175 249.15" /* oklch(0.7 0.175 249.15) */,
      "chart-5": "0.71 0.1429 39.07" /* oklch(0.71 0.1429 39.07) */,

      "sidebar-background":
        "0.20 0.0232 250.35" /* oklch(0.20 0.0252 277.28) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
      "sidebar-primary-foreground":
        "0 0.0252 277.28" /* oklch(0 0.0252 277.28) */,
      "sidebar-accent": "0.29 0.0252 277.28" /* oklch(0.29 0.0252 277.28) */,
      "sidebar-accent-foreground":
        "1 0.0252 277.28" /* oklch(1 0.0252 277.28) */,
      "sidebar-border": "0.26 0.0252 277.28" /* oklch(0.26 0.0252 277.28) */,
      "sidebar-ring": "0.70 0.097 166.4" /* oklch(0.70 0.097 166.4) */,
    },
  },

  "palette-18": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.24 0.0048 145.42) #1E201E
    oklch(0.36 0.0102 114.6) #3C3D37
    oklch(0.55 0.0283 137.86) #697565
    oklch(0.91 0.0291 77.54) #ECDFCC
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.34 0.0283 137.86) #313552

    oklch(0.68 0.0283 137.86) #2EB086
    oklch(0.92 0.0283 137.86) #EEE6CE
    oklch(0.74 0.0283 137.86) #a8b252
    oklch(0.71 0.0283 137.86) #f4784e

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground":
        "0.18 0.0232 250.35" /* oklch(0.18 0.0232 250.35) */,
      primary: "0.55 0.0283 137.86" /* oklch(0.55 0.0283 137.86) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.88 0.0283 137.86" /* oklch(0.88 0.0283 137.86) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0183 137.86" /* oklch(0.90 0.0183 137.86) */,
      "muted-foreground": "0.61 0.0183 137.86" /* oklch(0.61 0.0183 137.86) */,
      accent: "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "accent-foreground": "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      destructive: "0.59 0.1488 8.72" /* oklch(0.59 0.1488 8.72) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0113 137.86" /* oklch(0.92 0.0113 137.86) */,
      input: "0.90 0.0113 137.86" /* oklch(0.90 0.0113 137.86) */,
      ring: "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,

      "chart-1": "0.39 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
      "chart-2": "0.55 0.0283 137.86" /* oklch(0.63 0.0283 137.86) */,
      "chart-3": "0.64 0.0283 137.86" /* oklch(0.72 0.0283 137.86) */,
      "chart-4": "0.75 0.0283 137.86" /* oklch(0.83 0.0283 137.86) */,
      "chart-5": "0.85 0.0283 137.86" /* oklch(0.92 0.0283 137.86) */,

      "sidebar-background": "1 0.0102 114.6" /* oklch(1 0.0102 114.6) */,
      "sidebar-foreground": "0.22 0.0102 114.6" /* oklch(0.22 0.0102 114.6) */,
      "sidebar-primary": "0.55 0.0283 137.86" /* oklch(0.55 0.0283 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "sidebar-accent-foreground":
        "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      "sidebar-border": "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      "sidebar-ring": "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
    },
    dark: {
      background: "0.21 0.0018 145.42" /* oklch(0.21 0.0018 145.42) */,
      foreground: "0.95 0.0018 145.42" /* oklch(0.95 0.0018 145.42) */,
      card: "0.25 0.0048 145.42" /* oklch(0.25 0.0048 145.42) */,
      "card-foreground": "0.95 0.0018 145.42" /* oklch(0.95 0.0018 145.42) */,
      popover: "0.24 0.0048 145.42" /* oklch(0.24 0.0048 145.42) */,
      "popover-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      primary: "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0.0048 145.42" /* oklch(0.36 0.0048 145.42) */,
      "secondary-foreground": "1 0.0018 145.42" /* oklch(1 0.0018 145.42) */,
      muted: "0.29 0.0048 145.42" /* oklch(0.29 0.0048 145.42) */,
      "muted-foreground": "0.67 0.0048 145.42" /* oklch(0.67 0.0048 145.42) */,
      accent: "0.30 0.0048 145.42" /* oklch(0.30 0.0048 145.42) */,
      "accent-foreground": "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      destructive: "0.60 0.1518 8.72" /* oklch(0.60 0.1518 8.72) */,
      "destructive-foreground": "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      border: "0.30 0.0048 145.42" /* oklch(0.30 0.0048 145.42) */,
      input: "0.33 0.0048 145.42" /* oklch(0.33 0.0048 145.42) */,
      ring: "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,

      "chart-1": "0.42 0.0483 137.86" /* oklch(0.42 0.0483 137.86) */,
      "chart-2": "0.60 0.0483 137.86" /* oklch(0.60 0.0483 137.86) */,
      "chart-3": "0.69 0.0483 137.86" /* oklch(0.69 0.0483 137.86) */,
      "chart-4": "0.78 0.0483 137.86" /* oklch(0.78 0.0483 137.86) */,
      "chart-5": "0.86 0.0483 137.86" /* oklch(0.86 0.0483 137.86) */,

      "sidebar-background":
        "0.18 0.0018 145.42" /* oklch(0.18 0.0018 145.42) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.29 0.0048 145.42" /* oklch(0.29 0.0048 145.42) */,
      "sidebar-accent-foreground":
        "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      "sidebar-border": "0.26 0.0048 145.42" /* oklch(0.26 0.0048 145.42) */,
      "sidebar-ring": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
    },
  },

  "palette-19": {
    /*
    oklch(1 0 0) #FFFFFF
    oklch(0 0 0) #000000
    oklch(0.25 0 0) #222222
    oklch(0.76 0.1473 168.68) #1DCD9F
    oklch(0.61 0.1179 168.59) #169976


    oklch(0.24 0.0048 145.42) #1E201E
    oklch(0.36 0.0102 114.6) #3C3D37
    oklch(0.55 0.0283 137.86) #697565
    oklch(0.91 0.0291 77.54) #ECDFCC
    oklch(0.59 0.1703 13.06)  #CE4760
    oklch(0.97 0.016359 274.8224) #F0F3FF
    oklch(0.34 0.0283 137.86) #313552

    oklch(0.68 0.0283 137.86) #2EB086
    oklch(0.92 0.0283 137.86) #EEE6CE
    oklch(0.74 0.0283 137.86) #a8b252
    oklch(0.71 0.0283 137.86) #f4784e

    */

    light: {
      background: "1 0 0" /* oklch(1 0 0) */,
      foreground: "0.20 0 0" /* oklch(0.20 0 0) */,
      card: "1 0 0" /* oklch(1 0 0) */,
      "card-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      popover: "1 0 0" /* oklch(1 0 0) */,
      "popover-foreground": "0.18 0 0" /* oklch(0.18 0 0) */,
      primary: "0.61 0.1179 168.59" /* oklch(0.61 0.1179 168.59) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.88 0.0283 137.86" /* oklch(0.88 0.0283 137.86) */,
      "secondary-foreground": "0 0 0" /* oklch(1 0 0) */,
      muted: "0.90 0.0183 137.86" /* oklch(0.90 0.0183 137.86) */,
      "muted-foreground": "0.61 0.0183 137.86" /* oklch(0.61 0.0183 137.86) */,
      accent: "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "accent-foreground": "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      destructive: "0.59 0.1488 8.72" /* oklch(0.59 0.1488 8.72) */,
      "destructive-foreground": "1 0 0" /* oklch(1 0 0) */,
      border: "0.92 0.0113 137.86" /* oklch(0.92 0.0113 137.86) */,
      input: "0.90 0.0113 137.86" /* oklch(0.90 0.0113 137.86) */,
      ring: "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,

      "chart-1": "0.39 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
      "chart-2": "0.55 0.0283 137.86" /* oklch(0.63 0.0283 137.86) */,
      "chart-3": "0.64 0.0283 137.86" /* oklch(0.72 0.0283 137.86) */,
      "chart-4": "0.75 0.0283 137.86" /* oklch(0.83 0.0283 137.86) */,
      "chart-5": "0.85 0.0283 137.86" /* oklch(0.92 0.0283 137.86) */,

      "sidebar-background": "1 0.0102 114.6" /* oklch(1 0.0102 114.6) */,
      "sidebar-foreground": "0.22 0.0102 114.6" /* oklch(0.22 0.0102 114.6) */,
      "sidebar-primary": "0.55 0.0283 137.86" /* oklch(0.55 0.0283 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.94 0.0283 137.86" /* oklch(0.94 0.0283 137.86) */,
      "sidebar-accent-foreground":
        "0.18 0.0283 137.86" /* oklch(0.18 0.0283 137.86) */,
      "sidebar-border": "0.92 0.0132 250.35" /* oklch(0.92 0.0132 250.35) */,
      "sidebar-ring": "0.36 0.0102 114.6" /* oklch(0.36 0.0102 114.6) */,
    },
    dark: {
      background: "0.16 0 0" /* oklch(0.16 0 0) */,
      foreground: "0.95 0 0" /* oklch(0.95 0 0) */,
      card: "0.21 0 0" /* oklch(0.21 0 0) */,
      "card-foreground": "0.95 0 0" /* oklch(0.95 0 0) */,
      popover: "0.22 0 0" /* oklch(0.22 0 0) */,
      "popover-foreground": "0.95 0 0" /* oklch(0.95 0 0) */,
      primary: "0.56 0.0999 168.59" /* oklch(0.56 0.0999 168.59) */,
      "primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      secondary: "0.36 0 0" /* oklch(0.36 0 0) */,
      "secondary-foreground": "1 0 0" /* oklch(1 0 0) */,
      muted: "0.29 0 0" /* oklch(0.29 0 0) */,
      "muted-foreground": "0.67 0 0" /* oklch(0.67 0 0) */,
      accent: "0.30 0 0" /* oklch(0.30 0 0) */,
      "accent-foreground": "1 0 0" /* oklch(1 0 0) */,
      destructive: "0.60 0.1518 8.72" /* oklch(0.60 0.1518 8.72) */,
      "destructive-foreground": "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      border: "0.30 0 0" /* oklch(0.30 0 0) */,
      input: "0.33 0 0" /* oklch(0.33 0 0) */,
      ring: "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,

      "chart-1": "0.42 0.0483 137.86" /* oklch(0.42 0.0483 137.86) */,
      "chart-2": "0.60 0.0483 137.86" /* oklch(0.60 0.0483 137.86) */,
      "chart-3": "0.69 0.0483 137.86" /* oklch(0.69 0.0483 137.86) */,
      "chart-4": "0.78 0.0483 137.86" /* oklch(0.78 0.0483 137.86) */,
      "chart-5": "0.86 0.0483 137.86" /* oklch(0.86 0.0483 137.86) */,

      "sidebar-background":
        "0.21 0.0048 145.42" /* oklch(0.21 0.0048 145.42) */,
      "sidebar-foreground":
        "0.95 0.0093 230.11" /* oklch(0.95 0.0093 230.11) */,
      "sidebar-primary": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
      "sidebar-primary-foreground": "1 0 0" /* oklch(1 0 0) */,
      "sidebar-accent": "0.29 0.0048 145.42" /* oklch(0.29 0.0048 145.42) */,
      "sidebar-accent-foreground":
        "1 0.0048 145.42" /* oklch(1 0.0048 145.42) */,
      "sidebar-border": "0.26 0.0048 145.42" /* oklch(0.26 0.0048 145.42) */,
      "sidebar-ring": "0.52 0.0483 137.86" /* oklch(0.52 0.0483 137.86) */,
    },
  },

  // secondary #EDE8FF
};

export const themes: Registry["items"] = Object.entries(themePalettes).map(
  ([k, v]) => ({
    name: k,
    type: "registry:theme",
    cssVars: {
      light: v.light,
      dark: v.dark,
    },
  })
);
