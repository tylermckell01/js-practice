let redButton = document.getElementById(`redbutton`);
let blueButton = document.getElementById(`bluebutton`);
let allButtons = document.querySelectorAll(`button`)

redButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";

    allButtons.forEach(button => {
        button.style.color = "blue";
    });

    redButton.style.color = "black"
})

blueButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";

    allButtons.forEach(button => {
        button.style.color = "red";
    });
    
    blueButton.style.color = "black";
})


