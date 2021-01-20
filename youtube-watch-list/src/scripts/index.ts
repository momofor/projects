const addBut = <HTMLButtonElement>document.querySelector(".addItem");
const listsContainer = <HTMLDivElement>document.querySelector(".listsContainer");

const AddItemToList = () => {
	const videosList = listsContainer.appendChild(document.createElement("ul"));
	videosList.classList.add("listContainer");
	const itemTitle = prompt("what is the title of the video you wanna watch ?");
	const itemLink = prompt(`what is the link of the video : "${itemTitle}"`);
	const itemDescription = prompt("describe the video to remember it ");

	const videoTitle = videosList.appendChild(document.createElement("li"));
	videoTitle.classList.add("title");
	const videoAnchor = videoTitle.appendChild(document.createElement("a"));
	videoAnchor.classList.add("link");
	videoAnchor.href = itemLink;
	videoAnchor.innerHTML = itemTitle;

	const videoDescription = videosList.appendChild(document.createElement("li"));
	videoDescription.classList.add("description");
	videoDescription.textContent = itemDescription;
};

(addBut as HTMLButtonElement).addEventListener("click", AddItemToList);
