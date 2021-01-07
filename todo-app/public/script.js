var task = document.querySelector("#task");
var taskBut = document.getElementById("taskBut");
var clear = document.querySelector("#clear");
var tasks = document.querySelector("#tasks");
var taskCard = document.querySelector(".taskCard");
var removeBut = document.getElementsByClassName("removeBut");
var trashed = document.getElementsByClassName("trashed");
taskBut.addEventListener("click", addTask);
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
        removeBut[i].addEventListener("click", alertTask);
    }
    function alertTask(e) {
        e.parent = taskuContainer;
        e.parent.classList.add("trashed");
    }
    for (var i = 0; i < trashed.length; i++) {
        var trash = trashed[i];
        console.log(trash);
    }
}
clear.addEventListener("click", clearTasks);
function clearTasks() {
    while (tasks.firstChild) {
        tasks.removeChild(tasks.lastChild);
    }
}
