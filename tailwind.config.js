// import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,700;1,800&display=swap');
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'xs': '480px',
			// => @media (min-width: 640px) { ... }
	  
			'sm': '570px',
			// => @media (min-width: 768px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 1024px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1280px) { ... }
	  
			'xl': '1200px',
			// => @media (min-width: 1536px) { ... }

			'2xl': '1400px',
			// => @media (min-width: 1536px) { ... }
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
				"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
			},
			boxShadow: {
				'3xl': '0 5px 20px hsla(0, 0%, 0%, 0.15)',
				'bottomMenu' : '0 0 10px hsla(0, 0%, 0%, 0.25)',
			  }
		},
	},
	plugins: [],
};
