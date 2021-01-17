const btn = <HTMLButtonElement>document.querySelector("button");

btn.addEventListener("click", () => {
	const name = prompt("What do you want to be called");
	alert(`Hello ${name} `);
	if (name === "momofor") {
		alert(`Woo Hoo it's you ${name}`);
	}
});

const footer = <HTMLDivElement>document.querySelector("footer");

const dateu = new Date();
const year = dateu.getFullYear();

footer.textContent += year;
