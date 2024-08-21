import React, { useEffect, useMemo } from 'react';
import Box from '@/components/atoms/Box';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
	Easing,
	useAnimatedProps,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import useItemHeight from '@/hooks/useItemHeight';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';

interface ProgressProps {
	progress: number;
	duration: number;
	variant: 'primary' | 'secondary' | 'tertiary';
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircleProgressBar({
	progress,
	duration = 1000,
	variant,
}: Readonly<ProgressProps>) {
	const progressValue = useSharedValue(0);
	const { circleSize } = useItemHeight();
	const { colors } = useTheme<Theme>();

	const strokeWidth = 11;
	const radius = circleSize / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	useEffect(() => {
		progressValue.value = withTiming(progress, {
			duration,
			easing: Easing.inOut(Easing.ease),
		});
	}, [progress]);

	const animatedProps = useAnimatedProps(() => {
		return {
			strokeDashoffset: circumference * (1 - progressValue.value),
		};
	});

	const strokeColor = useMemo(() => {
		switch (variant) {
			case 'secondary':
				return colors.danger;
			case 'tertiary':
				return colors.warning;
			case 'primary':
			default:
				return colors.success;
		}
	}, [variant, colors]);

	return (
		<Box
			width={circleSize}
			height={circleSize}
			alignItems='center'
			justifyContent='center'
		>
			<Svg width={circleSize} height={circleSize}>
				<Circle
					stroke={colors.textInputBackground}
					fill='none'
					cx={circleSize / 2}
					cy={circleSize / 2}
					r={radius}
					strokeWidth={strokeWidth}
				/>
				<AnimatedCircle
					stroke={strokeColor}
					fill='none'
					cx={circleSize / 2}
					cy={circleSize / 2}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					animatedProps={animatedProps}
					strokeLinecap='round'
				/>
			</Svg>
		</Box>
	);
}
