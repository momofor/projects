setInterval(showTime, 1000);
function showTime() {
	const time = new Date();
	let hour: string | number = time.getHours();
	let min: string | number = time.getMinutes();
	let sec: string | number = time.getSeconds();
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

	const currentTime = hour + ":" + min + ":" + sec + am_pm;

	document.querySelector(".clock").innerHTML = currentTime;
}
showTime();
console.log("is this showing up ?");

const create = document.querySelector("button");
create.addEventListener("click", createCard);

function createCard() {
	const cardName = prompt("call the card");
	const cardLink = prompt("call the link");
	const newType: string = prompt("do you want to create a new class of cards? yes/no");

	if (newType === "yes") {
		const cardType: string = prompt("what do you want to call the type ?");

		const cardParentParent: HTMLDivElement = document.querySelector("div.websites");

		const addCardParent = cardParentParent.appendChild(document.createElement("div"));
		addCardParent.classList.add(cardType, "subheader");

		const sub = addCardParent.appendChild(document.createElement("h1"));
		sub.classList.add("sub", cardName);
		sub.textContent = cardType;

		const card = addCardParent.appendChild(document.createElement("div"));
		card.classList.add("card", cardName);
		const finishedCard = document.querySelector(".card." + cardName);

		const anchor = finishedCard.appendChild(document.createElement("a"));
		anchor.classList.add(cardName);
		const link1 = document.querySelector("a." + cardName);
		link1.setAttribute("href", cardLink);
		link1.innerHTML = cardName;
	} else {
		const cardType = prompt("what type do you want the card");
		const setCardType = document.querySelector("div." + cardType);
		const card = setCardType.appendChild(document.createElement("div"));
		card.classList.add("card", cardName);
		const finishedCard = document.querySelector(".card." + cardName);

		const anchor = finishedCard.appendChild(document.createElement("a"));
		anchor.classList.add(cardName);
		const link1 = document.querySelector("a." + cardName);
		link1.setAttribute("href", cardLink);
		link1.innerHTML = cardName;
	}
}
