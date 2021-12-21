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
        'ping-once': 'ping 1.3s cubic-bezier(1, 2, 0, 1) infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: 0.1,
          },
        },
      },
    },
  },
  plugins: [],
}
