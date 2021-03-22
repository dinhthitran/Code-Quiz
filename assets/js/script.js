// Variable Declarations 
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4= document.getElementById("4");
var finalScore= document.getElementById("finalScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var scoreList = document.getElementById("scorelist");


//The array of questions 
var questions = [
    { question: 'Commonly used data types DO NOT include:', 
    choice1 : "1. strings",
    choice2 : "2. booleans",
    choice3 : "3. alerts",
    choice4 : "4. numbers",
    correct: "3"
    },
    { question: "Arrays in JavaScript can be used to store ________.", 
    choice1 : "1. numbers and strings",
    choice2 : "2. other arrays",
    choice3 : "3. booleans",
    choice4 : "4. all of the above",
    correct: "4"
    },
    { question: "The condition in an if / else statement is enclosed with ________.", 
    choice1 : "1. quotes",
    choice2 : "2. curly brackets",
    choice3 : "3. parenthesis",
    choice4 : "4. square brackets",
    correct: "2"
    },
    { question: "String values must be enclosed within ______ when being assigned to variables.", 
    choice1 : "1. commas",
    choice2 : "2. curly brackets",
    choice3 : "3. quotes",
    choice4 : "4. parenthesis",
    correct: "3"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choice1 : "1. JavaScript",
    choice2 : "2. terminal/bash",
    choice3 : "3. for loops",
    choice4 : "4. console.log",
    correct: "4"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choice1 : "1. JavaScript",
    choice2 : "2. terminal/bash",
    choice3 : "3. for loops",
    choice4 : "4. console.log",
    correct: "4"
    },
]  

//Challenge Page
intro.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

//Variable for Start Quiz Button
var startBtn = document.getElementById("startBtn");

// Listener Event to write password on click of "Start Quiz" button
startBtn.addEventListener("click", startGame);


// Timer Function Begin
var timeLeft = 75;
var startScore = 0;
var timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore + "s";

// Start Game
function startGame() {
    quiz.style.display = "block";
    question.style.display ="block";
    header.style.display = "block";
    intro.style.display = "none";
    finalScore.style.display = "none";


    var timeInterval = setInterval(function() {
        timer.textContent = "Time:" + timeLeft + "s";
        timeLeft-=1;

        if(timeLeft === 0 || questions.length === runningQuestionIndex+1)  {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time:" + timeLeft + "s";
         }
    }, 1000);

    renderQuestion();
};

// Display Questions 
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;    

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

// Check Answers
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answerOutput.textContent = "Correct!"
    }
    else {
       answerOutput.textContent = "Wrong!"
       timeLeft -=10;
    }

    if (questions.length === runningQuestionIndex+1) {
        resultRender(); // If it has gone through all questions, show final score
        return;
    }
        runningQuestionIndex++;
        renderQuestion();
    };   

//Score Quiz
function resultRender() {
   quiz.style.display = "none";
   intro.style.display = "none";
   finalScore.style.display = "block";

   if (timeLeft === 0 || questions.length -1) { 
    result.textContent = "Your final score is " + timeLeft + ".";
   }
};

//Capture Score and Initials 
userInfo.addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo").value;

    localStorage.setItem("contactInfo", JSON.stringify (contactInfo));
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
    
    loadScores();
    });