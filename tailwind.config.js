/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4e52c9",

          "secondary": "#d39645",

          "accent": "#0d5cbc",

          "neutral": "#181826",

          "base-100": "#fbf9fb",

          "info": "#2e8cef",

          "success": "#29d1af",

          "warning": "#c68906",

          "error": "#ee382b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

