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
          primary: '#f97316',

          secondary: '#bff9fc',

          accent: '#9082e0',

          neutral: '#211c30',

          'base-100': '#ffffff',

          info: '#324fd2',

          success: '#1fe59c',

          warning: '#f1c346',

          error: '#fd645e',
        },
      },
      'bumblebee',
    ],
  },
  plugins: [require('daisyui')],
};
