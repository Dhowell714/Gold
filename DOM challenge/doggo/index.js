let url = 'https://dog.ceo/api/breeds/image/random';
const section = document.querySelector('div');
fetch(url)
  .then(function(result){
    return result.json()
  })
  .then(function(json){
    console.log(json);
    displayResults(json);
  })
  function displayResults(json){
    let photo = json.message;
    let breed = photo.split('/')[4]
    // console.log(photo)
    // console.log(breed)
    let img = document.createElement('img');
    let h1 = document.createElement('h1');
    section.appendChild(h1);
    section.appendChild(img);
    h1.innerHTML = breed;
    img.src = photo;
  }