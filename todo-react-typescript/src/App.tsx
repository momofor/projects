import React, { useState } from "react";
import { TodolistItem } from "./TodoListItem";

const initialTodos: Array<todoListItemProps["todo"]> = [
	{ text: "do laundrey", complete: false },
	{ text: "eat food", complete: true },
	{ text: "go outside", complete: true },
];

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo: toggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		setTodos(newTodos);
	};

	return (
		<div>
			<TodolistItem todo={todos[0]} toggleTodo={toggleTodo} />
			<TodolistItem todo={todos[1]} toggleTodo={toggleTodo} />
			<TodolistItem todo={todos[2]} toggleTodo={toggleTodo} />
		</div>
	);
};

export default App;
