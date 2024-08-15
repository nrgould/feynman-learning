import React from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import { Switch } from 'react-native';
import useThemeStore from '@/store/themeStore';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';

export default function User() {
	const { theme, toggleTheme } = useThemeStore();
	const { colors } = useTheme<Theme>();
	return (
		<Box
			flex={1}
			backgroundColor='background'
			paddingTop='xxl'
			paddingHorizontal='m'
		>
			<Text variant='header'>User</Text>
			<Switch
				value={theme === 'dark'}
				onValueChange={toggleTheme}
				trackColor={{ false: colors.primary, true: colors.secondary }}
			/>
		</Box>
	);
}
