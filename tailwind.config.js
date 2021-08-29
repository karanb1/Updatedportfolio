module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#333333",
        "dark-gray": "#888888",
      },
      lineHeight: {
        "xx-loose": "5rem",
      },
    },
  },
  variants: {
    extend: {
      color: ["hover"],
    },
  },
  plugins: [],
};
