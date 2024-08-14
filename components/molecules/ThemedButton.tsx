import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../atoms/Box';
import Text from '../atoms/Text';

type ButtonProps = {
	title: string;
	onPress: () => void;
	variant?: 'primary' | 'secondary';
};

const ThemedButton = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Box
				padding='m'
				borderRadius='m'
				flexDirection='row'
				marginVertical='m'
				backgroundColor={
					variant === 'primary' ? 'primary' : 'secondary'
				}
				alignItems='center'
				justifyContent='center'
			>
				<Text variant='button'>{title}</Text>
			</Box>
		</TouchableOpacity>
	);
};

export default ThemedButton;
