import React, { useEffect } from 'react';
import Box from '../atoms/Box';
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import useItemHeight from '@/hooks/useItemHeight';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';

interface ProgressProps {
	progress: number;
	duration: number;
}

export default function ProgressBar({
	progress,
	duration = 1000,
}: Readonly<ProgressProps>) {
	const progressValue = useSharedValue(0);
	const { barSize } = useItemHeight();
	const { colors, borderRadii } = useTheme<Theme>();

	useEffect(() => {
		progressValue.value = withTiming(progress, {
			duration,
			easing: Easing.inOut(Easing.ease),
		});
	}, [progress]);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			width: `${progressValue.value * 100}%`,
		};
	});
	return (
		<Box
			width='100%'
			height={barSize}
			backgroundColor='textInputBackground'
			borderRadius='xl'
			overflow='hidden'
		>
			<Animated.View
				style={[
					{
						backgroundColor: colors.secondary,
						height: '100%',
						borderRadius: borderRadii.xl,
					},
					animatedStyle,
				]}
			/>
		</Box>
	);
}
