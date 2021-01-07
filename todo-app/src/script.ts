const task = <HTMLInputElement>document.querySelector("#task");
const taskBut = <HTMLInputElement>document.getElementById("taskBut");
const clear = <HTMLButtonElement>document.querySelector("#clear");
const tasks = <HTMLDivElement>document.querySelector("#tasks");
const taskCard = <HTMLLIElement>document.querySelector(".taskCard");
const removeBut = document.getElementsByClassName("removeBut");
let trashed = document.getElementsByClassName("trashed");
taskBut.addEventListener("click", addTask);
function addTask() {
	const taskVal = task.value;
	const taskuContainer = tasks.appendChild(document.createElement("ul"));
	taskuContainer.classList.add("taskContainer");
	const taskuCard = taskuContainer.appendChild(document.createElement("li"));
	taskuCard.classList.add("taskCard");
	taskuCard.innerHTML = taskVal;
	const taskuDelBut = taskuContainer.appendChild(
		document.createElement("button")
	);
	taskuDelBut.classList.add("removeBut");
	taskuDelBut.innerHTML = "x";
	for (let i = 0; i < removeBut.length; i++) {
		removeBut[i].addEventListener("click", alertTask);
	}
	function alertTask(e: any) {
		e.parent = taskuContainer;
		e.parent.classList.add("trashed");
	}
	for (let i = 0; i < trashed.length; i++) {
		let trash = trashed[i];
		console.log(trash);
	}
}

clear.addEventListener("click", clearTasks);
function clearTasks() {
	while (tasks.firstChild) {
		tasks.removeChild(tasks.lastChild);
	}
}
