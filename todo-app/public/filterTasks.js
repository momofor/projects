import { tasks } from "./script.js";
export function filterTasks(e) {
    var taskList = tasks.childNodes;
    taskList.forEach(function (taskCard) {
        switch (e.target.value) {
            case "all":
                taskCard.style.display = "flex";
                break;
            case "completed":
                if (taskCard.classList.contains("checked")) {
                    taskCard.style.display = "flex";
                }
                else {
                    taskCard.style.display = "none";
                }
        }
    });
}
