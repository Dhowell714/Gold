let button = document.getElementById("guess")

function randomNum()  {
    Math.floor(Math.random() * 11);
}

button.addEventListener("click", (e) => {
    // Grabbing the input from the input field
    let textInput = document.getElementById("inputfield").value

    if(textInput <= randomNum) {
    alert("Too Low!")
    } else if(textInput >= randomNum) {
        alert("Too High!")
    } else if(textInput == randomNum) {
        alert("Correct!")
    }
});