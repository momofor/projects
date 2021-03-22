function addEm(this: any, ConstName: string, ConstValue: string) {
	this[ConstName] = document.querySelector(ConstValue);
}

function addElements(elemets: object) {
	for (let [keyu, value] of Object.entries(elemets)) {
		addEm(keyu, value);
	}
}
const cool = {
	text: "p",
	big: "h1",
};
addElements(cool);
console.log(big);

//document.querySelector("#c").innerHTML = "FUCK YOU";
