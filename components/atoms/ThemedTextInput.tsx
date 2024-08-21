import React from 'react';
import {
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
} from 'react-native';
import {
	createRestyleComponent,
	createVariant,
	useTheme,
	VariantProps,
} from '@shopify/restyle';
import { Theme } from '@/constants/theme';
import Box from './Box';
import useItemHeight from '@/hooks/useItemHeight';

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
	const { size } = useItemHeight();
	const { colors } = useTheme<Theme>();
	return (
		<Box marginRight='s'>
			<Box marginBottom='s'>
				<CustomTextInput
					label={label}
					style={{ height: size }}
					placeholderTextColor={colors.placeholderText}
					variant={variant}
					{...props}
				/>
			</Box>
		</Box>
	);
};

export default ThemedTextInput;
