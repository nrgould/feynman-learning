import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CoursesLayout() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName='index'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name='index'
				component={require('./index').default}
				options={{ headerShown: false, title: 'Courses List' }}
			/>
			<Stack.Screen
				name='Details'
				component={require('./Details').default}
				options={{ headerShown: false, title: 'Course Details' }}
			/>
		</Stack.Navigator>
	);
}
