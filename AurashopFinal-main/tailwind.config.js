/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: {
          DEFAULT: "#FF0000",
          100: "#FF0000",
          200: "#FF0000",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#fff",
        },
      },
      fontFamily: {
        sans: ['Poppins-Regular', 'NotoSansThai-Regular'],
        'en-thin': ['Poppins-Thin'],
        'en-extralight': ['Poppins-ExtraLight'],
        'en-light': ['Poppins-Light'],
        'en-regular': ['Poppins-Regular'],
        'en-medium': ['Poppins-Medium'],
        'en-semibold': ['Poppins-SemiBold'],
        'en-bold': ['Poppins-Bold'],
        'en-extrabold': ['Poppins-ExtraBold'],
        'en-black': ['Poppins-Black'],
        'th-thin': ['NotoSansThai-Thin'],
        'th-extralight': ['NotoSansThai-ExtraLight'],
        'th-light': ['NotoSansThai-Light'],
        'th-regular': ['NotoSansThai-Regular'],
        'th-medium': ['NotoSansThai-Medium'],
        'th-semibold': ['NotoSansThai-SemiBold'],
        'th-bold': ['NotoSansThai-Bold'],
        'th-extrabold': ['NotoSansThai-ExtraBold'],
        'th-black': ['NotoSansThai-Black'],
      },
    },
  },
  plugins: [],
}