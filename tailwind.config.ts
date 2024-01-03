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
        mirage: {
          "50": "#edf2f5",
          "100": "#dae4eb",
          "200": "#a7bbc9",
          "300": "#7b92a8",
          "400": "#374c69",
          "500": "#0e172a",
          "600": "#0b1224",
          "700": "#080e1f",
          "800": "#050a1a",
          "900": "#030612",
          "950": "#01040d",
        },
        scooter: {
          "50": "#f5fcfc",
          "100": "#e8f9fa",
          "200": "#c9f0f2",
          "300": "#abe5eb",
          "400": "#74d1db",
          "500": "#43bccd",
          "600": "#37a2b8",
          "700": "#267e99",
          "800": "#185d7a",
          "900": "#0e3f5c",
          "950": "#06243b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        rubik: ["var(--font-rubik)"],
      },
      screens: {
        "3xl": "1800px",
        "4xl": "2100px",
      },
    },
  },
  plugins: [],
};
export default config;
