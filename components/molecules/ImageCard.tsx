import React, { useRef } from 'react';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import { Dimensions, Pressable } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { router } from 'expo-router';
import { Course } from '@/app/(tabs)/courses';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';

interface Props extends Course {}

export default function ImageCard({
	title,
	subtitle,
	source,
	id,
}: Readonly<Props>) {
	const scale = useSharedValue(1);
	const height = Dimensions.get('window').height / 4;
	const navigation = useNavigation<any>();

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
			onPress={() =>
				router.push({
					pathname: '/(tabs)/courses/[id].tsx',
					params: { id, title },
				})
			}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			<Animated.View style={[animatedStyle]}>
				<Box
					ref={viewRef}
					backgroundColor='textInputBackground'
					borderColor='textInputBorder'
					borderRadius='xxl'
					marginHorizontal='m'
					marginVertical='s'
					overflow='hidden'
				>
					<SharedElement id={id}>
						<Animated.Image
							source={source}
							style={{ width: '100%', height: height }}
							resizeMode='cover'
							sharedTransitionTag='test'
						/>
					</SharedElement>
					<Box flexDirection='column' padding='m'>
						<Text variant='subheader' marginVertical='s'>
							{title}
						</Text>
						<Text variant='body' marginVertical='s'>
							{subtitle}
						</Text>
						<Pressable
							onPress={() => () => navigation.navigate('Details')}
						>
							<Text variant='caption' marginVertical='s'>
								Go to course
							</Text>
						</Pressable>
					</Box>
				</Box>
			</Animated.View>
		</Pressable>
	);
}
