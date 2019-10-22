// Global variables:
let time = 10;
let wins = 0;
let losses = 0;
let currentQuestion;

let timerStart = setInterval(timerRunning, 1000);

// Questions array.
// Each question is an object with options and one correct answer.
// Boolean attribute to check whether question has already been displayed (default = false).
let questionArray = [
  {
    question: "What is the second most commonly-spoken language in the world?",
    correctAnswer: "Spanish",
    options: ["French", "Chinese", "Spanish", "English"],
    alreadyAsked: false
  },
  {
    question: "Which language has the longest alphabet?",
    correctAnswer: "Cambodian",
    options: ["Russian", "Japanese", "Hawaiian", "Cambodian"],
    alreadyAsked: false
  },
  {
    question: "Approximately how many languages are spoken today?",
    correctAnswer: "7000",
    options: ["7000", "10000", "2500", "800"],
    alreadyAsked: false
  }
];



// Initialise function - loads question (sep. function), resets wins/losses.
// Call initialise function to restart game.
function init() {
  loadQuestion();
  resetQuestionsUsed();
  timerStart;
  wins = 0;
  losses = 0;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
}

function resetQuestionsUsed() {
    questionArray.forEach(function(question) {
        question.alreadyAsked = false;
    })
}

// Load question function:
// Pick random question from array and corresponding answer options (sep. function).
// Sets used attribute in question object to true.
// Displays question and options to player (options in random order).
// Starts timer (10 second countdown).
function loadQuestion() {
  getRandomQuestion()
    console.log(currentQuestion);
}

//  Generates a random number between two integers.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Load random question function.
// Filter all questions that haven't been asked already and return random from list.
function getRandomQuestion() {
  let randomQuestionIndex = getRandomNumber(0,questionArray.length-1)  
  currentQuestion = questionArray[randomQuestionIndex];
  if (currentQuestion.alreadyAsked == true) {
    return getRandomQuestion()
  } else {
    questionArray[randomQuestionIndex].alreadyAsked = true
    return currentQuestion;
  }
}

function timerRunning() {
  time--;
  console.log(time);
  if (time === 0) {
    timeUp();
  }
}

function timerPaused() {
  clearInterval(timerStart);
}

// Time's up function - alert player that they have run out of time, increase loss count by one.
function timeUp() {
  timerPaused();
  console.log("Time's up!");
  losses++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  loadQuestion()
}

// Player click function - on click event stores which answer player clicked in a variable.
function playerGuess(optionId) {
  checkAnswer(optionId);
}

function checkAnswer(clickedAnswer) {
    if (clickedAnswer === currentQuestion.correctAnswer) {
        playerWins();
    } else {
        playerLoses();
    }
}

function playerWins() {
  timerPaused();
  console.log("You Win!");
  wins++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  loadQuestion()
}

function playerLoses() {
  timerPaused();
  console.log("You lose :(");
  losses++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  loadQuestion()
}

// Check answer function - evaluates whether player click matches correct answer attribute.
    // If statement:
        // Player loss function - alert player that they have lost, increase loss count by one.
        // Player win function - alert player that they have won, increase win count by one.