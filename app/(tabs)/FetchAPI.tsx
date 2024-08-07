import React, { useEffect, useRef, useState } from 'react';
import Box from '@/components/atoms/Box';
import { ThemedText } from '@/components/ThemedText';
import axios from 'axios';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import ListItem from '@/components/organisms/ListItem';

export interface Geo {
	lat: string;
	lng: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
export default function FetchAPI() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string>();

	const flashListRef = useRef<any>();

	const apiClient = axios.create({
		baseURL: `https://jsonplaceholder.typicode.com`,
		timeout: 1000,
	});

	const renderItem = ({ item, index }: ListRenderItemInfo<User>) => {
		return <ListItem user={item} index={index.toString()} />;
	};

	useEffect(() => {
		apiClient
			.get(`/users`)
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				setError(err);
			});
	}, []);

	return (
		<Box
			backgroundColor='background'
			padding='xl'
			style={{ paddingTop: 100 }}
			flex={1}>
			<ThemedText type='title'>fetchAPI</ThemedText>
			<ThemedText type='defaultSemiBold' style={{ color: 'red' }}>
				{error}
			</ThemedText>
			<FlashList
				ref={flashListRef}
				renderItem={renderItem}
				estimatedItemSize={150}
				stickyHeaderIndices={[0]}
				data={users}
				ListHeaderComponent={
					<Box
						padding='m'
						borderRadius={8}
						backgroundColor='secondary'
						alignItems='center'
						justifyContent='center'
						marginBottom='m'>
						<ThemedText type='title'>USERS</ThemedText>
					</Box>
				}
			/>
		</Box>
	);
}
