const apiKey="e7d2d02e1698fdbd2200e185eac1b1d2";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox =  document.querySelector(".search input");
const searchBttn =  document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
}

searchBttn.addEventListener("click",()=>{
 checkWeather(searchBox.value);

});

