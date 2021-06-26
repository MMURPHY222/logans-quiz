// grabbing various elements from HTML doc, most often text elements that get overwritten 
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-box");
var startTitle = document.getElementById("start-title");
var startInstructions = document.getElementById("start-ins");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementsByClassName("answer-choice-button");
var time = document.getElementById("timer");
var endGameText = document.getElementById("end-game"); 
var finalTime = document.getElementById("final-time");
var scores = document.getElementById("scores");
var submitBtn = document.getElementById("submit");



// variables for button elements themselves 
var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");

// These are the variables for the text header elements within the buttons
var button1Text = document.getElementById("button-1")
var button2Text = document.getElementById("button-2")
var button3Text = document.getElementById("button-3")
var button4Text = document.getElementById("button-4")

// i is used to move through questions, timer sets the starting time value
var i = 0;
var timer = 100;
time.textContent = "Time: " + timer;


// array of objects containing all questions, answer choices, and correct answers
// the correctAnswer A,B,C,D align with the value assigned to the button that the correct
// text will appear on, the values are assigned in html
var questions = [
    {
        title: "What will you get at a restaurant if you order a Jack Daniel's ditch?",
        choices: ["thrown in a ditch", "Jack Daniel's and a water", "double Jack Daniel's", "Jack Daniel's in a pint glass"],
        correctAnswer: "B",
    },
    {   
        title: "Which type of eagle have there been more sightings of in a single day at the Rocky Mountain Front Eagle Migration Area than anywhere else in the country?",
        choices: ["bald eagle", "golden eagle", "harpy eagle", "crowned eagle"],
        correctAnswer: "B",
    },
    {
        title: "In 1888 which Montana city had more millionaires per capita than any other city in the world?",
        choices: ["Helena", "Scobey", "Hamilton", "Augusta"],
        correctAnswer: "A",
    },
    {
        title: "The world's largest steer is held in Baker, Montana at the O’Fallon Museum. How much does it weigh? ?",
        choices: ["3,438lbs", "4,473lbs", "3,260lbs", "3,980lbs"],
        correctAnswer: "D",
    },
    {
        title: "Every spring nearly 10,000 white pelicans with a wingspan of nine feet migrate from the Gulf of Mexico to which northeastern Montana Lake?",
        choices: ["Bear Paw Lake", "Fort Peck Lake", "Medicine Lake", "Elk Lake"],
        correctAnswer: "C",
    }
]

// calls the function startGame on the startButton click
startButton.addEventListener("click", startGame);

// adding class hide, applies them to the css class hide and display none
// removing the hide class allows them to show
function startGame() {
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    startInstructions.classList.add("hide");
    questionContainer.classList.remove("hide");
    writeQuestion();
    runTimer();
}

// this function writes the questions and the answers to the screen, i is referring to
// the array in reference and i is added to after each question is checked
// runs the function endGame when i = 5 which is after the last question is answered
function writeQuestion() {

        if (i === 5){
        endGame();
        }

        questionText.textContent = questions[i].title; 


        button1Text.textContent = questions[i].choices[0];
        button2Text.textContent = questions[i].choices[1];
        button3Text.textContent = questions[i].choices[2];
        button4Text.textContent = questions[i].choices[3];

}

// each button has an event listener for a click and on click will run a separate
// function to check the answer
buttonA.addEventListener("click", checkAnswerA);
buttonB.addEventListener("click", checkAnswerB);
buttonC.addEventListener("click", checkAnswerC);
buttonD.addEventListener("click", checkAnswerD);

  
// the check answer functions are all the same except for the button they are referencing
// they check to see if the value of button A is equal to the correctAnswer of the question
// that is currently displayed, they also call the writeQuestion function again after adding to i
function checkAnswerA() {

    if (buttonA.value == questions[i].correctAnswer) {
        
    } else if (buttonA.value != questions[i].correctAnswer) {
        
        timerSubtract();
    }
    
    i ++;

     writeQuestion();

}

function checkAnswerB() {

    if (buttonB.value == questions[i].correctAnswer) {
        
    } else if (buttonB.value != questions[i].correctAnswer) {
        
        timerSubtract();
    } 
    
    i ++;
    

     writeQuestion();

}

function checkAnswerC() {

    if (buttonC.value == questions[i].correctAnswer) {
        
    } else if (buttonC.value != questions[i].correctAnswer) {
        
        timerSubtract();
    }
    
    
    i ++;

     writeQuestion();

}

function checkAnswerD() {

    if (buttonD.value == questions[i].correctAnswer) {
        
    } else if (buttonD.value != questions[i].correctAnswer){
        
        timerSubtract();
    }
    
    
    i ++;

     writeQuestion();

}

// This function runs the timer, stops it when its equal to zero, and stops it after the last
// question is answered
function runTimer() {
    var myVar = setInterval(myClock,1000);

    function myClock() {
        timer--;
        time.textContent = "Time: " + timer;

        if (timer==0){
            clearInterval(myVar);
            endGame();
        }

        if (i === 5){
            clearInterval(myVar);
            endGame();
        }
    
    }

}

// this function subtracts 10 from timer, it is called when a user answers incorrectly
function timerSubtract() {
    timer = timer - 10;
    time.textContent = "Time: " + timer;

}

submitBtn.addEventListener("click", logScore);

// this function logs the score(the timer value) when the person finished the game
function logScore() {
    var userInit = document.getElementById("init").value;

    localStorage.setItem("highScore", timer);
    var storedScore = localStorage.getItem("highScore");
    
    localStorage.setItem("init", userInit);
    var storedInit = localStorage.getItem("init");

    scores.textContent("High score: ", storedInit + storedScore);
    
}

// this function is the end of the game!
function endGame() {
    questionContainer.classList.add("hide");
    endGameText.classList.remove("hide");
    finalTime.textContent = timer;
}
