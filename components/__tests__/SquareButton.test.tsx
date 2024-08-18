import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import SquareButton from '../atoms/SquareButton';
import { theme } from '@/constants/theme';
import useButtonHeight from '@/hooks/useButtonHeight';

jest.mock('@/hooks/useButtonHeight', () => ({
	__esModule: true,
	default: jest.fn(),
}));

jest.mock('@expo/vector-icons/Ionicons', () => {
	return (props) => <Text {...props} />;
});

describe('SquareButton Component', () => {
	const mockOnPress = jest.fn();

	const renderWithTheme = (component: React.ReactElement) => {
		return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
	};

	beforeEach(() => {
		mockOnPress.mockClear();
		(useButtonHeight as jest.Mock).mockReturnValue({
			size: 40,
			iconSize: 20,
		});
	});

	it('renders correctly with the primary variant', () => {
		const { getByTestId } = renderWithTheme(
			<SquareButton
				icon='home-outline'
				variant='primary'
				onPress={mockOnPress}
			/>
		);

		const buttonBox = getByTestId('button-box');
		const icon = getByTestId('button-icon');

		expect(buttonBox).toBeTruthy();
		expect(icon.props.name).toBe('home-outline');
		expect(icon.props.color).toBe(theme.colors.textSecondary);
	});

	it('applies the disabled styles correctly', () => {
		const { getByTestId } = renderWithTheme(
			<SquareButton
				icon='home-outline'
				variant='primary'
				disabled
				onPress={mockOnPress}
			/>
		);

		const buttonBox = getByTestId('button-box');
		const icon = getByTestId('button-icon');

		expect(buttonBox.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					borderColor: theme.colors.textInputBorder,
				}),
			])
		);
		expect(icon.props.color).toBe(theme.colors.textInputBorder);
	});

	it('triggers onPress when pressed and not disabled', () => {
		const { getByTestId } = renderWithTheme(
			<SquareButton
				icon='home-outline'
				variant='primary'
				onPress={mockOnPress}
			/>
		);

		const button = getByTestId('button-box');
		fireEvent.press(button);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});

	it('does not trigger onPress when disabled', () => {
		const { getByTestId } = renderWithTheme(
			<SquareButton
				icon='home-outline'
				variant='primary'
				disabled
				onPress={mockOnPress}
			/>
		);

		const button = getByTestId('button-box');
		fireEvent.press(button);

		expect(mockOnPress).not.toHaveBeenCalled();
	});
});
