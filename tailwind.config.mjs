/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050507',
          elevated: '#0a0a0f',
          card: 'rgba(255, 255, 255, 0.02)',
          'card-hover': 'rgba(255, 255, 255, 0.04)',
        },
        flieder: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: {
          violet: '#a78bfa',
          blue: '#60a5fa',
          cyan: '#22d3ee',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#fb7185',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          hover: 'rgba(255, 255, 255, 0.12)',
          subtle: 'rgba(255, 255, 255, 0.03)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.03em',
      },
      boxShadow: {
        'glow-violet': '0 0 40px -10px rgba(167, 139, 250, 0.4)',
        'glow-blue': '0 0 40px -10px rgba(96, 165, 250, 0.4)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.4)',
        'glow-emerald': '0 0 40px -10px rgba(52, 211, 153, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}