const weatherApi ={
    key:"9b599c7aadba772de78cc93c79f9ee16",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",
}
const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress",(event)=>{
if(event.keyCode==13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display="block";
} 
})

function getWeatherReport(city){
fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
.then(weather=>{
return weather.json();
}).then(showWeatherReport);
}
function showWeatherReport(weather){
console.log(weather);
let city = document.getElementById("city");
city.innerText = `${weather.name},${weather.sys.country}`;
let temperature = document.getElementById("temp");
temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
let minMaxTemp = document.getElementById("min-max");
minMaxTemp.innerHTML=`Min: ${Math.floor(weather.main.temp_min)}&deg;C |Max: ${Math.ceil(weather.main.temp_max)}&deg;C `;
let weatherType = document.getElementById("weather");
weatherType.innerText=`${weather.weather[0].main}`;
let date = document.getElementById("date");
let todayDate = new Date();
date.innerText=dateManage(todayDate);

if(weatherType.innerText =='Clear'){
    document.body.style.backgroundImage = "url('images/Clear sky.jpg')";
}else if(weatherType.innerText =='Clouds'){
    document.body.style.backgroundImage = "url('images/Cloud.jpg')";
}else if(weatherType.innerText =='Rain'){
    document.body.style.backgroundImage = "url('images/Rain.jpg')";
}else if(weatherType.innerText =='Haze'){
    document.body.style.backgroundImage = "url('images/Haze.jpg')";
}else if(weatherType.innerText =='Sunny'){
    document.body.style.backgroundImage = "url('images/Sunny.jpg')";
}else if(weatherType.innerText =='Thunderstrom'){
    document.body.style.backgroundImage = "url('images/Thunderstrom.jpg')";
}else if(weatherType.innerText =='Smoke'){
    document.body.style.backgroundImage = "url('images/Smoke.jpg')";
}else if(weatherType.innerText =='Mist'){
    document.body.style.backgroundImage = "url('images/Smoke.jpg')";
}

}
function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let months = ["Jan","Feb","March","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} ${day} , ${year}`;
}