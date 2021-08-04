<!-- Progress -->
<div class="progressBar">
    <progress id = "progressBarElement" max="100" value="0"></progress>
    <h3 id = "progressPercentage">10%</h3>
</div>

<!-- Question -->
<div class="questionContainer">
    <!-- Add Icon here -->
    <i id = "questionIcon" class="fas fa-eye"></i>
    <div>
        <p id="questionCategory"></p>
        <p id="question"></p>
    </div>
</div>

<!-- Buttons -->
<div class = "buttonContainer">
    <a class = "borderedButton questionButton" onclick="addScore(4)">Strongly Agree
        <i class="fas fa-check"></i>
    </a>

    <a class = "borderedButton questionButton" onclick="addScore(3)">Agree
        <i class="fas fa-check"></i>
    </a>

    <a class = "borderedButton questionButton" onclick="addScore(2)">Unsure
        <i class="fas fa-check"></i>
    </a>

    <a class = "borderedButton questionButton" onclick="addScore(1)">Disagree
        <i class="fas fa-check"></i>
    </a>

    <a class = "borderedButton questionButton" onclick="addScore(0)">Strongly Disagree
        <i class="fas fa-check"></i>
    </a>

    <!-- Nav -->
    <div class = "navContainer">
        <div onclick="navigate(-1)" id = "navLeft" class = "questionNav">
            <i class = "fas fa-arrow-left arrow"></i>
        </div>

        <p id="navText" class = "centered">x/60</p>
        
        <div onclick="navigate(1)" id = "navRight" class = "questionNav">
            <i class = "fas fa-arrow-right arrow"></i>
        </div>
    </div>

</div>
