/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#08080C',
        abyss: '#0D0D14',
        slate850: '#12121C',
        g: {
          blue: '#4E8CFF',
          violet: '#9B72F2',
          pink: '#F0578E',
          cyan: '#4FD8E8',
          amber: '#FFB86B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'g-main': 'linear-gradient(110deg, #4E8CFF 0%, #9B72F2 45%, #F0578E 75%, #FFB86B 100%)',
        'g-cool': 'linear-gradient(120deg, #4FD8E8 0%, #4E8CFF 50%, #9B72F2 100%)',
        'g-warm': 'linear-gradient(120deg, #9B72F2 0%, #F0578E 55%, #FFB86B 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px -8px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.08)',
        'glass-lg': '0 24px 64px -16px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.1)',
        'glow-blue': '0 0 40px -8px rgba(78,140,255,0.5)',
        'glow-violet': '0 0 40px -8px rgba(155,114,242,0.5)',
        'glow-pink': '0 0 40px -8px rgba(240,87,142,0.5)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'drift-slow': 'drift 24s ease-in-out infinite',
        'drift-slower': 'drift 34s ease-in-out infinite reverse',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-pan': 'gradientPan 8s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.75' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
