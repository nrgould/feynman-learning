import { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import Box from '../atoms/Box';
import { User } from '@/app/(tabs)/FetchAPI';

interface Props {
	user: User;
	index: string;
}

export default function ListItem({ user, index }: Props) {
	const [height, setHeight] = useState(100);
	console.log(user.name);
	useEffect(() => {
		setHeight(150);
	}, [index]);
	return (
		<Pressable
			onPress={() => {
				if (height === 100) {
					setHeight(200);
				} else {
					setHeight(100);
				}
			}}
			style={{ height }}>
			<Box
				backgroundColor='primary'
				justifyContent='space-around'
				flex={1}
				padding='s'
				borderRadius={4}
				alignItems='flex-start'
				marginBottom='m'
				flexDirection='column'>
				<ThemedText style={{ marginBottom: 0 }} type='subtitle'>
					{user.name}
				</ThemedText>
				<ThemedText style={{ marginBottom: 8 }} type='default'>
					{user.company.name}
				</ThemedText>
				<ThemedText type='defaultSemiBold'>
					{user.email} | {user.website}
				</ThemedText>
			</Box>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'cyan',
		borderWidth: 2,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});
