import React from 'react';
import {
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
} from 'react-native';
import {
	createRestyleComponent,
	createVariant,
	VariantProps,
} from '@shopify/restyle';
import { Theme } from '@/constants/theme';
import Box from './Box';
import useButtonHeight from '@/hooks/useButtonHeight';
import { backgroundColorNames } from '../../node_modules/npm/node_modules/chalk/source/vendor/ansi-styles/index';

type CustomTextInputProps = RNTextInputProps &
	VariantProps<Theme, 'textInputVariants'> & {
		label?: string;
		error?: any;
	};

const CustomTextInput = createRestyleComponent<CustomTextInputProps, Theme>(
	[createVariant({ themeKey: 'textInputVariants' })],
	RNTextInput
);

const ThemedTextInput = ({
	label,
	variant = 'default',
	error,
	...props
}: CustomTextInputProps) => {
	const { size } = useButtonHeight();
	return (
		<Box marginRight='s'>
			{label && (
				<Box marginBottom='s'>
					<CustomTextInput
						label={label}
						style={{ height: size }}
						placeholderTextColor='placeholderText'
						variant={variant}
						error={error}
						{...props}
					/>
				</Box>
			)}
		</Box>
	);
};

export default ThemedTextInput;
