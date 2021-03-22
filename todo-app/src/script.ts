const taskInput = <HTMLInputElement>document.querySelector("#task");
const taskButton = <HTMLInputElement>document.getElementById("taskBut");
const clearButton = <HTMLButtonElement>document.querySelector("#clear");
const tasksContainer = <HTMLDivElement>document.querySelector("#tasks");
const removeBut = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("removeBut");
const checkBut = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("checkBut");
const filterOption = <HTMLSelectElement>document.querySelector(".filter-tasks");

taskButton.addEventListener("click", AddTask);
filterOption.addEventListener("click", FilterTasks);

function addEm(this: any, ConstName: string, ConstValue: string) {
	this[ConstName] = document.querySelector(ConstValue);
}

function addElements(elemets: object) {
	for (let [keyu, value] of Object.entries(elemets)) {
		addEm(keyu, value);
	}
}

function AddTask() {
	const taskVal = taskInput.value;
	const createTaskContainer = tasksContainer.appendChild(document.createElement("ul"));
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
			const thisCardContainer = (this as HTMLButtonElement).parentElement!;
			thisCardContainer.classList.add("fall");
			thisCardContainer.addEventListener("transitionend", () => {
				thisCardContainer.remove();
			});
		};
	}

	for (let i = 0; i < checkBut.length; i++) {
		checkBut[i].onclick = function () {
			const thisCardContainer = (this as HTMLButtonElement).parentElement!;
			thisCardContainer.classList.add("checked");
		};
	}

	taskInput.value = "";
}

tasksContainer.addEventListener("click", (e: Event) => {
	const target: EventTarget = e.target!;
	if ((target as HTMLButtonElement).classList.contains("checkBut")) {
		const thisParent: HTMLElement = (target as HTMLElement).parentElement!;
		thisParent.classList.toggle("checked");
	}
});

clearButton.addEventListener("click", ClearTasks);
function ClearTasks() {
	while (tasksContainer.firstChild) {
		tasksContainer.removeChild(tasksContainer.lastChild!);
	}
}

function FilterTasks(e: Event) {
	const taskList = tasksContainer.childNodes;
	taskList.forEach((taskCard) => {
		switch ((e.target as HTMLInputElement).value) {
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

function HelloWorld() {
	console.log("Hello World");
}
HelloWorld();
