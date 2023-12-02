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
      xl: "1192px",
    },
    fontFamily: {
      serif: [
        "PT Serif",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
  },
  plugins: [],
};
