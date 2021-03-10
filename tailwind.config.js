module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-50": "#EAF0FA",
        "primary-100": "#C1D1F0",
        "primary-200": "#98B3E7",
        "primary-300": "#6F95DD",
        "primary-400": "#4576D3",
        "primary-500": "#2C5DBA",
        "primary-600": "#224890",
        "primary-700": "#183467",
        "primary-800": "#0F1F3E",
        "primary-900": "#050A15",
      },
    },
    fontSize: {
      "extra-small": "0.625rem",
      small: "0.75rem",
      base: "1rem",
      "heading-1": "1.25rem",
      "heading-2": "1.56rem",
      "heading-3": "1.93rem",
      "heading-4": "2.43rem",
      "heading-5": "3.06rem",
    },
    maxWidth: {
      "8xl": "88rem",
      "9xl": "96rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
