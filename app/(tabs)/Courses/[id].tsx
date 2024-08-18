import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import Text from '@/components/atoms/Text';
import Box from '@/components/atoms/Box';

export default function CourseDetails() {
	const { id } = useLocalSearchParams();
	return (
		<Box
			flex={1}
			backgroundColor='background'
			alignItems='center'
			justifyContent='center'
		>
			<Text variant='header'>CourseDetails - {id}</Text>
		</Box>
	);
}
