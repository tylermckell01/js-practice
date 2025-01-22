let toggleButton = document.getElementById("togglebutton");

function toggleBackgroundColor() {
    const body = document.body;
    const currentColor = body.style.backgroundColor;
  
    if (currentColor === "white" || currentColor === "") {
      body.style.backgroundColor = "black";
    } else {
      body.style.backgroundColor = "white";
    }

    allButtons.forEach(button => {
      button.style.color = "black";
  });
  }

  toggleButton.addEventListener("click", () => {toggleBackgroundColor()})