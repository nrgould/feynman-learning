import React, { useState } from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import { Dimensions, Image, ScrollView } from 'react-native';
import ThemedButton from '@/components/atoms/ThemedButton';
import SquareButton from '@/components/atoms/SquareButton';
import ProgressBar from '@/components/atoms/ProgressBar';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';

export default function Home() {
	const [progress, setProgress] = useState(0);
	const { borderRadii } = useTheme<Theme>();
	const width = Dimensions.get('window').width / 2 + borderRadii.l;

	const increaseProgress = () => {
		setProgress((prev) => Math.min(prev + 0.1, 1));
	};

	const decreaseProgress = () => {
		setProgress((prev) => Math.max(prev - 0.1, 0));
	};
	return (
		<Box flex={1} backgroundColor='background' paddingTop='xxl'>
			<ScrollView>
				<Text margin='m' variant='header'>
					Home
				</Text>
				<ScrollView
					snapToInterval={width}
					horizontal
					showsHorizontalScrollIndicator={false}
					decelerationRate='fast'
					contentContainerStyle={{
						// alignItems: 'center',
						marginHorizontal: borderRadii.xl,
					}}
				>
					<Card />
					<Card />
					<Card />
					<Card />
				</ScrollView>
				<Box flexDirection='row' margin='m'>
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
				<Box
					flexDirection='row'
					marginVertical='s'
					marginHorizontal='m'
				>
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
				<Box margin='m'>
					<ProgressBar progress={progress} duration={300} />
				</Box>
				<Box
					margin='m'
					flex={1}
					justifyContent='center'
					alignItems='center'
					borderRadius='xxl'
					overflow='hidden'
				>
					<Image
						source={require('../../assets/images/R6II9151.jpg')}
						style={{ height: 300 }}
						resizeMode='contain'
					/>
				</Box>
			</ScrollView>
		</Box>
	);
}
