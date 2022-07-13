// import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,700;1,800&display=swap');
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "480px",
			sm: "570px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
			"2xl": "1400px",
		},
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"spanish-gray": "hsl(0, 0%, 60%)",
				"sonic-silver": "hsl(0, 0%, 47%)",
				"eerie-black": "hsl(0, 0%, 13%)",
				"salmon-pink": "hsl(353, 100%, 78%)",
				"sandy-brown": "hsl(29, 90%, 65%)",
				bittersweet: "hsl(0, 100%, 70%)",
				"ocean-green": "hsl(152, 51%, 52%)",
				"davys-gray": "hsl(0, 0%, 33%)",
				cultured: "hsl(0, 0%, 93%)",
				white: "hsl(0, 100%, 100%)",
				onyx: "hsl(0, 0%, 27%)",
			},
			keyframes: {
				scaleUp: {
					"0%": {
						transform: "scale(0.9)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
				popup: {
					"0%": {
						opacity: "0",
						visibility: "hidden",
						"pointer-events": "none",
					},
					"100%": {
						opacity: "1",
						visibility: "visible",
						"pointer-events": "all",
					},
				},
				slideInOut: {
					"0%,45%,100%": {
						transform: "translateX(calc(-100% - 40px))",
						opacity: "0",
						visibility: "hidden",
					},

					"50%,95%": {
						transform: "translateX(0)",
						opacity: "1",
						visibility: "visible",
					},
				},
			},
			animation: {
				slideInOut: "slideInOut 10s ease-in-out infinite",
				scaleUp: "scaleUp 0.5s ease-in-out 5s forwards",
				popup: "popup 1s ease-in-out 5s forwards",
			},
			transitionTimingFunction: {
				ease: "ease",
			},
			boxShadow: {
				"3xl": "0 5px 20px hsla(0, 0%, 0%, 0.15)",
				bottomMenu: "0 0 10px hsla(0, 0%, 0%, 0.25)",
			},
			fontSize: {
				"1": "1.563rem",
				"2": "1.375rem",
				"3": "1.25rem",
				"4": "1.125rem",
				"5": "1rem",
				"6": "0.938rem",
				"7": "0.875rem",
				"8": "0.813rem",
				"9": "0.75rem",
				"10": "0.688rem",
				"11": "0.625rem",
				"1-sm":"1.875rem",
				"1-md":"2.375rem",
				"1-lg":"2.625rem",
				"7-lg":"1.625rem",
				"5-lg":"0.941rem",
				
			},
		},
	},
	plugins: [],
};
