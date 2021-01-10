import { tasks } from "./script.js";
export function filterTasks(e: any) {
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
