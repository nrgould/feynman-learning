// themes.ts
import { createTheme } from '@shopify/restyle';

export const theme = createTheme({
	colors: {
		background: '#F5F5F5',
		primary: '#275DAD',
		secondary: '#6998DD',

		textPrimary: '#202124',
		textSecondary: '#5F6368',

		buttonText: '#ffffff',
		buttonTextTertiary: '#5F6368',
		buttonTertiary: '#D9D9D9',

		border: '#E0E0E0',

		success: '#37BC64',
		danger: '#DE5050',
		warning: '#F9AE3F',

		textInputBackground: '#f0f0f0',
		textInputBorder: '#cccccc',
		textInputText: '#333333',
		placeholderText: '#5F6368',

		errorBackground: '#ffdddd',
		errorBorder: '#ff3333',

		messageUser: '#ffffff',
		messageBot: '#202124',
		messageBgUser: '#22BF90',
		messageBgBot: '#D9D9D9',
	},
	spacing: {
		xxs: 2,
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
		l: 12,
		xl: 16,
		xxl: 24,
	},
	textVariants: {
		header: {
			fontSize: 40,
			fontWeight: 800,
			color: 'textPrimary',
		},
		subheader: {
			fontSize: 24,
			fontWeight: '700',
			color: 'textSecondary',
			// fontFamily: 'SpaceMono'
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
