const parseMultiplicationSeparatedExpression = (expression: string) => {
	const numString = expression.split("*");
	const numbers = numString.map((noStr) => +noStr);
	const initValue = 1.0;
	const result = numbers.reduce(
		(total, currentNumber) => total * currentNumber,
		initValue
	);
	return result;
};

const parseMinusSeparatedExpression = (expression: string) => {
	const numString = expression.split("-");
	const numbers = numString.map((noStr) =>
		parseMultiplicationSeparatedExpression(noStr)
	);
	const initValue = numbers[0];
	const result = numbers.reduce(
		(total, currentNumber) => total + currentNumber,
		initValue
	);
	return result;
};

const parsePlusSeparatedExpression = (expression: string) => {
	const numString = expression.split("+");
	const numbers = numString.map((noStr) =>
		parseMultiplicationSeparatedExpression(noStr)
	);
	const initValue = 0.0;
	const result = numbers.reduce(
		(total, currentNumber) => total + currentNumber,
		initValue
	);
	return result;
};
console.log(parsePlusSeparatedExpression("13 + 5 * 10"));
