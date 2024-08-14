export const useChatSpacing = () => {
	const handleChatSpacing = (newMessage: Message): boolean => {
		const prevMessage = messages[messages.length - 1];

		const prevTime = moment(prevMessage.timestamp);
		const newTime = moment(newMessage.timestamp);

		return (
			newTime.diff(prevTime, 'seconds') < 60 ||
			prevMessage.sender !== newMessage.sender
		);
	};
};
