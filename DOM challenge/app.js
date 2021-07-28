// DOM Challenge
/*
    Create a basic site which has two input fields and a button. The input fields will take in numbers.
    The point of the app.js file is to dynamically create an h1 tag with a solution. This will require for you to create a callback function that prints the sum of the two numbers from the input fields.
*/
let button = document.getElementById("clickMe")
console.log(button)

// acts on event listener (action, what we do when action happens)
button.addEventListener("click", e => {
    //console.log("Slap that juicy button lol")
    let listInput = document.getElementById("listInput").value
    listInput = parseInt(listInput)
    //console.log(typeof listInput)
    let listInput2 = document.getElementById("listInput2").value
    listInput2 = parseInt(listInput2)
    let result = listInput + listInput2
    //console.log(result)
    let renderResult = document.createElement("h1")
    renderResult.innerText = `The result is ${result}`
    document.body.appendChild(renderResult)
})


/*
let button = document.getElementById("clickMe")

button.addEventListener("click", (event) => {
    console.log(event.target)
    console.log("Ouch")
    event.target.style.backgroundColor = "lightGreen"
}) 

button.addEventListener("click", (e) => {
    let inputField = document.getElementById("inputfield")
})

*/