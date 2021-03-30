import * as React from "react";
interface propsuI {
	name: string;
}
const Welcome: React.FC<propsuI> = (propsu) => {
	return <h1>nice {propsu.name}</h1>;
};

export const App: React.FC = () => {
	return (
		<div>
			<Welcome name="nice" />
		</div>
	);
};
