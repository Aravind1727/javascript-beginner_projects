const apiKey = "496798ec680ece40ccaf8eef6a75ac7e";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".serach button");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&apdid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather();