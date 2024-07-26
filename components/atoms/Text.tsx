import { createText } from '@shopify/restyle';
import { DefaultTheme } from '../../constants/theme';
import { TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

const Text = createText<typeof DefaultTheme>();

export default Text;
