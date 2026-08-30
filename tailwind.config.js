/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060d15',
          900: '#0b1b2b',
          800: '#112940',
          700: '#1c3d5e',
          600: '#27527c',
        },
        teal: {
          DEFAULT: '#1c7c86',
          dark: '#145c64',
          light: '#259fae',
        },
        gold: {
          DEFAULT: '#e5b35d',
          dark: '#c9963e',
          light: '#f0ca85',
        },
        accent: {
          blue: '#2563eb',
          'blue-hover': '#1d4ed8',
        }
      },
      fontFamily: {
        sans: ['"Libre Franklin"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Jost', 'sans-serif'],
      },
      maxWidth: {
        'content': '980px',
      }
    },
  },
  plugins: [],
}
