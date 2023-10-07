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
      colors: {
        //Aliasing colors
        primary: colors.amber,
        secondary: colors.orange,
        detail: colors.yellow,

        debug: "#ff0000",
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
