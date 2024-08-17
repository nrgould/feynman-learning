import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SquareButton from '../../components/atoms/SquareButton';
import { useTheme } from '@shopify/restyle';
import useButtonHeight from '@/hooks/useButtonHeight';
import { View } from 'react-native';

// Mock the `useTheme` hook
jest.mock('@shopify/restyle', () => ({
	useTheme: jest.fn(),
}));

// Mock the `useButtonHeight` hook
jest.mock('@/hooks/useButtonHeight', () => ({
	__esModule: true,
	default: jest.fn(),
}));

jest.mock('../atoms/Box', () => {
	return (props: any) => <View {...props} />;
});

describe('SquareButton', () => {
	it('renders without crashing', () => {
		render(<SquareButton icon='home' />);
	});
});
