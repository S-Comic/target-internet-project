<!-- Import Chart.js from npm -->
<script src="{{ asset('chart.js/chart.js') }}"></script>

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

<!-- Import config code for the radar chart -->
<script src="{{ asset('js/charting.js') }}"></script>