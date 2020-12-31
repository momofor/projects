setInterval(showTime, 1000);
function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var currentTime = hour + ":" + min + ":" + sec + am_pm;
    document.querySelector(".clock").innerHTML = currentTime;
}
showTime();
console.log("is this showing up ?");
var create = document.querySelector("button");
create.addEventListener("click", createCard);
function createCard() {
    var cardName = prompt("call the card");
    var cardLink = prompt("call the link");
    //let cardClass = prompt("class for card");
    var cardDev = document.querySelector("div.dev");
    var card = cardDev.appendChild(document.createElement("div"));
    card.classList.add("card", "n");
    var finishedCard = document.querySelector(".n");
    var anchor = finishedCard.appendChild(document.createElement("a"));
    anchor.classList.add("link");
    var link1 = document.querySelector(".link");
    link1.setAttribute("href", cardLink);
    link1.innerHTML = cardName;
}
