import { ThemedText } from '@/components/atoms/ThemedText';
import Box from '../../components/atoms/Box';
import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import ChatForm from '@/components/molecules/ChatForm';
import { Message } from '@/types/Messages';
import ChatMessage from '@/components/molecules/ChatMessage';
import { FlashList } from '@shopify/flash-list';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import moment from 'moment';

export default function HomeScreen() {
	const [prompt, setPrompt] = useState<string>('');
	const [messages, setMessages] = useState<Message[]>([
		{
			id: '1',
			text: 'Hello!',
			sender: 'user',
			timestamp: '2024-08-14T12:00:00Z',
		},
		{
			id: '2',
			text: 'Hi there! How can I help you today?',
			sender: 'user',
			timestamp: '2024-08-14T12:00:00Z',
		},
		{
			id: '3',
			text: 'I need assistance with my order.',
			sender: 'assistant',
			timestamp: '2024-08-14T12:00:45Z',
		},
	]);
	const [response, setResponse] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	const openai = new OpenAI({
		organization: process.env.EXPO_PUBLIC_ORG_KEY,
		apiKey: process.env.EXPO_PUBLIC_API_KEY,
	});

	useEffect(() => {
		console.log(messages);
	}, []);

	const handleChatSpacing = (newMessage: Message): boolean => {
		const prevMessage = messages[messages.length - 1];

		const prevTime = moment(prevMessage.timestamp);
		const newTime = moment(newMessage.timestamp);

		return (
			newTime.diff(prevTime, 'seconds') < 60 ||
			prevMessage.sender !== newMessage.sender
		);
	};

	const handleSend = () => {
		// setLoading(true);

		setMessages((prev) => [
			...prev,
			{
				id: Math.random().toString(),
				text: message,
				sender: 'user',
				timestamp: new Date().getTime().toString(),
			},
		]);
		setMessage('');

		// openai.chat.completions
		// 	.create({
		// 		model: 'gpt-4o-mini',
		// 		messages: [{ role: 'user', content: prompt }],
		// 	})
		// 	.then((res) => {
		// 		setLoading(false);
		// 		setResponse(res.choices);
		// 		console.log(res.choices[0].message.content);
		// 	});
	};

	return (
		<Box backgroundColor='background' flex={1}>
			<Box paddingTop='xxl' paddingHorizontal='m'>
				<ThemedText type='header'>Chat</ThemedText>
			</Box>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				keyboardVerticalOffset={0}
			>
				<Box flex={1} paddingHorizontal='m'>
					<FlashList
						data={messages}
						renderItem={({ item }) => (
							<ChatMessage message={item} />
						)}
						keyExtractor={(item) => item.id}
						estimatedItemSize={100}
						inverted
					/>
				</Box>
				<Box paddingHorizontal='m'>
					{/* <ThemedText type='body' style={{ textAlign: 'left' }}>
						{response ? response[0].message.content : null}
					</ThemedText>
					<ThemedText type='subheader'>
						{loading ? 'Loading...' : null}
					</ThemedText> */}
					<ChatForm
						prompt={message}
						setPrompt={setMessage}
						handleSend={handleSend}
					/>
				</Box>
			</KeyboardAvoidingView>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
});
