"use strict";
const parseMultiplicationSeparatedExpression = (expression) => {
	const numString = expression.split("*");
	const numbers = numString.map((noStr) => +noStr);
	const initValue = 1.0;
	const result = numbers.reduce(
		(total, currentNumber) => total * currentNumber,
		initValue
	);
	return result;
};
const parseMinusSeparatedExpression = (expression) => {
	const numString = expression.split("-");
	const numbers = numString.map((noStr) =>
		parseMultiplicationSeparatedExpression(noStr)
	);
	const initValue = numbers[0];
	const result = numbers.reduce(
		(total, currentNumber) => total - currentNumber,
		initValue
	);
	return result;
};
const parsePlusSeparatedExpression = (expression) => {
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
console.log(parseMinusSeparatedExpression("50 - 5 "));
//# sourceMappingURL=../src/maps/script.js.map
