import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { DarkTheme, DefaultTheme } from '../constants/theme';
import useThemeStore from '@/store/themeStore';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const { theme } = useThemeStore();
	const [loaded] = useFonts({
		JosefinSans: require('../assets/fonts/JosefinSans-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
			<StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='+not-found' />
			</Stack>
		</ThemeProvider>
	);
}
