import React from 'react';
import { Pressable } from 'react-native';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import useButtonHeight from '@/hooks/useButtonHeight';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

type ButtonProps = {
	title: string;
	onPress: () => void;
	variant?: 'primary' | 'secondary' | 'tertiary';
};

const ThemedButton = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
	const { size } = useButtonHeight();
	const scale = useSharedValue(1);

	const springOptions = {
		damping: 5,
		stiffness: 200,
	};

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }],
		};
	});

	const handlePressIn = () => {
		scale.value = withSpring(0.95, springOptions);
	};

	const handlePressOut = () => {
		scale.value = withSpring(1, springOptions);
	};

	const backgroundColor =
		variant === 'primary'
			? 'primary'
			: variant === 'secondary'
			? 'secondary'
			: 'buttonTertiary';

	const color =
		variant === 'primary' || variant === 'secondary'
			? 'buttonText'
			: 'buttonTextTertiary';

	return (
		<Pressable
			onPress={onPress}
			style={{ flex: 1 }}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			<Animated.View style={animatedStyle}>
				<Box
					padding='s'
					height={size}
					borderRadius='xxl'
					flexDirection='row'
					backgroundColor={backgroundColor}
					testID='button-box'
					borderColor={'border'}
					alignItems='center'
					justifyContent='center'
				>
					<Text color={color} variant='button'>
						{title}
					</Text>
				</Box>
			</Animated.View>
		</Pressable>
	);
};

export default ThemedButton;
