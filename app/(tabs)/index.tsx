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
import { useMessageStore } from '@/store/countReducer';

export default function HomeScreen() {
	const messages = useMessageStore((state) => state.messages);
	const addMessage = useMessageStore((state) => state.addMessage);
	const [message, setMessage] = useState<string>('');

	const [prompt, setPrompt] = useState<string>('');
	const [response, setResponse] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);

	const openai = new OpenAI({
		organization: process.env.EXPO_PUBLIC_ORG_KEY,
		apiKey: process.env.EXPO_PUBLIC_API_KEY,
	});

	const handleSend = () => {
		addMessage({
			id: Math.random().toString(),
			text: message,
			sender: 'user',
			timestamp: moment().toISOString(),
		});
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
