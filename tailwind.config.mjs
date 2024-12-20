/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      main: {
        primary: '#8D0B41',
        accent: '#D39D55',
        secondary: '#D6CFB4',
        shadow: '#FFF8E6',
        border: '#607274',
        background:'#1B4242',
        black: '#000'
      }
    }
  },
  plugins: [],
};
