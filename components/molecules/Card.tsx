import React, { useLayoutEffect, useRef, useState } from 'react';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Pressable } from 'react-native';

interface CardProps {
	title?: string;
}

export default function Card() {
	const [open, setOpen] = useState<boolean>(false);
	const height = useSharedValue(200);

	const viewRef = useRef(null);

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
		<Pressable onPress={handlePress}>
			<Box
				ref={viewRef}
				backgroundColor='textInputBackground'
				borderColor='textInputBorder'
				borderRadius='l'
				borderWidth={1}
				marginVertical='s'
				overflow='hidden'
			>
				<Animated.View style={{ height }}>
					<Box flexDirection='column' padding='m'>
						<Text variant='subheader' marginVertical='s'>
							Card
						</Text>
						<Text variant='body' marginVertical='s'>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Velit eum quidem molestias quis, veniam
							consequuntur eveniet incidunt maxime excepturi
							dolorum!
						</Text>
						<Text variant='caption' marginVertical='s'>
							Caption
						</Text>
					</Box>
				</Animated.View>
			</Box>
		</Pressable>
	);
}
