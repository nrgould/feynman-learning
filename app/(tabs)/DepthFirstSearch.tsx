import { Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import Box from '@/components/atoms/Box';
import useDepthFirstSearch from '@/hooks/useDepthFirstSearch';
import Button from '@/components/atoms/Button';

export default function DepthFirstSearch() {
	const {
		handleDFS,
		traversalOrder,
		setStart,
		start,
		graph,
	} = useDepthFirstSearch();
	return (
		<Box
			backgroundColor={'background'}
			flex={1}
			justifyContent={'center'}
			alignItems='center'
			padding='m'
			style={{ paddingTop: 100 }}>
			<ThemedText type='title'>Depth-First Search</ThemedText>
			<ThemedText type='default'>{JSON.stringify(graph)}</ThemedText>
			<TextInput
				placeholder='Set Start'
				value={start}
				onChangeText={setStart}
				maxLength={1}
			/>
			<ThemedText type='defaultSemiBold'>Start node: {start}</ThemedText>
			<Button title='Traverse' onPress={handleDFS} />
			<ThemedText type='subtitle'>DFS Traversal Order:</ThemedText>
			<ScrollView style={styles.scrollView}>
				{traversalOrder.map((node: any, index: number) => (
					<Text key={index} style={styles.node}>
						{node}
					</Text>
				))}
			</ScrollView>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	scrollView: {
		marginTop: 20,
		width: '100%',
	},
	node: {
		fontSize: 18,
		padding: 10,
		marginVertical: 5,
		backgroundColor: '#f0f0f0',
		borderRadius: 5,
		textAlign: 'center',
	},
});
