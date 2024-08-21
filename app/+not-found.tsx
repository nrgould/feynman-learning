import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<Box style={styles.container}>
				<Text variant='header'>This screen doesn't exist.</Text>
				<Link href='/' style={styles.link}>
					<Text variant='body'>Go to home screen!</Text>
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
