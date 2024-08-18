import React from 'react';
import { Stack } from 'expo-router';

export default function CoursesLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ headerShown: false, title: 'Courses List' }}
			/>
			<Stack.Screen
				name='[id]'
				options={{ headerShown: false, title: 'Course Details' }}
			/>
		</Stack>
	);
}
