const task = <HTMLInputElement>document.querySelector("#task");
const taskButton = <HTMLInputElement>document.getElementById("taskBut");
const clearButton = <HTMLButtonElement>document.querySelector("#clear");
const tasks = <HTMLDivElement>document.querySelector("#tasks");
const taskCard = <HTMLLIElement>document.querySelector(".taskCard");
const removeBut = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("removeBut");
const checkBut = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("checkBut");
const filterOption = <HTMLSelectElement>document.querySelector(".filter-tasks");

taskButton.addEventListener("click", addTask);
filterOption.addEventListener("click", filterTasks);

function addTask() {
	const taskVal = task.value;
	const createTaskContainer = tasks.appendChild(document.createElement("ul"));
	createTaskContainer.classList.add("taskContainer");

	const createTaskCard = createTaskContainer.appendChild(document.createElement("li"));
	createTaskCard.classList.add("taskCard");
	createTaskCard.innerHTML = taskVal;

	const createTaskDelBut = createTaskContainer.appendChild(document.createElement("button"));
	createTaskDelBut.classList.add("removeBut");
	createTaskDelBut.innerHTML = `<i class="fas fa-trash"></i>`;

	const createCheckBut = createTaskContainer.appendChild(document.createElement("button"));
	createCheckBut.innerHTML = `<i class="fas fa-check"></i>`;
	createCheckBut.classList.add("checkBut");

	for (let i = 0; i < removeBut.length; i++) {
		removeBut[i].onclick = function () {
			var thisParent = (this as HTMLButtonElement).parentElement;
			thisParent.classList.add("fall");
			thisParent.addEventListener("transitionend", () => {
				thisParent.remove();
			});
		};
	}

	for (let i = 0; i < checkBut.length; i++) {
		checkBut[i].onclick = function () {
			var coo = (this as HTMLButtonElement).parentElement;
			coo.classList.add("checked");
		};
	}

	task.value = "";
}

tasks.addEventListener("click", (e: Event) => {
	let target: any = e.target;
	if ((target as HTMLButtonElement).classList.contains("checkBut")) {
		const thisParent: HTMLUListElement = target.parentElement;
		thisParent.classList.toggle("checked");
	}
});

clearButton.addEventListener("click", clearTasks);
function clearTasks() {
	while (tasks.firstChild) {
		tasks.removeChild(tasks.lastChild);
	}
}

function filterTasks(e: any) {
	const taskList = tasks.childNodes;
	taskList.forEach((taskCard) => {
		switch (e.target.value) {
			case "all":
				(taskCard as HTMLLIElement).style.display = "flex";
				break;

			case "completed":
				if ((taskCard as HTMLLIElement).classList.contains("checked")) {
					(taskCard as HTMLLIElement).style.display = "flex";
				} else {
					(taskCard as HTMLLIElement).style.display = "none";
				}
		}
	});
}
