import React from "react";
import { TodolistItem } from "./TodoListItem";

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map((todo) => {
				return <TodolistItem todo={todo} key={todo.text} toggleTodo={toggleTodo} />;
			})}{" "}
		</ul>
	);
};
