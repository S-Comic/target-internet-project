<div id="outputBanner">
    <h2 class = "centered">Results</h2>
</div>

<p>Thank you for filling out the form. 
Your results are in the radar chart below:</p>

<!-- Canvas for ChartJS chart -->
<div class="canvasContainer">
    <canvas id="radarChart"></canvas>
</div>

<p class ="centered" style="font-size: 1.5em">Download the visual for personal use, or share on social media:</p>

<div class = "buttonContainer">
    <a class = "borderedButton">Download Here</a>
    <a class = "borderedButton">Share Here</a>
</div>

<h2 class="centered spacedBottom"> What Next? </h2>
<p>No matter your results, there is always room for improvement 
and a need to stay on top of the rapidly changing digital marketing landscape.</p>
<div class = "buttonContainer">
    <a class = "borderedButton">Sign-Up</a>
</div>

<p class = "spacedBottom">Target Internet offers a variety of online learning solutions to fill the 
digital skills gap.</p>
<p class = "spacedBottom">Sign-up to get access to the Target Internet e-Learning platform and our 
library of excusive courses, blogs and podcasts.</p>
<p class = "spacedBottom">Some examples include:</p>

<div class = "contentExamples"></div>

<div class = "mediumScreen">
    <h4> Interested in learning more? </h4>
    <p> Sign up for a 30 trial today > </p>
    <img src="#" />
</div>

<script>
    /* ChartJS script */
    /* Convert from inline to external when finished testing */

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

            /* Hardcoded the data for now, but I'll make this dynamic when the
            questions section is done and I can get data fromt it */
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
                        display: false,
                    }
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

</script>
