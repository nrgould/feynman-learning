import { ThemedText } from '@/components/atoms/ThemedText';
import Box from '../../components/atoms/Box';
import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import ChatForm from '@/components/molecules/ChatForm';
import { Message } from '@/types/Messages';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatMessage from '@/components/molecules/ChatMessage';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';

const messages: Message[] = [
	{ id: '1', text: 'Hello!', sender: 'user', timestamp: '10:00 AM' },
	{
		id: '2',
		text: 'Hi there! How can I help you today?',
		sender: 'bot',
		timestamp: '10:01 AM',
	},
	{
		id: '3',
		text: 'I need assistance with my order.',
		sender: 'user',
		timestamp: '10:02 AM',
	},
];

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
		<Box backgroundColor='background' flex={1}>
			<Box paddingTop='xxl' paddingHorizontal='m'>
				<ThemedText type='header'>Chat</ThemedText>
			</Box>
			<Box flex={1} paddingHorizontal='m'>
				<FlashList
					data={messages}
					renderItem={({ item }) => <ChatMessage message={item} />}
					keyExtractor={(item) => item.id}
					estimatedItemSize={100}
					inverted
				/>
			</Box>
			<Box
				paddingHorizontal='m'
				// width='100%'
				// justifyContent='flex-end'
				// alignItems='center'
			>
				{/* <ThemedText type='body' style={{ textAlign: 'left' }}>
					{response ? response[0].message.content : null}
				</ThemedText>
				<ThemedText type='subheader'>
					{loading ? 'Loading...' : null}
				</ThemedText> */}
				<ChatForm
					prompt={prompt}
					setPrompt={setPrompt}
					handleSend={handleSend}
				/>
			</Box>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
	},
});
