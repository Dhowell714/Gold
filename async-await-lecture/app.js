// Async Await
// ! fx = function
/*
    Introduced in ES8. Async allows us to avoid chaining promises (.then())
    Allows us to write async code in a synchronous manner
    Same as regular function with one exception
        ! Async fx always returns a promise

*/

async function myFx() {
    // Do This for async declaration
    return "Hello World"
}
console.log(myFx())

// To resolve our promise, we utilize .then()
myFx().then(console.log)

// Alternate representation returning a promise without async.
function promiseFx() {
    return Promise.resolve("Promise Resolved")
}

promiseFx().then(console.log)

const exprFx = async () => {
    // Do this for async expression (arrow)
    
}

// Awaits
/*
    Await is used only inside of an async function.
    It waits for the promise to resolve or reject.
*/
let spaceXUrl = `https://api.spacexdata.com/v3/history`

//fetch(spaceXUrl)
//    .then(res = res.json()) 
//    .then(data => console.log(data))

async function fetchData() {
    const res = await fetch(spaceXUrl)
    const data = await res.json()
}

fetchData()

//console.log(spaceXUrl)
//console.log a fetched url creates a promise