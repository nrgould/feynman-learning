import { Message } from '@/types/Messages';

const conversation: Message[] = [
	{
		id: '1',
		text: 'Hi, I want to learn about React.',
		sender: 'user',
		timestamp: '2024-08-21T10:00:00Z',
	},
	{
		id: '2',
		text: 'React is a popular JavaScript library for building user interfaces. Are you familiar with JavaScript?',
		sender: 'assistant',
		timestamp: '2024-08-21T10:00:15Z',
	},
	{
		id: '3',
		text: 'Yes, I have a basic understanding of JavaScript.',
		sender: 'user',
		timestamp: '2024-08-21T10:01:00Z',
	},
	{
		id: '4',
		text: 'Great! React lets you build complex UIs by composing small, reusable components. Would you like to start with the basics of components?',
		sender: 'assistant',
		timestamp: '2024-08-21T10:01:30Z',
	},
	{
		id: '5',
		text: 'Sure, that sounds good!',
		sender: 'user',
		timestamp: '2024-08-21T10:02:00Z',
	},
	{
		id: '6',
		text: 'In React, components are the building blocks of the UI. They can be functional or class-based. A functional component is simply a function that returns a React element. Here’s a simple example:',
		sender: 'assistant',
		timestamp: '2024-08-21T10:02:45Z',
	},
	{
		id: '7',
		text: '```javascript\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```',
		sender: 'assistant',
		timestamp: '2024-08-21T10:03:15Z',
	},
	{
		id: '8',
		text: 'That looks straightforward. What are props?',
		sender: 'user',
		timestamp: '2024-08-21T10:04:00Z',
	},
	{
		id: '9',
		text: 'Props, short for "properties," are inputs to a React component. They are passed down from the parent component to the child component and can be used to customize the output of the component. In the example I gave, "name" is a prop.',
		sender: 'assistant',
		timestamp: '2024-08-21T10:04:30Z',
	},
	{
		id: '10',
		text: 'Got it! How do I use state in a component?',
		sender: 'user',
		timestamp: '2024-08-21T10:05:00Z',
	},
	{
		id: '11',
		text: 'State is another core concept in React. Unlike props, which are immutable, state allows you to create variables that React will monitor for changes. When state changes, the component re-renders. Here’s a simple example using the `useState` hook:',
		sender: 'assistant',
		timestamp: '2024-08-21T10:05:45Z',
	},
	{
		id: '12',
		text: '```javascript\nimport React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```',
		sender: 'assistant',
		timestamp: '2024-08-21T10:06:30Z',
	},
	{
		id: '13',
		text: 'This makes sense! So, `useState` is a hook that lets me add state to my functional component?',
		sender: 'user',
		timestamp: '2024-08-21T10:07:15Z',
	},
	{
		id: '14',
		text: 'Exactly! Hooks like `useState` allow functional components to use state and other React features without needing to convert them into class components. Would you like to learn more about hooks or move on to another topic?',
		sender: 'assistant',
		timestamp: '2024-08-21T10:07:45Z',
	},
	{
		id: '15',
		text: 'I’d like to learn more about hooks, please!',
		sender: 'user',
		timestamp: '2024-08-21T10:08:15Z',
	},
];

export default conversation;
