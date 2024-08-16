import React from 'react';
import Box from '../atoms/Box';
import ThemedTextInput from '../atoms/ThemedTextInput';
import ThemedButton from '../atoms/ThemedButton';

interface Props {
	prompt: string;
	setPrompt: React.Dispatch<React.SetStateAction<string>>;
	handleSend: () => void;
}

export default function ChatForm({
	prompt,
	setPrompt,
	handleSend,
}: Readonly<Props>) {
	return (
		<Box flexDirection='row' marginVertical='s'>
			<Box flex={1} marginRight='xs'>
				<ThemedTextInput
					label='Error Input'
					value={prompt}
					onChangeText={setPrompt}
					placeholder='ask a question'
					returnKeyType='done'
				/>
			</Box>
			<Box width='auto'>
				<ThemedButton
					title='Send'
					variant='primary'
					onPress={handleSend}
				/>
			</Box>
		</Box>
	);
}
