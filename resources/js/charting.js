
// Require the questions and labels from an external
// file to hide the code dump.
require('./questionData');

// Create an empty array which will hold the question scores
// and hold the current array position
window.arrayHead = 0;
window.dataArray = [];

// When button is clicked, add approprite score
// to array which is passed in from onclick
window.addScore = function(value){
    dataArray[arrayHead] = value
    arrayHead++
    window.update(value)
    return arrayHead
}

// If next/back buttons are clicked, move array head
window.navigate = function(value){
    arrayHead = arrayHead + value
    window.update(value)
    return arrayHead
}

// When data has been changed, update innerhtml
window.update = function(){
    document.getElementById("question").innerHTML = questionArray[arrayHead]
    document.getElementById("questionCategory").innerHTML = labels[parseInt(arrayHead / 5)]
}

// Set the innerhtml of question and category before any
// of the buttons are pressed
window.update();

// Chart creating code commented out for now
// while working on logic.

/*

const data = {
    labels: labels,
    datasets: [{
        label: 'Data from output',
        backgroundColor: '#DB6E3BAA',
        borderColor: '#DB6E3B',

        // Hardcoded the data for now, but I'll make this dynamic when the
        // questions section is done and I can get data from it
        data: [60, 40, 20, 70, 80, 50, 80, 30, 20, 50, 20, 50, 20, 70],
    }]
};

}




const config = {
    // If you're editing this, find more information on how Chart.JS 
    // options work here: https://www.chartjs.org/docs/latest/axes/radial/linear.html 
    type: 'radar',
    data,
    options: {
        scales: {
            r: {
                beginAtZero: true,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,
                    display: false,
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



// Generate the chart 
var outputChart = new Chart(
    document.getElementById('radarChart'),
    config
);

*/