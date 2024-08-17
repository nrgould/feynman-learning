import React from 'react';
import Box from '../atoms/Box';
import ThemedTextInput from '../atoms/ThemedTextInput';
import SquareButton from '../atoms/SquareButton';
import { FormikFormProps } from 'formik';

interface Props extends FormikFormProps {
	handleChange: any;
	isValid: boolean;
	values: any;
	dirty: boolean;
	handleSubmit: any;
	touched: any;
	isSubmitting: boolean;
	errors: any;
	setFieldTouched: any;
	placeholder: string;
}

export default function ChatForm({
	placeholder,
	handleChange,
	setFieldTouched,
	isValid,
	values,
	handleSubmit,
	touched,
	errors,
	dirty,
	isSubmitting,
}: Readonly<Props>) {
	return (
		<Box flexDirection='row' marginVertical='s'>
			<Box flex={1} marginRight='xs'>
				<ThemedTextInput
					label='text'
					value={values.text}
					onChangeText={handleChange('text')}
					onBlur={() => setFieldTouched('text')}
					placeholder={placeholder}
					returnKeyType='done'
					error={errors.text && touched.text ? errors.text : null}
				/>
			</Box>
			<Box width='auto'>
				<SquareButton
					// title='Send'
					disabled={isSubmitting || !dirty || !isValid}
					icon='arrow-up'
					variant='primary'
					onPress={handleSubmit}
				/>
			</Box>
		</Box>
	);
}
