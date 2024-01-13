/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          600: "#1A8917",
          800: "#156D12",
        },
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(-1%)" },
          "20%": { transform: "translateX(1%)" },
          "40%": { transform: "translateX(-1%)" },
          "60%": { transform: "translateX(1%)" },
          "80%": { transform: "translateX(-1%)" },
          "100%": { transform: "translateX(1%)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out",
      },
    },
    screens: {
      xs: "552px",
      sm: "728px",
      md: "904px",
      lg: "1080px",
    },
    fontFamily: {
      serif: [
        "Gt-super",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      sans: ["Sohne"],
      source: ["Source-serif"],
    },
  },
  plugins: [],
};
