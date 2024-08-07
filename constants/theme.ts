// themes.ts
import { createTheme } from '@shopify/restyle';

const theme = createTheme({
	colors: {
		background: '#FFFFFF',
		primary: '#1A73E8',
		secondary: '#202124',
		textPrimary: '#202124',
		textSecondary: '#5F6368',
		border: '#E0E0E0',
		success: '#34A853',
		danger: '#EA4335',
		warning: '#FBBC05',
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 32,
		xxl: 64,
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
});

export const DefaultTheme = theme;

export const DarkTheme = {
	...theme,
	colors: {
		...theme.colors,
		background: '#202124',
		textPrimary: '#FFFFFF',
		textSecondary: '#E0E0E0',
	},
};

export type Theme = typeof theme;
