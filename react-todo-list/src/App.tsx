import React from "react";
import "./App.css";

interface WelcomeProps {
	user: string;
	age: number | string;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
	return (
		<h1>
			Hello {props.user}, You are {props.age} old
		</h1>
	);
};

function App() {
	return (
		<div className="App">
			<Welcome user="momofor" age="13" />
		</div>
	);
}

export default App;
