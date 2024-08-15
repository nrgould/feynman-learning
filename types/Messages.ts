export type Message = {
	id: string;
	text: string | null;
	sender: 'user' | 'assistant';
	timestamp: string;
};
