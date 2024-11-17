/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customGray: '#2B2B2B',
        lightGray: '#B0B0B0',
        buttonGray: '#3A3A3A',
        textBoxGray: '#676767',
        coverBlue: '#052445',
        customBlue: '#07509F',
      },
    },
  },
  plugins: [],
};
