/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xxs: '.5rem',
      xs: '.75rem',
      '2xs': '.70rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '1rem',
      full: '9999px',
    },
    extend: {
      colors: {
        primary: '#FFC36A',
        secondary: '#FFF1A7',
        'gray-50': '#F8F8F8',
        'gray-100': '#EAEAEA',
        'gray-200': '#AFAFAF',
        'gray-300': '#3E3E3E',
      },
      fontFamily: {
        pretendard: ['PretendardVariable'],
      },
    },
  },
  plugins: [],
};
