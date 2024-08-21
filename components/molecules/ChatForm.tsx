import React from 'react';
import Box from '../atoms/Box';
import ThemedTextInput from '../atoms/ThemedTextInput';
import SquareButton from '../atoms/SquareButton';
import {
	FormikErrors,
	FormikFormProps,
	FormikHandlers,
	FormikTouched,
	FormikValues,
} from 'formik';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
	runOnJS,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { Keyboard } from 'react-native';

interface Props extends FormikFormProps {
	handleChange: FormikHandlers['handleChange'];
	isValid: boolean;
	values: FormikValues;
	dirty: boolean;
	handleSubmit: FormikHandlers['handleSubmit'];
	touched: FormikTouched<FormikValues>;
	isSubmitting: boolean;
	errors: FormikErrors<FormikValues>;
	setFieldTouched: (
		field: string,
		isTouched?: boolean,
		shouldValidate?: boolean
	) => void;
	placeholder: string;
}

export default function ChatForm({
	placeholder,
	handleChange,
	setFieldTouched,
	isValid,
	values,
	handleSubmit,
	dirty,
	isSubmitting,
}: Readonly<Props>) {
	const translateY = useSharedValue(0);

	const onGestureEvent = (event: any) => {
		if (event.nativeEvent.translationY > 0) {
			translateY.value = event.nativeEvent.translationY;
		}
	};

	// Dismiss the keyboard if the textInput is swiped down on
	const onHandlerStateChange = (event: any) => {
		if (event.nativeEvent.translationY > 30) {
			runOnJS(Keyboard.dismiss)();
		}
		translateY.value = withSpring(0, {
			damping: 10,
			stiffness: 100,
			overshootClamping: true,
		});
	};

	return (
		<PanGestureHandler
			onGestureEvent={onGestureEvent}
			onEnded={onHandlerStateChange}
			testID='chatform-pan-gesture-handler'
		>
			<Animated.View>
				<Box flexDirection='row' marginVertical='s'>
					<Box flex={1} marginRight='xs'>
						<ThemedTextInput
							label='text'
							value={values.text}
							onChangeText={handleChange('text')}
							onBlur={() => setFieldTouched('text')}
							placeholder={placeholder}
							returnKeyType='done'
						/>
					</Box>
					<Box width='auto'>
						<SquareButton
							disabled={isSubmitting || !dirty || !isValid}
							icon='arrow-up'
							variant='primary'
							onPress={handleSubmit}
						/>
					</Box>
				</Box>
			</Animated.View>
		</PanGestureHandler>
	);
}
