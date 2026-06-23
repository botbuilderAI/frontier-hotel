/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f0e8',
          100: '#e8dcc8',
          200: '#d4b896',
          300: '#c09364',
          400: '#a87040',
          500: '#8b5a2b', // primary warm brown
          600: '#6e4522',
          700: '#52321a',
          800: '#361f10',
          900: '#1a0d06',
        },
        gold: {
          400: '#d4af37',
          500: '#b8960c',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
