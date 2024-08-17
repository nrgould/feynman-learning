import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import useButtonHeight from '@/hooks/useButtonHeight';

type ButtonProps = {
	title: string;
	onPress: () => void;
	variant?: 'primary' | 'secondary';
};

const ThemedButton = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
	const { size } = useButtonHeight();

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
				testID='button-box'
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
