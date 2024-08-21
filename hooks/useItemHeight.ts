import { Dimensions } from 'react-native';

export const BUTTON_HEIGHT_RATIO = 0.042;
export const ICON_HEIGHT_RATIO = 0.5;
export const BAR_HEIGHT_RATIO = 0.4;
export const CIRCLE_HEIGHT_RATIO = 2;

/**
 * Custom hook to calculate the size, icon size, and bar size for responsive components based on the screen height.
 *
 * @returns {Object} An object containing the following properties:
 * @returns {number} size - The calculated size of the button.
 * @returns {number} iconSize - The calculated size of the icon within the button.
 * @returns {number} barSize - The calculated size of the progress bar
 * @returns {number} circleSize - The calculated size of the circular progress bar
 */
const useItemHeight = () => {
	const screenHeight = Dimensions.get('window').height;
	const size = screenHeight * BUTTON_HEIGHT_RATIO;
	const iconSize = size * ICON_HEIGHT_RATIO;
	const barSize = size * BAR_HEIGHT_RATIO;
	const circleSize = size * CIRCLE_HEIGHT_RATIO;

	return { size, iconSize, barSize, circleSize };
};

export default useItemHeight;
