import { createCard } from "./makeCard";

const showTime = () => {
	const time = new Date();
	let hour: time = time.getHours();
	let min: time = time.getMinutes();
	let sec: time = time.getSeconds();
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
};

setInterval(showTime, 1000);

showTime();
const create = document.querySelector("button");
create.addEventListener("click", createCard);
