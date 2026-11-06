/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F5F0',
          50: '#FDFCFB',
          100: '#F8F5F0',
          200: '#EDE6DA',
        },
        rose: {
          pastel: '#EAD5D2',
          light: '#F5ECEB',
        },
        sage: {
          DEFAULT: '#DCE5D8',
          light: '#EEF3EC',
        },
        powder: {
          blue: '#DCE6EF',
          light: '#EFF4F9',
        },
        lavender: {
          soft: '#E7E0EF',
          light: '#F4F0F9',
        },
        beige: {
          warm: '#F0E5D8',
          light: '#F8F3ED',
        },
        charcoal: {
          DEFAULT: '#353535',
          dark: '#222222',
        },
        secondary: {
          DEFAULT: '#77716C',
          light: '#9E9893',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(53, 53, 53, 0.05)',
        'soft': '0 4px 20px -2px rgba(53, 53, 53, 0.06)',
        'soft-lg': '0 10px 30px -4px rgba(53, 53, 53, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(53, 53, 53, 0.05)',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'subtle': '0.05em',
      },
    },
  },
  plugins: [],
}

