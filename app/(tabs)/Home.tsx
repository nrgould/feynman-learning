import React from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import { ScrollView } from 'react-native';
import ThemedButton from '@/components/atoms/ThemedButton';
import ThemedSquareButton from '@/components/atoms/ThemedSquareButton';

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
				<Box flexDirection='row'>
					<ThemedButton
						variant='square'
						title='button'
						onPress={() => null}
					/>
					<ThemedSquareButton icon='link' />
					<ThemedSquareButton icon='add' />
				</Box>
				<Card />
				<Card />
				<Card />
			</ScrollView>
		</Box>
	);
}
