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
    var newType = prompt("do you want to create a new class ? yes/no");
    if (newType === "yes") {
        var cardType = prompt("what do you want to call the type ?");
        var cardParentParent = document.querySelector("div.websites");
        var addCardParent = cardParentParent.appendChild(document.createElement("div"));
        addCardParent.classList.add(cardType, "subheader");
        var sub = addCardParent.appendChild(document.createElement("h1"));
        sub.classList.add("sub", cardName);
        sub.textContent = cardType;
        var card = addCardParent.appendChild(document.createElement("div"));
        card.classList.add("card", cardName);
        var finishedCard = document.querySelector(".card." + cardName);
        var anchor = finishedCard.appendChild(document.createElement("a"));
        anchor.classList.add(cardName);
        var link1 = document.querySelector("a." + cardName);
        link1.setAttribute("href", cardLink);
        link1.innerHTML = cardName;
    }
    else {
        var cardType = prompt("what type do you want the card");
        var setCardType = document.querySelector("div." + cardType);
        var card = setCardType.appendChild(document.createElement("div"));
        card.classList.add("card", cardName);
        var finishedCard = document.querySelector(".card." + cardName);
        var anchor = finishedCard.appendChild(document.createElement("a"));
        anchor.classList.add(cardName);
        var link1 = document.querySelector("a." + cardName);
        link1.setAttribute("href", cardLink);
        link1.innerHTML = cardName;
    }
}
