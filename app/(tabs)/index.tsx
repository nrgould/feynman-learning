import { Image, StyleSheet, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Box from '../../components/atoms/Box';
import { useState } from 'react';
import Button from '@/components/atoms/Button';
import { useCountStore } from '@/store/countReducer';
import { useSharedValue } from 'react-native-reanimated';
import Slider from '@react-native-community/slider';

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
	const [incrVal, setIncrVal] = useState(1);
	const [progress, setProgress] = useState<number>(1);
	const count2 = useCountStore((state) => state.count);
	const increment = useCountStore((state) => state.increment);
	const decrement = useCountStore((state) => state.decrement);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/R6II9151.jpg')}
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
				<Box margin='xl'>
					<ThemedText type='title'>count: {count2}</ThemedText>
					<ThemedText type='subtitle'>
						quantity: {progress}
					</ThemedText>
					<Slider
						minimumValue={1}
						maximumValue={10}
						onValueChange={(val) => setProgress(val)}
						step={1}
						value={progress}
					/>
					<Box flexDirection='row'>
						<Button
							title='incr'
							onPress={() => increment(progress)}
						/>
						<Button
							title='decr'
							onPress={() => decrement(progress)}
						/>
					</Box>
				</Box>
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
		height: '100%',
		width: '100%',
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
