import React, { useLayoutEffect, useRef, useState } from 'react';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { Dimensions, Pressable } from 'react-native';

interface CardProps {
	title?: string;
	image?: string;
	rest?: any[];
}

export default function Card({ image, ...rest }: Readonly<CardProps>) {
	const [open, setOpen] = useState<boolean>(false);
	const height = useSharedValue(Dimensions.get('window').height / 5);
	const width = Dimensions.get('window').width / 2;

	const viewRef = useRef(null);

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
		scale.value = withSpring(0.97, springOptions);
	};

	const handlePressOut = () => {
		scale.value = withSpring(1, springOptions);
	};

	

	const handlePress = () => {
		if (!open) {
			height.value = withSpring(height.value + 100, {
				damping: 15,
				stiffness: 100,
				mass: 1,
				overshootClamping: true,
				restDisplacementThreshold: 0.01,
				restSpeedThreshold: 0.01,
				velocity: 10,
			});
		} else {
			height.value = withSpring(height.value - 100, {
				damping: 15,
				stiffness: 100,
				mass: 1,
				overshootClamping: true,
				restDisplacementThreshold: 0.01,
				restSpeedThreshold: 0.01,
				velocity: 10,
			});
		}
		setOpen((prev) => !prev);
	};

	return (
		<Pressable
			onPress={handlePress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			{...rest}
		>
			<Animated.View style={[{ height }, animatedStyle]}>
				<Box
					ref={viewRef}
					backgroundColor='textInputBackground'
					borderColor='textInputBorder'
					borderRadius='xxl'
					marginRight='m'
					overflow='hidden'
				>
					<Box flexDirection='column' padding='m' width={width}>
						<Text variant='subheader' marginVertical='s'>
							Card
						</Text>
						<Text variant='body' marginVertical='s'>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit.
						</Text>
						<Text variant='caption' marginVertical='s'>
							Caption
						</Text>
					</Box>
				</Box>
			</Animated.View>
		</Pressable>
	);
}
