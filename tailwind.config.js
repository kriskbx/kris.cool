/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      body: 'Source Serif Pro',
      headline: 'Rubik',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
