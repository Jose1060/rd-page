module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		letterSpacing: {
			thight: "-.015em",
		},
		extend: {
			height: { "half-screen": "50vh" },
			colors: {
				viridian: {
					50: "#f4f7f5",
					100: "#e4f0ee",
					200: "#c1e3d9",
					300: "#8dc5b1",
					400: "#4da284",
					500: "#37855c",
					600: "#2e6c44",
					700: "#275236",
					800: "#1c3828",
					900: "#12221d",
				},
				navy: {
					50: "#f3f7f8",
					100: "#d9f0f9",
					200: "#ade1f2",
					300: "#79c3df",
					400: "#41a1c7",
					500: "#3081ae",
					600: "#296795",
					700: "#234e75",
					800: "#193554",
					900: "#102138",
				},
				turquoise: {
					50: "#f4f7f6",
					100: "#e2f0f1",
					200: "#bde2e0",
					300: "#89c4be",
					400: "#4ba295",
					500: "#36846f",
					600: "#2d6b55",
					700: "#265142",
					800: "#1c3731",
					900: "#122222",
				},
			},
		},
	},
	plugins: [],
};
