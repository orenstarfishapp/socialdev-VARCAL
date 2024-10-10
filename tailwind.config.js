/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #4a0080 0%, #9900cc 100%)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
      boxShadow: {
        "custom-black": "0px 0px 10px 0px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        rubik: ['"Rubik", Sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-animated")],
};

