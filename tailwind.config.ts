import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#100e0b",
        panel: "#1a1713",
        gold: "#f0a12a",
        "gold-2": "#ffc35a",
        ink: "#f4eee4",
        muted: "#b4a490",
        line: "#3a332b",
        danger: "#e05252",
        ok: "#4caf6a"
      }
    }
  },
  plugins: []
};

export default config;
