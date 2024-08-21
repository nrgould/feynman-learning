import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '../../constants/theme';
import { Keyboard } from 'react-native';
import ChatForm from '../molecules/ChatForm';

//Mock Formik handlers
const mockHandleChange = jest.fn();
const mockHandleSubmit = jest.fn();
const mockSetFieldTouched = jest.fn();

const defaultProps = {
	handleChange: mockHandleChange,
	handleSubmit: mockHandleSubmit,
	setFieldTouched: mockSetFieldTouched,
	isValid: true,
	values: { text: '' },
	dirty: true,
	isSubmitting: false,
	touched: {},
	errors: {},
	placeholder: 'Ask a question...',
};

const renderWithTheme = (component: React.ReactElement) => {
	return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('ChatForm Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.spyOn(Keyboard, 'dismiss');
	});

	it('renders correctly with default props', () => {
		const { getByPlaceholderText, getByTestId } = renderWithTheme(
			<ChatForm {...defaultProps} />
		);

		expect(getByPlaceholderText('Ask a question...')).toBeTruthy();
		expect(getByTestId('button-box')).toBeTruthy();
	});

	it('calls handleSubmit when the button is pressed', () => {
		const { getByTestId } = renderWithTheme(<ChatForm {...defaultProps} />);

		const button = getByTestId('button-box');
		fireEvent.press(button);

		expect(mockHandleSubmit).toHaveBeenCalled();
	});
});
