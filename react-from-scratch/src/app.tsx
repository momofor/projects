import * as React from "react";
import Welcome from "./hello";
const App: React.FC = () => {
	const [text, setText] = React.useState("");

	const onInputChangeHandler: React.FormEventHandler = (
		event: React.FormEvent<HTMLInputElement>
	) => {
		setText(event.currentTarget.value);
	};

	return (
		<div>
			<h1>hello world</h1>
			<Welcome name="momofor" />
			<input
				type="text"
				placeholder="enter name"
				onChange={onInputChangeHandler}
			/>
			<p>and what you typed is {text}</p>
		</div>
	);
};

export default App;
