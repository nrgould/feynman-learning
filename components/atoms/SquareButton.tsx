import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Box from './Box';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';
import useButtonHeight from '@/hooks/useButtonHeight';

type ButtonProps = {
	icon: keyof typeof Ionicons.glyphMap;
	// icon: IconProps<ComponentProps<typeof Ionicons>['name']>;
	variant: 'primary' | 'form';
	onPress?: () => void;
	disabled?: boolean;
};

const SquareButton = ({
	variant = 'primary',
	disabled,
	icon,
	onPress,
	...rest
}: ButtonProps) => {
	const { colors } = useTheme<Theme>();
	const { size, iconSize } = useButtonHeight();

	return (
		<Pressable onPress={onPress}>
			<Box
				padding='s'
				borderRadius='m'
				width={size}
				height={size}
				flexDirection='row'
				borderWidth={2}
				borderColor={disabled ? 'textInputBorder' : 'border'}
				alignItems='center'
				justifyContent='center'
			>
				<Ionicons
					name={icon}
					size={iconSize}
					color={
						disabled ? colors.textInputBorder : colors.textSecondary
					}
					{...rest}
				/>
			</Box>
		</Pressable>
	);
};

export default SquareButton;
