// API Promises Fetch & Asynchronous Programming

// API
/*
    Application Programming Interface
        - Code that communicates our client requests with the server
        - The server then sends our responses
        - Done using HTTP Requests
    HTTP Requests
        - Action to be performed on a given resource
        - Occurs between client and server
        - Client sends a request
            - GET -  Any time a user is retrieving existing information, that is usually a GET request. So, in the above example, when a user goes to messenger and can see all their friends messages.
            - POST - Any time a user is creating new information, that is usually a POST request. So, in the above example, when they make a write a new post and hit post.
            - PUT - Any time a user is overwriting existing information or updating information, that is usually a PUT request. So, in the above example, when a user updates their favorite brands they are doing a PUT request.
            DELETE - Any time a user is deleting existing information, that is usually a DELETE request. So, in the above example, when a user would delete their profile, they would be doing a DELETE request.
        - Server sends a response back
            - Response body
            - Status code
*/

// Asynchronous Programming
/*
    - Allows our code to run concurrently with other requests, including responses we wait on from an API.
    - Fetch() method is an asynchronous method, and is part of the browser window, not JavaScript (will notrun on node.js) 
*/

// Promises
/*
    Promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection.
    Three states:
        - Pending: initial state (not fulfilled nor rejected)
        - Fulfilled: completed successfully
        - Rejected: Operation failed
*/

const baseURL = `https://api.spacexdata.com/v2/rockets`

const searchForm = document.querySelector("form")
const spaceShips = document.querySelector("ul")
const button = document.querySelector("#submit")
console.log(button)

button.addEventListener("click", fetchSpace)

function fetchSpace(event) {
    event.preventDefault()
    fetch(baseURL)
        .then(Response => {
        return Response.json()
    })
    .then(json => {
        console.log(json)
//        displayRockets(json)
    })
}

//fetchSpace()

function displayRockets(rockets) {
    // console.log(`results: ${rockets}`)
    //rockets.forEach(r => {
    //    let rocket = document.createElement("li")
    //    rocket.innerText = r.name
    //    spaceShips.appendChild(rocket)
    //})
    rockets.forEach(r => {
        let rocket = document.createElement("tr")
        let rocketName = document.createElement("td")
        let rocketCost = document.createElement("td")

        rocketName.innerText = r.rocketName
        rocketCost.innerText = r.cost_per_launch

        spaceShips.appendChild(rocket)
        rocket.appendChild(rocketName)
        rocket.appendChild(rocketCost)
    })
}

/*
    Error Handling
        Try, Catch, throw, and finally code blocks
            - They handle only runtime errors
            - A wayto handle



        finally executes code after try and catch
        catch handles error

        Err has 3 properties available
        err.name - error name
        err.message - error message
        err.stack - shows where the error is on the server 
*/