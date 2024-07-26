import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Box from '../../components/atoms/Box';
import { useState } from 'react';
import Button from '@/components/atoms/Button';

export default function HomeScreen() {
	function fizzBuzz(count: number): string {
		if (count % 3 === 0 && count % 5 === 0) {
			return 'FizzBuzz';
		} else if (count % 3 === 0) {
			return 'Fizz';
		} else if (count % 5 === 0) {
			return 'Buzz';
		}
		return count.toString();
	}

	const [count, setCount] = useState(1);
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}>
			<Box
				padding='m'
				borderRadius={12}
				width='100%'
				justifyContent='center'
				alignItems='center'>
				<Box paddingBottom='m'>
					<ThemedText type='title'>FizzBuzz</ThemedText>
				</Box>
				<Box
					paddingBottom='m'
					flexDirection='row'
					alignItems='center'
					justifyContent='space-around'>
					<Button
						title='count up'
						onPress={() => setCount(count + 1)}
					/>
					<Button title='reset' onPress={() => setCount(0)} />
				</Box>
				<ThemedText type='subtitle'>{count}</ThemedText>
				<ThemedText type='default'>{fizzBuzz(count)}</ThemedText>
			</Box>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
