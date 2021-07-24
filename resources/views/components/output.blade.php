
<div class ="centered spacedBottom" id="outputBanner">
    <h2>Results</h2>
    <p>Thank you for filling out the form. 
Your results are in the radar chart below:</p>
</div>
<main class = "container">
<div class = "outputContainer">


<!-- Canvas for ChartJS chart -->
<section id ="outputSectionOne">
    <div class="canvasContainer">
        <canvas id="radarChart"></canvas>
    </div>
    <div style ="width: 100%">
        <div class ="largeScreen">
            <h2>Analysis</h2>
            <h4 class = "spacedBottom">Our Suggestions</h4>

            <p>Press on the points on the radar chart above 
            to get insights into the scores you got.</p>
            <p>The three areas that you scored lowest in were X, Y & Z. 
            Press on those points first to get relevant insights 
            about those areas of digital transformation.</p>

        </div>

        <p class ="centered" id="outputAnalysisSubtitle">Download the visual for personal use, or share on social media:</p>

        <div class = "buttonContainer">
            <a class = "borderedButton">Download Here</a>
            <a class = "borderedButton">Share Here</a>
        </div>
    </div>
</section>

<section id ="outputSectionTwo">
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
</section>
</div>
</main>

<footer id = "outputFooter" class = "largeScreen">
    <div id = "footerTextContainer">
        <h4> Interested in learning more? </h4>
        <p> Sign up for a 30 trial today > </p>
    </div>
    <img src="/images/targetinternetlogo.png" />
</footer>


<!-- Import config code for the radar chart -->
<script src="{{ asset('js/charting.js') }}"></script>
