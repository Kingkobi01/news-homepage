/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        primary: "hsl(35, 77%, 62%)",
        secondary: "hsl(5, 85%, 63%)",
        offWhite: "hsl(36, 100%, 99%)",
        neutral: {
          100: "hsl(233, 8%, 79%)",
          200: "hsl(236, 13%, 42%)",
          300: "hsl(240, 100%, 5%)",
        }
      }
    },
  },
  plugins: [],
}

//   - Soft orange: hsl(35, 77 %, 62 %)
//     - Soft red: hsl(5, 85 %, 63 %)

// ### Neutral

// Off - white: hsl(36, 100 %, 99 %)
// Grayish blue: hsl(233, 8 %, 79 %)
// Dark grayish blue: hsl(236, 13 %, 42 %)
// Very dark blue: hsl(240, 100 %, 5 %)