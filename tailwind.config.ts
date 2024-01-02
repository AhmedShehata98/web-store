import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: {
            obsidian: "#0B1215",
            "dark-slate-gray": "#0D1717",
          },
          secondary: {
            "dark-teal": "#219C90",
            "soft-teal": "#97FEED",
          },
        },
        light: {
          primary: {
            "dark-white": "#C4C4C4",
            "soft-white": "#F5F5F5",
          },
          secondary: {
            "dark-teal": "#088395",
            "soft-teal": "#408E91",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
