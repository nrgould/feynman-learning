import React from 'react';
import { render } from '@testing-library/react-native';
import Box from '../atoms/Box'; // Adjust the import path as necessary
import { Text } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@/constants/theme';

describe('Box Component', () => {
	it('renders correctly', () => {
		const { getByTestId } = render(<Box testID='box-component' />);

		const box = getByTestId('box-component');
		expect(box).toBeTruthy();
	});

	it('applies styles and other props correctly', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Box
					testID='box-component'
					padding='m'
					backgroundColor='background'
				/>
			</ThemeProvider>
		);

		const box = getByTestId('box-component');
		// Since `@shopify/restyle` applies styles dynamically, you might want to test the presence of certain styles or properties
		expect(box.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					padding: expect.anything(),
					backgroundColor: expect.anything(),
				}),
			])
		);
	});

	it('renders children correctly', () => {
		const { getByText } = render(
			<Box testID='box-component'>
				<Text>Child Content</Text>
			</Box>
		);

		const childText = getByText('Child Content');
		expect(childText).toBeTruthy();
	});
});
