const forecastArray = (data, array) => {

    for (let i = 0; i < data.list.length; i++) {
        let day = (new Date(data.list[i].dt_txt));
        if (day.getHours() === 12) {
            array.push(data.list[i]);
        };
    };


}

export { forecastArray };


