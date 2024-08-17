import { ThemedText } from '@/components/atoms/ThemedText';
import Box from '../../components/atoms/Box';
import React, { useRef, useState } from 'react';
import OpenAI from 'openai';
import ChatForm from '@/components/molecules/ChatForm';
import ChatMessage from '@/components/molecules/ChatMessage';
import { FlashList } from '@shopify/flash-list';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import moment from 'moment';
import { useMessageStore } from '@/store/countReducer';
import * as Haptics from 'expo-haptics';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

interface FormValues {
	text: string;
}

export default function HomeScreen() {
	const messages = useMessageStore((state) => state.messages);
	const addMessage = useMessageStore((state) => state.addMessage);
	const [message, setMessage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const flashListRef = useRef<FlashList<any>>(null);

	const openai = new OpenAI({
		organization: process.env.EXPO_PUBLIC_ORG_KEY,
		apiKey: process.env.EXPO_PUBLIC_API_KEY,
	});

	const initialValues: FormValues = {
		text: '',
	};

	const validationSchema = Yup.object({
		text: Yup.string().required('Required'),
	});

	const handleSubmit = async (
		values: FormValues,
		{ setSubmitting, setErrors, resetForm }: FormikHelpers<FormValues>
	) => {
		try {
			handleAddMessageToStore(values.text);
			await getChatGPTResponse(values.text);
			setSubmitting(false);
			resetForm();
		} catch (error) {
			setErrors(error as FormValues);
			setSubmitting(false);
			console.log(error);
		}
	};

	const getChatGPTResponse = async (prompt: string) => {
		//get chatgpt response
		setLoading(true);
		openai.chat.completions
			.create({
				model: 'gpt-4o-mini',
				messages: [{ role: 'user', content: prompt }],
			})
			.then((res) => {
				setLoading(false);
				addMessage({
					id: res.id,
					text: res.choices[0].message.content,
					sender: 'assistant',
					timestamp: moment().toISOString(),
				});
			});
	};

	const handleAddMessageToStore = (message: string) => {
		if (message) {
			//prevents users from sending an empty message
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

			//add message to store
			addMessage({
				id: Math.random().toString(),
				text: message,
				sender: 'user',
				timestamp: moment().toISOString(),
			});
		} else {
			//message empty
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
	};

	const handleSend = () => {
		if (message) {
			//prevents users from sending an empty message
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

			//add message to flatlist
			addMessage({
				id: Math.random().toString(),
				text: message,
				sender: 'user',
				timestamp: moment().toISOString(),
			});

			const prompt: string = message;
			setMessage('');

			//get chatgpt response
			setLoading(true);
			openai.chat.completions
				.create({
					model: 'gpt-4o-mini',
					messages: [{ role: 'user', content: prompt }],
				})
				.then((res) => {
					setLoading(false);
					addMessage({
						id: res.id,
						text: res.choices[0].message.content,
						sender: 'assistant',
						timestamp: moment().toISOString(),
					});
				});
		} else {
			//message empty
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
	};

	return (
		<Box backgroundColor='background' flex={1}>
			<Box paddingTop='xxl' paddingHorizontal='m'>
				<ThemedText type='header'>Chat</ThemedText>
			</Box>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				keyboardVerticalOffset={0}
			>
				<Box flex={1} paddingHorizontal='m'>
					<FlashList
						ref={flashListRef}
						data={messages}
						renderItem={({ item }) => (
							<ChatMessage message={item} />
						)}
						keyExtractor={(item) => item.id}
						estimatedItemSize={50}
						snapToInterval={64}
						snapToAlignment='start'
						decelerationRate='fast'
					/>
					<Formik
						validationSchema={validationSchema}
						initialValues={initialValues}
						onSubmit={handleSubmit}
					>
						{({
							handleChange,
							isValid,
							dirty,
							errors,
							values,
							touched,
							handleSubmit,
							isSubmitting,
							setFieldTouched,
						}) => (
							<ChatForm
								handleChange={handleChange}
								handleSubmit={handleSubmit}
								isValid={isValid}
								dirty={dirty}
								errors={errors}
								values={values}
								touched={touched}
								isSubmitting={isSubmitting}
								setFieldTouched={setFieldTouched}
								handleSend={handleSend}
								placeholder='Ask a question...'
							/>
						)}
					</Formik>
				</Box>
				{/* <Box paddingHorizontal='m'></Box> */}
			</KeyboardAvoidingView>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
});
