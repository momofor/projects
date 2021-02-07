import React, { ChangeEvent, FormEvent, useState } from "react";

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState("");
	const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};
	const HandleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo("");
	};
	return (
		<form>
			<input type="text" value={newTodo} onChange={HandleChange} />
			<button type="submit" onClick={HandleSubmit}>
				AddTodo
			</button>
		</form>
	);
};
