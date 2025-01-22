let coloredBackground = document.getElementById("coloredbackground");
let minusButton = document.getElementById("minusbutton");
let addButton = document.getElementById("addbutton");
let incrementText = document.getElementById("incrementtext");

let colorIncrement = 0;

const colorOptions = [
	"linear-gradient(to bottom left, black, black)",
	"linear-gradient(to bottom left, black, gray)",
	"linear-gradient(to bottom left, gray, lightgray)",
	"linear-gradient(to bottom left, lightgray, white)",
	"linear-gradient(to bottom left, white, white)",
	"linear-gradient(to bottom left, white, lightgray)",
	"linear-gradient(to bottom left, lightgray, gray)",
	"linear-gradient(to bottom left, gray, black)",
];

function minus() {
	if (colorIncrement > 0) {
		colorIncrement--;
	} else {
		colorIncrement = colorOptions.length - 1;
	}
	coloredBackground.style.backgroundImage = colorOptions[colorIncrement];
	incrementText.textContent = colorIncrement;
}

function add() {
	if (colorIncrement < colorOptions.length - 1) {
		colorIncrement++;
	} else {
		colorIncrement = 0;
	}
	coloredBackground.style.backgroundImage = colorOptions[colorIncrement];
	incrementText.textContent = colorIncrement;
}

minusButton.addEventListener("click", minus);
addButton.addEventListener("click", add);
