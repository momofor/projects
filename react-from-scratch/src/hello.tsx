import * as React from "react";

interface propsI {
	name: string;
}

const welcome: React.FC<propsI> = (propsu) => {
	return <h2>hello {propsu.name}</h2>;
};
export default welcome;
