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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          purple: "#8B5CF6",
          "purple-light": "#A78BFA",
          blue: "#3B82F6",
          pink: "#EC4899",
          dark: "#07070E",
          card: "#0F0F1A",
          "card-hover": "#14142A",
          border: "#1A1A2E",
          "border-light": "#252540",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.25), transparent)",
        "card-glow":
          "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,92,246,0.08), transparent)",
        "gradient-brand": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
        "gradient-brand-hover":
          "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite 2s",
        "float-delay-2": "float 6s ease-in-out infinite 4s",
        glow: "glow 3s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
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
