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

type ChatMessageProps = {
	message: Message;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	const isUser = message.sender === 'user';
	const isSpaced = useChatSpacing(message);

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

	return (
		<Animated.View style={[animatedStyle]}>
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
