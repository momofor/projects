import React from "react";
import "./TodoListItem.css";

export const TodolistItem: React.FC<todoListItemProps> = ({ todo, toggleTodo }) => (
	<li>
		<label className={todo.complete ? "complete" : undefined}>
			<input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
			{todo.text}
		</label>
	</li>
);
