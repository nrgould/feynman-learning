import React from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import { ScrollView } from 'react-native';
import ImageCard from '@/components/molecules/ImageCard';

export default function CoursesList() {
	return (
		<Box flex={1} backgroundColor='background' paddingTop='xxl'>
			<ScrollView>
				<Text margin='m' variant='header'>
					Courses
				</Text>
				<ImageCard />
			</ScrollView>
		</Box>
	);
}
