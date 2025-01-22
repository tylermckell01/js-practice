let reviveButton = document.getElementById("revivebutton");
let errorMessage = document.getElementById("errormsg");

function hideErrorMessage() {
	errorMessage.style.display = "none";
	reviveButton.disabled = false;
}

function revive() {
	if (buttonsWrapper.style.display != "block") {
		buttonsWrapper.style.display = "block";
		errorMessage.style.display = "none";
	} else {
		errorMessage.style.display = "block";
		reviveButton.disabled = true;
		console.log("buttons are already here silly head");
		if (
			document.body.style.backgroundColor === "black" ||
			document.body.style.backgroundColor === "blue" ||
			document.body.style.backgroundColor === "purple"
		) {
			errorMessage.style.color = "white";
		} else {
			errorMessage.style.color = "black";
		}
		setTimeout(hideErrorMessage, 1500);
	}
}

reviveButton.addEventListener("click", () => {
	revive();
});
