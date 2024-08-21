import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Box from './Box';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';
import useItemHeight from '@/hooks/useItemHeight';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

type ButtonProps = {
	icon: keyof typeof Ionicons.glyphMap;
	variant: 'primary';
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
	const { size, iconSize } = useItemHeight();

	const scale = useSharedValue(1);

	const springOptions = {
		damping: 5,
		stiffness: 200,
		// mass: 1,
	};

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }],
		};
	});

	const handlePressIn = () => {
		if (!disabled) {
			scale.value = withSpring(0.95, springOptions);
		}
	};

	const handlePressOut = () => {
		if (!disabled) {
			scale.value = withSpring(1, springOptions);
		}
	};

	return (
		<Pressable
			onPress={onPress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			<Animated.View style={animatedStyle}>
				<Box
					testID='button-box'
					padding='s'
					borderRadius='m'
					width={size}
					height={size}
					flexDirection='row'
					borderWidth={1}
					borderColor={disabled ? 'textInputBorder' : 'border'}
					alignItems='center'
					justifyContent='center'
				>
					<Ionicons
						testID='button-icon'
						name={icon}
						size={iconSize}
						color={
							disabled
								? colors.textInputBorder
								: colors.textSecondary
						}
						{...rest}
					/>
				</Box>
			</Animated.View>
		</Pressable>
	);
};

export default SquareButton;
