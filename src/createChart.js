


    const createChart = (chart, precipitation, temperature, hour) => {



    // Data for chart
    new Chart(chart, {
        type: 'bar',
        data: {
            datasets: [{
                label: "Chance of Precipitation in %",
                data: precipitation,
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
                data: temperature,
                type: 'line',
                order: 2,
            }],
            labels: hour,
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
});


export { createChart };

