import React, { useEffect, useState } from 'react';
import Box from '@/components/atoms/Box';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, TextInput } from 'react-native';

export default function NonRepeat() {
	const [text, setText] = useState('');
	const [char, setChar] = useState('');

	function handleFirstNonRepeatingCharacter(str: string): string | null {
		type CharCount = {
			[key: string]: number;
		};
		setText(str);

		const charCount: CharCount = {};

		// Count occurrences of each character
		for (let char of str) {
			charCount[char] = (charCount[char] || 0) + 1;
		}

		// Find the first non-repeating character
		for (let char of str) {
			if (charCount[char] === 1) {
				setChar(char);
				return char;
			}
		}

		return null; // Return null if no non-repeating character is found
	}

	return (
		<Box flex={1} backgroundColor='background'>
			<Box marginHorizontal='l'>
				<ThemedText
					style={{ marginTop: 75, marginBottom: 25 }}
					type='title'>
					Find first non-repeating char in String
				</ThemedText>
				<TextInput
					style={styles.input}
					placeholder='Type here...'
					value={text}
					onChangeText={handleFirstNonRepeatingCharacter}
				/>
				<ThemedText>1st non-repeating character is: {char}</ThemedText>
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
