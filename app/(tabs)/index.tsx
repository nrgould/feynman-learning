import { Image, StyleSheet, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/organisms/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Box from '../../components/atoms/Box';
import { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button';
import OpenAI from 'openai';
import ThemedButton from '@/components/molecules/ThemedButton';
import ThemedTextInput from '@/components/atoms/ThemedTextInput';
import ChatForm from '@/components/molecules/ChatForm';

export default function HomeScreen() {
	const [prompt, setPrompt] = useState<string>('say hello world');
	const [response, setResponse] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);

	const openai = new OpenAI({
		organization: process.env.EXPO_PUBLIC_ORG_KEY,
		apiKey: process.env.EXPO_PUBLIC_API_KEY,
	});

	useEffect(() => {}, []);

	const handleSend = () => {
		setLoading(true);
		openai.chat.completions
			.create({
				model: 'gpt-4o-mini',
				messages: [{ role: 'user', content: prompt }],
			})
			.then((res) => {
				setLoading(false);
				setResponse(res.choices);
				console.log(res.choices[0].message.content);
			});
	};

	return (
		<>
			<Box
				backgroundColor='background'
				paddingTop='xxl'
				paddingHorizontal='m'
			>
				<ThemedText type='header'>Chat</ThemedText>
			</Box>
			<Box
				paddingHorizontal='m'
				backgroundColor='background'
				flex={1}
				width='100%'
				justifyContent='flex-end'
				alignItems='center'
			>
				<ThemedText type='subheader'>
					{response ? response[0].message.content : null}
				</ThemedText>
				<ThemedText type='subheader'>
					{loading ? 'Loading...' : null}
				</ThemedText>
				<ChatForm
					prompt={prompt}
					setPrompt={setPrompt}
					handleSend={handleSend}
				/>
			</Box>
		</>
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
