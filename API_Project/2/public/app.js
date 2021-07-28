const key = 'd4badda1-c338-4035-a238-146e88dc20fec'; 
let nearestCity =`http://api.airvisual.com/v2/nearest_city?key=${key}`; 
//let nearestCity =`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}//`;
// = baseUrl

//let url; 
//func(nearestCity)
function Fetch () {
    //let variable;

    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;

    let newCity = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`
    if(country != '' && state != '' && city != ''){
        let variable = newCity;
        fetch(variable)
    .then(response => {
        return response.json();
    })
    .then(json => {
        if(json.status == 'fail') {
            alert(`Error.`);
    }
        nearCity(json);
    })
    } else {
        let variable = nearestCity;
        fetch(variable)
    .then(response => {
        return response.json();
    })
    .then(json => {
        if(json.status == 'fail') {
            alert(`Error.`);
    }
        nearCity(json);
    })
    }
    console.log(city)

    
}

let btn = document.getElementById('inputs-inner-btn');
btn.addEventListener('click', Fetch());
/*
async function fFunc(newCity){
    fetch(newCity)
    .then(response => {
        return response.json();
    })
    .then(json => {
        if(json.status == 'fail') {
            alert(`Error.`);
    }
        nearCity(json);
    })
}
*/

    function nearCity(json){
        let data = json.data;
        let dataWeather = data.current.weather;
        let dataPollution = data.current.pollution;

        let p1 = document.getElementById('location');
        let p2 = document.getElementById('temperature-num');
        let p3 = document.getElementById('humidity');
        let p4 = document.getElementById('day');
        let p5 = document.getElementById('quality')
        let img = document.getElementById('weatherImg')
        
        let dayWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
        let day2 = new Date(dataWeather.ts);
        let dayOfWeek = dayy.getUTCDay();
        let gDay = dayWeek[dayOfWeek]



        
    
    }
