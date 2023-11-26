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
    extend: {},
    screens: {
      'xl': '1192px'
    },
    fontFamily: {
      'serif': ['PT Serif', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
    }
  },
  plugins: [],
}

