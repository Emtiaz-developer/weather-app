const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_Img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city){
    const Api_Key = "1bc3265098cda806fad39a0041798a0e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;
    const weather_Data = await fetch(`${url}`).then(response => response.json())
    console.log(weather_Data);

        if(weather_Data.cod === `404`){
            location_not_found.style.display = "flex";
           weather_body.style.display = "none";
           return;
        }
      
        weather_body.style.display = "flex";
        location_not_found.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_Data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_Data.weather[0].description}`;
    humidity.innerHTML = `${weather_Data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_Data.wind.speed}Km/H`;
    
    switch(weather_Data.weather[0].main){
        case  "Clouds" :
            weather_Img.src = "images/cloud.png";
            break;
            case "Clear" :
                weather_Img.src = "images/clear.png";
                break;
                case "Rain" :
                    weather_Img.src = "images/rain.png";
                    break;
                    case "Mist":
                        weather_Img.src = "images/mist.png";
                        break;
                        case "Snow" :
                            weather_Img.src = "images/snow.png";
                            break;
    }
}

searchBtn.addEventListener("click", () =>{
    checkWeather(inputBox.value);
})