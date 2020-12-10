const weatherInformation = (data) => {

    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city-name").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".description").innerHTML = data.weather[0].main;
    document.querySelector(".highest").innerHTML = "<i class='fas fa-caret-up'></i> " + Math.round(data.main.temp_max) + "°C";
    document.querySelector(".lowest").innerHTML = "<i class='fas fa-caret-down'></i> " + Math.round(data.main.temp_min) + "°C";
    document.querySelector(".weather-image").src = "images/" + data.weather[0].main.toLowerCase() + ".png";

}

export { weatherInformation };