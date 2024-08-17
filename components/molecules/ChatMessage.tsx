import { Message } from '@/types/Messages';
import Box from '../atoms/Box';
import { ThemedText } from '../atoms/ThemedText';
import { useChatSpacing } from '@/hooks/useChatSpacing';
import { StyleSheet } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withSpring,
} from 'react-native-reanimated';
import { useMessageStore } from '@/store/countReducer';
import Text from '../atoms/Text';

type ChatMessageProps = {
	message: Message;
};

const CHAT_SPACING_SPACED = 12;
const CHAT_SPACING_GROUPED = 2;
const CHAT_SPACING_LAST_MESSAGE = 32;

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	const isUser = message.sender === 'user';
	const messages = useMessageStore((state) => state.messages);
	const isSpaced = useChatSpacing(message);
	const lastMessage: boolean = messages[messages.length - 1] === message;

	console.log(message.text, 'last msg', lastMessage);

	const opacity = useSharedValue(0);
	const translateY = useSharedValue(80);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
			transform: [{ translateY: translateY.value }],
		};
	});

	// Animate the item when it's first rendered
	opacity.value = withDelay(
		5,
		withSpring(1, { damping: 20, stiffness: 180 })
	);
	translateY.value = withDelay(
		5,
		withSpring(0, { damping: 20, stiffness: 180 })
	);

	const spacedStyle = isSpaced
		? { marginTop: CHAT_SPACING_SPACED }
		: { marginTop: CHAT_SPACING_GROUPED };

	const lastMessageStyle = lastMessage
		? { marginBottom: CHAT_SPACING_LAST_MESSAGE }
		: null;

	return (
		<Animated.View style={[animatedStyle, spacedStyle, lastMessageStyle]}>
			<Box
				maxWidth='80%'
				borderRadius='xl'
				padding='s'
				paddingHorizontal='m'
				alignSelf={isUser ? 'flex-end' : 'flex-start'}
				backgroundColor={isUser ? 'secondary' : 'messageBgBot'}
			>
				<Text
					variant='body'
					color={isUser ? 'messageUser' : 'messageBot'}
				>
					{message.text}
				</Text>
			</Box>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
	},
	itemContainer: {},
	itemText: {
		fontSize: 16,
	},
});

export default ChatMessage;
