// theme.js
const theme = {
	colors: {
		background: '#FFFFFF', // White background
		primary: '#1A73E8', // Blue primary color (similar to Google's blue)
		secondary: '#202124', // Dark gray secondary color (similar to Google's dark text color)
		textPrimary: '#202124', // Primary text color
		textSecondary: '#5F6368', // Secondary text color (lighter gray)
		border: '#E0E0E0', // Light gray border color
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 32,
	},
	textVariants: {
		header: {
			fontSize: 24,
			fontWeight: 'bold',
			color: 'textPrimary',
		},
		subheader: {
			fontSize: 20,
			fontWeight: '600',
			color: 'textSecondary',
		},
		body: {
			fontSize: 16,
			color: 'textPrimary',
		},
		caption: {
			fontSize: 12,
			color: 'textSecondary',
		},
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
		largeTablet: 1024,
	},
};

export type Theme = typeof theme;
export default theme;
