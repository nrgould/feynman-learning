import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

interface ThemeState {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

const themeStore = createStore<ThemeState>((set) => ({
	theme: 'light',
	toggleTheme: () =>
		set((state) => ({
			theme: state.theme === 'light' ? 'dark' : 'light',
		})),
}));

const useThemeStore = () => useStore(themeStore);

export default useThemeStore;
