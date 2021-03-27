import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => {
	return (
		<div className="app">
			<h1>hello world</h1>;
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
