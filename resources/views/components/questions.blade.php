<!-- Progress -->
<div class="progressBar">

</div>

<!-- Question -->
<div class="questionContainer">
    <!-- Add Icon here -->
    <i id = "questionIcon" class="fas fa-eye"></i>
    
    <p id="questionCategory"></p>
    <h3 id="question"></h3>
</div>

<!-- Buttons -->
<div class = "buttonContainer">
    <a class = "borderedButton questionButton" onclick="addScore(4)">Strongly Agree
        <i class="fas fa-check"></i>
    </a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton questionButton" onclick="addScore(3)">Agree
        <i class="fas fa-check"></i>
    </a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton questionButton" onclick="addScore(2)">Unsure
        <i class="fas fa-check"></i>
    </a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton questionButton" onclick="addScore(1)">Disagree
        <i class="fas fa-check"></i>
    </a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton questionButton" onclick="addScore(0)">Strongly Disagree
        <i class="fas fa-check"></i>
    </a>
</div>

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
