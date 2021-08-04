<!-- Progress -->
<div class="progressBar">

</div>

<!-- Question -->
<div class="questionContainer">
    <!-- Add Icon here -->
    <i class="fas fa-eye"></i>
    
    <p id="questionCategory"></p>
    <h3 id="question"></h3>
</div>

<!-- Buttons -->
<div class = "buttonContainer">
    <a class = "borderedButton" onclick="addScore(4)">Strongly Agree</a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton" onclick="addScore(3)">Agree</a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton" onclick="addScore(2)">Unsure</a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton" onclick="addScore(1)">Disagree</a>
</div>

<div class = "buttonContainer">
    <a class = "borderedButton" onclick="addScore(0)">Strongly Disagree</a>
</div>

<!-- Nav -->
<div class = "navContainer">
    <div onclick="navigate(-1)" class = "questionNav navLeft">
        <i class = "fas fa-arrow-left arrow"></i>
    </div>

    <p id="navText" class = "centered">x/60</p>
    
    <div onclick="navigate(1)" class = "questionNav navRight">
        <i class = "fas fa-arrow-right arrow"></i>
    </div>
</div>
