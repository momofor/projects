var a = document.getElementById("a");
var x = document.getElementById("x");
var b = document.getElementById("b");
var c = document.getElementById("c");
var result = document.querySelector(".result");
var resultBut = document.getElementById("resultBut");
var addToggle = document.querySelector(".addToggle");
var add = document.getElementsByClassName("add");
resultBut.addEventListener("click", log);
function log() {
    var aVal = a.value;
    var xVal = x.value;
    var ax = aVal - xVal;
    if (ax < 0) {
        result.textContent =
            "a est plus petit que x car a - x est plus petit que 0 " +
                aVal +
                " - " +
                xVal +
                " =" +
                ax +
                " < 0";
    }
    else if (ax > 0) {
        result.textContent =
            "a est plus grand que x car a - x est plus grand que 0  " +
                aVal +
                " - " +
                xVal +
                " = " +
                ax +
                " > 0";
    }
    else {
        result.textContent =
            "S'il vout plait écris un numéro dans la formule précédente pour un résultat";
    }
}
addToggle.addEventListener("click", logCB);
function logCB() {
    for (var i = 0; i < add.length; i++) {
        var element = add[i];
        element.style.visibility = "visible";
    }
    var aVal = a.value;
    var xVal = x.value;
    var bVal = b.value;
    var cVal = c.value;
    var ax = aVal - xVal;
    var bb = ax - bVal;
}
