let annhilationButton = document.getElementById("annhilationbutton");
let buttonsWrapper = document.getElementById("buttonswrapper");

annhilationButton.addEventListener("click", function(){
    buttonsWrapper.style.display = "none";
    errorMessage.style.display = "none";
    reviveButton.disabled = false;

})
