module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'left-room': "url('./images/halls/left.png')",
        'middle-room': "url('./images/halls/middle.png')",
        'right-room': "url('./images/halls/right.png')",
      },
      fontSize: {
        'xxs': '.50rem',
      }
    },
  },
  plugins: [],
}
