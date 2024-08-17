import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import ThemedButton from '../atoms/ThemedButton'; // Adjust the import path as necessary
import { theme } from '../../constants/theme'; // Ensure this points to your theme file
import { Dimensions } from 'react-native';
import { BUTTON_HEIGHT_RATIO } from '@/hooks/useButtonHeight';

describe('ThemedButton Component', () => {
	const mockOnPress = jest.fn();

	const renderWithTheme = (component: React.ReactElement) => {
		return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
	};

	beforeEach(() => {
		mockOnPress.mockClear();
	});

	it('renders the primary variant correctly', () => {
		const { getByText, getByTestId } = renderWithTheme(
			<ThemedButton
				title='Primary Button'
				onPress={mockOnPress}
				variant='primary'
			/>
		);

		const buttonText = getByText('Primary Button');
		const buttonBox = getByTestId('button-box');

		expect(buttonText).toBeTruthy();
		expect(buttonBox.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					backgroundColor: theme.colors.primary,
				}),
			])
		);
		expect(buttonText.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					color: theme.colors.buttonText,
				}),
			])
		);
	});

	it('renders the secondary variant correctly', () => {
		const { getByText, getByTestId } = renderWithTheme(
			<ThemedButton
				title='Secondary Button'
				onPress={mockOnPress}
				variant='secondary'
			/>
		);

		const buttonText = getByText('Secondary Button');
		const buttonBox = getByTestId('button-box');

		expect(buttonText).toBeTruthy();
		expect(buttonBox.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					backgroundColor: theme.colors.secondary,
				}),
			])
		);
		expect(buttonText.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					color: theme.colors.buttonText,
				}),
			])
		);
	});
	it('renders the tertiary variant correctly', () => {
		const { getByText, getByTestId } = renderWithTheme(
			<ThemedButton
				title='Tertiary Button'
				onPress={mockOnPress}
				variant='tertiary'
			/>
		);

		const buttonText = getByText('Tertiary Button');
		const buttonBox = getByTestId('button-box');

		expect(buttonText).toBeTruthy();
		expect(buttonBox.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					backgroundColor: theme.colors.buttonTertiary,
				}),
			])
		);
		expect(buttonText.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					color: theme.colors.buttonTextTertiary,
				}),
			])
		);
	});

	it('triggers onPress correctly when pressed', () => {
		const { getByText } = renderWithTheme(
			<ThemedButton
				title='Press Me'
				onPress={mockOnPress}
				variant='primary'
			/>
		);

		const button = getByText('Press Me');
		fireEvent.press(button);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});

	it('applies dynamic height based on screen size', () => {
		const screenHeight = Dimensions.get('window').height;
		const expectedHeight = screenHeight * BUTTON_HEIGHT_RATIO;

		const { getByTestId } = renderWithTheme(
			<ThemedButton
				title='Dynamic Height'
				onPress={mockOnPress}
				variant='primary'
			/>
		);

		const buttonBox = getByTestId('button-box');

		expect(buttonBox.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					height: expectedHeight,
				}),
			])
		);
	});
});
