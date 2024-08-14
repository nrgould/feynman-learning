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
				tabBarShowLabel: false,
				tabBarActiveTintColor:
					colorScheme === 'dark'
						? DarkTheme.colors.primary
						: DefaultTheme.colors.border,
				headerShown: false,
				tabBarStyle: {
					backgroundColor:
						colorScheme === 'dark'
							? DarkTheme.colors.background
							: DefaultTheme.colors.background,
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Chat',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={
								focused ? 'chatbubbles' : 'chatbubbles-outline'
							}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
