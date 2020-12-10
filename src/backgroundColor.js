const backgroundColorChange = (data) => {

    let currentTimeOffset = (new Date().getTimezoneOffset()) / 60; // Offset in hours
    let timezone = data.timezone; // offset in seconds 
    let offsetSearchLocation = timezone / 3600; // offset in hours
    let offsetGmt = currentTimeOffset + offsetSearchLocation;
    let timeSearchLocation = new Date().getHours() + offsetGmt;


    let time = Number(timeSearchLocation);

    if (time > 21) {
        document.body.style.backgroundColor = "#2B2B2B";
    } else if (time > 18) {
        document.body.style.backgroundColor = "#4699C2";
    } else if (time > 15) {
        document.body.style.backgroundColor = "#F79C65";
    } else if (time > 12) {
        document.body.style.backgroundColor = "#7DABD0";
    } else if (time > 8) {
        document.body.style.backgroundColor = "#CFE7EA";
    } else if (time > 4) {
        document.body.style.backgroundColor = "#f5cec7";
    } else {
        document.body.style.backgroundColor = "#2B2B2B";
    }
};

export { backgroundColorChange };