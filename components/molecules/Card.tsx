import React from 'react';
import Box from '../atoms/Box';
import Text from '../atoms/Text';

interface CardProps {
	title?: string;
}

export default function Card() {
	return (
		<Box
			backgroundColor='textInputBackground'
			borderColor='textInputBorder'
			borderRadius='l'
			borderWidth={1}
			flexDirection='column'
			padding='m'
			marginVertical='m'
		>
			<Text variant='subheader' marginVertical='s'>
				Card
			</Text>
			<Text variant='body' marginVertical='s'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
				eum quidem molestias quis, veniam consequuntur eveniet incidunt
				maxime excepturi dolorum!
			</Text>
			<Text variant='caption' marginVertical='s'>
				Caption
			</Text>
		</Box>
	);
}
