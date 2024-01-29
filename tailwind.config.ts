import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: {
            100: '#0B1215', //obsidian
            '200': '#0D1717', //dark-slate-gray
            '300': '#171717', //charcoal-gray
            '400': '#222222',
          },
          secondary: {
            '100': '#219C90',
            '200': '#97FEED',
          },
        },
        light: {
          primary: {
            '100': '#C4C4C4',
            '200': '#F5F5F5',
          },
          secondary: {
            '100': '#088395',
            '200': '#408E91',
          },
        },
      },
      screens: {
        tablet: '992px',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        opacity: 'opacity',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
