import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import Text from '@/components/atoms/Text';
import Box from '@/components/atoms/Box';
import { SharedElement } from 'react-navigation-shared-element';
import { useCourseStore } from '@/store/courseReducer';
import Animated from 'react-native-reanimated';

export default function Details() {
	const { id, title } = useLocalSearchParams();
	const courses = useCourseStore((state) => state.courses);

	return (
		<Box flex={1} backgroundColor='background'>
			<Box>
				<SharedElement id={courses[0].id}>
					<Animated.Image
						source={courses[0].source}
						style={{ width: '100%', height: 250 }}
						resizeMode='cover'
						sharedTransitionTag='test'
					/>
				</SharedElement>
				<Box flexDirection='column' padding='m'>
					<Text variant='subheader' marginVertical='s'>
						title
					</Text>
					<Text variant='body' marginVertical='s'>
						subtitle
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
