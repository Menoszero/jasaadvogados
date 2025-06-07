/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F8F9FA',
        secondary: '#1A1A1A',
        accent: '#B8860B',
        tertiary: '#6C757D',
        'light-accent': '#D4AF37',
        'dark-accent': '#8B6914',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/src/assets/images/hero-bg.jpg")',
        'about-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/src/assets/images/about-bg.jpg")',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};