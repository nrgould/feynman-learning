import { Course } from '@/app/(tabs)/courses';
import { create } from 'zustand';

type Actions = {
	addCourse: (course: Course) => void;
};

type Action = { type: 'addCourse'; course: Course };

type State = {
	courses: Course[];
};

const courseReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'addCourse':
			return { courses: [...state.courses, action.course] };
		default:
			return state;
	}
};

export const useCourseStore = create<State & Actions>((set) => ({
	courses: [
		{
			id: '0',
			title: 'Namaste',
			subtitle: 'Best Yoga Apps for the Summer',
			source: require('../assets/images/R6II9151.jpg'),
			content: '',
		},
		{
			id: '1',
			title: 'Mindful Meditation',
			subtitle: 'Top Apps for Daily Meditation',
			source: require('../assets/images/R6II1763-ROCK.jpg'),
			content: '',
		},
		{
			id: '2',
			title: 'Healthy Eats',
			subtitle: 'Your Guide to Eating Clean',
			source: require('../assets/images/R6II7452-Edit.jpg'),
			content: '',
		},
	],
	addCourse: (course: Course) =>
		set((state) => courseReducer(state, { type: 'addCourse', course })),
}));
