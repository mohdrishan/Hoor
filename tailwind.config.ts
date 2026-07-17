import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:   { DEFAULT: '#F8F4EE', 2: '#F0EAE0', 3: '#E6DDD1' },
        gold:    { DEFAULT: '#B8965A', light: '#D4AD6F', pale: '#EBD9B4', dark: '#9A7A47' },
        onyx:    { DEFAULT: '#141412', 2: '#1E1E1B', 3: '#2A2A26' },
        nude:    { DEFAULT: '#D4B8A8', light: '#E8D5C8', dark: '#B89A8A' },
        warm:    { mid: '#6B6456', light: '#8E8275', xlight: '#B5AFA8' },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(5rem,12vw,10rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-xl':  ['clamp(3.5rem,8vw,7rem)',  { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg':  ['clamp(2.5rem,5vw,4.5rem)',{ lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'ultra':  '0.3em',
        'luxury': '0.2em',
        'wide':   '0.12em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16,1,0.3,1)',
        'expo':   'cubic-bezier(0.87,0,0.13,1)',
      },
      animation: {
        'float':   'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 5s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { from: { backgroundPosition: '0 center' }, to: { backgroundPosition: '250% center' } },
      },
    },
  },
  plugins: [],
}
export default config
