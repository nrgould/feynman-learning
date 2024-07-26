// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../constants/theme';
import Box from './Box';
import Text from './Text';

interface CustomButtonProps extends TouchableOpacityProps {
	title: string;
	variant?: keyof Theme['colors'];
}

const Button: React.FC<CustomButtonProps> = ({
	title,
	onPress,
	variant = 'primary',
	...props
}) => {
	const theme = useTheme<Theme>();
	const backgroundColor = variant as keyof Theme['colors'];

	return (
		<TouchableOpacity onPress={onPress} {...props}>
			<Box
				padding='m'
				margin='s'
				backgroundColor={backgroundColor}
				borderRadius={10}
				alignItems='center'
				justifyContent='center'>
				<Text variant='body' color='background'>
					{title}
				</Text>
			</Box>
		</TouchableOpacity>
	);
};

export default Button;
