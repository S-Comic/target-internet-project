// Require the questions and labels from an external

const { stringify } = require('postcss');

// file to hide the code dump.
require('./questionData');

window.arrayHead = 0;
window.dataArray = new Array(70).fill("unfilled");
chartDataArray = new Array(14).fill(0);
var chartLabels = new Array(14).fill("");
for (let i=0; i<14; i++){
    chartLabels[i] = labels[i][0]
}
var questionButtons = document.getElementsByClassName("questionButton")
questionButtons = Array.prototype.slice.call(questionButtons, 0)
questionButtons.reverse()

// When button is clicked, add approprite score
// to array which is passed in from onclick
window.addScore = function(value){
    dataArray[arrayHead] = value
    arrayHead++
    if (arrayHead >= 70){
        createChart();
        document.getElementById("outputContainer").style.display = "block";
        document.getElementById("outputContainer").style.webkitAnimationPlayState= "running";
        return
    }
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
    document.getElementById("questionCategory").innerHTML = labels[parseInt(arrayHead / 5)][0]
    document.getElementById("navText").innerHTML = (arrayHead+1) + " / 70"
    document.getElementById("questionIcon").className = "fas " + labels[parseInt(arrayHead / 5)][1]
    
    if (arrayHead == 0){document.getElementById("navLeft").style.visibility = "hidden"}
    else {document.getElementById("navLeft").style.visibility = "visible"}

    for (let i=0; i < questionButtons.length; i++){
        questionButtons[i].classList.remove("selectedButton")
    }

    if (dataArray[arrayHead] == "unfilled"){
        document.getElementById("navRight").style.visibility = "hidden"
    }
    else {
        document.getElementById("navRight").style.visibility = "visible"
        questionButtons[dataArray[arrayHead]].classList.add("selectedButton")
    }
    document.getElementById("progressBarElement").value = (arrayHead/70) * 100
    document.getElementById("progressPercentage").innerHTML = parseInt((arrayHead/70) * 100) + "%"
}


// When the chart is created, assign the link to the download button
function createDownloadButton(){
    var url=outputChart.toBase64Image();
    document.getElementById("downloadButton").href=url;
  }

// Take array generated from questions and input
// that data into a chartJS chart.
window.createChart = function(){
    for (let i=0; i<70; i++) {
        chartDataArray[parseInt(i / 5)] = chartDataArray[parseInt(i / 5)] + (4 * dataArray[i])
    };
    // Generate the chart 
    window.outputChart = new Chart(
    document.getElementById('radarChart'),
    config
    );

    // document.getElementById('downloadButton').href = outputChart.toBase64Image()
    
}

// Set the innerhtml of question and category before any
// of the buttons are pressed
window.update();

const data = {
    labels: chartLabels,
    datasets: [{
        label: 'Data from output',
        backgroundColor: '#DB6E3BAA',
        borderColor: '#DB6E3B',
        data: chartDataArray,
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
    }]
};



const config = {
    // If you're editing this, find more information on how Chart.JS 
    // options work here: https://www.chartjs.org/docs/latest/axes/radial/linear.html 
    type: 'radar',
    data,
    options: {
        animation: {
            onComplete: createDownloadButton
          },
        scales: {
            r: {
                beginAtZero: true,
                suggestedMax: 100,
                grid: {backdropColor: 'red'},
                ticks: {
                    stepSize: 20,
                },
            }
        },
    plugins: {
    legend: {display: false,}
        }
    }
};




