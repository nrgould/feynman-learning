import { Message } from '@/types/Messages';
import Box from '../atoms/Box';
import { ThemedText } from '../atoms/ThemedText';
import { useChatSpacing } from '@/hooks/useChatSpacing';
import { TouchableHighlight } from 'react-native';

type ChatMessageProps = {
	message: Message;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	const isUser = message.sender === 'user';
	const isSpaced = useChatSpacing(message);

	return (
		<TouchableHighlight>
			<Box
				maxWidth='80%'
				borderRadius='l'
				style={isSpaced ? { marginTop: 12 } : { marginTop: 4 }}
				padding='s'
				paddingHorizontal='m'
				alignSelf={isUser ? 'flex-end' : 'flex-start'}
				backgroundColor={isUser ? 'messageBgUser' : 'messageBgBot'}
			>
				<ThemedText type='body'>{message.text}</ThemedText>
			</Box>
		</TouchableHighlight>
	);
};
export default ChatMessage;
