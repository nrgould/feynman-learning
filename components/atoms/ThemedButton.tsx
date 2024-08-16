import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Box from '../atoms/Box';
import Text from '../atoms/Text';

type ButtonProps = {
	title: string;
	onPress: () => void;
	variant?: 'primary' | 'secondary' | 'square';
};

const ThemedButton = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
	const screenHeight = Dimensions.get('window').height;
	const size = screenHeight * 0.05;

	return (
		<TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
			<Box
				padding='s'
				height={size}
				borderRadius='m'
				flexDirection='row'
				backgroundColor={
					variant === 'primary' ? 'primary' : 'buttonSecondary'
				}
				borderColor={'border'}
				alignItems='center'
				justifyContent='center'
			>
				<Text
					color={
						variant === 'primary'
							? 'buttonText'
							: 'buttonTextSecondary'
					}
					variant='button'
				>
					{title}
				</Text>
			</Box>
		</TouchableOpacity>
	);
};

export default ThemedButton;
