const backgroundColorChange = (time) => {

    time = Number(time);

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