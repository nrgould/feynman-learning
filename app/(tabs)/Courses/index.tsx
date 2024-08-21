import React, { useEffect, useState } from 'react';
import Box from '@/components/atoms/Box';
import Text from '@/components/atoms/Text';
import { ActivityIndicator } from 'react-native';
import ImageCard from '@/components/molecules/ImageCard';
import { Asset } from 'expo-asset';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/constants/theme';
import AnimatedHeader from '@/components/molecules/AnimatedHeader';
import Animated, {
	useAnimatedScrollHandler,
	useSharedValue,
} from 'react-native-reanimated';
import { useCourseStore } from '@/store/courseReducer';

export interface Course {
	id: string;
	title: string;
	subtitle: string;
	source: number;
	content: string;
}

export default function CoursesList() {
	const [isReady, setIsReady] = useState(false);
	const courses = useCourseStore((state) => state.courses);
	const { colors } = useTheme<Theme>();
	const scrollY = useSharedValue(0);

	useEffect(() => {
		loadAssets();
	}, []);

	async function loadAssets() {
		const imageAssets = courses.map((course) =>
			Asset.fromModule(course.source).downloadAsync()
		);
		await Promise.all(imageAssets);
		setIsReady(true);
	}

	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	if (!isReady) {
		return (
			<Box flex={1} justifyContent='center' alignItems='center'>
				<ActivityIndicator size='large' color={colors.primary} />
			</Box>
		);
	}

	return (
		<>
			<AnimatedHeader title='Courses' scrollY={scrollY} />
			<Box backgroundColor='background' marginTop='xxl'>
				<Animated.ScrollView
					onScroll={scrollHandler}
					scrollEventThrottle={16}
				>
					<Text margin='m' variant='header'>
						Courses
					</Text>
					{courses.map((courses) => (
						<ImageCard
							key={courses.id}
							source={courses.source}
							title={courses.title}
							subtitle={courses.subtitle}
							id={courses.id}
							content={courses.content}
						/>
					))}
				</Animated.ScrollView>
			</Box>
		</>
	);
}
