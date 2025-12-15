import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        water: "#2E5EAA",   // primary
        ink: "#0F1C2E",     // dark / text
        ice: "#6EC1E4",     // secondary accent
        mist: "#F5F7FA",    // background
        stone: "#CBD5E1",   // borders / muted
        blood: "#8B1E24",   // very minimal CTA
      },
    },
  },
  plugins: [],
};

export default config;
