/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}",],
  theme: {
		extend: {
			colors: {
				'primary': '#f59e0b',
				'secondary': '#10b981',
				'warning': '#a855f7',
				'background': '#f8fafc',
				'text': '#0f172a'
			},
		},
  },
  plugins: [],
}
