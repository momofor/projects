import { Ffs, MEU } from "./cool";

const TestFunc = <X, Y>(x: X, y: Y): [X, Y] => {
	return [x, y];
};
TestFunc(19, "hello");

interface nothingCool<T> {
	data: T;
	name: string;
}
const me: nothingCool<number> = { data: 12, name: "momofor" };

const CoolFunc = <T extends { cool: number; nume: string }>(obj: T) => {
	return { obj };
};

const nah = CoolFunc({ cool: 12, nume: "momofor", me: 32 });

enum momo {
	up,
	down,
	right,
	left,
}
Ffs;
MEU;
export const WooHoo = (num = 1) => 1;
export const Nothing = <T>(oaeu: T) => oaeu;
Nothing<string>("hello world");
