import colors from "tailwindcss/colors";
import { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Poppins",
        body: "Poppins",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: {
          50: "#e9fcfc",
          100: "#d3f8f8",
          200: "#a7f1f1",
          300: "#7beaea",
          400: "#4fe3e3",
          500: "#22dddd",
          600: "#1cb0b0",
          700: "#158484",
          800: "#0e5858",
          900: "#072c2c",
          950: "#031616",
        },
        background: {
          50: "#e9fcfc",
          100: "#d3f8f8",
          200: "#a6f2f2",
          300: "#7aebeb",
          400: "#4ee4e4",
          500: "#21dede",
          600: "#1bb1b1",
          700: "#148585",
          800: "#0d5959",
          900: "#072c2c",
          950: "#031616",
        },
        primary: {
          50: "#e9f2fc",
          100: "#d2e5f9",
          200: "#a5ccf3",
          300: "#78b2ed",
          400: "#4b99e7",
          500: "#1f7fe0",
          600: "#1866b4",
          700: "#124c87",
          800: "#0c335a",
          900: "#06192d",
          950: "#030d16",
        },
        secondary: {
          50: "#ebf3f9",
          100: "#d7e8f4",
          200: "#b0d1e8",
          300: "#88badd",
          400: "#61a2d1",
          500: "#398bc6",
          600: "#2e6f9e",
          700: "#225477",
          800: "#17384f",
          900: "#0b1c28",
          950: "#060e14",
        },
        accent: {
          50: "#fcf2e9",
          100: "#f9e6d2",
          200: "#f2cca6",
          300: "#ecb379",
          400: "#e6994c",
          500: "#df8020",
          600: "#b36619",
          700: "#864c13",
          800: "#59330d",
          900: "#2d1a06",
          950: "#160d03",
        },
      },

      spacing: {
        "sidebar-small": "16rem",
        "sidebar-large": "24rem",
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
} satisfies Config;
