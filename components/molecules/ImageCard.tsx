import React, { useRef } from 'react';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import { Image, Pressable } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { Link } from 'expo-router';

interface Apps {
	id: number;
	title: string;
	subtitle: string;
	source: string;
	// source: ImageSourcePropType;
	content: string;
}

const apps: Apps[] = [
	{
		id: 0,
		title: 'Namaste',
		subtitle: 'Best Yoga Apps for the Summer',
		source: '../../assets/images/R6II9151.jpg',
		content: '',
	},
	{
		id: 1,
		title: 'Mindful Meditation',
		subtitle: 'Top Apps for Daily Meditation',
		source: '../../assets/images/R6II1763-ROCK.jpg',
		content: '',
	},
	{
		id: 2,
		title: 'Healthy Eats',
		subtitle: 'Your Guide to Eating Clean',
		source: '../../assets/images/R6II7452-Edit.jpg',
		content: '',
	},
];

export default function ImageCard() {
	const scale = useSharedValue(1);

	const viewRef = useRef(null);

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
	return (
		<Pressable
			// onPress={handlePress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			<Animated.View style={[animatedStyle]}>
				<Box
					ref={viewRef}
					backgroundColor='textInputBackground'
					borderColor='textInputBorder'
					borderRadius='xxl'
					margin='m'
					overflow='hidden'
				>
					{/* <Image
						source={require(apps[0].source)} // You can pass the source dynamically
						style={{ width: '100%', height: 150 }}
						resizeMode='cover'
					/> */}
					<Box flexDirection='column' padding='m'>
						<Text variant='subheader' marginVertical='s'>
							Card
						</Text>
						<Text variant='body' marginVertical='s'>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit.
						</Text>
						<Link href='/CourseDetails' />
						<Text variant='caption' marginVertical='s'>
							Caption
						</Text>
					</Box>
				</Box>
			</Animated.View>
		</Pressable>
	);
}
