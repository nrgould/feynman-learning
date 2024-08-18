import React from 'react';
import Box from '../atoms/Box';
import ThemedTextInput from '../atoms/ThemedTextInput';
import SquareButton from '../atoms/SquareButton';
import { FormikFormProps } from 'formik';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { Keyboard } from 'react-native';

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
	const translateY = useSharedValue(0);

	const onGestureEvent = (event: any) => {
		if (event.nativeEvent.translationY > 0) {
			translateY.value = event.nativeEvent.translationY;
		}
	};

	const onHandlerStateChange = (event: any) => {
		if (event.nativeEvent.translationY > 30) {
			runOnJS(Keyboard.dismiss)(); // Dismiss the keyboard
		}
		translateY.value = withSpring(0, {
			damping: 10,
			stiffness: 100,
			overshootClamping: true,
		}); // Reset position
	};

	return (
		<PanGestureHandler
			onGestureEvent={onGestureEvent}
			onEnded={onHandlerStateChange}
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
							// error={errors.text && touched.text ? errors.text : null}
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
