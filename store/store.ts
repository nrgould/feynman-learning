import { create } from 'zustand';

export type State = {
	count: number;
};

export type Actions = {
	increment: (qty: number) => void;
	decrement: (qty: number) => void;
};

const useStore = create<State & Actions>((set) => ({
	count: 0,
	increment: (qty: number) =>
		set((state: any) => ({ count: state.count + qty })),
	decrement: (qty: number) =>
		set((state: any) => ({ count: state.count - qty })),
	reset: () => set({ count: 0 }),
}));

export default useStore;
