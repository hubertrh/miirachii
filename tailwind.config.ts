import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          primary: {
            // DEFAULT: "#397B7E",
            // dark: "#30696B",
          },
          secondary: {
            // DEFAULT: "#D19130",
            // dark: "#BA7F27",
          },
        },
      },
      height: {
        dvh: "100dvh",
      },
      minHeight: {
        dvh: "100dvh",
      },
      fontFamily: {
        // ubuntu: ["var(--font-ubuntu)"],
        // sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;

export default config;
