import { useEffect, useState } from 'react';

export default function useDepthFirstSearch() {
	const [graph, setGraph] = useState<any>({
		A: ['B', 'C'],
		B: ['D', 'E'],
		C: ['F'],
		D: [],
		E: ['F'],
		F: [],
	});
	const [start, setStart] = useState<string>('');
	const [visited, setVisited] = useState<Set<string>>(new Set());
	const [result, setResult] = useState<string[]>([]);
	const [traversalOrder, setTraversalOrder] = useState<string[]>([]);

	function handleCleanup() {
		setVisited(new Set());
		setResult([]);
		setTraversalOrder([]);
	}

	function handleDFS() {
		handleCleanup();
		const order = dfs(graph, start, visited, result);
		setTraversalOrder(order);
	}

	/**
	 * Depth First Search function
	 * @param graph - The graph represented as an adjacency list
	 * @param start - The starting node
	 * @param visited - A set to keep track of visited nodes
	 * @param result - An array to store the order of traversal
	 */
	function dfs(
		graph: { [key: string]: string[] },
		start: string,
		visited: Set<string> = new Set(),
		result: string[] = []
	): string[] {
		visited.add(start);
		result.push(start);

		graph[start].forEach((neighbor) => {
			if (!visited.has(neighbor)) {
				dfs(graph, neighbor, visited, result);
			}
		});

		return result;
	}

	return {
		dfs,
		handleDFS,
		graph,
		start,
		setStart,
		result,
		visited,
		traversalOrder,
	};
}
