import * as React from "react";

interface propsI {
	name: string;
}

const Welcome: React.FC<propsI> = (propsu) => {
	return <h2>hello {propsu.name}</h2>;
};

const App: React.FC = () => {
	return (
		<div>
			<h1>hello world</h1>
			<Welcome name="momofor" />
		</div>
	);
};

export default App;
