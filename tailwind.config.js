/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          50: '#fff9f8',
          100: '#ffefeb',
          200: '#fedcd3',
          300: '#fdbfae',
          400: '#f99479',
          500: '#ef6a47',
          600: '#db4924',
          700: '#b83616',
          800: '#942e17',
          900: '#792a17',
        },
        champagne: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e8ddce',
          300: '#d7c4ac',
          400: '#c5a787',
          500: '#ba946e',
          600: '#ab8160',
          700: '#8f684e',
          800: '#755543',
          900: '#604639',
        },
        blush: {
          50: '#fdf8f8',
          100: '#fbf0f1',
          200: '#f7e1e3',
          300: '#f1c7cb',
          400: '#e5a2a9',
          500: '#d57c87',
          600: '#be5d6a',
          700: '#9f4653',
          800: '#853c47',
          900: '#71363f',
        },
        pearl: '#FAF7F5',
        espresso: '#1A1513',
        softnude: '#F5ECE5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 2px 15px -3px rgba(239, 106, 71, 0.15)',
        'glow-md': '0 4px 25px -4px rgba(239, 106, 71, 0.2)',
        'glow-lg': '0 10px 40px -6px rgba(239, 106, 71, 0.25)',
        'soft': '0 10px 30px -10px rgba(26, 21, 19, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(26, 21, 19, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

