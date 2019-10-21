// Global variables:
let time = 10;
let wins = 0;
let losses = 0;

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
function init() {
  loadQuestion();
  wins = 0;
  losses = 0;
}

// Load question function:
// Pick random question from array and corresponding answer options (sep. function).
// Sets used attribute in question object to true.
// Displays question and options to player (options in random order).
// Starts timer (10 second countdown).
function loadQuestion() {
  console.log(getRandomQuestion());
  startCountdown();
}

//  Generates a random number between two integers.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Load random question function.
function getRandomQuestion() {
  let currentQuestion = questionArray[getRandomNumber(0, 2)];
  if (currentQuestion.alreadyAsked == true) {
    getQuestion();
  } else {
    currentQuestion.alreadyAsked = true;
    return currentQuestion;
  }
}

function startCountdown() {
  setInterval(function() {
    time--;
    console.log(time);
  }, 1000);
}

init();
console.log("Wins: " + wins);
console.log("Losses: " + losses);

// Time's up function - alert player that they have run out of time, increase loss count by one.

// Pick question function - filter all questions that haven't been asked already and return random from list.

// Player click function - on click event stores which answer player clicked in a variable.

// Check answer function - evaluates whether player click matches correct answer attribute.

// If statement:
// Player loss function - alert player that they have lost, increase loss count by one.
// Player win function - alert player that they have won, increase win count by one.

// Call initialise function to restart game.
