/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      textColor: {
        primary: "#333",
        secondary: "#6d28d9",
        white: "#fff",
      },
      colors: {
        body: {
          light: "#fff",
          dark: "#1f2937",
        },
        text: {
          light: "#111827",
          dark: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
};
