// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-strong': {
          '0%, 100%': { 
            opacity: 1, 
            transform: 'scale(1.15)', // The active step is always slightly larger
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)', // Strong indigo glow
          },
          '50%': { 
            opacity: 0.8, 
            transform: 'scale(1.1)',
            boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)',
          },
        }, // <--- THIS CLOSING BRACE WAS MISSING
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, 
        }
      },
      animation: {
        'pulse-strong': 'pulse-strong 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
}