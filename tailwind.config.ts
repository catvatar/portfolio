import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 'primary': '#cae9ff',
        // 'secondary-light': '#bee9e8',
        // 'secondary-dark': '#5fa8d3',
        // 'detail-light': '#'
        // 'detail-dark': '#1b4965'

        //Green
        'primary': '#DAD7CD',
        'secondary-light': '#A3B18A',
        'secondary-dark': '#588157',
        'detail-light': '#3A5A40',
        'detail-dark': '#344E41'
      },
      spacing: {
        'sidebar': '18rem',
      },
      typography: {
        DEFAULT: {
          css:{
            
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
