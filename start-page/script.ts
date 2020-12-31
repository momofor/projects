setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour: any = time.getHours();
	let min: any = time.getMinutes();
	let sec: any = time.getSeconds();
	let am_pm = "AM";

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

	let currentTime = hour + ":" + min + ":" + sec + am_pm;

	document.querySelector(".clock").innerHTML = currentTime;
}
showTime();
console.log("is this showing up ?");

const create = document.querySelector("button");
create.addEventListener("click", createCard);

function createCard() {
	let cardName = prompt("call the card");
	let cardLink = prompt("call the link");
	//let cardClass = prompt("class for card");
	let cardDev = document.querySelector("div.dev");
	let card = cardDev.appendChild(document.createElement("div"));
	card.classList.add("card", "n");
	let finishedCard = document.querySelector(".n");
	let anchor = finishedCard.appendChild(document.createElement("a"));
	anchor.classList.add("link");
	let link1 = document.querySelector(".link");
	link1.setAttribute("href", cardLink);
	link1.innerHTML = cardName;
}
