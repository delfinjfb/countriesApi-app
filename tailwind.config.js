// tailwind.config.js
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class", // Enable dark mode (class-based)
	theme: {
		extend: {
			boxShadow: {
				custom: "0px 4px 10px rgba(0, 0, 0, 0.1)" // Customize as needed
			},
			colors: {
				"dark-blue": "hsl(209, 23%, 22%)",
				"very-dark-blue": "hsl(207, 26%, 17%)",
				"very-dark-blue-text": "hsl(200, 15%, 8%)",
				"dark-gray": "hsl(0, 0%, 52%)",
				"very-light-gray": "hsl(0, 0%, 98%)",
				white: "hsl(0, 0%, 100%)"
			},
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"]
			}
		}
	},
	plugins: []
};
