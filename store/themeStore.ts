import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

interface ThemeState {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

// Define the Zustand store
const themeStore = createStore<ThemeState>((set) => ({
	theme: 'light', // Default theme
	toggleTheme: () =>
		set((state) => ({
			theme: state.theme === 'light' ? 'dark' : 'light',
		})),
}));

// Create a hook to use the store
const useThemeStore = () => useStore(themeStore);

export default useThemeStore;
