interface todoListItemProps {
	todo: {
		text: string;
		complete: boolean;
	};
	toggleTodo;
}
type toggleTodo = (selectedTodo: todoListItemProps["todo"]) => void;
interface TodoListProps {
	todos: Array<todoListItemProps["todo"]>;
	toggleTodo: toggleTodo;
}
interface AddTodoFormProps {
	addTodo: (newTodo: string) => void;
}
