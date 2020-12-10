const locationFunction = (data) => {

    fetch(data)
        .then((response) => {
            response.json().then((locationInfo => {
                document.querySelector(".temperature").innerHTML = Math.round(locationInfo.daily[0].temp.day) + "°C";
                document.querySelector(".city-name").innerHTML = "Current Location";
                document.querySelector(".description").innerHTML = locationInfo.daily[0].weather[0].main;
                document.querySelector(".highest").innerHTML = "<i class='fas fa-caret-up'></i>" + Math.round(locationInfo.daily[0].temp.max) + "°C";
                document.querySelector(".lowest").innerHTML = "<i class='fas fa-caret-down'></i>" + Math.round(locationInfo.daily[0].temp.min) + "°C";
                document.querySelector(".weather-image").src = "./images/" + locationInfo.daily[0].weather[0].main.toLowerCase() + ".png";
                document.querySelector(".tomorrow").innerHTML = "Tomorrow";
                document.querySelector(".tomorrowTemperature").innerHTML = Math.round(locationInfo.daily[1].temp.day) + "°C";
                document.querySelector(".weather-icon-tomorrow").src = "./images/" + locationInfo.daily[1].weather[0].main.toLowerCase() + ".png";
                document.querySelector(".dayAfterTomorrow").innerHTML = "In Two Days";
                document.querySelector(".dayAfterTomorrowTemperature").innerHTML = Math.round(locationInfo.daily[2].temp.day) + "°C";
                document.querySelector(".weather-icon-dayAfterTomorrow").src = "./images/" + locationInfo.daily[2].weather[0].main.toLowerCase() + ".png";
                document.querySelector(".inThreeDays").innerHTML = "In Three Days";
                document.querySelector(".inThreeDaysTemperature").innerHTML = Math.round(locationInfo.daily[3].temp.day) + "°C";
                document.querySelector(".weather-icon-inThreeDays").src = "./images/" + locationInfo.daily[3].weather[0].main.toLowerCase() + ".png";
                document.querySelector(".inFourDays").innerHTML = "In Four Days";
                document.querySelector(".inFourDaysTemperature").innerHTML = Math.round(locationInfo.daily[4].temp.day) + "°C";
                document.querySelector(".weather-icon-inFourDays").src = "./images/" + locationInfo.daily[4].weather[0].main.toLowerCase() + ".png";
                document.querySelector(".inFiveDays").innerHTML = "In Five Days";
                document.querySelector(".inFiveDaysTemperature").innerHTML = Math.round(locationInfo.daily[5].temp.day) + "°C";
                document.querySelector(".weather-icon-inFiveDays").src = "./images/" + locationInfo.daily[5].weather[0].main.toLowerCase() + ".png";

            }));
        });;

}


export { locationFunction };