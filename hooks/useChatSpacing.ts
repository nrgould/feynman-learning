import { useMessageStore } from '@/store/countReducer';
import { Message } from '@/types/Messages';
import moment from 'moment';

const MESSAGE_SPACING_TIME = 60;

/**
 * Custom hook that determines the spacing between a new chat message and the previous one.
 *
 * This function compares the `timestamp` and `sender` of the current `newMessage`
 * with the previous message in the chat history. It returns `true` if either:
 * 1. The new message was sent after 60 seconds of the previous message, or
 * 2. The sender of the new message is different from the sender of the previous message.
 *
 * Additionally, it ensures that the new message is not the same as the previous one.
 *
 * @param {Message} newMessage - The message currently being processed.
 * @returns {boolean} - Returns `true` if the conditions for close spacing are met; otherwise, `false`.
 */
export const useChatSpacing = (newMessage: Message) => {
	const messages = useMessageStore((state) => state.messages);
	let prevMessage = messages[0];

	const currentMessageIndex = messages.findIndex(
		(message) => message.id === newMessage.id
	);

	if (currentMessageIndex > 0) {
		prevMessage = messages[currentMessageIndex - 1];
	}

	console.log(prevMessage.text, newMessage.text);

	const prevTime = moment(prevMessage.timestamp);
	const newTime = moment(newMessage.timestamp);

	console.log(newTime.diff(prevTime, 'seconds'));

	return (
		(newTime.diff(prevTime, 'seconds') > MESSAGE_SPACING_TIME ||
			prevMessage.sender !== newMessage.sender) &&
		newMessage !== prevMessage
	);
};
