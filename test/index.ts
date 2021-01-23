class HelloWorld {
	greeting = (greet: string): void => {
		console.log(greet);
	};
}
const helloyou = new HelloWorld();
helloyou.greeting("hello you");
