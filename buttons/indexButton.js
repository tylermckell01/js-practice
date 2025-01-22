let indexButton = document.getElementById("indexbutton");
let count = 0;

function addToCount() {
    count++;

    // returns an even value
    if (count % 2 === 0) {
        allButtons.forEach(button => {
            button.style.color = "purple";
            document.body.style.backgroundColor = "green"
            indexButton.style.color = "black"
        });
    } 

    // returns a !even (odd) value
    else {
        allButtons.forEach(button => {
            button.style.color = "green";
            document.body.style.backgroundColor = "purple"
            indexButton.style.color = "black"
        });
    }
    console.log(count);
}

indexButton.addEventListener("click", () => {addToCount()})