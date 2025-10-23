import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#f0f1f5",
        mediumBlue: "#2f8ce7",
        darkBlue: "#264e86",
        orange: "#ffa500",
      },
      boxShadow: {
        glow: "0 0 20px rgba(47, 140, 231, 0.6)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(47,140,231,0.25) 1px, transparent 0)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

