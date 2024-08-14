import { Message } from '@/types/Messages';
import Box from '../atoms/Box';
import { ThemedText } from '../atoms/ThemedText';

type ChatMessageProps = {
	message: Message;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	const isUser = message.sender === 'user';

	return (
		<Box
			maxWidth='80%'
			borderRadius='l'
			marginVertical='s'
			padding='s'
			alignSelf={isUser ? 'flex-end' : 'flex-start'}
			backgroundColor={isUser ? 'messageBgUser' : 'messageBgBot'}
		>
			<ThemedText type='body'>{message.text}</ThemedText>
		</Box>
	);
};
export default ChatMessage;
