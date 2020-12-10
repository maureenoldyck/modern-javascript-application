    
    import { displayWeatherTextAndAnimation } from "./src/displayWeatherTextAndAnimation.js";
    import { accordionFunction } from "./src/accordion.js";
    import { backgroundColorChange } from "./src/backgroundColor.js";
    import { createChart } from "./src/createChart.js";
    import { emptyArray } from "./src/emptyArray.js";
    import { locationFunction } from "./locationFunction.js";
    

    // Declaration of variables 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const content = document.querySelector(".collapsButton").nextElementSibling;
    let canvas = document.querySelector(".temp-info").nextElementSibling;
    const weatherText = document.querySelector(".weather-image").nextElementSibling;
    let currentWeather;
    let hourArray = []; // x-as
    let tempArray = []; // y-as
    let precipitationArray = []; // y-as   
    let temperatureChart = document.querySelector("#tempChart").getContext("2d");
    let timeSearchLocation;



    // Default value based on current location
    window.addEventListener("load", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let longitude = position.coords.longitude;
                let latitude = position.coords.latitude;
                let api = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=current,hourly,minutely&units=metric&appid=be4553b34e49d94c654cc1c6eb775c17";

                locationFunction(api);
            });
        };

    });

    // Event listener to get input value, create the api link and fetch the data
    document.querySelector("#run").addEventListener("click", () => {
        event.preventDefault();
        const cityName = document.querySelector("#city").value;
        const weatherToday = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=be4553b34e49d94c654cc1c6eb775c17";
        const weatherForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&appid=be4553b34e49d94c654cc1c6eb775c17";

        // Weather Today / Now
        fetch(weatherToday)
            .then(
                ((response) => {
                    response.json().then((weatherInfo => {

                        document.querySelector(".temperature").innerHTML = Math.round(weatherInfo.main.temp) + "°C";
                        document.querySelector(".city-name").innerHTML = weatherInfo.name + ", " + weatherInfo.sys.country;
                        document.querySelector(".description").innerHTML = weatherInfo.weather[0].main;
                        document.querySelector(".highest").innerHTML = "<i class='fas fa-caret-up'></i> " + Math.round(weatherInfo.main.temp_max) + "°C";
                        document.querySelector(".lowest").innerHTML = "<i class='fas fa-caret-down'></i> " + Math.round(weatherInfo.main.temp_min) + "°C";
                        document.querySelector(".weather-image").src = "images/" + weatherInfo.weather[0].main.toLowerCase() + ".png";

                        currentWeather = weatherInfo.weather[0].main;
                        displayWeatherTextAndAnimation(currentWeather);

                        // Get current time of location 
                        let currentTimeOffset = (new Date().getTimezoneOffset()) / 60; // Offset in hours
                        let timezone = weatherInfo.timezone; // offset in seconds 
                        let offsetSearchLocation = timezone / 3600; // offset in hours
                        let offsetGmt = currentTimeOffset + offsetSearchLocation;
                        timeSearchLocation = new Date().getHours() + offsetGmt;

                        backgroundColorChange(timeSearchLocation);
                        
                    }))
                }));

        // Weather next 5 days 
        fetch(weatherForecast)
            .then(
                ((response) => {
                    response.json().then((forecastInfo => {


                        let dayArray = [];

                        for (let i = 0; i < forecastInfo.list.length; i++) {
                            let day = (new Date(forecastInfo.list[i].dt_txt));
                            if (day.getHours() === 12) {

                                dayArray.push(forecastInfo.list[i]);
                            };

                        };

                        document.querySelector(".tomorrow").innerHTML = days[(new Date(dayArray[0].dt_txt)).getDay()];
                        document.querySelector(".tomorrowTemperature").innerHTML = Math.round(dayArray[0].main.temp) + "°C";
                        document.querySelector(".weather-icon-tomorrow").src = "./images/" + dayArray[0].weather[0].main.toLowerCase() + ".png";
                        document.querySelector(".dayAfterTomorrow").innerHTML = days[(new Date(dayArray[1].dt_txt)).getDay()];
                        document.querySelector(".dayAfterTomorrowTemperature").innerHTML = Math.round(dayArray[1].main.temp) + "°C";
                        document.querySelector(".weather-icon-dayAfterTomorrow").src = "./images/" + dayArray[1].weather[0].main.toLowerCase() + ".png";
                        document.querySelector(".inThreeDays").innerHTML = days[(new Date(dayArray[2].dt_txt)).getDay()];
                        document.querySelector(".inThreeDaysTemperature").innerHTML = Math.round(dayArray[2].main.temp) + "°C";
                        document.querySelector(".weather-icon-inThreeDays").src = "./images/" + dayArray[2].weather[0].main.toLowerCase() + ".png";
                        document.querySelector(".inFourDays").innerHTML = days[(new Date(dayArray[3].dt_txt)).getDay()];
                        document.querySelector(".inFourDaysTemperature").innerHTML = Math.round(dayArray[3].main.temp) + "°C";
                        document.querySelector(".weather-icon-inFourDays").src = "./images/" + dayArray[3].weather[0].main.toLowerCase() + ".png";
                        document.querySelector(".inFiveDays").innerHTML = days[(new Date(dayArray[4].dt_txt)).getDay()];
                        document.querySelector(".inFiveDaysTemperature").innerHTML = Math.round(dayArray[4].main.temp) + "°C";
                        document.querySelector(".weather-icon-inFiveDays").src = "./images/" + dayArray[4].weather[0].main.toLowerCase() + ".png";

                        // Loop to get the next 24 hours

                        emptyArray(hourArray);
                        emptyArray(tempArray);
                        emptyArray(precipitationArray);

                        for (let i = 0; i < 9; i++) {
                            hourArray.push(new Date(forecastInfo.list[i].dt_txt).getHours() + ":00");
                            tempArray.push(forecastInfo.list[i].main.temp);
                            precipitationArray.push((forecastInfo.list[i].pop * 100));
                        };
                        
                       createChart(temperatureChart, precipitationArray, tempArray, hourArray);

                    }));


                })

            );;

        // Make search bar disappear again after search 
        content.style.maxHeight = 0;
    });



    accordionFunction(".collapsButton", content);
    accordionFunction(".weather-image", weatherText);
    accordionFunction(".temp-info", canvas);


