import ReactDOM from "react-dom";
import * as React from "react";
import "./style.scss";

export {};

const App: React.FC = () => {
	return (
		<div className="app">
			<h1>hello world</h1>
			<h1>pog pog pogu</h1>
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
