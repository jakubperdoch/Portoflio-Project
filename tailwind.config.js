/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./pages/**/*.html"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom Purple Theme
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // Your custom purple palette
        'deep-purple': {
          DEFAULT: '#17153B',
          dark: '#0f0d28',
          light: '#1f1d45',
        },
        'royal-purple': {
          DEFAULT: '#2E236C',
          dark: '#221a52',
          light: '#3a2d86',
        },
        'mid-purple': {
          DEFAULT: '#433D8B',
          dark: '#352f70',
          light: '#524ba6',
        },
        'lavender': {
          DEFAULT: '#C8ACD6',
          dark: '#b090c2',
          light: '#dcc8e8',
        },
        // Dark mode specific colors
        dark: {
          bg: '#0a0a0f',
          surface: '#17153B',
          card: '#2E236C',
          border: '#433D8B',
        },
        // Light mode specific colors
        light: {
          bg: '#ffffff',
          surface: '#f8f7ff',
          card: '#ffffff',
          border: '#e5e7eb',
        }
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #17153B 0%, #2E236C 50%, #433D8B 100%)',
        'gradient-purple-light': 'linear-gradient(135deg, #433D8B 0%, #C8ACD6 100%)',
        'gradient-dark': 'linear-gradient(to bottom right, #0a0a0f, #17153B)',
      },
      boxShadow: {
        'purple': '0 4px 14px 0 rgba(67, 61, 139, 0.39)',
        'purple-lg': '0 10px 40px 0 rgba(67, 61, 139, 0.5)',
        'dark': '0 4px 14px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
