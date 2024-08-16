import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Box from './Box';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';
import useButtonHeight from '@/hooks/useButtonHeight';

type ButtonProps = {
	icon: keyof typeof Ionicons.glyphMap;
	// icon: IconProps<ComponentProps<typeof Ionicons>['name']>;
	onPress?: () => void;
};

const SquareButton = ({ icon, onPress, ...rest }: ButtonProps) => {
	const { colors } = useTheme<Theme>();
	const { size, iconSize } = useButtonHeight();

	return (
		<TouchableOpacity onPress={onPress}>
			<Box
				padding='s'
				borderRadius='m'
				width={size}
				height={size}
				flexDirection='row'
				borderWidth={2}
				borderColor='border'
				alignItems='center'
				justifyContent='center'
			>
				<Ionicons
					name={icon}
					size={iconSize}
					color={colors.textSecondary}
					{...rest}
				/>
			</Box>
		</TouchableOpacity>
	);
};

export default SquareButton;
