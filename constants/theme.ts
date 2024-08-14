// themes.ts
import { createTheme } from '@shopify/restyle';

const theme = createTheme({
	colors: {
		background: '#FFFFFF',
		primary: '#1A73E8',
		secondary: '#202124',
		textPrimary: '#202124',
		textSecondary: '#5F6368',
		buttonText: '#ffffff',
		border: '#E0E0E0',
		success: '#34A853',
		danger: '#EA4335',
		warning: '#FBBC05',
		textInputBackground: '#f0f0f0',
		textInputBorder: '#cccccc',
		textInputText: '#333333',
		placeholderText: '#888888',
		errorBackground: '#ffdddd',
		errorBorder: '#ff3333',
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 32,
		xxl: 64,
	},
	borderRadii: {
		s: 4,
		m: 8,
		l: 16,
	},
	textVariants: {
		header: {
			fontSize: 32,
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
		button: {
			fontSize: 16,
			fontWeight: 'bold',
			color: 'buttonText',
		},
	},
	textInputVariants: {
		default: {
			backgroundColor: 'textInputBackground',
			borderRadius: 'm',
			padding: 'm',
			borderColor: 'textInputBorder',
			borderWidth: 1,
			color: 'textInputText',
		},
		error: {
			backgroundColor: 'errorBackground',
			borderRadius: 'm',
			padding: 'm',
			borderColor: 'errorBorder',
			borderWidth: 1,
			color: 'textInputText',
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
		background: '#131416',
		textPrimary: '#FFFFFF',
		textSecondary: '#E0E0E0',
		textInputBackground: '#202124',
		textInputBorder: '#333333',
		textInputText: '#cccccc',
	},
};

export type Theme = typeof theme;
