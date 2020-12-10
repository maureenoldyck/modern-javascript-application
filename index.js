    import { displayWeatherTextAndAnimation } from "./src/displayWeatherTextAndAnimation.js";
    import { accordionFunction } from "./src/accordion.js";
    import { backgroundColorChange } from "./src/backgroundColor.js";
    import { createChart } from "./src/createChart.js";
    import { emptyArray } from "./src/emptyArray.js";
    import { locationFunction } from "./src/locationFunction.js";
    import { forecastInformation } from "./src/forecastInfo.js";
    import { weatherInformation } from "./src/weatherInformation.js";
    import { chartInfo } from "./src/chartInfo.js";
    import { forecastArray } from "./src/forecastArray.js";
    

    // Declaration of variables 
    const content = document.querySelector(".collapsButton").nextElementSibling;
    let canvas = document.querySelector(".temp-info").nextElementSibling;
    const weatherText = document.querySelector(".weather-image").nextElementSibling;
    let currentWeather;
    let hourArray = []; // x-as
    let tempArray = []; // y-as
    let precipitationArray = []; // y-as   
    let dayArray = [];
    let temperatureChart = document.querySelector("#tempChart").getContext("2d");


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

                       weatherInformation(weatherInfo);
                       backgroundColorChange(weatherInfo);


                        currentWeather = weatherInfo.weather[0].main;
                        displayWeatherTextAndAnimation(currentWeather);
                        
                        
                    }))
                }));

        // Weather next 5 days 
        fetch(weatherForecast)
            .then(
                ((response) => {
                    response.json().then((forecastInfo => {

                        forecastArray(forecastInfo, dayArray);
                        forecastInformation(dayArray);
                        emptyArray(hourArray);
                        emptyArray(tempArray);
                        emptyArray(precipitationArray);
                        chartInfo(forecastInfo, hourArray, tempArray, precipitationArray );
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


