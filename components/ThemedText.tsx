import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { createText, useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';

const Text = createText<Theme>();

export type ThemedTextProps = RNTextProps & {
	type?: 'header' | 'subheader' | 'body' | 'caption' | 'button';
};

export function ThemedText({ type = 'body', style, ...rest }: ThemedTextProps) {
	const theme = useTheme<Theme>();
	const color =
		theme.colors[type === 'button' ? 'buttonText' : 'textPrimary'];

	return <Text variant={type} style={[{ color }, style]} {...rest} />;
}
