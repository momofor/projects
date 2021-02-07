import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";

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
	const addTodo: AddTodoFormProps["addTodo"] = (newTodo) => {
		newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }]);
	};

	return (
		<div>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<AddTodoForm addTodo={addTodo} />
		</div>
	);
};

export default App;
