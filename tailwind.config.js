module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          green: "#4F7363",
          cream: "#F5E6D3",
          light: "#F8F9FA",
        },
        primary: {
          DEFAULT: "#4F7363",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F5E6D3",
          foreground: "#4F7363",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#F5E6D3",
          foreground: "#4F7363",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
}

