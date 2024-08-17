import React from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import { ScrollView } from 'react-native';
import ThemedButton from '@/components/atoms/ThemedButton';
import SquareButton from '@/components/atoms/SquareButton';

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
				<Box flexDirection='row' marginVertical='m'>
					<ThemedButton
						variant='primary'
						title='button'
						onPress={() => null}
					/>
					<Box marginHorizontal='m'>
						<SquareButton variant='primary' icon='link' />
					</Box>
					<Box>
						<SquareButton variant='primary' icon='add' />
					</Box>
				</Box>
				<Box flexDirection='row' marginVertical='s'>
					<Box marginRight='s' flex={1}>
						<ThemedButton
							variant='secondary'
							title='2nd button'
							onPress={() => null}
						/>
					</Box>
					<Box marginLeft='s' flex={1}>
						<ThemedButton
							variant='tertiary'
							title=' 3rd button'
							onPress={() => null}
						/>
					</Box>
				</Box>
			</ScrollView>
		</Box>
	);
}
