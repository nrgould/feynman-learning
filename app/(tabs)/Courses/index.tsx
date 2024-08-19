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

export interface Course {
	id: number;
	title: string;
	subtitle: string;
	source: number;
	content: string;
}

const apps: Course[] = [
	{
		id: 0,
		title: 'Namaste',
		subtitle: 'Best Yoga Apps for the Summer',
		source: require('../../../assets/images/R6II9151.jpg'),
		content: '',
	},
	{
		id: 1,
		title: 'Mindful Meditation',
		subtitle: 'Top Apps for Daily Meditation',
		source: require('../../../assets/images/R6II1763-ROCK.jpg'),
		content: '',
	},
	{
		id: 2,
		title: 'Healthy Eats',
		subtitle: 'Your Guide to Eating Clean',
		source: require('../../../assets/images/R6II7452-Edit.jpg'),
		content: '',
	},
];

export default function CoursesList() {
	const [isReady, setIsReady] = useState(false);
	const { colors } = useTheme<Theme>();

	const scrollY = useSharedValue(0);

	useEffect(() => {
		async function loadAssets() {
			const imageAssets = apps.map((app) =>
				Asset.fromModule(app.source).downloadAsync()
			);
			await Promise.all(imageAssets);
			setIsReady(true);
		}

		loadAssets();
	}, []);

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
					{apps.map((app) => (
						<ImageCard
							key={app.id}
							source={app.source}
							title={app.title}
							subtitle={app.subtitle}
							id={app.id}
							content={app.content}
						/>
					))}
				</Animated.ScrollView>
			</Box>
		</>
	);
}
