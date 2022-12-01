const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const primary = '#dc3545'

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      blue: {
        100: '#e3ebf3',
        300: '#d9dae8',
      },
      gray: {
        200: '#f5f5f5',
        300: '#d7d7d7',
        500: '#999aa5',
        600: '#66676e',
        650: '#515151',
        700: '#39393f',
        800: '#242529',
        900: '#191b22',
        950: '#101215',
      },
      blue: {
        100: '#f2f6fa',
        200: '#edf2f7',
        300: '#bfd0e0',
      },
    },
    extend: {
      spacing: {
        0.5: '0.12rem',
      },
      fontSize: {
        '2lg': '1.38rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        pulsing: {
          '0%': {
            boxShadow: '0 0 0 -3px #ffffff00, 0 0 0 0 #dc3545',
          },
          '100%': {
            boxShadow: '0 0 0 15px #ffffff00, 0 0 0 18px #ffffff00',
          },
        },
      },
      animation: {
        fade: 'fade .35s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
        pulse: 'pulsing 1.5s ease-out 1s infinite forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    plugin(({ theme, addComponents, addUtilities }) => {
      addComponents({
        '.btn-primary': {
          height: '50px',
          width: '100%',
          backgroundColor: primary,
          color: '#fff',
          borderRadius: '3px',
          border: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          userSelect: 'none',
          transition: 'background-color .3s ease-in-out',
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: '#e25664',
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: '#e25664',
            },
          },
        },
      }),
        addUtilities({
          '.text-shadow': {
            textShadow: '1px 1px rgba(0,0,0,.4)',
          },
          '.outline-border-none': {
            outline: 'none',
            border: 'none',
          },
          '.image-like-bg': {
            objectPosition: 'center',
            objectFit: 'cover',
            pointerEvents: 'none',
          },
          '.flex-center': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        })
    }),
  ],
}
