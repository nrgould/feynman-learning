import React from 'react';
import Box from '@/components/atoms/Box';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, TextInput } from 'react-native';
import Button from '@/components/atoms/Button';
import useBinarySearch from '@/hooks/useBinarySearch';

export default function BinarySearch() {
	const { array, target, setTarget, index, binarySearch, error } =
		useBinarySearch();
	return (
		<Box flex={1} backgroundColor='background'>
			<Box marginHorizontal='l'>
				<ThemedText
					style={{ marginTop: 75, marginBottom: 25 }}
					type='title'>
					Array Target
				</ThemedText>
				<ThemedText type='subtitle'>{JSON.stringify(array)}</ThemedText>
				<TextInput
					style={styles.input}
					placeholder='Type here...'
					keyboardType='numeric'
					returnKeyType='done'
					value={target.toString()}
					onChangeText={(text) => setTarget(+text)}
				/>
				<Button
					title='search'
					onPress={() => binarySearch(array, target)}
				/>
				<ThemedText>Index of target: {index}</ThemedText>
				{error && (
					<ThemedText style={{ color: 'red' }}>{error}</ThemedText>
				)}
			</Box>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 16,
	},
	label: {
		fontSize: 18,
		marginBottom: 8,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		paddingHorizontal: 8,
		marginBottom: 16,
		color: 'white',
	},
	output: {
		fontSize: 18,
	},
});
