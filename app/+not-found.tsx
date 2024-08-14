import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/atoms/ThemedText';
import Box from '@/components/atoms/Box';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<Box style={styles.container}>
				<ThemedText type='header'>
					This screen doesn't exist.
				</ThemedText>
				<Link href='/' style={styles.link}>
					<ThemedText type='body'>Go to home screen!</ThemedText>
				</Link>
			</Box>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
