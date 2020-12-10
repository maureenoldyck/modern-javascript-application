
const chartInfo = (data, hour, temp, precipitation) => {

    for (let i = 0; i < 9; i++) {
        hour.push(new Date(data.list[i].dt_txt).getHours() + ":00");
       temp.push(data.list[i].main.temp);
       precipitation.push((data.list[i].pop * 100));
       
        };
}

export { chartInfo };



