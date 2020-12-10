const forecastInformation = (element) => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.querySelector(".tomorrow").innerHTML = days[(new Date(element[0].dt_txt)).getDay()];
    document.querySelector(".tomorrowTemperature").innerHTML = Math.round(element[0].main.temp) + "°C";
    document.querySelector(".weather-icon-tomorrow").src = "./images/" + element[0].weather[0].main.toLowerCase() + ".png";
    document.querySelector(".dayAfterTomorrow").innerHTML = days[(new Date(element[1].dt_txt)).getDay()];
    document.querySelector(".dayAfterTomorrowTemperature").innerHTML = Math.round(element[1].main.temp) + "°C";
    document.querySelector(".weather-icon-dayAfterTomorrow").src = "./images/" + element[1].weather[0].main.toLowerCase() + ".png";
    document.querySelector(".inThreeDays").innerHTML = days[(new Date(element[2].dt_txt)).getDay()];
    document.querySelector(".inThreeDaysTemperature").innerHTML = Math.round(element[2].main.temp) + "°C";
    document.querySelector(".weather-icon-inThreeDays").src = "./images/" + element[2].weather[0].main.toLowerCase() + ".png";
    document.querySelector(".inFourDays").innerHTML = days[(new Date(element[3].dt_txt)).getDay()];
    document.querySelector(".inFourDaysTemperature").innerHTML = Math.round(element[3].main.temp) + "°C";
    document.querySelector(".weather-icon-inFourDays").src = "./images/" + element[3].weather[0].main.toLowerCase() + ".png";
    document.querySelector(".inFiveDays").innerHTML = days[(new Date(element[4].dt_txt)).getDay()];
    document.querySelector(".inFiveDaysTemperature").innerHTML = Math.round(element[4].main.temp) + "°C";
    document.querySelector(".weather-icon-inFiveDays").src = "./images/" + element[4].weather[0].main.toLowerCase() + ".png";

}

export { forecastInformation };