import React from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import { ScrollView } from 'react-native';

export default function Home() {
	return (
		<Box
			flex={1}
			backgroundColor='background'
			paddingTop='xxl'
			paddingHorizontal='m'
		>
			<Text variant='header'>Home</Text>
			<ScrollView>
				<Card />
				<Card />
				<Card />
			</ScrollView>
		</Box>
	);
}
