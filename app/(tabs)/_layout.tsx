import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme } from '@/constants/theme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor:
					colorScheme === 'dark'
						? DarkTheme.colors.background
						: DefaultTheme.colors.background,
				headerShown: false,
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'home' : 'home-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					title: 'Explore',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'code-slash' : 'code-slash-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='nonrepeat'
				options={{
					title: 'NonRepeat',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'menu' : 'menu-outline'}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
