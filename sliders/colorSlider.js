const colorSlider = document.getElementById("colorslide");
const colorSliderTitle = document.getElementById("colorslidertitle");

const backgroundStyles = ["white", "green", "red"];
let colorIndex = 0;

colorSliderTitle.textContent = "Color: " + backgroundStyles[colorIndex];

function onColorInput() {
	colorIndex = colorSlider.value;
	colorSliderTitle.textContent = "Color:" + backgroundStyles[colorIndex];
	document.body.style.backgroundColor = backgroundStyles[colorIndex];

	console.log("colorIndex:", colorIndex);
}

colorSlider.addEventListener("change", onColorInput);
