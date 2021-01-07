const task = <HTMLInputElement>document.querySelector("#task");
const taskButton = <HTMLInputElement>document.getElementById("taskBut");
const clearButton = <HTMLButtonElement>document.querySelector("#clear");
const tasks = <HTMLDivElement>document.querySelector("#tasks");
const taskCard = <HTMLLIElement>document.querySelector(".taskCard");
const removeBut = <HTMLCollectionOf<HTMLButtonElement>>(
	document.getElementsByClassName("removeBut")
);

taskButton.addEventListener("click", addTask);

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
		removeBut[i].onclick = function () {
			var div = (this as HTMLButtonElement).parentElement!;
			div.style.display = "none";
		};
	}
}

clearButton.addEventListener("click", clearTasks);
function clearTasks() {
	while (tasks.firstChild) {
		tasks.removeChild(tasks.lastChild);
	}
}
