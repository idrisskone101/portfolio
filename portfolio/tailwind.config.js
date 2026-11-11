/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#323232',
        canvas: 'var(--canvas)',
        rail: 'var(--rail)',
        magenta: 'rgb(210, 45, 128)',
        copy: {
          DEFAULT: 'var(--copy)',
          muted: 'var(--copy-muted)',
          faint: 'var(--copy-faint)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        line: 'var(--line)',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      screens: {
        mlg: {
          max: '1023px',
        },
        '2xl': '1536px',
      },
      borderRadius: {
        blob: '60% 40% 30% 70% / 60% 30% 70% 40%',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionTimingFunction: {
        page: 'var(--ease-out)',
      },
      transitionDuration: {
        page: 'var(--duration-page)',
      },
      animation: {
        morph: 'morph var(--duration-morph) ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '25%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '50%': {
            borderRadius: '45% 55% 35% 65% / 35% 60% 40% 65%',
          },
          '75%': {
            borderRadius: '65% 35% 55% 45% / 45% 35% 65% 55%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
      },
      boxShadow: {
        profile: 'inset 0 0 0 9px hsla(0, 0%, 100%, .3)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
