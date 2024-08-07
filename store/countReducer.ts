import { create } from 'zustand';

type Action = {
	type: keyof Actions;
	qty: number;
};

type State = {
	count: number;
};

type Actions = {
	increment: (qty: number) => void;
	decrement: (qty: number) => void;
};

const countReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.qty };
		case 'decrement':
			return { count: state.count - action.qty };
		default:
			return state;
	}
};

export const useCountStore = create<State & Actions>((set) => ({
	count: 0,
	increment: (qty: number) =>
		set((state) => countReducer(state, { type: 'increment', qty })),
	decrement: (qty: number) =>
		set((state) => countReducer(state, { type: 'decrement', qty })),
}));
