import { useState } from 'react';

export default function useBinarySearch() {
	const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [target, setTarget] = useState<number>(5);
	const [index, setIndex] = useState<number | null>();
	const [error, setError] = useState<string>();

	/**
	 * Binary search function
	 * @param {Array} sortedArray - The array to search through
	 * @param {Number} target - The value to search for
	 * @returns {Number} The index of the target value, or -1 if not found
	 */
	function binarySearch(sortedArray: number[], target: number): number {
		let left = 0;
		let right = sortedArray.length - 1;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			console.log(mid);

			if (sortedArray[mid] === target) {
				setError('');
				setIndex(sortedArray.indexOf(target));
				return mid;
			} else if (sortedArray[mid] < target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
		setIndex(null);
		setError("index not found or doesn't exist");
		return -1; // Target value not found
	}

	return {
		array,
		setArray,
		target,
		setTarget,
		index,
		setIndex,
		binarySearch,
		error,
	};
}
