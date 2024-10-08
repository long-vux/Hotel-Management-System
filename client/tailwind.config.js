/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto', // Header, Main content, Footer
      },
      gridTemplateColumns: {
        'layout': '250px 1fr', // Sidebar, Main content
      },
      fontFamily: {
        'italiana': ['Italiana', 'serif'],
      },
    },
  },
  plugins: [],
};
