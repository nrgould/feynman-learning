import { Message } from '@/types/Messages';
import { create } from 'zustand';

type Action = {
	type: keyof Actions;
	msg: Message;
};

type State = {
	messages: Message[];
};

type Actions = {
	addMessage: (msg: Message) => void;
};

const msgReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'addMessage':
			return { messages: [...state.messages, action.msg] };
		default:
			return state;
	}
};

export const useMessageStore = create<State & Actions>((set) => ({
	messages: [
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
	],
	addMessage: (msg: Message) =>
		set((state) => msgReducer(state, { type: 'addMessage', msg })),
}));
