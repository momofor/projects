function addEm(ConstName, ConstValue) {
	this[ConstName] = document.querySelector(ConstValue);
}

function addElements(elemets) {
	for (let [keyu, value] of Object.entries(elemets)) {
		addEm(keyu, value);
	}
}
const cool = {
	text: "p",
	big: "h1",
};
addElements(cool);

//document.querySelector("#c").innerHTML = "FUCK YOU";
console.log(big);
