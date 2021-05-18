module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Lato',
					'Raleway',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				poppins: ['Poppins', 'Arial Black'],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['disabled'],
			textColor: ['disabled'],
			cursor: ['disabled'],
			padding: ['hover'],
			filter: ['hover'],
		},
	},
	plugins: [],
};
