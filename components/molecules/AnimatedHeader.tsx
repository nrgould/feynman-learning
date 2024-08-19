import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
	useAnimatedStyle,
	SharedValue,
	interpolate,
} from 'react-native-reanimated';
import Box from '../atoms/Box';
import Text from '../atoms/Text';

interface Props {
	title: string;
	scrollY: SharedValue<number>;
}

export default function AnimatedHeader({ title, scrollY }: Readonly<Props>) {
	const headerStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(scrollY.value, [0, 30], [0, 1], 'clamp'),
		};
	});

	return (
		<Box
			// height={100}
			flex={1}
			position='absolute'
			top={0}
			left={0}
			right={0}
			borderBottomColor='border'
			// borderBottomWidth={scrollY.value > 30 ? 1 : 0}
			backgroundColor='background'
			justifyContent='center'
			alignItems='center'
			paddingTop='notch'
			paddingBottom='s'
			zIndex={1000}
		>
			<Animated.View style={[styles.header, headerStyle]}>
				<Text variant='subheader' fontSize={20}>
					{title}
				</Text>
			</Animated.View>
		</Box>
	);
}

const styles = StyleSheet.create({
	header: {
		// position: 'absolute',
		// top: 0,
		// left: 0,
		// right: 0,
		// height: 100,
		// justifyContent: 'center',
		// alignItems: 'center',
		// backgroundColor: '#6200ee',
		flex: 1,
		zIndex: 1000, // Ensure it is above other content
		// paddingTop: 60, // Adjust for iOS notch
		// paddingBottom: 10, // Adjust for iOS notch
	},
});
