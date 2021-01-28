interface todoListItemProps {
	todo: {
		text: string;
		complete: boolean;
	};
	toggleTodo;
}
type toggleTodo = (selectedTodo: todoListItemProps["todo"]) => void;
