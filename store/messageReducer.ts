import conversation from '@/constants/dummy-data';
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
	messages: conversation,
	addMessage: (msg: Message) =>
		set((state) => msgReducer(state, { type: 'addMessage', msg })),
}));
