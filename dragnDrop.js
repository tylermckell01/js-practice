let newX = 0,
	newY = 0,
	startX = 0,
	startY = 0;

const card = document.getElementById("card");
const container = document.getElementById("cardcontainer");

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
	document.body.style.userSelect = "none";
	const containerRect = container.getBoundingClientRect();
	const cardRect = card.getBoundingClientRect();

	startX = e.clientX;
	startY = e.clientY;

	newX = cardRect.left - containerRect.left;
	newY = cardRect.top - containerRect.top;

	document.addEventListener("mousemove", mouseMove);
	document.addEventListener("mouseup", mouseUp);

	card.style.cursor = "grabbing";
	document.body.style.cursor = "grabbing";
}

function mouseMove(e) {
	const containerRect = container.getBoundingClientRect();

	newX = e.clientX - startX;
	newY = e.clientY - startY;

	startX = e.clientX;
	startY = e.clientY;

	let newCardX = card.offsetLeft + newX;
	let newCardY = card.offsetTop + newY;

	newCardX = Math.max(0, Math.min(newCardX, containerRect.width - card.offsetWidth));

	newCardY = Math.max(0, Math.min(newCardY, containerRect.height - card.offsetHeight));

	card.style.left = newCardX + "px";
	card.style.top = newCardY + "px";
}

function mouseUp(e) {
	document.removeEventListener("mousemove", mouseMove);
	document.removeEventListener("mouseup", mouseUp);
	document.body.style.userSelect = "auto";
	document.body.style.cursor = "default";
	card.style.cursor = "pointer";
}
