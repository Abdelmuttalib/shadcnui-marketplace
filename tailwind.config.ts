import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ibm-plex-mono)"],
        carbon: ["var(--font-carbon)"],
        material: ["var(--font-roboto)"],
      },
      colors: {
        linear: {
          gray: {
            50: "oklch(var(--linear-color-gray-50) / <alpha-value>)",
            100: "oklch(var(--linear-color-gray-100) / <alpha-value>)",
            200: "oklch(var(--linear-color-gray-200) / <alpha-value>)",
            300: "oklch(var(--linear-color-gray-300) / <alpha-value>)",
            400: "oklch(var(--linear-color-gray-400) / <alpha-value>)",
            500: "oklch(var(--linear-color-gray-500) / <alpha-value>)",
            600: "oklch(var(--linear-color-gray-600) / <alpha-value>)",
            700: "oklch(var(--linear-color-gray-700) / <alpha-value>)",
            800: "oklch(var(--linear-color-gray-800) / <alpha-value>)",
            900: "oklch(var(--linear-color-gray-900) / <alpha-value>)",
            950: "oklch(var(--linear-color-gray-950) / <alpha-value>)",
          },
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
        catalyst: {
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
          gray: {
            50: "oklch(var(--material-color-gray-50) / <alpha-value>)",
            100: "oklch(var(--material-color-gray-100) / <alpha-value>)",
            200: "oklch(var(--material-color-gray-200) / <alpha-value>)",
            300: "oklch(var(--material-color-gray-300) / <alpha-value>)",
            400: "oklch(var(--material-color-gray-400) / <alpha-value>)",
            500: "oklch(var(--material-color-gray-500) / <alpha-value>)",
            600: "oklch(var(--material-color-gray-600) / <alpha-value>)",
            700: "oklch(var(--material-color-gray-700) / <alpha-value>)",
            800: "oklch(var(--material-color-gray-800) / <alpha-value>)",
            900: "oklch(var(--material-color-gray-900) / <alpha-value>)",
            950: "oklch(var(--material-color-gray-950) / <alpha-value>)",
          },
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
        cb: {
          primary: {
            DEFAULT: "oklch(var(--cb-primary) / <alpha-value>)",
            foreground: "oklch(var(--cb-primary-foreground) / <alpha-value>)",
            100: "oklch(var(--cb-color-primary-100) / <alpha-value>)",
            200: "oklch(var(--cb-color-primary-200) / <alpha-value>)",
            300: "oklch(var(--cb-color-primary-300) / <alpha-value>)",
            400: "oklch(var(--cb-color-primary-400) / <alpha-value>)",
            500: "oklch(var(--cb-color-primary-500) / <alpha-value>)",
            600: "oklch(var(--cb-color-primary-600) / <alpha-value>)",
            700: "oklch(var(--cb-color-primary-700) / <alpha-value>)",
            800: "oklch(var(--cb-color-primary-800) / <alpha-value>)",
            900: "oklch(var(--cb-color-primary-900) / <alpha-value>)",
            950: "oklch(var(--cb-color-primary-950) / <alpha-value>)",
          },
          gray: {
            50: "oklch(var(--cb-color-gray-50) / <alpha-value>)",
            100: "oklch(var(--cb-color-gray-100) / <alpha-value>)",
            200: "oklch(var(--cb-color-gray-200) / <alpha-value>)",
            300: "oklch(var(--cb-color-gray-300) / <alpha-value>)",
            400: "oklch(var(--cb-color-gray-400) / <alpha-value>)",
            500: "oklch(var(--cb-color-gray-500) / <alpha-value>)",
            600: "oklch(var(--cb-color-gray-600) / <alpha-value>)",
            700: "oklch(var(--cb-color-gray-700) / <alpha-value>)",
            800: "oklch(var(--cb-color-gray-800) / <alpha-value>)",
            900: "oklch(var(--cb-color-gray-900) / <alpha-value>)",
            950: "oklch(var(--cb-color-gray-950) / <alpha-value>)",
          },

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
          // primary: {
          //   DEFAULT: "oklch(var(--cb-primary) / <alpha-value>)",
          //   foreground: "oklch(var(--cb-primary-foreground) / <alpha-value>)",
          // },
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
