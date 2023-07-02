/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5E7EBF',

          secondary: '#9BCAF2',

          accent: '#6DE5F2',

          neutral: '#31293d',

          'base-100': '#e8e8e8',

          info: '#5ea1f3',

          success: '#27c48a',

          warning: '#F2D335',

          error: '#F2C879',
        },
      },
      'bumblebee',
    ],
  },
  plugins: [require('daisyui')],
};
