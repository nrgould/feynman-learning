import { Image, StyleSheet, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Box from '../../components/atoms/Box';
import { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button';
import OpenAI from 'openai';

export default function HomeScreen() {
	const [prompt, setPrompt] = useState<string>('say hello world');
	const [response, setResponse] = useState<string>('');

	const openai = new OpenAI({
		organization: process.env.EXPO_PUBLIC_ORG_KEY,
		apiKey: process.env.EXPO_PUBLIC_API_KEY,
	});

	useEffect(() => {}, []);

	const handleSend = () => {
		openai.chat.completions
			.create({
				model: 'gpt-4o-mini',
				messages: [{ role: 'user', content: prompt }],
			})
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/R6II9151.jpg')}
					style={styles.reactLogo}
				/>
			}
		>
			<Box
				padding='m'
				borderRadius={12}
				flex={1}
				justifyContent='center'
				alignItems='center'
			>
				<TextInput
					value={prompt}
					onChangeText={setPrompt}
					placeholder='ask a question'
				/>
				<Button title='Send' onPress={handleSend} />
				<ThemedText type='subtitle'>{response}</ThemedText>
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
