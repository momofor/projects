const btn = <HTMLButtonElement>document.querySelector("button");

btn.addEventListener("click", () => {
	const name = prompt("What do you want to be called");
	alert(`Hello ${name} `);
	if (name === "momofor") {
		alert(`Woo Hoo it's you ${name}`);
	}
});
