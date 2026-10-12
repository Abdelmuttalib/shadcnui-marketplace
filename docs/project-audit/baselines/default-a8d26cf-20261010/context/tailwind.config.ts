import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ibm-plex-mono)"],
        carbon: ["var(--font-carbon)"],
        material: ["var(--font-roboto)"],
        spectrum: ["var(--font-spectrum)"],
        "general-sans": ["var(--font-general-sans)"],
        "public-sans": ["var(--font-public-sans)"],
        "dm-sans": ["var(--font-dm-sans)"],
        "work-sans": ["var(--font-work-sans)"],
        poppins: ["var(--font-poppins)"],
        "dm-serif-display": ["var(--font-dm-serif-display)"],
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        libelle: {
          background: "oklch(var(--libelle-background) / <alpha-value>)",
          foreground: "oklch(var(--libelle-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--libelle-card) / <alpha-value>)",
            foreground: "oklch(var(--libelle-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--libelle-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--libelle-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--libelle-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--libelle-muted) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--libelle-accent) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--libelle-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--libelle-border) / <alpha-value>)",
          input: "oklch(var(--libelle-input) / <alpha-value>)",
          ring: "oklch(var(--libelle-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--libelle-chart-1) / <alpha-value>)",
            "2": "oklch(var(--libelle-chart-2) / <alpha-value>)",
            "3": "oklch(var(--libelle-chart-3) / <alpha-value>)",
            "4": "oklch(var(--libelle-chart-4) / <alpha-value>)",
            "5": "oklch(var(--libelle-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--libelle-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--libelle-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--libelle-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--libelle-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--libelle-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--libelle-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--libelle-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--libelle-sidebar-ring) / <alpha-value>)",
          },
        },
        neon: {
          background: "oklch(var(--neon-background) / <alpha-value>)",
          foreground: "oklch(var(--neon-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--neon-card) / <alpha-value>)",
            foreground: "oklch(var(--neon-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--neon-popover) / <alpha-value>)",
            foreground: "oklch(var(--neon-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--neon-primary) / <alpha-value>)",
            foreground: "oklch(var(--neon-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--neon-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--neon-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--neon-muted) / <alpha-value>)",
            foreground: "oklch(var(--neon-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--neon-accent) / <alpha-value>)",
            foreground: "oklch(var(--neon-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--neon-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--neon-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--neon-border) / <alpha-value>)",
          input: "oklch(var(--neon-input) / <alpha-value>)",
          ring: "oklch(var(--neon-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--neon-chart-1) / <alpha-value>)",
            "2": "oklch(var(--neon-chart-2) / <alpha-value>)",
            "3": "oklch(var(--neon-chart-3) / <alpha-value>)",
            "4": "oklch(var(--neon-chart-4) / <alpha-value>)",
            "5": "oklch(var(--neon-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--neon-sidebar-background) / <alpha-value>)",
            foreground: "oklch(var(--neon-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--neon-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--neon-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--neon-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--neon-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--neon-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--neon-sidebar-ring) / <alpha-value>)",
          },
        },
        snow: {
          background: "oklch(var(--snow-background) / <alpha-value>)",
          foreground: "oklch(var(--snow-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--snow-card) / <alpha-value>)",
            foreground: "oklch(var(--snow-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--snow-popover) / <alpha-value>)",
            foreground: "oklch(var(--snow-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--snow-primary) / <alpha-value>)",
            foreground: "oklch(var(--snow-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--snow-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--snow-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--snow-muted) / <alpha-value>)",
            foreground: "oklch(var(--snow-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--snow-accent) / <alpha-value>)",
            foreground: "oklch(var(--snow-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--snow-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--snow-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--snow-border) / <alpha-value>)",
          input: "oklch(var(--snow-input) / <alpha-value>)",
          ring: "oklch(var(--snow-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--snow-chart-1) / <alpha-value>)",
            "2": "oklch(var(--snow-chart-2) / <alpha-value>)",
            "3": "oklch(var(--snow-chart-3) / <alpha-value>)",
            "4": "oklch(var(--snow-chart-4) / <alpha-value>)",
            "5": "oklch(var(--snow-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--snow-sidebar-background) / <alpha-value>)",
            foreground: "oklch(var(--snow-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--snow-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--snow-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--snow-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--snow-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--snow-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--snow-sidebar-ring) / <alpha-value>)",
          },
        },
        lucid: {
          background: "oklch(var(--lucid-background) / <alpha-value>)",
          foreground: "oklch(var(--lucid-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--lucid-card) / <alpha-value>)",
            foreground: "oklch(var(--lucid-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--lucid-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--lucid-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--lucid-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--lucid-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--lucid-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--lucid-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--lucid-muted) / <alpha-value>)",
            foreground: "oklch(var(--lucid-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--lucid-accent) / <alpha-value>)",
            foreground: "oklch(var(--lucid-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--lucid-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--lucid-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--lucid-border) / <alpha-value>)",
          input: "oklch(var(--lucid-input) / <alpha-value>)",
          ring: "oklch(var(--lucid-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--lucid-chart-1) / <alpha-value>)",
            "2": "oklch(var(--lucid-chart-2) / <alpha-value>)",
            "3": "oklch(var(--lucid-chart-3) / <alpha-value>)",
            "4": "oklch(var(--lucid-chart-4) / <alpha-value>)",
            "5": "oklch(var(--lucid-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--lucid-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--lucid-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--lucid-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--lucid-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--lucid-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--lucid-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--lucid-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--lucid-sidebar-ring) / <alpha-value>)",
          },
        },
        linear: {
          background: "oklch(var(--linear-background) / <alpha-value>)",
          foreground: "oklch(var(--linear-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--linear-card) / <alpha-value>)",
            foreground: "oklch(var(--linear-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--linear-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--linear-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--linear-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--linear-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--linear-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--linear-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--linear-muted) / <alpha-value>)",
            foreground: "oklch(var(--linear-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--linear-accent) / <alpha-value>)",
            foreground:
              "oklch(var(--linear-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--linear-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--linear-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--linear-border) / <alpha-value>)",
          input: "oklch(var(--linear-input) / <alpha-value>)",
          ring: "oklch(var(--linear-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--linear-chart-1) / <alpha-value>)",
            "2": "oklch(var(--linear-chart-2) / <alpha-value>)",
            "3": "oklch(var(--linear-chart-3) / <alpha-value>)",
            "4": "oklch(var(--linear-chart-4) / <alpha-value>)",
            "5": "oklch(var(--linear-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--linear-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--linear-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--linear-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--linear-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--linear-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--linear-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--linear-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--linear-sidebar-ring) / <alpha-value>)",
          },
        },
        moon: {
          background: "oklch(var(--moon-background) / <alpha-value>)",
          foreground: "oklch(var(--moon-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--moon-card) / <alpha-value>)",
            foreground: "oklch(var(--moon-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--moon-popover) / <alpha-value>)",
            foreground: "oklch(var(--moon-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--moon-primary) / <alpha-value>)",
            foreground: "oklch(var(--moon-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--moon-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--moon-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--moon-muted) / <alpha-value>)",
            foreground: "oklch(var(--moon-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--moon-accent) / <alpha-value>)",
            foreground: "oklch(var(--moon-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--moon-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--moon-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--moon-border) / <alpha-value>)",
          input: "oklch(var(--moon-input) / <alpha-value>)",
          ring: "oklch(var(--moon-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--moon-chart-1) / <alpha-value>)",
            "2": "oklch(var(--moon-chart-2) / <alpha-value>)",
            "3": "oklch(var(--moon-chart-3) / <alpha-value>)",
            "4": "oklch(var(--moon-chart-4) / <alpha-value>)",
            "5": "oklch(var(--moon-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--moon-sidebar-background) / <alpha-value>)",
            foreground: "oklch(var(--moon-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--moon-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--moon-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--moon-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--moon-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--moon-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--moon-sidebar-ring) / <alpha-value>)",
          },
        },
        wedges: {
          background: "oklch(var(--wedges-background) / <alpha-value>)",
          foreground: "oklch(var(--wedges-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--wedges-card) / <alpha-value>)",
            foreground: "oklch(var(--wedges-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--wedges-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--wedges-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--wedges-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--wedges-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--wedges-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--wedges-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--wedges-muted) / <alpha-value>)",
            foreground: "oklch(var(--wedges-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--wedges-accent) / <alpha-value>)",
            foreground:
              "oklch(var(--wedges-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--wedges-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--wedges-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--wedges-border) / <alpha-value>)",
          input: "oklch(var(--wedges-input) / <alpha-value>)",
          ring: "oklch(var(--wedges-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--wedges-chart-1) / <alpha-value>)",
            "2": "oklch(var(--wedges-chart-2) / <alpha-value>)",
            "3": "oklch(var(--wedges-chart-3) / <alpha-value>)",
            "4": "oklch(var(--wedges-chart-4) / <alpha-value>)",
            "5": "oklch(var(--wedges-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--wedges-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--wedges-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--wedges-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--wedges-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--wedges-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--wedges-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--wedges-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--wedges-sidebar-ring) / <alpha-value>)",
          },
        },
        catalyst: {
          background: "oklch(var(--catalyst-background) / <alpha-value>)",
          foreground: "oklch(var(--catalyst-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--catalyst-card) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--catalyst-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--catalyst-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--catalyst-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--catalyst-muted) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--catalyst-accent) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--catalyst-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--catalyst-border) / <alpha-value>)",
          input: "oklch(var(--catalyst-input) / <alpha-value>)",
          ring: "oklch(var(--catalyst-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--catalyst-chart-1) / <alpha-value>)",
            "2": "oklch(var(--catalyst-chart-2) / <alpha-value>)",
            "3": "oklch(var(--catalyst-chart-3) / <alpha-value>)",
            "4": "oklch(var(--catalyst-chart-4) / <alpha-value>)",
            "5": "oklch(var(--catalyst-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT:
              "oklch(var(--catalyst-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--catalyst-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--catalyst-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--catalyst-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--catalyst-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--catalyst-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--catalyst-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--catalyst-sidebar-ring) / <alpha-value>)",
          },
        },
        material: {
          background: "oklch(var(--material-background) / <alpha-value>)",
          foreground: "oklch(var(--material-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--material-card) / <alpha-value>)",
            foreground:
              "oklch(var(--material-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--material-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--material-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--material-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--material-primary-foreground) / <alpha-value>)",
            50: "oklch(var(--material-color-primary-50) / <alpha-value>)",
            100: "oklch(var(--material-color-primary-100) / <alpha-value>)",
            200: "oklch(var(--material-color-primary-200) / <alpha-value>)",
            300: "oklch(var(--material-color-primary-300) / <alpha-value>)",
            400: "oklch(var(--material-color-primary-400) / <alpha-value>)",
            500: "oklch(var(--material-color-primary-500) / <alpha-value>)",
            600: "oklch(var(--material-color-primary-600) / <alpha-value>)",
            700: "oklch(var(--material-color-primary-700) / <alpha-value>)",
            800: "oklch(var(--material-color-primary-800) / <alpha-value>)",
            900: "oklch(var(--material-color-primary-900) / <alpha-value>)",
            950: "oklch(var(--material-color-primary-950) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--material-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--material-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--material-muted) / <alpha-value>)",
            foreground:
              "oklch(var(--material-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--material-accent) / <alpha-value>)",
            foreground:
              "oklch(var(--material-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--material-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--material-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--material-border) / <alpha-value>)",
          input: "oklch(var(--material-input) / <alpha-value>)",
          ring: "oklch(var(--material-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--material-chart-1) / <alpha-value>)",
            "2": "oklch(var(--material-chart-2) / <alpha-value>)",
            "3": "oklch(var(--material-chart-3) / <alpha-value>)",
            "4": "oklch(var(--material-chart-4) / <alpha-value>)",
            "5": "oklch(var(--material-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT:
              "oklch(var(--material-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--material-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--material-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--material-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--material-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--material-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--material-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--material-sidebar-ring) / <alpha-value>)",
          },
        },
        dft: {
          background: "oklch(var(--dft-background) / <alpha-value>)",
          foreground: "oklch(var(--dft-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--dft-card) / <alpha-value>)",
            foreground: "oklch(var(--dft-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--dft-popover) / <alpha-value>)",
            foreground: "oklch(var(--dft-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--dft-primary) / <alpha-value>)",
            foreground: "oklch(var(--dft-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--dft-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--dft-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--dft-muted) / <alpha-value>)",
            foreground: "oklch(var(--dft-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--dft-accent) / <alpha-value>)",
            foreground: "oklch(var(--dft-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--dft-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--dft-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--dft-border) / <alpha-value>)",
          input: "oklch(var(--dft-input) / <alpha-value>)",
          ring: "oklch(var(--dft-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--dft-chart-1) / <alpha-value>)",
            "2": "oklch(var(--dft-chart-2) / <alpha-value>)",
            "3": "oklch(var(--dft-chart-3) / <alpha-value>)",
            "4": "oklch(var(--dft-chart-4) / <alpha-value>)",
            "5": "oklch(var(--dft-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--dft-sidebar-background) / <alpha-value>)",
            foreground: "oklch(var(--dft-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--dft-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--dft-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--dft-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--dft-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--dft-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--dft-sidebar-ring) / <alpha-value>)",
          },
        },
        spctm: {
          background: "oklch(var(--spctm-background) / <alpha-value>)",
          foreground: "oklch(var(--spctm-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--spctm-card) / <alpha-value>)",
            foreground: "oklch(var(--spctm-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--spctm-popover) / <alpha-value>)",
            foreground:
              "oklch(var(--spctm-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--spctm-primary) / <alpha-value>)",
            foreground:
              "oklch(var(--spctm-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--spctm-secondary) / <alpha-value>)",
            foreground:
              "oklch(var(--spctm-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--spctm-muted) / <alpha-value>)",
            foreground: "oklch(var(--spctm-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--spctm-accent) / <alpha-value>)",
            foreground: "oklch(var(--spctm-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--spctm-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--spctm-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--spctm-border) / <alpha-value>)",
          input: "oklch(var(--spctm-input) / <alpha-value>)",
          ring: "oklch(var(--spctm-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--spctm-chart-1) / <alpha-value>)",
            "2": "oklch(var(--spctm-chart-2) / <alpha-value>)",
            "3": "oklch(var(--spctm-chart-3) / <alpha-value>)",
            "4": "oklch(var(--spctm-chart-4) / <alpha-value>)",
            "5": "oklch(var(--spctm-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--spctm-sidebar-background) / <alpha-value>)",
            foreground:
              "oklch(var(--spctm-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--spctm-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--spctm-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--spctm-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--spctm-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--spctm-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--spctm-sidebar-ring) / <alpha-value>)",
          },
        },
        cb: {
          background: "oklch(var(--cb-background) / <alpha-value>)",
          foreground: "oklch(var(--cb-foreground) / <alpha-value>)",
          card: {
            DEFAULT: "oklch(var(--cb-card) / <alpha-value>)",
            foreground: "oklch(var(--cb-card-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "oklch(var(--cb-popover) / <alpha-value>)",
            foreground: "oklch(var(--cb-popover-foreground) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "oklch(var(--cb-primary) / <alpha-value>)",
            foreground: "oklch(var(--cb-primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "oklch(var(--cb-secondary) / <alpha-value>)",
            foreground: "oklch(var(--cb-secondary-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "oklch(var(--cb-muted) / <alpha-value>)",
            foreground: "oklch(var(--cb-muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "oklch(var(--cb-accent) / <alpha-value>)",
            foreground: "oklch(var(--cb-accent-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "oklch(var(--cb-destructive) / <alpha-value>)",
            foreground:
              "oklch(var(--cb-destructive-foreground) / <alpha-value>)",
          },
          border: "oklch(var(--cb-border) / <alpha-value>)",
          input: "oklch(var(--cb-input) / <alpha-value>)",
          ring: "oklch(var(--cb-ring) / <alpha-value>)",
          chart: {
            "1": "oklch(var(--cb-chart-1) / <alpha-value>)",
            "2": "oklch(var(--cb-chart-2) / <alpha-value>)",
            "3": "oklch(var(--cb-chart-3) / <alpha-value>)",
            "4": "oklch(var(--cb-chart-4) / <alpha-value>)",
            "5": "oklch(var(--cb-chart-5) / <alpha-value>)",
          },
          sidebar: {
            DEFAULT: "oklch(var(--cb-sidebar-background) / <alpha-value>)",
            foreground: "oklch(var(--cb-sidebar-foreground) / <alpha-value>)",
            primary: "oklch(var(--cb-sidebar-primary) / <alpha-value>)",
            "primary-foreground":
              "oklch(var(--cb-sidebar-primary-foreground) / <alpha-value>)",
            accent: "oklch(var(--cb-sidebar-accent) / <alpha-value>)",
            "accent-foreground":
              "oklch(var(--cb-sidebar-accent-foreground) / <alpha-value>)",
            border: "oklch(var(--cb-sidebar-border) / <alpha-value>)",
            ring: "oklch(var(--cb-sidebar-ring) / <alpha-value>)",
          },
        },
        gray: {
          50: "oklch(var(--color-gray-50) / <alpha-value>)",
          100: "oklch(var(--color-gray-100) / <alpha-value>)",
          200: "oklch(var(--color-gray-200) / <alpha-value>)",
          300: "oklch(var(--color-gray-300) / <alpha-value>)",
          400: "oklch(var(--color-gray-400) / <alpha-value>)",
          500: "oklch(var(--color-gray-500) / <alpha-value>)",
          600: "oklch(var(--color-gray-600) / <alpha-value>)",
          700: "oklch(var(--color-gray-700) / <alpha-value>)",
          800: "oklch(var(--color-gray-800) / <alpha-value>)",
          900: "oklch(var(--color-gray-900) / <alpha-value>)",
          950: "oklch(var(--color-gray-950) / <alpha-value>)",
        },

        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        chart: {
          "1": "oklch(var(--chart-1) / <alpha-value>)",
          "2": "oklch(var(--chart-2) / <alpha-value>)",
          "3": "oklch(var(--chart-3) / <alpha-value>)",
          "4": "oklch(var(--chart-4) / <alpha-value>)",
          "5": "oklch(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar-background) / <alpha-value>)",
          foreground: "oklch(var(--sidebar-foreground) / <alpha-value>)",
          primary: "oklch(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground":
            "oklch(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "oklch(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground":
            "oklch(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "oklch(var(--sidebar-border) / <alpha-value>)",
          ring: "oklch(var(--sidebar-ring) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "cb-md": "calc(var(--cb-radius) - 2px)",
        "cb-sm": "calc(var(--cb-radius) - 4px)",
        "cb-lg": "calc(var(--cb-radius))",
        "dft-md": "calc(var(--dft-radius) - 2px)",
        "dft-sm": "calc(var(--dft-radius) - 4px)",
        "dft-lg": "calc(var(--dft-radius))",
        "material-md": "calc(var(--material-radius) - 2px)",
        "material-sm": "calc(var(--material-radius) - 4px)",
        "material-lg": "calc(var(--material-radius))",
        "catalyst-lg": "var(--catalyst-radius)",
        "catalyst-md": "calc(var(--catalyst-radius) - 2px)",
        "catalyst-sm": "calc(var(--catalyst-radius) - 4px)",
        "linear-md": "calc(var(--linear-radius) - 2px)",
        "linear-sm": "calc(var(--linear-radius) - 4px)",
        "linear-lg": "calc(var(--linear-radius))",
        "spctm-md": "calc(var(--spctm-radius) - 2px)",
        "spctm-sm": "calc(var(--spctm-radius) - 4px)",
        "spctm-lg": "calc(var(--spctm-radius))",
        "wedges-md": "calc(var(--wedges-radius) - 2px)",
        "wedges-sm": "calc(var(--wedges-radius) - 4px)",
        "wedges-lg": "calc(var(--wedges-radius))",
        "moon-md": "calc(var(--moon-radius) - 2px)",
        "moon-sm": "calc(var(--moon-radius) - 4px)",
        "moon-lg": "calc(var(--moon-radius))",
        "lucid-md": "calc(var(--lucid-radius) - 2px)",
        "lucid-sm": "calc(var(--lucid-radius) - 4px)",
        "lucid-lg": "calc(var(--lucid-radius))",
        "snow-md": "calc(var(--snow-radius) - 2px)",
        "snow-sm": "calc(var(--snow-radius) - 4px)",
        "snow-lg": "calc(var(--snow-radius))",
        "neon-md": "calc(var(--neon-radius) - 2px)",
        "neon-sm": "calc(var(--neon-radius) - 4px)",
        "neon-lg": "calc(var(--neon-radius))",
        "libelle-md": "calc(var(--libelle-radius) - 2px)",
        "libelle-sm": "calc(var(--libelle-radius) - 4px)",
        "libelle-lg": "calc(var(--libelle-radius))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
