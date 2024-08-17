import React, { useState } from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import { ScrollView } from 'react-native';
import ThemedButton from '@/components/atoms/ThemedButton';
import SquareButton from '@/components/atoms/SquareButton';
import ProgressBar from '@/components/atoms/ProgressBar';

export default function Home() {
	const [progress, setProgress] = useState(0);

	const increaseProgress = () => {
		setProgress((prev) => Math.min(prev + 0.1, 1));
	};

	const decreaseProgress = () => {
		setProgress((prev) => Math.max(prev - 0.1, 0));
	};
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
							title='Inc Prog'
							onPress={increaseProgress}
						/>
					</Box>
					<Box marginLeft='s' flex={1}>
						<ThemedButton
							variant='tertiary'
							title='Dec Prog'
							onPress={decreaseProgress}
						/>
					</Box>
				</Box>
				<Box marginVertical='s'>
					<ProgressBar progress={progress} duration={300} />
				</Box>
			</ScrollView>
		</Box>
	);
}
