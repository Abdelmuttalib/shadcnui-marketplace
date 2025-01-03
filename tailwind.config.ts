/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
          subtle: "hsl(var(--foreground-subtle))",
        },

        overlay: {
          DEFAULT: "hsl(var(--overlay))",
          foreground: "hsl(var(--overlay-foreground))",
          "on-surface": {
            background: "hsl(var(--overlay-on-surface-background))",
            foreground: "hsl(var(--overlay-on-surface-foreground))",
            border: "hsl(var(--overlay-on-surface-border))",
            hover: "hsl(var(--overlay-on-surface-hover))",
            focus: "hsl(var(--overlay-on-surface-focus))",
          },
        },

        black: "hsl(var(--color-black))",
        white: "hsl(var(--color-white))",

        base: {
          DEFAULT: "hsl(var(--color-base))",
          25: "hsl(var(--color-base-25))",
          50: "hsl(var(--color-base-50))",
          100: "hsl(var(--color-base-100))",
          200: "hsl(var(--color-base-200))",
          300: "hsl(var(--color-base-300))",
          400: "hsl(var(--color-base-400))",
          500: "hsl(var(--color-base-500))",
          600: "hsl(var(--color-base-600))",
          700: "hsl(var(--color-base-700))",
          750: "hsl(var(--color-base-750))",
          800: "hsl(var(--color-base-800))",
          850: "hsl(var(--color-base-850))",
          900: "hsl(var(--color-base-900))",
          950: "hsl(var(--color-base-950))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",

          50: "hsl(var(--color-primary-50))",
          100: "hsl(var(--color-primary-100))",
          200: "hsl(var(--color-primary-200))",
          300: "hsl(var(--color-primary-300))",
          400: "hsl(var(--color-primary-400))",
          500: "hsl(var(--color-primary-500))",
          600: "hsl(var(--color-primary-600))",
          700: "hsl(var(--color-primary-700))",
          800: "hsl(var(--color-primary-800))",
          900: "hsl(var(--color-primary-900))",
        },

        gray: {
          DEFAULT: "hsl(var(--color-gray))",
          hover: "hsl(var(--color-gray-hover))",
          50: "hsl(var(--color-gray-50))",
          100: "hsl(var(--color-gray-100))",
          200: "hsl(var(--color-gray-200))",
          300: "hsl(var(--color-gray-300))",
          400: "hsl(var(--color-gray-400))",
          500: "hsl(var(--color-gray-500))",
          600: "hsl(var(--color-gray-600))",
          650: "hsl(var(--color-gray-650))",
          700: "hsl(var(--color-gray-700))",
          750: "hsl(var(--color-gray-750))",
          800: "hsl(var(--color-gray-800))",
          850: "hsl(var(--color-gray-850))",
          900: "hsl(var(--color-gray-900))",
          950: "hsl(var(--color-gray-950))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
