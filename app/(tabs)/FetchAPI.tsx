import React, { useEffect, useState } from 'react';
import Box from '@/components/atoms/Box';
import { ThemedText } from '@/components/ThemedText';
import axios from 'axios';

export default function FetchAPI() {
	const api = axios.create({
		baseURL: `https://jsonplaceholder.typicode.com/users`,
	});

	const [users, setUsers] = useState<any[]>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				setError(err);
			});
	}, []);

	return (
		<Box backgroundColor='background' flex={1}>
			<ThemedText type='title'>fetchAPI</ThemedText>
			<ThemedText type='defaultSemiBold' style={{ color: 'red' }}>
				{error}
			</ThemedText>
		</Box>
	);
}
