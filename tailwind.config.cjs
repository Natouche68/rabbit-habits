/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Unbounded", "Inter", "Arial", "sans-serif"],
			},
			boxShadow: {
				md: "4px 4px 0 #000000",
				lg: "8px 8px 0 #000000",
			},
		},
	},

	plugins: [],
};

module.exports = config;
