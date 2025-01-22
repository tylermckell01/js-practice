const componentImage = document.getElementById("componentimage");
const nextButton = document.getElementById("nextbutton");
const prevButton = document.getElementById("prevbutton");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");

const images = ["/images/img1.png", "/images/img2.png", "/images/img3.png"];
const circles = [circle1, circle2, circle3];

let imageIndex = 0;
let coloredCircle = circles[imageIndex];

coloredCircle.style.backgroundColor = "#8bcff3";

function nextImage() {
	if (imageIndex < images.length - 1) {
		imageIndex++;
	} else {
		imageIndex = 0;
	}
	componentImage.src = images[imageIndex];

	coloredCircle = circles[imageIndex];
	circles.forEach((circle) => {
		if (circle !== circles[imageIndex]) {
			circle.style.backgroundColor = "gray";
		} else {
			coloredCircle.style.backgroundColor = "#8bcff3";
		}
	});
}

function prevImage() {
	if (imageIndex < 1) {
		imageIndex = images.length - 1;
	} else {
		imageIndex--;
	}
	componentImage.src = images[imageIndex];

	coloredCircle = circles[imageIndex];
	circles.forEach((circle) => {
		if (circle !== circles[imageIndex]) {
			circle.style.backgroundColor = "gray";
		} else {
			coloredCircle.style.backgroundColor = "#8bcff3";
		}
	});
}

nextButton.addEventListener("click", () => nextImage());
prevButton.addEventListener("click", () => prevImage());
