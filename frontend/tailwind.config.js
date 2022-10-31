const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ]
    },
    extend: {
      transitionProperty: {
        height: "height"
      },
      spacing: ({ theme }) => ({
        header: "6rem"
      }),
      minHeight: {
        screenMinusHeader: "calc(100vh - 6rem)"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        // or whichever color you'd like
        html: { color: "rgba(255, 255, 255, 0.9)" }
      });
    })
  ]
};
