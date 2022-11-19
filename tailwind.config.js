/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './packages/renderer/src/**/*.{js,ts,jsx,tsx}',
    './packages/renderer/src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
