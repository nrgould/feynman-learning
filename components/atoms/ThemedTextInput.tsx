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

type CustomTextInputProps = RNTextInputProps &
	VariantProps<Theme, 'textInputVariants'> & {
		label?: string;
	};

const CustomTextInput = createRestyleComponent<CustomTextInputProps, Theme>(
	[createVariant({ themeKey: 'textInputVariants' })],
	RNTextInput
);

const ThemedTextInput = ({
	label,
	variant = 'default',
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
						{...props}
					/>
				</Box>
			)}
		</Box>
	);
};

export default ThemedTextInput;
