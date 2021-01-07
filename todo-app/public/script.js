var task = document.querySelector("#task");
var taskButton = document.getElementById("taskBut");
var clearButton = document.querySelector("#clear");
var tasks = document.querySelector("#tasks");
var taskCard = document.querySelector(".taskCard");
var removeBut = (document.getElementsByClassName("removeBut"));
taskButton.addEventListener("click", addTask);
function addTask() {
    var taskVal = task.value;
    var taskuContainer = tasks.appendChild(document.createElement("ul"));
    taskuContainer.classList.add("taskContainer");
    var taskuCard = taskuContainer.appendChild(document.createElement("li"));
    taskuCard.classList.add("taskCard");
    taskuCard.innerHTML = taskVal;
    var taskuDelBut = taskuContainer.appendChild(document.createElement("button"));
    taskuDelBut.classList.add("removeBut");
    taskuDelBut.innerHTML = "x";
    for (var i = 0; i < removeBut.length; i++) {
        removeBut[i].onclick = function () {
            var div = this.parentElement;
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
