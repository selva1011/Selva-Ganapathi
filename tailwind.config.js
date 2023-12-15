/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      wobble: {
        from: {
          transform: 'translate3d(0, 0, 0)',
        },
        '15%': {
          transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
        },
        '30%': {
          transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        },
        '45%': {
          transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        },
        '60%': {
          transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        },
        '75%': {
          transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        },
        to: {
          transform: 'translate3d(0, 0, 0)',
        },
      }
    },
    animation:  {
      wobble: 'wobble 1s infinite',
    },
    keyframes: {
        mybounce: {
            '0%': {
              transform: 'scale(1.5)'
            },
             '100%': {
                transform: 'translateY(-35%)',
                transform: 'scale(1.5)',


            },
            '50%': {
                transform: 'translateY(35%)'
            },
        }
    },
    animation: {
        mybounce: 'mybounce 5s ease-in ',
    },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/site1.png')",
        'hero1-pattern': "url('/src/assets/images/site2.png')",
      },
      screens: {
        "wide": "1440px"
      },
      fontFamily: {
        Urbanist : ['Urbanist'],
        Sen : ['Sen'],
      },
      colors: {
        'primary': "#FFFFFF",
        'apple-white' : "#f5f5f7",
        'apple-blue' : "#0066cc",
        'apple-blue2' : "#0071e3",
        'apple-orange' : "#f56900",
        'apple-black' : "#6e6e73",
        'apple-black2' : "#2d2e32",
        'apple-trans' : "rgba(110,110,115,0.5)",
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}