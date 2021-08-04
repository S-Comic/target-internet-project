const { reduce } = require("lodash");

const labels = [
    'Definition and Vision',
    'Leadership',
    'Agility',
    'Environment',
    'Skills',
    'Strategic Positioning',
    'Communication',
    'Technology',
    'Governance',
    'Structure',
    'Connections',
    'Measurement',
    'Innovation',
    'Financial'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Data from output',
        backgroundColor: '#DB6E3BAA',
        borderColor: '#DB6E3B',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        angleLinesColor: 'red',
        /* Hardcoded the data for now, but I'll make this dynamic when the
        questions section is done and I can get data from it */
        data: [60, 40, 20, 70, 80, 50, 80, 30, 20, 50, 20, 50, 20, 70],
    }]
};

const config = {
    /* If you're editing this, find more information on how Chart.JS 
    options work here: https://www.chartjs.org/docs/latest/axes/radial/linear.html */
    type: 'radar',
    data,
    options: {
        scales: {
            r: {
                beginAtZero: true,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,
                },
                grid: {
                    backdropColor: 'red',
                },
            }
        },
        plugins: {
        legend: {
            display: false,
        }
    }
 }
    
};

/* Generate the chart */
var outputChart = new Chart(
    document.getElementById('radarChart'),
    config
);
