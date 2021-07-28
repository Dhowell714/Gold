const apiUrl = 'https://rickandmortyapi.com/api/location/';

const retrieveLocation = (id) => {

    fetch(apiUrl) 
    //.then(function(result)
    return result.json()
    
}

// Please do not modify this code below
document.getElementById('getLocation').addEventListener('click',()=>{retrieveLocation(document.getElementById('locationId').value).then(name=>{document.getElementById('locationName').innerHTML=name;});});