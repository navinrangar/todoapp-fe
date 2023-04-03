/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '3.5': '14px',
        '18': '72px',
      },
      margin: {
        '18': '72px',
      },
      backgroundImage: {
        'buildings': "url('https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
      },
    },
  },
  plugins: [],
}