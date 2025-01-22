const snowSlider = document.getElementById("snowslide");
const sliderTitle = document.getElementById("snowslidertitle");

// const flakeSize = document.querySelector("canvas");

let snowIndex = 0;

sliderTitle.textContent = "Snow level: " + snowIndex;

function onSnowInput() {
	snowIndex = snowSlider.value;
	sliderTitle.textContent = "Snow level: " + snowIndex;

	if (snowIndex > 0) {
		if (!snowStorm.active) {
			snowStorm.toggleSnow();
		}
		snowStorm.flakesMaxActive = snowIndex * 64;
		snowStorm.flakesMax = snowIndex * 100;
		// flakeSize.style.fontSize = snowIndex * 15 + "px";

		snowStorm.snow();
		console.log("hitting IF conditional");
	} else {
		if (snowStorm.active) {
			snowStorm.toggleSnow();
		}
		console.log("hitting ELSE conditional");
	}

	console.log("snowStorm.flakesMaxActive: ", snowStorm.flakesMaxActive);
	console.log("snowStorm.flakesMax : ", snowStorm.flakesMax);
	console.log("snowSlider.value: ", snowSlider.value);
	console.log("snowIndex:", snowIndex);
}

snowSlider.addEventListener("change", onSnowInput);

// snow will correctly turn off and on, but getting the right amount of snow to render (flakesMaxActive) is not correctly working.... its also hurting my drag and drop when the snowstorm.js script is running
