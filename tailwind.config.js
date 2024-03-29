/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slowSpin: "spin 16s infinite linear",
      },
      colors: {
        bg: "#020916",
        accent: "#CEFF7E",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        wtf: "82rem",
      },
      borderRadius: {
        wtf: "0.62rem",
        "wtf-xl": "1.25rem",
      },
      boxShadow: {
        innerlight: "inset 0 2px 0 0 rgba(255,255,255,0.15)",
        innerlightmini: "inset 0 1px 0 0 rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};
