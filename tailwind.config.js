module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      bellefair: ['Bellefair', 'serif'],
      barlow: ["'Barlow Condensed'", 'serif'],
    },
    extend: {
      colors: {
        'secondary-text-color': '#D0D6F9',
        'thirdy-text-color': '#383B4B',
      },
      transitionTimingFunction: {
        'move-planet': 'cubic-bezier(1, -0.43, 0.1, -0.25)',
      },
      animation: {
        'ping-once': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'scale-planet': 'scalation 3s linear',
        'scale-planet-down': 'scalationDown 0.30s linear',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: 0.1,
          },
        },
        scalation: {
          '0%, 20%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        scalationDown: {
          from: {
            transform: 'scale(1)',
          },
          to: {
            transform: 'scale(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
