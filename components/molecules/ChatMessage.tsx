import { Message } from '@/types/Messages';
import Box from '../atoms/Box';
import { ThemedText } from '../atoms/ThemedText';
import { StyleSheet } from 'react-native';

type ChatMessageProps = {
	message: Message;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	const isUser = message.sender === 'user';

	return (
		<Box
			maxWidth='80%'
			borderRadius='m'
			marginVertical='m'
			padding='s'
			alignSelf={isUser ? 'flex-end' : 'flex-start'}
			backgroundColor={isUser ? 'primary' : 'border'}
		>
			<ThemedText type='body'>{message.text}</ThemedText>
		</Box>
	);
};

const styles = StyleSheet.create({
	userMessage: {
		backgroundColor: '#DCF8C6',
	},
	botMessage: {
		backgroundColor: '#ECECEC',
	},
	messageText: {
		fontSize: 16,
		color: '#000',
	},
});

export default ChatMessage;
