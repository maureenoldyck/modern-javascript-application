//TODO: Function for chart
//TODO: Function for weather icon text
//TODO: Function for weather icon
//TODO: Function for timezone
//TODO: Function for accordions
//TODO: Function for chart





(() => {

    "use strict";

    // Declaration of variables 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const content = document.querySelector(".collapsButton").nextElementSibling;
    let canvas = document.querySelector(".temp-info").nextElementSibling;
    const weatherText = document.querySelector(".weather-image").nextElementSibling;
    let chart;

    // Default value based on current location
    window.addEventListener("load", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let longitude = position.coords.longitude;
                let latitude = position.coords.latitude;
                let api = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=current,hourly,minutely&units=metric&appid=be4553b34e49d94c654cc1c6eb775c17";

                fetch(api)
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

                        // Script for animations (add class for specific description) & for the weather texts
                        if (weatherInfo.weather[0].main == "Clouds") {
                            document.querySelector(".weather-text").innerHTML = "";
                            document.querySelector("img").classList.add("cloud");
                            document.querySelector(".weather-text").innerHTML = "Hello there, it's a cloudy day today. Eventhough the sun might not be shining at the moment, you will always be my sunshine!";
                        } else if (weatherInfo.weather[0].main == "Clear") {
                            document.querySelector(".weather-text").innerHTML = "";
                            document.querySelector("img").classList.add("sun");
                            document.querySelector("img").style.paddingBottom = "20px";
                            document.querySelector(".weather-text").innerHTML = "Hello there, the sun is shining, how nice! Definitely the perfect time to go out and get those Vitamin D! Don't forget to put on sunscreen!";
                        } else if (weatherInfo.weather[0].main == "Rain") {
                            document.querySelector(".weather-text").innerHTML = "";
                            document.querySelector("img").classList.add("rain");
                            document.querySelector("img").style.paddingBottom = "10px";
                            document.querySelector(".weather-text").innerHTML = "Hello there, it's a rainy day today. If you don't like rain, think about the fact that without rain there would be no life. So get out there and enjoy the rain! Don't forget your umbrella!"
                        } else if (weatherInfo.weather[0].main == "Snow") {
                            document.querySelector(".weather-text").innerHTML = "";
                            document.querySelector("img").classList.add("snow");
                            document.querySelector(".weather-text").innerHTML = "Hello there, it's snowing! The perfect moment to cosy up with a loved one, a thick blanket and hot chocolate!"
                        } else {
                            document.querySelector(".weather-text").innerHTML = "";
                            document.querySelector("img").classList.add("cloud");
                            document.querySelector(".weather-text").innerHTML = "Hello there, make the best out of today. I believe in you!"
                        }

                        // Get current time of location 
                        let currentTimeOffset = (new Date().getTimezoneOffset()) / 60; // Offset in hours
                        let timezone = weatherInfo.timezone; // offset in seconds 
                        let offsetSearchLocation = timezone / 3600; // offset in hours
                        let offsetGmt = currentTimeOffset + offsetSearchLocation;
                        let timeSearchLocation = new Date().getHours() + offsetGmt;

                        // Change background color for specific time period of location (if it's night it will be darker)
                        if (timeSearchLocation > 21) {
                            document.body.style.backgroundColor = "#2B2B2B";
                        } else if (timeSearchLocation > 18) {
                            document.body.style.backgroundColor = "#4699C2";
                        } else if (timeSearchLocation > 15) {
                            document.body.style.backgroundColor = "#F79C65";
                        } else if (timeSearchLocation > 12) {
                            document.body.style.backgroundColor = "#7DABD0";
                        } else if (timeSearchLocation > 8) {
                            document.body.style.backgroundColor = "#CFE7EA";
                        } else if (timeSearchLocation > 4) {
                            document.body.style.backgroundColor = "#f5cec7";
                        } else {
                            document.body.style.backgroundColor = "#2B2B2B";
                        }

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


                        // Arrays to make graph 
                        let hourArray = []; // x-as
                        let tempArray = []; // y-as
                        let precipitationArray = []; // y-as 

                        // Loop to get the next 24 hours
                        for (let i = 0; i < 9; i++) {
                            hourArray.push((new Date(forecastInfo.list[i].dt_txt)).getHours() + ":00");
                            tempArray.push((forecastInfo.list[i].main.temp));
                            precipitationArray.push((forecastInfo.list[i].pop * 100));
                        };

                        // Data for chart
                        let temperatureChart = document.querySelector("#tempChart").getContext('2d');
                        chart = new Chart(temperatureChart, {
                            type: 'bar',
                            data: {
                                datasets: [{
                                    label: "Chance of Precipitation in %",
                                    data: precipitationArray,
                                    order: 1,
                                    pointBorderColor: "rgba(75,192,192,1)",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHitRadius: 10,
                                }, { 
                                    label: "Temperature in °C",
                                    fill: false,
                                    borderColor: "rgba(75, 192, 192, 1)",
                                    pointBorderColor: "rgba(75,192,192,1)",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHitRadius: 10,
                                    data: tempArray,
                                    type: 'line',
                                    order: 2,
                                }],
                                labels: hourArray,
                            },
                            options: {
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            drawOnChartArea: false,
                                            tickMarkLength: false,
                                            drawBorder: false,
                                        }
                                    }],

                                    yAxes: [{
                                        display: false,
                                    }],
                                    ticks: [{ 
                                        beginAtZero: true,
                                    }]
                                },

                                legend: {
                                    display: false
                                },
                            }
                        });

                    }));

                })

            );;

        // Make search bar disappear again after search 
        content.style.maxHeight = 0;
    });


    // Collaps/Accordian functions

    // Header
    document.querySelector(".collapsButton").addEventListener("click", () => {
        document.querySelector(".collapsButton").classList.toggle("active");
        if (document.querySelector(".collapsButton").classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });

    // Chart
    document.querySelector(".temp-info").addEventListener("click", () => {
        document.querySelector(".temp-info").classList.toggle("active");
        if (document.querySelector(".temp-info").classList.contains("active")) {
            canvas.style.maxHeight = content.scrollHeight + "px";
        } else {
            canvas.style.maxHeight = 0;
        }
    });

    // Sentence of the weather
    document.querySelector(".weather-image").addEventListener("click", () => {
        document.querySelector(".weather-image").classList.toggle("active");
        if (document.querySelector(".weather-image").classList.contains("active")) {
            weatherText.style.maxHeight = content.scrollHeight + "px";
        } else {
            weatherText.style.maxHeight = 0;
        }
    });

})();