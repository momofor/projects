/** a type for YOU!! */
export interface humanu {
	name: string;
	age: number;
	netWorth: number;
	isCool?: boolean;
}
export const me: humanu = {
	name: "momofor",
	age: 13,
	netWorth: 0,
	isCool: true,
};
export const all: humanu = {
	name: "everybody",
	netWorth: 1000000,
	age: 1000000,
	isCool: true,
};

console.log(me);
