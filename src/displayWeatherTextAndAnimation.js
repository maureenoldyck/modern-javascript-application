 const displayWeatherTextAndAnimation = ((element) => {

    switch (element) {
        case "Clouds":
            document.querySelector(".weather-text").innerHTML = "";
            document.querySelector("img").classList.remove("snow", "rain", "sun");
            document.querySelector("img").classList.add("cloud");
            document.querySelector(".weather-text").innerHTML = "Hello there, it's a cloudy day today. Eventhough the sun might not be shining at the moment, you will always be my sunshine!";
            break;

        case "Rain":
            document.querySelector(".weather-text").innerHTML = "";
            document.querySelector("img").classList.remove("cloud", "rain", "sun");
            document.querySelector("img").classList.add("snow");
            document.querySelector(".weather-text").innerHTML = "Hello there, it's snowing! The perfect moment to cosy up with a loved one, a thick blanket and hot chocolate!"
            break;

        case "Snow":
            document.querySelector(".weather-text").innerHTML = "";
            document.querySelector("img").classList.remove("snow", "cloud", "sun");
            document.querySelector("img").classList.add("rain");
            document.querySelector("img").style.paddingBottom = "10px";
            document.querySelector(".weather-text").innerHTML = "Hello there, it's a rainy day today. If you don't like rain, think about the fact that without rain there would be no life. So get out there and enjoy the rain! Don't forget your umbrella!"
            break;

        case "Clear":
            document.querySelector(".weather-text").innerHTML = "";
            document.querySelector("img").classList.remove("snow", "rain", "cloud");
            document.querySelector("img").classList.add("sun");
            document.querySelector("img").style.paddingBottom = "20px";
            document.querySelector(".weather-text").innerHTML = "Hello there, the sun is shining, how nice! Definitely the perfect time to go out and get those Vitamin D! Don't forget to put on sunscreen!";
            break;

        default:
            document.querySelector(".weather-text").innerHTML = "";
            document.querySelector("img").classList.remove("snow", "rain", "sun");
            document.querySelector("img").classList.add("cloud");
            document.querySelector(".weather-text").innerHTML = "Hello there, make the best out of today. I believe in you!"
            break;
    }
});

export { displayWeatherTextAndAnimation };