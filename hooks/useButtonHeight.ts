import { Dimensions } from 'react-native';

export const BUTTON_HEIGHT_RATIO = 0.05;
export const ICON_HEIGHT_RATIO = 0.5;

const useButtonHeight = () => {
	const screenHeight = Dimensions.get('window').height;
	const size = screenHeight * BUTTON_HEIGHT_RATIO;
	const iconSize = size * ICON_HEIGHT_RATIO;

	return { size, iconSize };
};

export default useButtonHeight;
