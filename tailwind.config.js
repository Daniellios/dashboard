/** @type {import('tailwindcss').Config} */

// prettier-ignore

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "400px",
      // => @media (min-width: 400px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      tabletlg: "875px",
      // => @media (min-width: 875px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }

      xxl: "1980px",
      // => @media (min-width: 1980px) { ... }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-gray": "#5C5C5C",
        "light-gray": "#858585",
        "pink-br": "#fd749b",
        "blue-br": "#8352C2",
        "main-bg": "#1E0338",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        conversion: "repeat(3, minmax(0, 220px))",
      },
      backgroundImage: {
        "wallet-pattern": "url('/images/bg-wallet.svg')",
      },

    },

  },
}
