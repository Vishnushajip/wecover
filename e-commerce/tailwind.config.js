/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FBF8F1',
          100: '#F5ECCF',
          200: '#EBD9A0',
          300: '#DFC26E',
          400: '#D4AF37', // metallic gold
          500: '#C5A059',
          600: '#A37F39',
          700: '#7E6129',
          800: '#5A441B',
          900: '#3A2B0E',
        },
        slate: {
          850: '#151F32',
          950: '#070C16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 10px 24px -4px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.12), 0 20px 32px -6px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 25px -5px rgba(197, 160, 89, 0.35)',
      }
    },
  },
  plugins: [],
};
