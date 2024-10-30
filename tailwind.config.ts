import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      spaceMono: "var(--font-space-mono)",
      rightGrotesk: "var(--font-right-grotesk)",
    },
    colors: {
      transparent: "transparent",
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      gray: {
        100: "#f3f2ed",
        900: "var(--gray-900)",
      },
      pink: {
        100: "#ff3979",
        200: "#ff2cb2",
        300: "#ff00a1",
        400: "#ff55a2",
      },
      red: {
        DEFAULT: "#eb0d18",
      },
      blue: {
        50: "#cae9fa",
        100: "#5879ff",
        200: "#5100ff",
        300: "#163892",
      },
      yellow: {
        100: "#eedf39",
        200: "#f9e174",
      },
      purple: {
        100: "#a774f9",
        200: "#672fcf",
        300: "var(--purple-300)",
      },
      mint: {
        DEFAULT: "#ace5d7",
      },
      magenta: {
        DEFAULT: "#e42c7f",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      chart: {
        "1": "hsl(var(--chart-1))",
        "2": "hsl(var(--chart-2))",
        "3": "hsl(var(--chart-3))",
        "4": "hsl(var(--chart-4))",
        "5": "hsl(var(--chart-5))",
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
    extend: {
      screens: {
        "3xl": "1672px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        button: "-6px 6px 0 0 var(--gray-900)",
        purple: "-6px 6px 0 0 var(--purple-300)",
        "purple-hover": "-11px 11px 0 0 var(--purple-300)",
        "button-hover": "-11px 11px 0 0 var(--gray-900)",
        cardItem: "-3px 3px 0 0 var(--gray-900)",
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
};
export default config;
