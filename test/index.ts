interface HelloWorldType {
	greeting: (greet: string) => void;
}

const HelloWorld: HelloWorldType = {
	greeting: (greet) => console.log(greet),
};
