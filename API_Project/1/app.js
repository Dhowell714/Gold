
let studioGhibliPeopleList = document.querySelector('ul');
//const array1 = [newMap];
fetch('https://ghibliapi.herokuapp.com/people')
    .then(function (response) {
        //console.log(response)
        return response.json();
        console.log(people);
        //people = json.results;
    })
        .then(function(json) {
        console.log(json)
        displayResults(json)
        })

        function displayResults(json) {
            let people = json
            return people.map(function (movies, index) {
                    let ul = document.querySelector('ul')
                    let div = document.createElement('div')
                    let div2 = document.createElement('div')
                    let div3 = document.createElement('div')
                    let div4 = document.createElement('div')
                    let div5 = document.createElement('div')
                    let div6 = document.createElement('div')
                    let div7 = document.createElement('div')
                    let div8 = document.createElement('div')
                    let div9 = document.createElement('div')
                    //let p = document.createElement('<p>')
                    let listItem = document.createElement('h3')
                    let listItem2 = document.createElement('li')
                    let listItem3 = document.createElement('li')
                    let listItem4 = document.createElement('li')
                    let listItem5 = document.createElement('li')
                    let listItem6 = document.createElement('li')
                    let listItem7 = document.createElement('li')
                    let listItem8 = document.createElement('li')
                    let listItem9 = document.createElement('li')
                    ul.appendChild(div)
                    ul.appendChild(div2)
                    ul.appendChild(div3)
                    ul.appendChild(div4)
                    ul.appendChild(div5)
                    ul.appendChild(div6)
                    ul.appendChild(div7)
                    ul.appendChild(div8)
                    ul.appendChild(div9)
                    div.appendChild(listItem)
                    div2.appendChild(listItem2)
                    div3.appendChild(listItem3)
                    div4.appendChild(listItem4)
                    div5.appendChild(listItem5)
                    div6.appendChild(listItem6)
                    div7.appendChild(listItem7)
                    div8.appendChild(listItem8)
                    div9.appendChild(listItem9)
                    listItem.innerText = movies.id
                    listItem2.innerText = movies.name
                    listItem3.innerText = movies.gender
                    listItem4.innerText = movies.age
                    listItem5.innerText = movies.eye_color
                    listItem6.innerText = movies.hair_color
                    listItem7.innerText = movies.films
                    listItem8.innerText = movies.species
                    listItem9.innerText = movies.url
                }
            )
        } 



 