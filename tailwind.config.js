/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        cream: '#FFFEF0',
        yellow: '#FFE500',
        pink: '#FF2D78',
        blue: '#0052FF',
        green: '#1DFF8A',
        orange: '#FF6B2B',
        purple: '#B24BF3',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        syne: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0px #0A0A0A',
        'brutal-lg': '6px 6px 0px #0A0A0A',
        'brutal-xl': '8px 8px 0px #0A0A0A',
        'brutal-sm': '2px 2px 0px #0A0A0A',
        'brutal-yellow': '4px 4px 0px #FFE500',
        'brutal-pink': '4px 4px 0px #FF2D78',
        'brutal-blue': '4px 4px 0px #0052FF',
        'brutal-green': '4px 4px 0px #1DFF8A',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.9s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
