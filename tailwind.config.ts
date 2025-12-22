import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: "#0a0a0a",
          dark: "#0d1117",
          gray: "#161b22",
          border: "#30363d",
          text: "#c9d1d9",
          muted: "#8b949e",
          green: "#00ff41",
          cyan: "#00d4ff",
          purple: "#bd93f9",
          yellow: "#f1fa8c",
          red: "#ff5555",
          orange: "#ffb86c",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "typing": "typing 3.5s steps(40, end)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px currentColor, 0 0 10px currentColor" },
          "50%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
      },
      boxShadow: {
        "terminal": "0 0 0 1px rgba(0, 255, 65, 0.1), 0 0 20px rgba(0, 255, 65, 0.1)",
        "terminal-hover": "0 0 0 1px rgba(0, 255, 65, 0.3), 0 0 30px rgba(0, 255, 65, 0.2)",
        "glow-green": "0 0 20px rgba(0, 255, 65, 0.5)",
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
