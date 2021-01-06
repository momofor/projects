const a = <HTMLInputElement>document.getElementById("a");
const x = <HTMLInputElement>document.getElementById("x");
const b = <HTMLInputElement>document.getElementById("b");
const c = <HTMLInputElement>document.getElementById("c");
const result = <HTMLDivElement>document.querySelector(".result");
const resultBut = <HTMLInputElement>document.getElementById("resultBut");
const addToggle = <HTMLInputElement>document.querySelector(".addToggle");
const add = document.getElementsByClassName("add");

resultBut.addEventListener("click", log);
function log() {
	let aVal: number = a.valueAsNumber;
	let xVal: number = x.valueAsNumber;

	let ax: number = aVal - xVal;

	if (ax < 0) {
		result.textContent =
			"a est plus petit que x car a - x est plus petit que 0 " +
			aVal +
			" - " +
			xVal +
			" =" +
			ax +
			" < 0";
	} else if (ax > 0) {
		result.textContent =
			"a est plus grand que x car a - x est plus grand que 0  " +
			aVal +
			" - " +
			xVal +
			" = " +
			ax +
			" > 0";
	} else {
		result.textContent =
			"S'il vout plait écris un numéro dans la formule précédente pour un résultat";
	}
}

addToggle.addEventListener("click", logCB);

function logCB() {
	for (let i = 0; i < add.length; i++) {
		const element = <HTMLInputElement>add[i];
		element.style.visibility = "visible";
	}

	let aVal: number = a.valueAsNumber;
	let xVal: number = x.valueAsNumber;
	let bVal: number = b.valueAsNumber;
	let cVal: number = c.valueAsNumber;
	let ax: number = aVal - xVal;
	let bb: number = ax - bVal;
}
