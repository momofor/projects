function addEm(this: any, ConstName: string, ConstValue: string) {
	this[ConstName] = ConstValue;
}

function addElements(elemets: object) {
	for (let [keyu, value] of Object.entries(elemets)) {
		let I = 1;
		I += 1;
		addEm(keyu, value + I);
	}
}

const coolu = {
	me: "hello",
	you: "bye",
};
addElements(coolu);
console.log("hello");
let me: boolean;
addElements(coolu);
