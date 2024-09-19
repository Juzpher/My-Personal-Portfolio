/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Colors --start
      colors: {
        primary: {
          default: "#18181B",
          25: "#2E2E2E",
          50: "#28282C",
          75: "#343436",
          100: "#1C1B1E",
        },
        secondary: {
          default: "#F7FAFF",
          50: "#605F61",
        },
        accent: {
          default:
            "linear-gradient(90deg, #66B274 0%, #62B28F 30%, #55B1C1 60%, #4AB1E2 100%)",
        },
      },
      //Colors --end

      //Radius --start
      borderRadius: {
        8: "8px",
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
      },
      //Radius --end

      fontFamily: {
        default: ["Poppins", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          "background-image": "var(--tw-gradient-text)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".bg-gradient": {
          "background-image": "var(--tw-gradient-bg)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
